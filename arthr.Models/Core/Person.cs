using System.ComponentModel.DataAnnotations.Schema;

namespace arthr.Models.Core
{
    public class Person
    {
        #region Properties

        public string Email { get; set; }

        [NotMapped]
        public string GravatarHash => Utils.Crypto.Md5.GetHash(Email).ToLower();

        public string Name { get; set; }

        #endregion
    }
}
