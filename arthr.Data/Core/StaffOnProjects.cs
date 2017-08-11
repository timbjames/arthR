namespace arthr.Data.Core
{
    #region Usings

    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class StaffOnProjects
    {
        #region Properties

        public virtual Project Project { get; set; }

        [Key, Column(Order = 1)]
        public int ProjectId { get; set; }

        public virtual Staff Staff { get; set; }

        [Key, Column(Order = 0)]
        public int StaffId { get; set; }

        #endregion
    }
}
