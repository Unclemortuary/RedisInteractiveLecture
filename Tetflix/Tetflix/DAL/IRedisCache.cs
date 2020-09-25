using System;

namespace Tetflix.DAL
{
    public interface IRedisCache
    {
        TValue GetValue<TKey, TValue>(TKey key, Func<TValue> fetch, TimeSpan? expiry);
    }
}