namespace arthr.Data.Notes
{
    #region Usings

    using System.ComponentModel.DataAnnotations;
    using Core;
    using Utils.Attributes;

    #endregion

    [DbEntity]
    public class Note
    {
        #region Properties

        [DataType(DataType.MultilineText)]
        public string Content { get; set; }

        public int NoteId { get; set; }
        public virtual Staff Staff { get; set; }

        public int StaffId { get; set; }
        public string Title { get; set; }

        public string Username { get; set; }

        #endregion
    }
}
