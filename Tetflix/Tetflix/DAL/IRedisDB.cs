namespace Tetflix.DAL
{
    public interface IRedisDB
    {
        string GetStringValue(string key);
        void SaveStringValue(string key, string value);
    }
}
