using System;
using System.Collections.Generic;
using System.Threading;
using Tetflix.DAL;

namespace Tetflix.Services
{
    public class UsersService : IUsersService, IDisposable
    {
        private readonly IRedisDB redisDB;

        private readonly TimeSpan slidingWindow = TimeSpan.FromSeconds(60);

        private readonly string onlineUsersKeyPrefix = "localhost:tetflix:onlineUsers";
        private string currentSetPrefix = "";
        private string nextSetPrefix = "";

        private Timer timer;

        public UsersService(IRedisDB redisDB)
        {
            this.redisDB = redisDB;
            TimerCallback callback = ManageOnlineUsers;
            timer = new Timer(callback, null, TimeSpan.Zero, slidingWindow);
        }

        public IReadOnlyList<int> GetOnlineUsers()
        {
            return redisDB.GetSetValues(currentSetPrefix);
        }

        public void Alive(int userId)
        {
            redisDB.AddValueToSet(currentSetPrefix, userId);
            redisDB.AddValueToSet(nextSetPrefix, userId);
        }

        public void Login(int userId)
        {
            redisDB.AddValueToSet(currentSetPrefix, userId);
            redisDB.AddValueToSet(nextSetPrefix, userId);
        }

        public void Logout(int userId)
        {
            redisDB.RemoveValueFromSet(currentSetPrefix, userId);
            redisDB.RemoveValueFromSet(nextSetPrefix, userId);
        }

        private void ManageOnlineUsers(object state)
        {
            var now = DateTime.UtcNow;
            currentSetPrefix = String.IsNullOrEmpty(currentSetPrefix) 
                ? $"{onlineUsersKeyPrefix}:{now.Minute}" 
                : nextSetPrefix;
            nextSetPrefix = $"{onlineUsersKeyPrefix}:{now.AddSeconds(slidingWindow.TotalSeconds).Minute}";

            redisDB.AddValueToSet(currentSetPrefix, -1);
            redisDB.AddValueToSet(nextSetPrefix, -1);
            redisDB.SetExpiry(currentSetPrefix, slidingWindow);
            redisDB.SetExpiry(nextSetPrefix, TimeSpan.FromSeconds(slidingWindow.TotalSeconds * 2));
        }

        public void Dispose()
        {
            timer.Dispose();
        }
    }
}
