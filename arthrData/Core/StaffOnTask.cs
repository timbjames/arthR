﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace arthrData.Core
{
    
    public class StaffOnTask
    {

        [Key]
        [Column(Order = 0)]
        public int StaffId { get; set; }
        public virtual Staff Staff { get; set; }

        [Key]
        [Column(Order = 1)]
        public int AnthRTaskId { get; set; }
        public virtual arTask.AnthRTask AnthRTask { get; set; }

    }

}
