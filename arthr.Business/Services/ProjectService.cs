namespace arthr.Business.Services
{
    #region Usings

    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Data.Extensions;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Models.Core;
    using Utils.Exceptions.Enums;

    #endregion

    public sealed class ProjectService : BaseService, IProjectService
    {
        private readonly IMasterSiteService _masterSiteService;
        #region Constructors

        public ProjectService(IMasterSiteService masterSiteService, IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
            _masterSiteService = masterSiteService;
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

        public async Task<ProjectUpsertViewModel> GetTemplateAsync()
        {
            ProjectUpsertViewModel upsert = new ProjectUpsertViewModel
            {
                Model = new Project(),
                Tools = await GetUpsertTools()
            };

            return upsert;
        }

        public async Task<Project> GetProjectAsync(int id)
        {
            return await Db.Project.FirstOrNotFoundAsync(x => x.ProjectId == id, ErrorCode.Project);
        }

        public async Task<bool> CreateProjectAsync(Project project)
        {
            Db.Project.Add(project);
            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<bool> EditProjectAsync(Project project)
        {
            Db.Entry(project).State = EntityState.Modified;
            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<bool> DeleteProjectAsync(int id)
        {
            Project project = await GetProjectAsync(id);
            project.Deleted = true;

            return await Db.SaveChangesAsync() > 1;
        }

        #endregion

        private async Task<ProjectToolsViewModel> GetUpsertTools()
        {
            ProjectToolsViewModel tools = new ProjectToolsViewModel
            {
                MasterSites = await _masterSiteService.GetAsync()
            };

            return tools;
        }
    }
}
