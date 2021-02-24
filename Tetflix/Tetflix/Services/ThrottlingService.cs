using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tetflix.DAL;

namespace Tetflix.Services
{
    public class ThrottlingService : IThrottlingService
    {
        private readonly IRedisDB redis;

        private const int RequestsPerMinute = 5;

        public ThrottlingService(IRedisDB redis)
        {
            this.redis = redis;
        }

        public bool NeedToThrottle(string ip)
        {
            var key = $"{ip}:{DateTime.UtcNow.Second}";
            var value = redis.GetStringValue(key);

            if (!String.IsNullOrEmpty(value) && int.Parse(value) > RequestsPerMinute)
                return true;

            redis.IncrementValueByKey(key);

            return false;
        }
    }
}
