namespace arthr.Business.Interfaces
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.arTask;

    #endregion

    public interface ITimesheetService
    {
        #region Public Methods

        Task<bool> CreateAsync(Timesheet timesheet);

        Task<bool> DeleteAsync(int id);

        Task<bool> EditAsync(Timesheet timesheet);

        Task<List<Timesheet>> GetAsync();

        Task<Timesheet> GetAsync(int id);

        #endregion
    }
}
