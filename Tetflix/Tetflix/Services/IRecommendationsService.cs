using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tetflix.Models;

namespace Tetflix.Services
{
    public interface IRecommendationsService
    {
        IReadOnlyList<Film> GetRecommendations(int userId);
    }
}
