namespace arthr.Web
{
    #region Usings

    using System.IO;
    using Microsoft.AspNetCore.Hosting;

    #endregion

    public class Program
    {
        #region Public Methods

        public static void Main(string[] args)
        {
            IWebHost host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .Build();

            host.Run();
        }

        #endregion
    }
}
