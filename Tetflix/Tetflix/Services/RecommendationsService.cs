using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Tetflix.Models;

namespace Tetflix.Services
{
    public class RecommendationsService : IRecommendationsService
    {
        public IReadOnlyList<Film> GetRecommendations(int userId)
        {
            Thread.Sleep(3000);

            int totalNumber = 20 + userId;
            int filmsCount = Data.Films.Count;
            int step = ((filmsCount % (userId + 1) + userId) + filmsCount / userId) - (userId + 3);

            var result = new List<Film>();

            for (int i = 0, k = step; i < totalNumber; i++, k += step)
            {
                if (k > filmsCount)
                    k = k - filmsCount;

                result.Add(Data.Films[k]);
            }

            return result;
        }
    }
}
