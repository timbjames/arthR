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
    public sealed class MasterSiteController : BaseController
    {
        #region Fields

        private readonly IMasterSiteService _masterSiteService;

        #endregion

        #region Constructors

        public MasterSiteController(IMasterSiteService masterSiteService)
        {
            _masterSiteService = masterSiteService;
        }

        #endregion

        #region Public Methods

        [HttpDelete, Route("/api/mastersite/{id:int}"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _masterSiteService.DeleteAsync(id));
        }

        [HttpGet, Route("/api/mastersite"), ReturnType(typeof(List<MasterSite>))]
        public async Task<IActionResult> Get()
        {
            return Ok(await _masterSiteService.GetAsync());
        }

        [HttpGet, Route("/api/mastersite/{id:int}"), ReturnType(typeof(MasterSiteUpsertViewModel))]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _masterSiteService.GetAsync(id));
        }

        [HttpPost, Route("/api/mastersite"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Post([FromBody]MasterSite masterSite)
        {
            return Ok(await _masterSiteService.CreateAsync(masterSite));
        }

        [HttpPut, Route("/api/mastersite"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Put([FromBody]MasterSite masterSite)
        {
            return Ok(await _masterSiteService.EditAsync(masterSite));
        }

        #endregion
    }
}
