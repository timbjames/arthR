namespace arthr.Business.Staff.Services
{
    #region Usings

    using System;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Models.Core;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Utils.Attributes;

    #endregion

    [DependencyInjected]
    public sealed class StaffService : BaseService, IStaffService
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

        private async Task<Staff> LoadStaffMemberAsync(string username)
        {
            Staff staffMember = await Db.Staff.SingleOrDefaultAsync(s => s.User.Username.Equals(username, StringComparison.OrdinalIgnoreCase));
            return staffMember;
        }

        #endregion
    }
}
