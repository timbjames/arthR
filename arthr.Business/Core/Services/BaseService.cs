namespace arthr.Business.Core.Services
{
    #region Usings

    using System;
    using Data.Core;
    using Interfaces;

    #endregion

    public abstract class BaseService : IDisposable
    {
        #region Fields

        private readonly IArthrContext _context;

        #endregion

        #region Constructors

        protected BaseService(IBaseServiceBundle baseServiceBundle)
        {
            _context = baseServiceBundle.ArthrContext;
        }

        protected ArthRContext Db => _context.ArthrContext;

        #endregion

        #region Interface Implementations

        public void Dispose()
        {
            _context?.Dispose();
        }

        #endregion
    }
}
