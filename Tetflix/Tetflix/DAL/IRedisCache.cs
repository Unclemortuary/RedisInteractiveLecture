using System;

namespace Tetflix.DAL
{
    public interface IRedisCache
    {
        TValue GetValue<TKey, TValue>(TKey key, Func<TKey, TValue> fetch);
    }
}
