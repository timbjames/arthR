namespace arthr.Business.Core.Services
{
    #region Usings

    using System.Threading.Tasks;
    using Data.Core;
    using Interfaces;

    #endregion

    public class ArthRContextWrapper : IArthrContext
    {
        #region Constructors

        public  ArthRContextWrapper(ArthRContext arthRContext)
        {
            ArthrContext = arthRContext;
        }

        #endregion

        #region Properties

        public ArthRContext ArthrContext { get; }

        #endregion

        #region Interface Implementations

        public void Dispose()
        {
            ArthrContext?.Dispose();
        }

        public async Task<int> SaveChangesAsync()
        {
            return await ArthrContext.SaveChangesAsync();
        }

        #endregion
    }
}
