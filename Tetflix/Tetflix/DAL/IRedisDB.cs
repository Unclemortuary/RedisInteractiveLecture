using System.Collections.Generic;

namespace Tetflix.DAL
{
    public interface IRedisDB
    {
        string GetStringValue(string key);
        void SaveStringValue(string key, string value);
        IReadOnlyList<int> GetSetValues(string key);
        void AddValueToSet(string key, int value);
        IReadOnlyList<int> IntersectTwoSets(string firstKey, string secondKey);
    }
}
