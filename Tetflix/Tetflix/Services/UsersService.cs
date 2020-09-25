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
        private string currentSetKey = "";
        private string nextSetKey = "";

        private Timer timer;

        public UsersService(IRedisDB redisDB)
        {
            this.redisDB = redisDB;
            TimerCallback callback = ManageOnlineUsers;
            timer = new Timer(callback, null, TimeSpan.Zero, slidingWindow);
        }

        public IReadOnlyList<int> GetOnlineUsers()
        {
            return redisDB.GetSetValues(currentSetKey);
        }

        public void Alive(int userId)
        {
            redisDB.AddValueToSet(currentSetKey, userId);
            redisDB.AddValueToSet(nextSetKey, userId);
        }

        public void Login(int userId)
        {
            redisDB.AddValueToSet(currentSetKey, userId);
            redisDB.AddValueToSet(nextSetKey, userId);
        }

        public void Logout(int userId)
        {
            redisDB.RemoveValueFromSet(currentSetKey, userId);
            redisDB.RemoveValueFromSet(nextSetKey, userId);
        }

        private void ManageOnlineUsers(object state)
        {
            var now = DateTime.UtcNow;
            currentSetKey = String.IsNullOrEmpty(currentSetKey)
                ? $"{onlineUsersKeyPrefix}:{now.Minute}"
                : nextSetKey;
            nextSetKey = $"{onlineUsersKeyPrefix}:{now.AddSeconds(slidingWindow.TotalSeconds).Minute}";

            redisDB.AddValueToSet(currentSetKey, -1);
            redisDB.AddValueToSet(nextSetKey, -1);
            redisDB.SetExpiry(currentSetKey, slidingWindow);
            redisDB.SetExpiry(nextSetKey, TimeSpan.FromSeconds(slidingWindow.TotalSeconds * 2));
        }

        public void Dispose()
        {
            timer.Dispose();
        }
    }
}