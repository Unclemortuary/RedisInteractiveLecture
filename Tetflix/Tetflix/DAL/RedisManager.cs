using Newtonsoft.Json;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using Tetflix.Services;


//https://github.com/dotnet/extensions/blob/master/src/Caching/StackExchangeRedis/src/RedisCache.cs

namespace Tetflix.DAL
{
    public class RedisManager : IRedisDB, IRedisCache
    {
        private static Lazy<ConnectionMultiplexer> lazyConnection = new Lazy<ConnectionMultiplexer>(
            () => ConnectionMultiplexer.Connect("localhost:7001"));

        private static readonly string prefix = "localhost/tetflix";

        public RedisManager()
        {
            var db = lazyConnection.Value.GetDatabase();
            var stubOnlineUsers = new int[] { 10011, 2345, 23215, 143255, 2432, 1 };
            var friends = new int[] { 1, 2, 3, 4, 5 };
            CreateSet(UsersService.OnlineUsersKey, stubOnlineUsers, db);
            CreateSet(UsersService.FriendsKey, friends, db);
        }

        public void SaveStringValue(string key, string value)
        {
            var db = lazyConnection.Value.GetDatabase();
            db.HashSet(key, new HashEntry[]
            {
                new HashEntry("data", value)
            });
        }

        public string GetStringValue(string key)
        {
            var db = lazyConnection.Value.GetDatabase();
            return db.HashGet(key, "data");
        }

        public TValue GetValue<TKey, TValue>(TKey key, Func<TValue> fetch, TimeSpan? expiry)
        {
            var redisKey = RedisKey(key);

            var db = lazyConnection.Value.GetDatabase();

            var redisValue = db.StringGet(redisKey);
            if (!redisValue.IsNull)
                return Value<TValue>(redisValue);

            var fetchedValue = fetch();
            redisValue = RedisValue(fetchedValue);
            db.StringSet(redisKey, redisValue, expiry);

            return fetchedValue;
        }

        public IReadOnlyList<int> GetSetValues(string key)
        {
            var db = lazyConnection.Value.GetDatabase();
            var redisResult = db.SetMembers(key);
            return redisResult.Select(v => (int)v).ToList();
        }

        public void AddValueToSet(string key, int value)
        {
            var db = lazyConnection.Value.GetDatabase();
            db.SetAdd(key, value);
        }

        public IReadOnlyList<int> IntersectTwoSets(string firstKey, string secondKey)
        {
            var db = lazyConnection.Value.GetDatabase();
            var intersection = db.SetCombine(SetOperation.Intersect, new RedisKey[] { firstKey, secondKey });
            return intersection.Select(v => (int)v).ToList();
        }

        private static RedisKey RedisKey<TKey>(TKey key) => $"{prefix}{key}";

        private static RedisValue RedisValue<TValue>(TValue value) => JsonConvert.SerializeObject(value);

        private static TValue Value<TValue>(RedisValue value) => value.IsNull
                ? default(TValue)
                : JsonConvert.DeserializeObject<TValue>(value);

        private static void CreateSet(string key, int[] values, IDatabase db)
        {
            if (!db.KeyExists(key))
                db.SetAdd(key, values.Select(v => (RedisValue)v).ToArray());
        }
    }
}
