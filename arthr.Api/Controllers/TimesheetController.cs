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
    public sealed class TimesheetController : BaseController
    {
        #region Fields

        private readonly ITimesheetService _timesheetService;

        #endregion

        #region Constructors

        public TimesheetController(ITimesheetService timesheetService)
        {
            _timesheetService = timesheetService;
        }

        #endregion

        [HttpDelete, Route("/api/timesheet/{id:int}"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _timesheetService.DeleteAsync(id));
        }

        [HttpGet, Route("/api/timesheet"), ReturnType(typeof(List<Timesheet>))]
        public async Task<IActionResult> Get()
        {
            return Ok(await _timesheetService.GetAsync());
        }

        [HttpGet, Route("/api/timesheet/{id:int}"), ReturnType(typeof(TimesheetUpsertViewModel))]
        public async Task<IActionResult> GetById(int id, int? taskId)
        {
            return Ok(await _timesheetService.GetAsync(id, taskId, 1));
        }

        [HttpPost, Route("/api/timesheet"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Post([FromBody]Timesheet timesheet)
        {
            return Ok(await _timesheetService.CreateAsync(timesheet));
        }

        [HttpPut, Route("/api/timesheet"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Put([FromBody]Timesheet timesheet)
        {
            return Ok(await _timesheetService.CreateAsync(timesheet));
        }
    }
}
