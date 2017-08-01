﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Rewrite;
using System.IdentityModel.Tokens.Jwt;

namespace arthrWeb
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
            {
                AuthenticationScheme = "oidc",
                SignInScheme = "Cookies",
                Authority = "http://localhost:5000",
                RequireHttpsMetadata = false,
                ClientId = "mvc",
                SaveTokens = true
            });

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                // Testing OAuth
                routes.MapRoute(
                    "default",
                    "{controller}/{action}/{id?}",
                    defaults: new { controller = "Home", action = "Index" }
                );

                // SPA Routing
                //routes.MapRoute(
                //    "Root",
                //    "",
                //    defaults: new { controller = "Home", action = "Index" });

                //routes.MapRoute(
                //    "DeepLink",
                //    "{*pathInfo}",
                //    defaults: new { controller = "Home", action = "Index" });
            });

            var options = new RewriteOptions()
            ///.AddRedirect("redirect-rule/(.*)", "redirected/$1")
            //.AddRewrite(@"^rewrite-rule/(\d+)/(\d+)", "rewritten?var1=$1&var2=$2", skipRemainingRules: true)
            ///.AddApacheModRewrite(env.ContentRootFileProvider, "ApacheModRewrite.txt")
            .AddIISUrlRewrite(env.ContentRootFileProvider, "IISUrlRewrite.xml");

            app.UseRewriter(options);
        }
    }
}
