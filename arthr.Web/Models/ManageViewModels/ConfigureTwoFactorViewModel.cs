namespace arthr.Web.Models.ManageViewModels
{
    #region Usings

    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc.Rendering;

    #endregion

    public class ConfigureTwoFactorViewModel
    {
        #region Properties

        public ICollection<SelectListItem> Providers { get; set; }
        public string SelectedProvider { get; set; }

        #endregion
    }
}
