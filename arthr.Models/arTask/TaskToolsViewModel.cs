namespace arthr.Models.arTask
{
    #region Usings

    using System.Collections.Generic;
    using Core;

    #endregion

    public sealed class TaskToolsViewModel
    {
        #region Properties

        public IEnumerable<int> Priorities { get; set; }
        public IEnumerable<Project> Projects { get; set; }
        public IEnumerable<Staff> Staff { get; set; }
        public IEnumerable<Status> States { get; set; }

        #endregion
    }
}
