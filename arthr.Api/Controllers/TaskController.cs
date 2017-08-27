namespace arthr.Api.Controllers
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using Models.arTask;
    using Utils.Attributes;
    using System.Runtime.InteropServices;

    #endregion

    [Route("api/[controller]")]
    public sealed class TaskController : BaseController
    {
        #region Fields

        private readonly ITaskService _taskService;

        #endregion

        #region Constructors

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        #endregion

        #region Public Methods

        [HttpDelete, Route("/api/task/{id:int}"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _taskService.DeleteAsync(id));
        }

        [HttpGet, Route("/api/task"), ReturnType(typeof(List<AnthRTask>))]
        public async Task<IActionResult> Get()
        {
            return Ok(await _taskService.GetAsync());
        }

        [HttpGet, Route("/api/task/{id:int}"), ReturnType(typeof(TaskUpsertViewModel))]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _taskService.GetAsync(id, ArthRUser));
        }

        [HttpGet, Route("/api/task/template/{projectId:int}"), ReturnType(typeof(TaskUpsertViewModel))]
        public async Task<IActionResult> GetTemplate(int projectId)
        {
            int? pId = projectId == 0 ? default(int) : projectId;

            return Ok(await _taskService.GetTemplateAsync(ArthRUser, pId));
        }

        [HttpPost, Route("/api/task"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Post([FromBody]AnthRTask anthRTask)
        {
            return Ok(await _taskService.CreateAsync(anthRTask));
        }

        [HttpPut, Route("/api/task"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Put([FromBody]AnthRTask anthRTask)
        {
            return Ok(await _taskService.EditAsync(anthRTask));
        }

        #endregion
    }
}
