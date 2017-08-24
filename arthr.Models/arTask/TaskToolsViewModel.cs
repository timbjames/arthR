using arthr.Models.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace arthr.Models.arTask
{
    public sealed class TaskToolsViewModel
    {
        public IEnumerable<Project> Projects { get; set; }
        public IEnumerable<int> Priorities { get; set; }
        public IEnumerable<Status> States { get; set; }
    }
}
