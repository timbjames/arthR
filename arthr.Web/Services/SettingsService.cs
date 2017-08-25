using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace arthr.Web.Services
{
    public interface ISettingsService
    {
        IOptions<EnvironmentSettings> EnvironmentSettings { get; }
    }

    public class SettingsService : ISettingsService
    {
        public SettingsService(IOptions<EnvironmentSettings> environmentSettings)
        {
            EnvironmentSettings = environmentSettings;
        }

        public IOptions<EnvironmentSettings> EnvironmentSettings { get; }
    }
}
