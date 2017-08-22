

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace arthr.Api.Controllers
{
    #region Usings

    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    #endregion

    [Route("api/[controller]")]
    public sealed class StaffOnTaskController : BaseController
    {
        #region Fields

        private readonly IStaffOnTaskService _staffOnTaskService;

        #endregion

        #region Constructors

        public StaffOnTaskController(IStaffOnTaskService staffOnTaskService)
        {
            _staffOnTaskService = staffOnTaskService;
        }

        #endregion
    }
}
