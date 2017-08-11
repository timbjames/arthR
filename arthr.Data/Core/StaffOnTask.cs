namespace arthr.Data.Core
{
    #region Usings

    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using arTask;

    #endregion

    public class StaffOnTask
    {
        #region Properties

        public virtual AnthRTask AnthRTask { get; set; }

        [Key,Column(Order = 1)]
        public int AnthRTaskId { get; set; }

        public virtual Staff Staff { get; set; }

        [Key,Column(Order = 0)]
        public int StaffId { get; set; }

        #endregion
    }

}
