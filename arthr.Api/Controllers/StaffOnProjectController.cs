

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace arthr.Api.Controllers
{
    #region Usings

    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    #endregion

    [Route("api/[controller]")]
    public sealed class StaffOnProjectController : BaseController
    {
        #region Fields

        private readonly IStaffOnProjectService _staffOnProjectService;

        #endregion

        #region Constructors

        public StaffOnProjectController(IStaffOnProjectService staffOnProjectService)
        {
            _staffOnProjectService = staffOnProjectService;
        }

        #endregion
    }
}
