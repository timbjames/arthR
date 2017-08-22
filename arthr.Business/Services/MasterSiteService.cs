﻿namespace arthr.Business.Services
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Interfaces;
    using Models.Core;

    #endregion

    public class MasterSiteService : BaseService, IMasterSiteService
    {
        #region Constructors

        public MasterSiteService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion

        public Task<List<MasterSite>> GetAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<MasterSite> GetAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> CreateAsync(MasterSite masterSite)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> EditAsync(MasterSite masterSite)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
