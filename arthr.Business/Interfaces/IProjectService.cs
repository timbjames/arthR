namespace arthr.Business.Interfaces
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.Core;

    #endregion

    public interface IProjectService
    {
        #region Public Methods

        Task<bool> CreateProjectAsync(Project project, User user);

        Task<bool> DeleteProjectAsync(int id);

        Task<bool> EditProjectAsync(Project project, User user);

        Task<ProjectUpsertViewModel> GetProjectAsync(int id);

        /// <summary>
        /// Gets the projects asynchronous.
        /// </summary>
        /// <param name="username">The username.</param>
        /// <param name="completed">if set to <c>true</c> [completed].</param>
        /// <param name="all">All.</param>
        /// <returns></returns>
        Task<IEnumerable<Project>> GetProjectsAsync(string username, bool completed, string all);

        Task<ProjectUpsertViewModel> GetTemplateAsync();

        #endregion
    }
}
