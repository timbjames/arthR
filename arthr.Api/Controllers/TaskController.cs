

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace arthr.Api.Controllers
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using Models.arTask;
    using Utils.Attributes;

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

        [HttpGet, Route("/api/task/{id:int}"), ReturnType(typeof(AnthRTask))]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _taskService.GetAsync(id));
        }

        [HttpPost, Route("/api/task"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Post([FromBody]AnthRTask anthRTask)
        {
            return Ok(await _taskService.CreateAsync(anthRTask));
        }

        [HttpPut, Route("/api/task"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Put([FromBody]AnthRTask anthRTask)
        {
            return Ok(await _taskService.CreateAsync(anthRTask));
        }

        #endregion
    }
}
