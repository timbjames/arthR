namespace arthr.Api.Controllers
{
    #region Usings

    using Models.Notes;
    using Utils.Attributes;

    #region Usings

    using Business.Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    #endregion

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

        #region Public Methods

        [HttpDelete, Route("/api/note/{id:int}"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _notesService.DeleteAsync(id));
        }

        [HttpGet, Route("/api/note"), ReturnType(typeof(List<Note>))]
        public async Task<IActionResult> Get()
        {
            return Ok(await _notesService.GetAsync(ArthRUser.Username));
        }

        [HttpGet, Route("/api/note/{id:int}"), ReturnType(typeof(NoteUpsertViewModel))]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _notesService.GetAsync(id));
        }

        [HttpPost, Route("/api/note"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Post([FromBody]Note note)
        {
            return Ok(await _notesService.CreateAsync(note, ArthRUser.Username));
        }

        [HttpPut, Route("/api/note"), ReturnType(typeof(bool))]
        public async Task<IActionResult> Put([FromBody]Note note)
        {
            return Ok(await _notesService.EditAsync(note));
        }

        #endregion
    }
}
