using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tetflix.Services
{
    public interface IUsersService
    {
        void Login(int userId);
        IReadOnlyList<int> GetOnlineUsers();
        IReadOnlyList<int> GetOnlineFriends();
    }
}
