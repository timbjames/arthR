namespace arthr.Api.Controllers
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Business.Project.Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using Models.Core;

    #endregion

    [Route("api/[controller]")]
    public sealed class ProjectController : BaseController
    {
        #region Fields

        private readonly IProjectService _projectService;

        #endregion

        #region Constructors

        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        #endregion

        #region Public Methods

        [HttpGet]
        public async Task<IActionResult> Get(bool completed, string all)
        {
            IEnumerable<Project> projects = await _projectService.GetProjectsAsync(ArthRUser.Username, completed, all);
            return Ok(projects);
        }

        #endregion
    }
}
