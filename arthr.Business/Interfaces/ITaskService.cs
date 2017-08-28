namespace arthr.Business.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.arTask;
    using arthr.Models.Core;

    public interface ITaskService
    {
        Task<bool> CompleteTask(int id, User user);

        Task<List<AnthRTask>> GetAsync();

        Task<TaskUpsertViewModel> GetAsync(int id, User user);

        Task<TaskUpsertViewModel> GetTemplateAsync(User user, int? projectId);

        Task<bool> CreateAsync(AnthRTask anthRTask);

        Task<bool> EditAsync(AnthRTask anthRTask);

        Task<bool> DeleteAsync(int id);
    }
}
