using Newtonsoft.Json;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


//https://github.com/dotnet/extensions/blob/master/src/Caching/StackExchangeRedis/src/RedisCache.cs

namespace Tetflix.DAL
{
    public class RedisManager : IRedisDB
    {
        private static Lazy<ConnectionMultiplexer> lazyConnection = new Lazy<ConnectionMultiplexer>(
            () => ConnectionMultiplexer.Connect("localhost:7001"));

        private static readonly string prefix = "localhost/tetflix";

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

        private static RedisKey RedisKey<TKey>(TKey key) => $"{prefix}{key}";

        private static RedisValue RedisValue<TValue>(TValue value) => JsonConvert.SerializeObject(value);
    }
}
