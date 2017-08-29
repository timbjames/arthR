namespace arthr.Business.Services
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Models.Core;

    #endregion

    public class StatusService : BaseService, IStatusService
    {
        #region Constructors

        public StatusService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion

        #region Interface Implementations

        public async Task<List<Status>> GetAsync()
        {
            return await Db.Status.ToListAsync();
        }

        #endregion
    }
}
