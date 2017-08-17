namespace arthr.Models.Core
{
    #region Usings

    using System.Collections.Generic;
    using Notes;
    using Utils.Attributes;

    #endregion

    [DbEntity]
    public class Staff : Person
    {
        #region Properties

        public int StaffId { get; set; }

        public virtual ICollection<Note> Notes { get; set; }

        public virtual ICollection<StaffOnProjects> StaffOnProjects { get; set; }

        public virtual ICollection<StaffOnTask> StaffOnTasks { get; set; }

        public virtual User User { get; set; }
        public int UserId { get; set; }
        #endregion
    }
}
