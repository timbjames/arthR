namespace arthr.Web.Models.ManageViewModels
{
    #region Usings

    using System.ComponentModel.DataAnnotations;

    #endregion

    public sealed class VerifyPhoneNumberViewModel
    {
        #region Properties

        [Required]
        public string Code { get; set; }

        [Required,Phone,Display(Name = "Phone number")]
        public string PhoneNumber { get; set; }

        #endregion
    }
}
