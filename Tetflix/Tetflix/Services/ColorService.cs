using Microsoft.Extensions.Caching.Distributed;
using System.Text;

namespace Tetflix.Services
{
    public class ColorService : IColorService
    {
        private const string DefaultColor = "#FFFFFF";
        private readonly IDistributedCache distributedCache;

        public ColorService(IDistributedCache distributedCache)
        {
            this.distributedCache = distributedCache;
        }

        public string GetColor(int userId)
        {
            var color = distributedCache.GetString(GetKey(userId));
            return color ?? DefaultColor;
        }

        public void SetColor(int userId, string value)
        {
            distributedCache.SetString(GetKey(userId), value);
        }

        private string GetKey(int userId) => $"localhost:tetflix:{userId}:color";
    }
}
