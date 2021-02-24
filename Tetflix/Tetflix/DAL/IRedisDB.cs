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
        IReadOnlyList<int> GetSetValues(string key);
        void AddValueToSet(string key, int value);
        void RemoveValueFromSet(string key, int value);
        void SetExpiry(string key, TimeSpan expiry);
        void IncrementValueByKey(string key);
    }
}
