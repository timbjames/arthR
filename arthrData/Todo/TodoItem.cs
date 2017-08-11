using System;

namespace arthrData.Todo
{
    
    public class TodoItem
    {        
        
        public int Id { get; set; }
        public string Title { get; set; }
        public bool IsDone { get; set; }
        public int Priority { get; set; }
        public string Description { get; set; }
        public DateTime? Deadline { get; set; }

        public int MasterSiteId { get; set; }                
        public virtual Core.MasterSite MasterSite { get; set; }

        public int StatusId { get; set; }
        public virtual Core.Status Status { get; set; }

    }

}
