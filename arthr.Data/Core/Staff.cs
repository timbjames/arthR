﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arthr.Data.Core
{
    public class Staff : Person
    {
        public int Id { get; set; }

        public string Username { get; set; }
                                
        public virtual ICollection<StaffOnProjects> StaffOnProjects { get; set; }
        
        public virtual ICollection<StaffOnTask> StaffOnTasks { get; set; }

        public virtual ICollection<Notes.Note> Notes { get; set; }
    }
}
