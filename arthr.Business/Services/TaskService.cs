namespace arthr.Business.Services
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Data.Extensions;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Models.arTask;
    using Models.Core;
    using Utils.Exceptions.Enums;

    #endregion

    public class TaskService : BaseService, ITaskService
    {
        #region Fields

        private readonly IProjectService _projectService;
        private readonly IStaffService _staffService;
        private readonly IStatusService _statusService;

        #endregion

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
                .Include(t => t.StaffOnTasks).ThenInclude(s => s.Staff)
                .Where(t => !t.Project.IsDeleted && !t.IsCompleted);

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
            List<StaffOnTask> staffOnTask = anthRTask.StaffOnTasks.ToList();

            Db.Entry(anthRTask).State = EntityState.Modified;

            bool result =  await Db.SaveChangesAsync() > 0;

            if (result)
            {
                List<StaffOnTask> existingStaffOnTasks = await Db.StaffOnTask.Where(t => t.AnthRTaskId == anthRTask.AnthRTaskId).ToListAsync();

                if (existingStaffOnTasks.Any())
                {
                    Db.RemoveRange(existingStaffOnTasks);
                }

                foreach (StaffOnTask sOt in staffOnTask)
                {
                    Db.StaffOnTask.Add(sOt);
                }

                result = await Db.SaveChangesAsync() > 0;
            }

            return result;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            AnthRTask task = await GetTask(id);
            task.Deleted = true;

            return await Db.SaveChangesAsync() > 0;
        }

        public async Task<bool> CompleteTask(int id, User user)
        {
            AnthRTask task = await GetTask(id);
            task.DateCompleted = DateTime.UtcNow;

            return await Db.SaveChangesAsync() > 0;
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
