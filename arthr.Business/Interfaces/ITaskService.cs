namespace arthr.Business.Interfaces
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.arTask;
    using Models.Core;

    #endregion

    public interface ITaskService
    {
        #region Public Methods

        Task<bool> CompleteTask(int id, User user);

        Task<bool> CreateAsync(AnthRTask anthRTask);

        Task<bool> DeleteAsync(int id);

        Task<bool> EditAsync(AnthRTask anthRTask);

        Task<List<AnthRTask>> GetAsync();

        Task<TaskUpsertViewModel> GetAsync(int id, User user);

        Task<TaskUpsertViewModel> GetTemplateAsync(User user, int? projectId);

        #endregion
    }
}
