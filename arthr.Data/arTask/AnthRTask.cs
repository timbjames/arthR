namespace arthr.Data.arTask
{
    #region Usings

    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using Core;

    #endregion

    public class AnthRTask
    {
        #region Properties

        [Display(Name = "Agreed With")]
        public string AgreedWith { get; set; }

        [Display(Name = "Date Completed"),DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]
        public DateTime? DateCompleted { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]
        public DateTime Deadline { get; set; }

        [DataType(DataType.MultilineText)]
        public string Description { get; set; }

        public bool? HideFromTimesheet { get; set; }

        public int Id { get; set; }

        [Display(Name = "Task")]
        public string Name { get; set; }

        [Display(Name = "Planned Start"),DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]
        public DateTime PlannedStart { get; set; }

        public int Priority { get; set; }
        public virtual Project Project { get; set; }

        public int ProjectId { get; set; }

        [Display(Name = "Requested By")]
        public string RequestedBy { get; set; }

        public virtual ICollection<StaffOnTask> StaffOnTasks { get; set; }
        public virtual Status Status { get; set; }

        public int StatusId { get; set; }

        public virtual ICollection<Timesheet> Timesheet { get; set; }

        public string Username { get; set; }

        #endregion
    }
}
