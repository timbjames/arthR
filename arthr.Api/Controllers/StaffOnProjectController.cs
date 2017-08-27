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
