namespace arthr.Data.arTask
{
    #region Usings

    using System.Collections.Generic;

    #endregion

    // ReSharper disable InconsistentNaming

    /// <summary>
    /// Used to populate the Bootstrap Calendar
    /// </summary>
    public class ScheduleResult
    {
        #region Properties

        public List<Events> result { get; set; }
        
        public int success { get; set; }
        

        #endregion
    }

    public class Events
    {
        #region Properties

        public long end { get; set; }
        public int id { get; set; }
        public long start { get; set; }
        public string theClass { get; set; }
        public string title { get; set; }
        public string url { get; set; }

        #endregion
    }

    // ReSharper restore InconsistentNaming
}
