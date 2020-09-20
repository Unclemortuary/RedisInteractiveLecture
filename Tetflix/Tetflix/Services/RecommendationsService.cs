using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Tetflix.DAL;
using Tetflix.Models;

namespace Tetflix.Services
{
    public class RecommendationsService : IRecommendationsService
    {
        private readonly IRedisCache redisCahce;

        public RecommendationsService(IRedisCache redisCahce)
        {
            this.redisCahce = redisCahce;
        }

        public IReadOnlyList<Film> GetRecommendations(int userId)
        {
            return redisCahce.GetValue(GetKey(userId), () => GetRecommendationsInternal(userId), TimeSpan.FromSeconds(30));
        }

        private IReadOnlyList<Film> GetRecommendationsInternal(int userId)
        {
            // todo - add stub services
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

        private string GetKey(int userId) => $"localhost/tetflix/{userId}/recommendations";
    }
}
