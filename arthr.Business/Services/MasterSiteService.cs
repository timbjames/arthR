namespace arthr.Business.Services
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Data.Extensions;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Models.Core;
    using Utils.Exceptions.Enums;

    #endregion

    public class MasterSiteService : BaseService, IMasterSiteService
    {
        #region Constructors

        public MasterSiteService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion

        #region Interface Implementations

        public async Task<List<MasterSite>> GetAsync()
        {
            IQueryable<MasterSite> query = Db.MasterSite;
            return await query.ToListAsync();
        }

        public async Task<MasterSiteUpsertViewModel> GetAsync(int id)
        {
            var upsert = new MasterSiteUpsertViewModel
            {
                Model = id == 0 ? new MasterSite() : await Db.MasterSite.FirstOrNotFoundAsync(m => m.MasterSiteId == id, ErrorCode.MasterSite)
            };

            return upsert;
        }

        public async Task<bool> CreateAsync(MasterSite masterSite)
        {
            Db.MasterSite.Add(masterSite);
            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<bool> EditAsync(MasterSite masterSite)
        {
            Db.Entry(masterSite).State = EntityState.Modified;
            return await Db.SaveChangesAsync() > 1;
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
