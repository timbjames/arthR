namespace arthr.Business.Services
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Models.Core;
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

        public Task<bool> CreateAsync(Staff staff)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> EditAsync(Staff staff)
        {
            throw new NotImplementedException();
        }

        public Task<List<Staff>> GetAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Staff> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Staff> GetByUsernameAsync(string username)
        {
            throw new NotImplementedException();
        }

        #endregion

        #region Public Methods

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
