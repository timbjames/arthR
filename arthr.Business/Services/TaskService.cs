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
        private readonly IStatusService _statusService;

        #region Constructors

        public TaskService(IProjectService projectService, IStatusService statusService, IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
            _projectService = projectService;
            _statusService = statusService;
        }

        #endregion

        #region Interface Implementations

        public async Task<List<AnthRTask>> GetAsync()
        {
            IQueryable<AnthRTask> query = Db.AnthRTask
                .Include(t => t.Project).ThenInclude(p => p.MasterSite);

            return await query.ToListAsync();
        }

        public async Task<TaskUpsertViewModel> GetTemplateAsync(User user, int? projectid)
        {
            var upsert = new TaskUpsertViewModel
            {
                Model = new AnthRTask()
                {
                    ProjectId = projectid ?? default(int)
                },
                Tools = await GetTools(user.Username)
            };

            return upsert;
        }

        public async Task<TaskUpsertViewModel> GetAsync(int id, User user)
        {
            var upsert = new TaskUpsertViewModel
            {
                Model = await GetTask(id),
                Tools = await GetTools(user.Username)
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
            Db.Entry(anthRTask).State = EntityState.Modified;
            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            AnthRTask task = await GetTask(id);
            return await Db.SaveChangesAsync() > 1;
        }

        #endregion

        #region Private Methods

        private async Task<AnthRTask> GetTask(int taskId) => await Db.AnthRTask.FirstOrNotFoundAsync(x => x.AnthRTaskId == taskId, ErrorCode.ArthRTask);

        private async Task<TaskToolsViewModel> GetTools(string username)
        {
            var tools = new TaskToolsViewModel
            {
                Projects = await _projectService.GetProjectsAsync(username, false, string.Empty),
                Priorities = Enumerable.Range(1, 4),
                States = await _statusService.GetAsync()
            };

            return tools;
        }

        #endregion
    }
}
