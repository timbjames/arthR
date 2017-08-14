namespace arthr.Data.Todo
{
    #region Usings

    using System;
    using Core;
    using Utils.Attributes;

    #endregion

    [DbEntity]
    public class TodoItem
    {
        #region Properties

        public DateTime? Deadline { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; set; }
        public virtual MasterSite MasterSite { get; set; }
        public int MasterSiteId { get; set; }
        public int Priority { get; set; }
        public virtual Status Status { get; set; }
        public int StatusId { get; set; }

        public string Title { get; set; }

        public int TodoItemId { get; set; }

        #endregion
    }

}
