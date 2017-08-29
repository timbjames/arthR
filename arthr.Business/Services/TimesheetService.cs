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

    public class TimesheetService : BaseService, ITimesheetService
    {
        #region Constructors

        public TimesheetService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion

        #region Interface Implementations

        public Task<bool> CreateAsync(Timesheet timesheet)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> EditAsync(Timesheet timesheet)
        {
            throw new NotImplementedException();
        }

        public Task<List<Timesheet>> GetAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Timesheet> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
