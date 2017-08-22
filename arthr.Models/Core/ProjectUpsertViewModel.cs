namespace arthr.Models.Core
{
    #region Usings

    #endregion

    public sealed class ProjectUpsertViewModel
    {
        #region Properties

        public Project Model { get; set; }

        public ProjectToolsViewModel Tools { get; set; }

        #endregion
    }
}
