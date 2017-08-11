﻿namespace arthr.Api
{
    #region Usings

    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;

    #endregion

    public class Startup
    {
        #region Constructors

        public Startup(IHostingEnvironment env)
        {
            IConfigurationBuilder builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        #endregion

        #region Properties

        public IConfigurationRoot Configuration { get; }

        #endregion

        #region Public Methods

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseIdentityServerAuthentication(new IdentityServerAuthenticationOptions
            {
                Authority = "http://localhost:5000",
                RequireHttpsMetadata = false,
                ApiName = "api1"
            });

            app.UseCors(builder => {
                builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials();
            });

            //app.UseCors(builder => builder
            //.AllowCredentials()
            //.WithOrigins("http://localhost:5003")
            //.WithHeaders("accept", "content-type", "origin", "x-custom-header")
            //.AllowAnyHeader());

            app.UseMvc();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddCors();
        }

        #endregion
    }
}