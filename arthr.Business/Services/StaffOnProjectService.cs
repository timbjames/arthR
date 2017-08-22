namespace arthr.Business.Services
{
    #region Usings

    using Core.Interfaces;
    using Core.Services;
    using Interfaces;

    #endregion

    public class StaffOnProjectService : BaseService, IStaffOnProjectService
    {
        #region Constructors

        public StaffOnProjectService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion
    }
}
