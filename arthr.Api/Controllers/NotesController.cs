

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace arthr.Api.Controllers
{
    #region Usings

    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    #endregion

    [Route("api/[controller]")]
    public sealed class NotesController : BaseController
    {
        #region Fields

        private readonly INotesService _notesService;

        #endregion

        #region Constructors

        public NotesController(INotesService notesService)
        {
            _notesService = notesService;
        }

        #endregion
    }
}
