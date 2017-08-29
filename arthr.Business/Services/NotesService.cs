namespace arthr.Business.Services
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Data.Extensions;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Models.Core;
    using Models.Notes;
    using Utils.Exceptions.Enums;

    #endregion

    public class NotesService : BaseService, INotesService
    {
        #region Fields

        private readonly IStaffService _staffService;

        #endregion

        #region Constructors

        public NotesService(IStaffService staffService, IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
            _staffService = staffService;
        }

        #endregion

        #region Interface Implementations

        public async Task<List<Note>> GetAsync(string username)
        {
            return await Db.Note
                .Where(n => n.Username == username)
                .ToListAsync();
        }

        public async Task<NoteUpsertViewModel> GetAsync(int id)
        {
            var upsert = new NoteUpsertViewModel
            {
                Model = id == 0 ? new Note() :  await Db.Note.FirstOrNotFoundAsync(n => n.NoteId == id, ErrorCode.Note),
                Tools = null
            };

            return upsert;
        }

        public async Task<bool> CreateAsync(Note note, string username)
        {
            Staff staff = await _staffService.GetByUsernameAsync(username);

            note.StaffId = staff.StaffId;
            note.Username = username;

            Db.Note.Add(note);

            return await Db.SaveChangesAsync() > 1;
        }

        public async Task<bool> EditAsync(Note note)
        {
            Db.Entry(note).State = EntityState.Modified;
            return await Db.SaveChangesAsync() > 1;
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
