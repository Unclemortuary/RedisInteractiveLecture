namespace Tetflix.Services
{
    public interface IColorService
    {
        string GetColor(int userId);
        void SetColor(int userId, string value);
    }
}
