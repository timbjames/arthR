namespace arthr.Business.Project
{
    #region Usings

    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Models.Core;
    using Data.Extensions;
    using Utils.Exceptions.Enums;
    using System;

    #endregion

    public sealed class ProjectService : BaseService, IProjectService
    {
        #region Constructors

        public ProjectService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion

        #region Interface Implementations

        /// <summary>
        /// Gets the projects asynchronous.
        /// </summary>
        /// <param name="username">The username.</param>
        /// <param name="completed">if set to <c>true</c> [completed].</param>
        /// <param name="all">All.</param>
        /// <returns></returns>
        public async Task<IEnumerable<Project>> GetProjectsAsync(string username, bool completed, string all)
        {
            IQueryable<Project> query = Db.Project
                .Include(x => x.MasterSite)
                .Where(x => x.Completed == completed && (
                    x.Username.Equals(username) 
                    || x.StaffOnProjects.Any(sp => sp.Staff.User.Username == username)
                    || !string.IsNullOrEmpty(all)
                ))
                .OrderBy(x => x.MasterSite.Name).ThenBy(x => x.Name);

            return await query.ToListAsync();
        }

        public async Task<Project> GetProject(int id)
        {
            return await Db.Project.FirstOrNotFoundAsync(x => x.ProjectId == id, ErrorCode.Project);
        }

        public async Task<bool> CreateProject(Project project)
        {
            Db.Project.Add(project);
            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<bool> EditProject(Project project)
        {
            Db.Entry(project).State = EntityState.Modified;
            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<bool> DeleteProject(int id)
        {
            Project project = await GetProject(id);
            project.Deleted = true;

            return await Db.SaveChangesAsync() > 1;
        }

        #endregion
    }
}
