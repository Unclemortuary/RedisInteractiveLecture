using Microsoft.Extensions.Caching.Distributed;
using System.Text;

namespace Tetflix.Services
{
    public class ColorService : IColorService
    {
        private readonly IDistributedCache distributedCache;

        private const string DefaultColor = "#FFFFFF";

        public ColorService(IDistributedCache distributedCache)
        {
            this.distributedCache = distributedCache;
        }

        public string GetColor(int userId)
        {
            var bytes = distributedCache.Get(GetKey(userId));
            return bytes == null ? DefaultColor : Encoding.Default.GetString(bytes);
        }

        public void SetColor(int userId, string value)
        {
            var bytes = Encoding.ASCII.GetBytes(value);
            distributedCache.Set(GetKey(userId), bytes);
        }

        private string GetKey(int userId) => $"localhost/tetflix/{userId}/color";
    }
}
