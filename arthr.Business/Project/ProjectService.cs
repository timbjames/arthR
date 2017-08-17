namespace arthr.Business.Project
{
    #region Usings

    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Models.Core;

    #endregion

    public sealed class ProjectService : BaseService, IProjectService
    {
        #region Constructors

        public ProjectService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
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
                .Where(x => x.Completed == completed && (
                    x.Username.Equals(username) 
                    || x.StaffOnProjects.Any(sp => sp.Staff.User.Username == username)
                    || !string.IsNullOrEmpty(all)
                ));

            return await query.ToListAsync();
        }

        #endregion
    }
}
