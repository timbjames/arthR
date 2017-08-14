namespace arthr.Data.Core
{
    #region Usings

    using Utils.Attributes;

    #endregion

    [DbEntity]
    public class StaffOnProjects
    {
        #region Properties

        public virtual Project Project { get; set; }

        public int ProjectId { get; set; }

        public virtual Staff Staff { get; set; }
        public int StaffId { get; set; }

        public long StaffOnProjectsId { get; set; }

        #endregion
    }
}
