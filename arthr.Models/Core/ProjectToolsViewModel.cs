namespace arthr.Models.Core
{
    #region Usings

    using System.Collections.Generic;

    #endregion

    public sealed class ProjectToolsViewModel
    {
        #region Properties

        public IEnumerable<MasterSite> MasterSites { get; set; }
        public IEnumerable<Staff> Staff { get; set; }

        #endregion
    }
}
