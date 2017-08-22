

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
    public sealed class StaffController : BaseController
    {
        #region Fields

        private readonly IStaffService _staffService;

        #endregion

        #region Constructors

        public StaffController(IStaffService staffService)
        {
            _staffService = staffService;
        }

        #endregion

        #region Public Methods

        [HttpDelete, Route("/api/staff/{id:int}"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _staffService.DeleteAsync(id));
        }

        [HttpGet, Route("/api/staff"), ReturnType(typeof(List<Staff>))]
        public async Task<IActionResult> Get()
        {
            return Ok(await _staffService.GetAsync());
        }

        [HttpGet, Route("/api/staff/{id:int}"), ReturnType(typeof(Staff))]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _staffService.GetAsync(id));
        }

        [HttpPost, Route("/api/staff"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Post([FromBody]Staff staff)
        {
            return Ok(await _staffService.CreateAsync(staff));
        }

        [HttpPut, Route("/api/staff"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Put([FromBody]Staff staff)
        {
            return Ok(await _staffService.CreateAsync(staff));
        }

        #endregion
    }
}
