namespace arthr.Web.Models.ManageViewModels
{
    #region Usings

    using System.ComponentModel.DataAnnotations;

    #endregion

    public sealed class AddPhoneNumberViewModel
    {
        #region Properties

        [Required,Phone,Display(Name = "Phone number")]
        public string PhoneNumber { get; set; }

        #endregion
    }
}
