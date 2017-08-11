using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace arthr.Data.Core
{
    public class ArthRContext : DbContext
    {

        public DbSet<Todo.TodoItem> TodoItems { get; set; }
        public DbSet<MasterSite> MasterSite { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<Staff> Staff { get; set; }
        public DbSet<arTask.AnthRTask> AnthRTask { get; set; }
        public DbSet<StaffOnTask> StaffOnTask { get; set; }
        public DbSet<Notes.Note> Note { get; set; }
        public DbSet<Status> Status { get; set; }

        public ArthRContext(DbContextOptions<ArthRContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            //modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

        }

        public DbSet<StaffOnProjects> StaffOnProjects { get; set; }

        public DbSet<arTask.Timesheet> Timesheets { get; set; }

    }
}
