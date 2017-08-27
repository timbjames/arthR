namespace arthr.Business.Services
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Data.Extensions;
    using Interfaces;
    using Models.arTask;
    using Utils.Exceptions.Enums;
    using Microsoft.EntityFrameworkCore;
    using System.Linq;
    using arthr.Models.Core;

    #endregion

    public class TaskService : BaseService, ITaskService
    {
        private readonly IProjectService _projectService;
        private readonly IStaffService _staffService;
        private readonly IStatusService _statusService;

        #region Constructors

        public TaskService(IProjectService projectService, IStaffService staffService, IStatusService statusService, IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
            _projectService = projectService;
            _staffService = staffService;
            _statusService = statusService;
        }

        #endregion

        #region Interface Implementations

        public async Task<List<AnthRTask>> GetAsync()
        {
            IQueryable<AnthRTask> query = Db.AnthRTask
                .Include(t => t.Project).ThenInclude(p => p.MasterSite)
                .Include(t => t.StaffOnTasks).ThenInclude(s => s.Staff);

            return await query.ToListAsync();
        }

        public async Task<TaskUpsertViewModel> GetTemplateAsync(User user, int? projectId)
        {
            var upsert = new TaskUpsertViewModel
            {
                Model = new AnthRTask()
                {
                    ProjectId = projectId ?? default(int)
                },
                Tools = await GetTools(projectId, user.Username)
            };

            return upsert;
        }

        public async Task<TaskUpsertViewModel> GetAsync(int id, User user)
        {
            var upsert = new TaskUpsertViewModel
            {
                Model = await GetTask(id),
                Tools = await GetTools(null, user.Username)
            };

            return upsert;
        }

        public async Task<bool> CreateAsync(AnthRTask anthRTask)
        {
            Db.AnthRTask.Add(anthRTask);
            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<bool> EditAsync(AnthRTask anthRTask)
        {
            var staffOnTask = anthRTask.StaffOnTasks.ToList();

            Db.Entry(anthRTask).State = EntityState.Modified;

            var result =  await Db.SaveChangesAsync() > 0;

            if (result)
            {
                var existingStaffOnTasks = await Db.StaffOnTask.Where(t => t.AnthRTaskId == anthRTask.AnthRTaskId).ToListAsync();

                if (existingStaffOnTasks.Any())
                {
                    Db.RemoveRange(existingStaffOnTasks);
                }

                foreach (var sOT in staffOnTask)
                {
                    Db.StaffOnTask.Add(sOT);
                }

                result = await Db.SaveChangesAsync() > 0;
            }

            return result;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            AnthRTask task = await GetTask(id);
            return await Db.SaveChangesAsync() > 1;
        }

        #endregion

        #region Private Methods

        private async Task<AnthRTask> GetTask(int taskId) => await Db.AnthRTask
            .Include(t => t.StaffOnTasks).ThenInclude(s => s.Staff).FirstOrNotFoundAsync(x => x.AnthRTaskId == taskId, ErrorCode.ArthRTask);

        private async Task<TaskToolsViewModel> GetTools(int? projectId, string username)
        {
            var tools = new TaskToolsViewModel
            {
                Projects = await _projectService.GetProjectsAsync(username, false, string.Empty),
                Priorities = Enumerable.Range(1, 4),
                Staff = projectId.HasValue ? await _staffService.GetForProject(projectId.Value) : await _staffService.GetAsync(),
                States = await _statusService.GetAsync()
            };

            return tools;
        }

        #endregion
    }
}
