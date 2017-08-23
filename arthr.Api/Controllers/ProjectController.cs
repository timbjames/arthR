namespace arthr.Api.Controllers
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using Models.Core;
    using Utils.Attributes;

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

        [HttpPatch, Route("/api/project/complete"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Complete([FromBody]Project project)
        {
            return Ok(await _projectService.EditProjectAsync(project));
        }

        [HttpDelete, Route("/api/project/delele/{id:int}"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _projectService.DeleteProjectAsync(id));
        }

        [HttpGet, Route("/api/project"), ReturnType(typeof(List<Project>))]
        public async Task<IActionResult> Get(bool completed, string all)
        {
            var projects = await _projectService.GetProjectsAsync(ArthRUser.Username, completed, all);
            return Ok(projects);
        }

        [HttpGet, Route("/api/project/getbyid/{id:int}"), ReturnType(typeof(Project))]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _projectService.GetProjectAsync(id));
        }

        [HttpGet, Route("/api/project/template"), ReturnType(typeof(ProjectUpsertViewModel))]
        public async Task<IActionResult> GetTemplate()
        {
            return Ok(await _projectService.GetTemplateAsync());
        }

        [HttpPost, Route("/api/project"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Post([FromBody]Project project)
        {
            return Ok(await _projectService.CreateProjectAsync(project));
        }

        [HttpPut, Route("/api/project"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Put([FromBody]Project project)
        {
            return Ok(await _projectService.EditProjectAsync(project));
        }

        #endregion
    }
}
