namespace arthr.Business.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.arTask;

    public interface ITaskService
    {
        Task<List<AnthRTask>> GetAsync();

        Task<AnthRTask> GetAsync(int id);

        Task<bool> CreateAsync(AnthRTask anthRTask);

        Task<bool> EditAsync(AnthRTask anthRTask);

        Task<bool> DeleteAsync(int id);
    }
}
