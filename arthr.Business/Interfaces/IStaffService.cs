namespace arthr.Business.Interfaces
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.Core;

    #endregion

    public interface IStaffService
    {
        #region Public Methods

        Task<bool> CreateAsync(Staff staff);

        Task<bool> DeleteAsync(int id);

        Task<bool> EditAsync(Staff staff);

        Task<List<Staff>> GetAsync();

        Task<Staff> GetAsync(int id);

        Task<Staff> GetByUsernameAsync(string username);

        #endregion
    }
}
