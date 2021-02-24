namespace Tetflix.Services
{
    public interface IThrottlingService
    {
        bool NeedToThrottle(string ip);
    }
}
