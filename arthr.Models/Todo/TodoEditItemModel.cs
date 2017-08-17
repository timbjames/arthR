namespace arthr.Models.Todo
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using Core;

    #endregion

    public class TodoItemEditModel
    {
        #region Properties

        public DateTime? Deadline { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; set; }
        public int MastersiteId { get; set; }
        public List<MasterSite> MasterSites { get; set; }
        public int Priority { get; set; }
        public List<Status> Status { get; set; }
        public int StatusId { get; set; }

        public string Title { get; set; }

        #endregion
    }
}
