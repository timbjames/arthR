namespace arthr.Business.Project.Interfaces
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.Core;

    #endregion

    public interface IProjectService
    {
        #region Public Methods

        /// <summary>
        /// Gets the projects asynchronous.
        /// </summary>
        /// <param name="username">The username.</param>
        /// <param name="completed">if set to <c>true</c> [completed].</param>
        /// <param name="all">All.</param>
        /// <returns></returns>
        Task<IEnumerable<Project>> GetProjectsAsync(string username, bool completed, string all);

        Task<Project> GetProject(int id);

        #endregion
    }
}
