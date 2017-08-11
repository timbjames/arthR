namespace arthr.Web.Services
{
    #region Usings

    using System.Threading.Tasks;

    #endregion

    public interface ISmsSender
    {
        #region Public Methods

        Task SendSmsAsync(string number, string message);

        #endregion
    }
}
