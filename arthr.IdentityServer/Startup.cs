namespace arthr.IdentityServer
{
    #region Usings

    using Business.Core.Interfaces;
    using Business.Core.Services;
    using Business.Interfaces;
    using Business.Services;
    using Data.Core;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;
    using System.IO;
    using System.Security.Cryptography.X509Certificates;

    #endregion

    public class Startup
    {
        #region Constructors

        public Startup(IHostingEnvironment env)
        {
            IConfigurationBuilder builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", false, true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", true);

            builder.AddEnvironmentVariables();

            Configuration = builder.Build();
            Environment = env;
        }

        #endregion

        #region Properties

        public IConfigurationRoot Configuration { get; }
        public IHostingEnvironment Environment { get; }

        #endregion

        #region Public Methods

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseIdentityServer();

            app.UseStaticFiles();

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationScheme = "Cookies",
                AutomaticAuthenticate = false,
                AutomaticChallenge = false
            });

            app.UseMvcWithDefaultRoute();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            var contentRootPath = Environment.ContentRootPath;
            var cert = new X509Certificate2(Path.Combine(contentRootPath, "devcert.pfx"), "Kfisher1");

            services.AddIdentityServer()
                //.AddTemporarySigningCredential()
                .AddSigningCredential(cert)
                .AddInMemoryIdentityResources(Config.GetIdentityResources())
                .AddInMemoryApiResources(Config.GetApiResources())
                .AddInMemoryClients(Config.GetClients())
                .AddTestUsers(Config.GetUsers())
                .AddProfileService<IdentityProfileService>();

            services.AddMvc();

            services.AddDbContext<ArthRContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("arthRContext"));
            });

            services.AddScoped<IArthrContext, ArthRContextWrapper>();
            services.AddScoped<IBaseServiceBundle, BaseServiceBundle>();
            services.AddScoped<IUserService, UserService>();
        }

        #endregion
    }
}
