using Newtonsoft.Json;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

//https://github.com/dotnet/extensions/blob/master/src/Caching/StackExchangeRedis/src/RedisCache.cs

namespace Tetflix.DAL
{
    public class RedisManager : IRedisDB, IRedisCache
    {
        private static Lazy<ConnectionMultiplexer> lazyConnection = new Lazy<ConnectionMultiplexer>(
            () => ConnectionMultiplexer.Connect("localhost:7001"));

        private static readonly string prefix = "localhost:tetflix";

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

        public void SetExpiry(string key, TimeSpan expiry)
        {
            var db = lazyConnection.Value.GetDatabase();
            db.KeyExpire(key, expiry);
        }

        public void AddValueToSet(string key, int value)
        {
            var db = lazyConnection.Value.GetDatabase();
            db.SetAdd(key, value);
        }

        public void RemoveValueFromSet(string key, int value)
        {
            var db = lazyConnection.Value.GetDatabase();
            db.SetRemove(key, value);
        }

        private static RedisKey RedisKey<TKey>(TKey key) => $"{prefix}:{key}";

        private static RedisValue RedisValue<TValue>(TValue value) => JsonConvert.SerializeObject(value);

        private static TValue Value<TValue>(RedisValue value) => value.IsNull
                ? default(TValue)
                : JsonConvert.DeserializeObject<TValue>(value);
    }
}
