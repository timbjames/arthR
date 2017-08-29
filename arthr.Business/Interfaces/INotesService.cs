namespace arthr.Business.Interfaces
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.Notes;

    #endregion

    public interface INotesService
    {
        #region Public Methods

        Task<bool> CreateAsync(Note note, string username);

        Task<bool> DeleteAsync(int id);

        Task<bool> EditAsync(Note note);
        Task<List<Note>> GetAsync(string username);

        Task<NoteUpsertViewModel> GetAsync(int id);

        #endregion
    }
}
