namespace arthr.Models.Bug
{
    public class Item
    {
        #region Properties

        public int Id { get; set; }
        public int IssueId { get; set; }
        public int ProjectId { get; set; }
        public bool RaisedTask { get; set; }
        public int TaskId { get; set; }
        public string Title { get; set; }

        #endregion
    }
}
