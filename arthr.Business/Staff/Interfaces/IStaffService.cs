namespace arthr.Business.Staff.Interfaces
{
    #region Usings

    using System.Threading.Tasks;
    using Models.Core;

    #endregion

    public interface IStaffService
    {
        #region Public Methods

        Task<Staff> GetStaffMemberAsync(string username);

        #endregion
    }
}
