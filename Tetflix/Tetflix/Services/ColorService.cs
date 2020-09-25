using Microsoft.Extensions.Caching.Distributed;
using System.Text;
using Tetflix.DAL;

namespace Tetflix.Services
{
    public class ColorService : IColorService
    {
        private const string DefaultColor = "#FFFFFF";
        //private readonly IDistributedCache distributedCache;
        private readonly IRedisDB redisDB;

        public ColorService(IRedisDB redisDB)
        {
            this.redisDB = redisDB;
        }

        public string GetColor(int userId)
        {
            //var color = distributedCache.GetString(GetKey(userId));
            //return color ?? DefaultColor;
            return redisDB.GetStringValue(GetKey(userId));
        }

        public void SetColor(int userId, string value)
        {
            //distributedCache.SetString(GetKey(userId), value);
            redisDB.SaveStringValue(GetKey(userId), value);
        }

        private string GetKey(int userId) => $"localhost:tetflix:{userId}:color";
    }
}
