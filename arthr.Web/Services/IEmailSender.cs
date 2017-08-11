namespace arthr.Web.Services
{
    #region Usings

    using System.Threading.Tasks;

    #endregion

    public interface IEmailSender
    {
        #region Public Methods

        Task SendEmailAsync(string email, string subject, string message);

        #endregion
    }
}
