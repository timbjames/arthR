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

        public static string GetHash(string value)
        {
            byte[] source;
            byte[] hash;

            source = ASCIIEncoding.ASCII.GetBytes(value);

            using (MD5 md5 = MD5.Create())
            {
                hash = md5.ComputeHash(source);
            }

            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }

            return sb.ToString();
        }

        #endregion
    }
}
