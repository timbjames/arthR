namespace arthr.Business.Interfaces
{
    #region Usings

    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models.Core;

    #endregion

    public interface IStatusService
    {
        #region Public Methods

        Task<List<Status>> GetAsync();

        #endregion
    }
}
