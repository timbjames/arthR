namespace arthr.Business.Core.Interfaces
{
    #region Usings

    using System;
    using System.Threading.Tasks;
    using Data.Core;

    #endregion

    public interface IArthrContext : IDisposable
    {
        #region Properties

        ArthRContext ArthrContext { get; }

        #endregion

        #region Public Methods

        /// <summary>
        /// Saves the changes asynchronous.
        /// </summary>
        /// <returns></returns>
        Task<int> SaveChangesAsync();

        #endregion
    }
}
