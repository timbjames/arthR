namespace arthr.Web.Models.AccountViewModels
{
    #region Usings

    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc.Rendering;

    #endregion

    public class SendCodeViewModel
    {
        #region Properties

        public ICollection<SelectListItem> Providers { get; set; }

        public bool RememberMe { get; set; }

        public string ReturnUrl { get; set; }
        public string SelectedProvider { get; set; }

        #endregion
    }
}
