namespace arthr.Web.Models.ManageViewModels
{
    #region Usings

    using System.Collections.Generic;
    using Microsoft.AspNetCore.Identity;

    #endregion

    public class IndexViewModel
    {
        #region Properties

        public bool BrowserRemembered { get; set; }
        public bool HasPassword { get; set; }

        public IList<UserLoginInfo> Logins { get; set; }

        public string PhoneNumber { get; set; }

        public bool TwoFactor { get; set; }

        #endregion
    }
}
