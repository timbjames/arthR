namespace arthr.Business.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.Notes;

    public interface INotesService
    {
        Task<List<Note>> GetAsync(string username);

        Task<NoteUpsertViewModel> GetAsync(int id);

        Task<bool> CreateAsync(Note note);

        Task<bool> EditAsync(Note note);

        Task<bool> DeleteAsync(int id);
    }
}
