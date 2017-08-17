namespace arthr.Api.Infrastructure
{
    #region Usings

    using Business.Core.Interfaces;
    using Business.Core.Services;
    using Business.Project;
    using Business.Project.Interfaces;
    using Business.User;
    using Business.User.Interfaces;
    using Filters;
    using Microsoft.Extensions.DependencyInjection;

    #endregion

    public static class DependencyInjection
    {
        #region Public Methods

        public static void InjectDependencies(IServiceCollection services)
        {
            services.AddScoped<IArthrContext, ArthRContextWrapper>();
            services.AddScoped<IBaseServiceBundle, BaseServiceBundle>();
            services.AddScoped<IProjectService, ProjectService>();
            services.AddScoped<IUserService, UserService>();

            services.AddScoped<ClaimsFilter>();
        }

        #endregion
    }
}
