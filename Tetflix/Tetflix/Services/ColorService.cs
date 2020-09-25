using Microsoft.Extensions.Caching.Distributed;
using System.Text;

namespace Tetflix.Services
{
    public class ColorService : IColorService
    {
        private const string DefaultColor = "#FFFFFF";

        public string GetColor(int userId)
        {
            return DefaultColor;
        }
    }
}
