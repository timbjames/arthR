namespace arthr.Business.Staff.Service
{
    #region Usings

    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Data.Core;

    #endregion

    public class StaffService : BaseService, IDisposable
    {
        #region Constructors

        public StaffService(IBaseServiceBundle baseServiceBundle)
            : base(baseServiceBundle)
        {
        }

        #endregion

        #region Public Methods

        public async Task<Staff> GetStaffMemberAsync(string username)
        {
            return await LoadStaffMemberAsync(username);
        }

        #endregion

        #region Private Methods

        private Task<Staff> LoadStaffMemberAsync(string username)
        {
            Staff staffMember = Db.Staff.SingleOrDefault(s => s.Username.Equals(username, StringComparison.OrdinalIgnoreCase));
            return Task.FromResult(staffMember);
        }

        #endregion
    }
}
