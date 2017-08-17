namespace arthr.Models.Core
{
    #region Usings

    using System.Collections.Generic;
    using arTask;
    using Todo;
    using Utils.Attributes;

    #endregion

    [DbEntity]
    public class Status
    {
        #region Properties

        public virtual ICollection<AnthRTask> AnthRTasks { get; set; }

        public string Description { get; set; }
        public string Glyphicon { get; set; }
        public string HexColor { get; set; }
        public int StatusId { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Project> Projects { get; set; }
        public bool ShowIcon { get; set; }

        public virtual ICollection<TodoItem> TodoItems { get; set; }

        #endregion
    }
}
