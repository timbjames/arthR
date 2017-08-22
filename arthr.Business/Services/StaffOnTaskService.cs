namespace arthr.Business.Services
{
    #region Usings

    using Core.Interfaces;
    using Core.Services;
    using Interfaces;

    #endregion

    public class StaffOnTaskService : BaseService, IStaffOnTaskService
    {
        #region Constructors

        public StaffOnTaskService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion
    }
}
