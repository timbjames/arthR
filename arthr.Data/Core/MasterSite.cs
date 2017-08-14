namespace arthr.Data.Core
{
    #region Usings

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using Todo;
    using Utils.Attributes;

    #endregion

    [DbEntity]
    public class MasterSite
    {
        #region Properties

        public bool HasVAT { get; set; }
        public int LiveBidMasterSiteId { get; set; }

        [Display(Name = "Master Site")]
        public int MasterSiteId { get; set; }

        public string Name { get; set; }

        public virtual ICollection<Project> Projects { get; set; }

        public virtual ICollection<TodoItem> TodoItems { get; set; }

        #endregion
    }
}
