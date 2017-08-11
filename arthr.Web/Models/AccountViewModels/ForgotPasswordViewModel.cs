namespace arthr.Web.Models.AccountViewModels
{
    #region Usings

    using System.ComponentModel.DataAnnotations;

    #endregion

    public sealed class ForgotPasswordViewModel
    {
        #region Properties

        [Required,EmailAddress]
        public string Email { get; set; }

        #endregion
    }
}
