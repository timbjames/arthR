namespace arthr.Api.Infrastructure
{
    #region Usings

    using Business.Core.Interfaces;
    using Business.Core.Services;
    using Business.Interfaces;
    using Business.Services;
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

            services.AddScoped<IMasterSiteService, MasterSiteService>();
            services.AddScoped<INotesService, NotesService>();
            services.AddScoped<IProjectService, ProjectService>();
            //services.AddScoped<IScheduleService, ScheduleService>();
            services.AddScoped<IStaffOnProjectService, StaffOnProjectService>();
            services.AddScoped<IStaffOnTaskService, StaffOnTaskService>();
            services.AddScoped<IStaffService, StaffService>();
            services.AddScoped<ITaskService, TaskService>();
            services.AddScoped<ITimesheetService, TimesheetService>();
            services.AddScoped<IUserService, UserService>();

            services.AddScoped<ClaimsFilter>();
        }

        #endregion
    }
}
