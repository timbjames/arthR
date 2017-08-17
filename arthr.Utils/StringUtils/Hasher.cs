namespace arthr.Utils.StringUtils
{
    #region Usings

    using System.Security.Cryptography;
    using System.Text;

    #endregion

    public static class Hasher
    {
        #region Public Methods

        public  static string GetHash(string value)
        {
            byte[] hash;
            byte[] source = Encoding.ASCII.GetBytes(value);

            using (MD5 md5 = MD5.Create())
            {
                hash = md5.ComputeHash(source);
            }

            var sb = new StringBuilder();
            foreach (byte t in hash)
            {
                sb.Append(t.ToString("X2"));
            }

            return sb.ToString();
        }

        #endregion
    }
}
