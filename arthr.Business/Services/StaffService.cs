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
    using arthr.Data.Extensions;
    using arthr.Utils.Exceptions.Enums;
    using System.Linq;

    #endregion

    [DependencyInjected]
    public sealed class StaffService : BaseService, IStaffService
    {
        private readonly IUserService _userService;
        #region Constructors

        public StaffService(IUserService userService, IBaseServiceBundle baseServiceBundle)
            : base(baseServiceBundle)
        {
            _userService = userService;
        }

        #endregion

        #region Interface Implementations

        public async Task<bool> CreateAsync(Staff staff)
        {
            Db.Staff.Add(staff);
            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> EditAsync(Staff staff)
        {
            Db.Entry(staff).State = EntityState.Modified;
            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<List<Staff>> GetAsync()
        {
            return await Db.Staff
                .Include(s => s.User)
                .ToListAsync();
        }

        public async Task<List<Staff>> GetForProject(int projectId)
        {
            return await Db.Staff
                .Include(s => s.User)
                .Where(s => s.StaffOnProjects.Any(p => p.ProjectId == projectId))
                .ToListAsync();
        }

        public async Task<StaffUpsertViewModel> GetAsync(int id)
        {
            var upsert = new StaffUpsertViewModel
            {
                Model = id == 0 ? new Staff() : await Get(id),
                Tools = await GetTools()
            };

            return upsert;
        }

        public async Task<Staff> GetByUsernameAsync(string username)
        {
            return await Db.Staff.FirstOrNotFoundAsync(s => s.User.Username == username, ErrorCode.Staff);
        }

        #endregion

        #region Public Methods

        public async Task<Staff> GetStaffMemberAsync(string username)
        {
            return await LoadStaffMemberAsync(username);
        }

        #endregion

        #region Private Methods

        private async Task<Staff> Get(int staffId)
        {
            return await Db.Staff.FirstOrNotFoundAsync(s => s.StaffId == staffId, ErrorCode.Staff);
        }

        private async Task<Staff> LoadStaffMemberAsync(string username)
        {
            Staff staffMember = await Db.Staff.SingleOrDefaultAsync(s => s.User.Username.Equals(username, StringComparison.OrdinalIgnoreCase));
            return staffMember;
        }

        private async Task<StaffToolsViewModel> GetTools()
        {
            var tools = new StaffToolsViewModel
            {
                Users = await _userService.GetAsync()
            };

            return tools;
        }

        #endregion
    }
}
