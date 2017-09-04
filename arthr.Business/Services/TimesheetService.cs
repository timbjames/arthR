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
    using Microsoft.EntityFrameworkCore;

    #endregion

    public class TimesheetService : BaseService, ITimesheetService
    {
        private ITaskService _taskService;

        #region Constructors

        public TimesheetService(ITaskService taskService, IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
            _taskService = taskService;
        }

        #endregion

        #region Interface Implementations

        public async Task<bool> CreateAsync(Timesheet timesheet)
        {
            Db.Timesheets.Add(timesheet);

            return await Db.SaveChangesAsync() > 0;
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> EditAsync(Timesheet timesheet)
        {
            Db.Entry(timesheet).State = EntityState.Modified;
            return await Db.SaveChangesAsync() > 0;
        }

        public Task<List<Timesheet>> GetAsync()
        {
            return Db.Timesheets.ToListAsync();
        }

        public async Task<TimesheetUpsertViewModel> GetAsync(int? timesheetId, int? anthrTaskId, int? staffId)
        {
            var upsert = new TimesheetUpsertViewModel
            {
                Model = timesheetId.HasValue ? await GetTimesheet(timesheetId.Value) : new Timesheet(),
                Tools = await GetTools(anthrTaskId, staffId)
            };

            return upsert;
        }

        #endregion

        #region Private Methods

        private async Task<Timesheet> GetTimesheet(int? timesheetId)
        {
            return await Db.Timesheets.SingleAsync(t => t.TimesheetId == timesheetId);
        }

        private async Task<TimesheetToolsViewModel> GetTools(int? anthrTaskId, int? staffId)
        {
            var tools = new TimesheetToolsViewModel
            {
                Tasks = await _taskService.GetAsync()
            };

            return tools;
        }

        #endregion
    }
}
