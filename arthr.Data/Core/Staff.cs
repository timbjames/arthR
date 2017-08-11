namespace arthr.Data.Core
{
    #region Usings

    using System.Collections.Generic;
    using Notes;

    #endregion

    public class Staff : Person
    {
        #region Properties

        public int Id { get; set; }

        public virtual ICollection<Note> Notes { get; set; }

        public virtual ICollection<StaffOnProjects> StaffOnProjects { get; set; }

        public virtual ICollection<StaffOnTask> StaffOnTasks { get; set; }

        public string Username { get; set; }

        #endregion
    }
}
