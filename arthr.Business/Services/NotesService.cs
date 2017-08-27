namespace arthr.Business.Services
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Interfaces;
    using Models.Notes;
    using Microsoft.EntityFrameworkCore;
    using System.Linq;
    using arthr.Utils.Exceptions.Enums;
    using arthr.Data.Extensions;
    using arthr.Models.Core;

    #endregion

    public class NotesService : BaseService, INotesService
    {
        private readonly IStaffService _staffService;

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

        public async Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
