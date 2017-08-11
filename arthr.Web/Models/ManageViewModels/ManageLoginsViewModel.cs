namespace arthr.Web.Models.ManageViewModels
{
    #region Usings

    using System.Collections.Generic;
    using Microsoft.AspNetCore.Http.Authentication;
    using Microsoft.AspNetCore.Identity;

    #endregion

    public class ManageLoginsViewModel
    {
        #region Properties

        public IList<UserLoginInfo> CurrentLogins { get; set; }

        public IList<AuthenticationDescription> OtherLogins { get; set; }

        #endregion
    }
}
