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

    #endregion

    public class NotesService : BaseService, INotesService
    {
        #region Constructors

        public NotesService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion

        #region Interface Implementations

        public Task<List<Note>> GetAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Note> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> CreateAsync(Note note)
        {
            throw new NotImplementedException();
        }

        public Task<bool> EditAsync(Note note)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
