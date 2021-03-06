﻿namespace arthr.Models.Core
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using arTask;
    using Utils.Attributes;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    [DbEntity]
    public class Project
    {
        #region Properties

        public bool AlreadyBilled { get; set; }

        public bool Completed { get; set; }

        [Display(Name = "Date Completed")]
        public DateTime? DateCompleted { get; set; }

        public DateTime? Deadline { get; set; }

        public bool? Deleted { get; set; }

        public bool? HideFromTimesheet { get; set; }

        [NotMapped]
        public bool IsDeleted => Deleted.HasValue && Deleted.Value;

        public int ProjectId { get; set; }

        public virtual MasterSite MasterSite { get; set; }
        public int MasterSiteId { get; set; }

        [Display(Name = "Project Name")]
        public string Name { get; set; }

        [Display(Name = "On Going Project?")]
        public bool OnGoing { get; set; }

        [Display(Name = "Planned Start")]
        public DateTime PlannedStart { get; set; }

        public double Quoted { get; set; }

        public virtual ICollection<StaffOnProjects> StaffOnProjects { get; set; }

        public virtual ICollection<AnthRTask> Tasks { get; set; }

        public string Username { get; set; }

        #endregion
    }
}
