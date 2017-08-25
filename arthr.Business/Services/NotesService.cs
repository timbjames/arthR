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

    #endregion

    public class NotesService : BaseService, INotesService
    {
        #region Constructors

        public NotesService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
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
                Model =  await Db.Note.FirstOrNotFoundAsync(n => n.NoteId == id, ErrorCode.Note),
                Tools = null
            };

            return upsert;
        }

        public async Task<bool> CreateAsync(Note note)
        {
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
