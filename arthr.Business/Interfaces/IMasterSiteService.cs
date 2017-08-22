namespace arthr.Business.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.Core;

    public interface IMasterSiteService
    {
        Task<List<MasterSite>> GetAsync();

        Task<MasterSite> GetAsync(int id);

        Task<bool> CreateAsync(MasterSite masterSite);

        Task<bool> EditAsync(MasterSite masterSite);

        Task<bool> DeleteAsync(int id);
    }
}
