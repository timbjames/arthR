using System;
using System.Collections.Generic;
using System.Text;

namespace arthr.Models.arTask
{
    public sealed class TaskUpsertViewModel
    {
        public AnthRTask Model { get; set; }
        public TaskToolsViewModel Tools { get; set; }
    }
}
