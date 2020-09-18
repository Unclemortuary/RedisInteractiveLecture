using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tetflix.Services;

namespace Tetflix
{
    public static class ServicesRegistration
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            return services.AddTransient<IRecommendationsService, RecommendationsService>();
        }
    }
}
