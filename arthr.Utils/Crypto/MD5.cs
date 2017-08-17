namespace arthr.Utils.Crypto
{
    #region Usings

    using System.Security.Cryptography;
    using System.Text;

    #endregion

    public static class Md5
    {
        #region Public Methods

        public static string Encrypt(string value)
        {
            byte[] result;

            using(MD5 md5 = MD5.Create())
            {
                result = md5.ComputeHash(Encoding.ASCII.GetBytes(value));
            }

            return Encoding.ASCII.GetString(result);
        }

        #endregion
    }
}
