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
        private readonly IStaffService _staffService;

        #region Constructors

        public ProjectService(IMasterSiteService masterSiteService, IStaffService staffService, IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
            _masterSiteService = masterSiteService;
            _staffService = staffService;
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
                .Include(x => x.StaffOnProjects).ThenInclude(s => s.Staff)
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

        public async Task<ProjectUpsertViewModel> GetProjectAsync(int id)
        {
            ProjectUpsertViewModel upsert = new ProjectUpsertViewModel
            {
                Model =  await GetProject(id),
                Tools = await GetUpsertTools()
            };

            return upsert;
        }

        public async Task<bool> CreateProjectAsync(Project project, User user)
        {
            project.Username = user.Username;
            project.Deleted = false;

            Db.Project.Add(project);

            return await Db.SaveChangesAsync() > 0;
        }

        public async Task<bool> EditProjectAsync(Project project, User user)
        {
            var staffOnProjects = project.StaffOnProjects.ToList();

            Db.Entry(project).State = EntityState.Modified;

            bool result = await Db.SaveChangesAsync() > 0;

            if (result)
            {
                var existingStaffOnProjects = await Db.StaffOnProjects.Where(p => p.ProjectId == project.ProjectId).ToListAsync();
                if (existingStaffOnProjects.Any())
                {
                    Db.RemoveRange(existingStaffOnProjects);
                }

                foreach (var staffOnProject in staffOnProjects)
                {
                    Db.StaffOnProjects.Add(staffOnProject);
                }

                result = await Db.SaveChangesAsync() > 0;
            }

            return result;
        }

        public async Task<bool> DeleteProjectAsync(int id)
        {
            Project project = await GetProject(id);
            project.Deleted = true;

            return await Db.SaveChangesAsync() > 1;
        }

        #endregion

        private async Task<Project> GetProject(int projectId)
        {
            return await Db.Project
                .Include(p => p.StaffOnProjects).ThenInclude(s => s.Staff)
                .FirstOrNotFoundAsync(x => x.ProjectId == projectId, ErrorCode.Project);
        }

        private async Task<ProjectToolsViewModel> GetUpsertTools()
        {
            ProjectToolsViewModel tools = new ProjectToolsViewModel
            {
                MasterSites = await _masterSiteService.GetAsync(),
                Staff = await _staffService.GetAsync()
            };

            return tools;
        }
    }
}
