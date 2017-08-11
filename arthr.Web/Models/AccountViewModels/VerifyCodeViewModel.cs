namespace arthr.Web.Models.AccountViewModels
{
    #region Usings

    using System.ComponentModel.DataAnnotations;

    #endregion

    public class VerifyCodeViewModel
    {
        #region Properties

        [Required]
        public string Code { get; set; }

        [Required]
        public string Provider { get; set; }

        [Display(Name = "Remember this browser?")]
        public bool RememberBrowser { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }

        public string ReturnUrl { get; set; }

        #endregion
    }
}
