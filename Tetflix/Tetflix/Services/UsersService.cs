using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tetflix.DAL;

namespace Tetflix.Services
{
    public class UsersService : IUsersService
    {
        public static readonly string OnlineUsersKey = "localhost/tetflix/onlineUsers";
        public static readonly string FriendsKey = "localhost/tetflix/friends";
        private readonly IRedisDB redisDB;

        public UsersService(IRedisDB redisDB)
        {
            this.redisDB = redisDB;
        }

        public IReadOnlyList<int> GetOnlineFriends()
        {
            return redisDB.IntersectTwoSets(OnlineUsersKey, FriendsKey);
        }

        public IReadOnlyList<int> GetOnlineUsers()
        {
            return redisDB.GetSetValues(OnlineUsersKey);
        }

        public void Login(int userId)
        {
            redisDB.AddValueToSet(OnlineUsersKey, userId);
        }
    }
}
