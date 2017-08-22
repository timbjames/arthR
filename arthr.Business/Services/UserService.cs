namespace arthr.Business.Services
{
    #region Usings

    using System;
    using System.Security.Cryptography;
    using System.Threading.Tasks;
    using Core.Interfaces;
    using Core.Services;
    using Exceptions;
    using Interfaces;
    using Microsoft.EntityFrameworkCore;
    using Models.Core;
    using Utils.Attributes;
    using Utils.Crypto;
    using Utils.StringUtils;

    #endregion

    [DependencyInjected]
    public sealed class UserService : BaseService, IUserService
    {
        #region Constructors

        public UserService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        #endregion

        #region Interface Implementations

        public async Task<bool> ValidateCredentialsAsync(string username, string password)
        {
            User user = await this.GetUser(username);

            if (user.RequiresPasswordReset.HasValue && user.RequiresPasswordReset.Value)
            {
                throw UserException.RequiresPasswordReset();
            }

            string encryptedPassword = Md5.Encrypt($"{password}{user.Salt}");

            return user.Password.Equals(encryptedPassword, StringComparison.OrdinalIgnoreCase);
        }

        public async Task<User> FindByUsernameAsync(string username)
        {
            return await Db.Users.SingleOrDefaultAsync(x => x.Username.Equals(username, StringComparison.OrdinalIgnoreCase));
        }

        public async Task<User> FindByIdAsync(int id)
        {
            return await Db.Users.SingleOrDefaultAsync(x => x.UserId == id);
        }

        public async Task<bool> ResetUserPasswordAsync(string username, string password)
        {
            bool result;
            User user = await this.GetUser(username);

            string salt = GetSalt();

            user.Password = Md5.Encrypt($"{password}{salt}");
            user.RequiresPasswordReset = false;
            user.Salt = salt;

            result = await Db.SaveChangesAsync() > 1;

            return result;
        }

        #endregion

        #region Public Methods

        public string GravatarHash(string email) => Hasher.GetHash(email);

        #endregion

        #region Private Methods

        private async Task<User> GetUser(string username)
        {
            User user = await Db.Users.SingleOrDefaultAsync(x => x.Username.Equals(username, StringComparison.OrdinalIgnoreCase));

            if (user == null)
            {
                throw UserException.NotFound();
            }

            return user;
        }

        private static string GetSalt()
        {
            var bytes = new byte[128 / 8];

            using (RandomNumberGenerator keyGenerator = RandomNumberGenerator.Create())
            {
                keyGenerator.GetBytes(bytes);
            }

            return BitConverter.ToString(bytes).Replace("-", "").ToLower();
        }

        #endregion
    }
}
