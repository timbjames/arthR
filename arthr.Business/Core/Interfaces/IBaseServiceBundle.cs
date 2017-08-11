namespace arthr.Business.Core.Interfaces
{
    #region Usings

    using Microsoft.Extensions.Caching.Memory;

    #endregion

    public interface IBaseServiceBundle
    {
        #region Properties

        IArthrContext ArthrContext { get; }

        IMemoryCache MemoryCache { get; }

        #endregion
    }
}
