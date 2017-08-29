namespace arthr.Web.Services
{
    #region Usings

    using Microsoft.Extensions.Options;

    #endregion

    public interface ISettingsService
    {
        #region Properties

        IOptions<EnvironmentSettings> EnvironmentSettings { get; }

        #endregion
    }

    public class SettingsService : ISettingsService
    {
        #region Constructors

        public SettingsService(IOptions<EnvironmentSettings> environmentSettings)
        {
            EnvironmentSettings = environmentSettings;
        }

        #endregion

        #region Properties

        public IOptions<EnvironmentSettings> EnvironmentSettings { get; }

        #endregion
    }
}
