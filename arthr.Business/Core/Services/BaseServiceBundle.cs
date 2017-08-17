namespace arthr.Business.Core.Services
{
    #region Usings

    using Interfaces;
    using Microsoft.Extensions.Caching.Memory;

    #endregion

    public sealed class BaseServiceBundle : IBaseServiceBundle
    {
        #region Constructors

        public BaseServiceBundle(IArthrContext context, IMemoryCache memoryCache)
        {
            ArthrContext = context;
            MemoryCache = memoryCache;
        }

        #endregion

        #region Properties

        public IArthrContext ArthrContext { get; }
        public IMemoryCache MemoryCache { get; }

        #endregion
    }
}
