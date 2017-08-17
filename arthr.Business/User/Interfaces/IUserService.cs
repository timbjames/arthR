namespace arthr.Business.User.Interfaces
{
    #region Usings

    using System.Threading.Tasks;
    using Models.Core;

    #endregion

    public interface IUserService
    {
        #region Public Methods

        /// <summary>
        /// Validates the credentials asynchronous.
        /// </summary>
        /// <param name="username">The username.</param>
        /// <param name="password">The password.</param>
        /// <returns></returns>
        Task<bool> ValidateCredentialsAsync(string username, string password);

        /// <summary>
        /// Finds the by username asynchronous.
        /// </summary>
        /// <param name="username">The username.</param>
        /// <returns></returns>
        Task<User> FindByUsernameAsync(string username);

        Task<User> FindByIdAsync(int id);

        Task<bool> ResetUserPasswordAsync(string username, string password);

        #endregion
    }
}
