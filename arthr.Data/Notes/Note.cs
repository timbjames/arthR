namespace arthr.Data.Notes
{
    #region Usings

    using System.ComponentModel.DataAnnotations;
    using Core;

    #endregion

    public class Note
    {
        #region Properties

        [DataType(DataType.MultilineText)]
        public string Content { get; set; }

        public int Id { get; set; }
        public virtual Staff Staff { get; set; }

        public int StaffId { get; set; }
        public string Title { get; set; }

        public string Username { get; set; }

        #endregion
    }
}
