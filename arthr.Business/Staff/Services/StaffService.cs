namespace arthr.Business.Staff.Services
{
    #region Usings

    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Data.Core;
    using Interfaces;

    #endregion

    public class StaffService : BaseService, IStaffService
    {
        #region Constructors

        public StaffService(IBaseServiceBundle baseServiceBundle)
            : base(baseServiceBundle)
        {
        }

        #endregion

        #region Interface Implementations

        public async Task<Staff> GetStaffMemberAsync(string username)
        {
            return await LoadStaffMemberAsync(username);
        }

        #endregion

        #region Private Methods

        private Task<Staff> LoadStaffMemberAsync(string username)
        {
            Staff staffMember = Db.Staff.SingleOrDefault(s => s.User.Username.Equals(username, StringComparison.OrdinalIgnoreCase));
            return Task.FromResult(staffMember);
        }

        #endregion
    }
}
