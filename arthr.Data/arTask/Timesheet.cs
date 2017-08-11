namespace arthr.Data.arTask
{
    #region Usings

    using System;
    using System.ComponentModel.DataAnnotations;
    using Core;

    #endregion

    public class Timesheet
    {
        #region Properties

        public bool AlreadyBilled { get; set; }
        public virtual AnthRTask AnthRTask { get; set; }

        public int AnthRTaskId { get; set; }

        [Display(Name = "Date Recorded")]
        public DateTime? DateRecorded { get; set; }

        public bool? HideFromTimesheet { get; set; }

        [Display(Name = "Hourly Rate")]
        public int HourlyRate { get; set; }

        public int Hours { get; set; }

        public int Id { get; set; }
        public int Mins { get; set; }

        [DisplayFormat(DataFormatString="{0:C}")]
        public double Quoted { get; set; }

        public virtual Staff Staff { get; set; }

        public int StaffId { get; set; }

        #endregion
    }

}
