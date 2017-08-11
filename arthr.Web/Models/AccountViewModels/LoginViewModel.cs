namespace arthr.Web.Models.AccountViewModels
{
    #region Usings

    using System.ComponentModel.DataAnnotations;

    #endregion

    public sealed class LoginViewModel
    {
        #region Properties

        [Required,EmailAddress]
        public string Email { get; set; }

        [Required,DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }

        #endregion
    }
}
