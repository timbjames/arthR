namespace arthr.Data.Core
{
    #region Usings

    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using Microsoft.EntityFrameworkCore.Metadata.Internal;
    using Models.arTask;
    using Models.Core;
    using Models.Notes;
    using Models.Todo;

    #endregion

    public sealed class ArthRContext : DbContext
    {
        #region Constructors

        public ArthRContext()
        {
        }

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

        public  DbSet<User> Users { get; set; }

        #endregion

        #region Protected Methods

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=KFSZB05\sqlexpress;Database=arthr1;Trusted_Connection=True;MultipleActiveResultSets=true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            foreach (IMutableEntityType entity in modelBuilder.Model.GetEntityTypes())
            {
                entity.Relational().TableName = entity.DisplayName();
            }

            modelBuilder.Entity<AnthRTask>().HasIndex(x => x.ProjectId);
            modelBuilder.Entity<AnthRTask>().HasIndex(x => x.StatusId);

            modelBuilder.Entity<MasterSite>().HasIndex(x => x.LiveBidMasterSiteId);

            modelBuilder.Entity<Note>().HasIndex(x => x.StaffId);

            modelBuilder.Entity<Project>().HasIndex(x => x.MasterSiteId);

            modelBuilder.Entity<Staff>().HasIndex(x => x.UserId);

            modelBuilder.Entity<StaffOnProjects>().HasIndex(x => x.ProjectId);
            modelBuilder.Entity<StaffOnProjects>().HasIndex(x => x.StaffId);

            modelBuilder.Entity<StaffOnTask>().HasIndex(x => x.AnthRTaskId);
            modelBuilder.Entity<StaffOnTask>().HasIndex(x => x.StaffId);

            modelBuilder.Entity<Timesheet>().HasIndex(x => x.AnthRTaskId);
            modelBuilder.Entity<Timesheet>().HasIndex(x => x.StaffId);

            modelBuilder.Entity<TodoItem>().HasIndex(x => x.MasterSiteId);
            modelBuilder.Entity<TodoItem>().HasIndex(x => x.StatusId);
        }

        #endregion
    }
}
