namespace arthr.Data.Core
{
    #region Usings

    using arTask;
    using Utils.Attributes;

    #endregion

    [DbEntity]
    public class StaffOnTask
    {
        #region Properties

        public virtual AnthRTask AnthRTask { get; set; }
        public int AnthRTaskId { get; set; }

        public virtual Staff Staff { get; set; }
        public int StaffId { get; set; }

        public long StaffOnTaskId { get; set; }

        #endregion
    }

}
