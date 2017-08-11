namespace arthr.Data.Core
{
    #region Usings

    using arTask;
    using Microsoft.EntityFrameworkCore;
    using Notes;
    using Todo;

    #endregion

    public class ArthRContext : DbContext
    {
        #region Constructors

        public ArthRContext(DbContextOptions<ArthRContext> options)
            : base(options)
        {
        }

        #endregion

        #region Properties

        public DbSet<AnthRTask> AnthRTask { get; set; }
        public DbSet<MasterSite> MasterSite { get; set; }
        public DbSet<Note> Note { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<Staff> Staff { get; set; }

        public DbSet<StaffOnProjects> StaffOnProjects { get; set; }
        public DbSet<StaffOnTask> StaffOnTask { get; set; }
        public DbSet<Status> Status { get; set; }

        public DbSet<Timesheet> Timesheets { get; set; }

        public DbSet<TodoItem> TodoItems { get; set; }

        #endregion

        #region Protected Methods

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        //    //modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

        //}

        #endregion
    }
}
