using Microsoft.Extensions.Caching.Distributed;
using System.Text;
using Tetflix.DAL;

namespace Tetflix.Services
{
    public class ColorService : IColorService
    {
        //private readonly IDistributedCache distributedCache;
        private readonly IRedisDB redisDB;

        private const string DefaultColor = "#FFFFFF";

        public ColorService(IRedisDB redisDB)
        {
            this.redisDB = redisDB;
        }

        public string GetColor(int userId)
        {
            //var bytes = distributedCache.Get(GetKey(userId));
            //return bytes == null ? DefaultColor : Encoding.ASCII.GetString(bytes);
            return redisDB.GetStringValue(GetKey(userId));
        }

        public void SetColor(int userId, string value)
        {
            //var bytes = Encoding.ASCII.GetBytes(value);
            //distributedCache.Set(GetKey(userId), bytes);
            redisDB.SaveStringValue(GetKey(userId), value);
        }

        private string GetKey(int userId) => $"localhost/tetflix/{userId}/color";
    }
}
