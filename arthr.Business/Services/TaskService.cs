namespace arthr.Business.Services
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Interfaces;
    using Models.arTask;

    #endregion

    public class TaskService : BaseService, ITaskService
    {
        #region Constructors

        public TaskService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion

        #region Interface Implementations

        public Task<List<AnthRTask>> GetAsync()
        {
            throw new NotImplementedException();
        }

        public Task<AnthRTask> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> CreateAsync(AnthRTask anthRTask)
        {
            throw new NotImplementedException();
        }

        public Task<bool> EditAsync(AnthRTask anthRTask)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
