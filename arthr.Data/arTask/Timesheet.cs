﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arthr.Data.arTask
{
    
    public class Timesheet
    {

        public int Id { get; set; }
        public int Hours { get; set; }
        public int Mins { get; set; }

        [Display(Name = "Hourly Rate")]
        public int HourlyRate { get; set; }

        [Display(Name = "Date Recorded")]
        public DateTime? DateRecorded { get; set; }

        [DisplayFormat(DataFormatString="{0:C}")]
        public double Quoted { get; set; }

        public bool AlreadyBilled { get; set; }
        
        public int StaffId { get; set; }
        public virtual Core.Staff Staff { get; set; }

        public int AnthRTaskId { get; set; }
        public virtual AnthRTask AnthRTask { get; set; }
        public bool? HideFromTimesheet { get; set; }

    }

}
