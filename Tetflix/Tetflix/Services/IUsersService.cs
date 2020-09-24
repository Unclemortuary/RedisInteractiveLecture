using System.Collections.Generic;

namespace Tetflix.Services
{
    public interface IUsersService
    {
        void Login(int userId);
        void Alive(int userId);
        void Logout(int userId);
        IReadOnlyList<int> GetOnlineUsers();
    }
}
