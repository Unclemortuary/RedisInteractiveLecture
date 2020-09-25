using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tetflix.DAL
{
    public interface IRedisDB
    {
        string GetStringValue(string key);
        void SaveStringValue(string key, string value);
    }
}
