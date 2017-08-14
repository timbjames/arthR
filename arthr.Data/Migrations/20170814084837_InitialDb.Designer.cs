using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using arthr.Data.Core;

namespace arthr.Data.Migrations
{
    [DbContext(typeof(ArthRContext))]
    [Migration("20170814084837_InitialDb")]
    partial class InitialDb
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("arthr.Data.arTask.AnthRTask", b =>
                {
                    b.Property<int>("AnthRTaskId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AgreedWith");

                    b.Property<DateTime?>("DateCompleted");

                    b.Property<DateTime>("Deadline");

                    b.Property<string>("Description");

                    b.Property<bool?>("HideFromTimesheet");

                    b.Property<string>("Name");

                    b.Property<DateTime>("PlannedStart");

                    b.Property<int>("Priority");

                    b.Property<int>("ProjectId");

                    b.Property<string>("RequestedBy");

                    b.Property<int>("StatusId");

                    b.Property<string>("Username");

                    b.HasKey("AnthRTaskId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("StatusId");

                    b.ToTable("AnthRTask");
                });

            modelBuilder.Entity("arthr.Data.arTask.Timesheet", b =>
                {
                    b.Property<int>("TimesheetId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AlreadyBilled");

                    b.Property<int>("AnthRTaskId");

                    b.Property<DateTime?>("DateRecorded");

                    b.Property<bool?>("HideFromTimesheet");

                    b.Property<int>("HourlyRate");

                    b.Property<int>("Hours");

                    b.Property<int>("Mins");

                    b.Property<double>("Quoted");

                    b.Property<int>("StaffId");

                    b.HasKey("TimesheetId");

                    b.HasIndex("AnthRTaskId");

                    b.HasIndex("StaffId");

                    b.ToTable("Timesheets");
                });

            modelBuilder.Entity("arthr.Data.Core.MasterSite", b =>
                {
                    b.Property<int>("MasterSiteId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("HasVAT");

                    b.Property<int>("LiveBidMasterSiteId");

                    b.Property<string>("Name");

                    b.HasKey("MasterSiteId");

                    b.HasIndex("LiveBidMasterSiteId");

                    b.ToTable("MasterSite");
                });

            modelBuilder.Entity("arthr.Data.Core.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AlreadyBilled");

                    b.Property<bool>("Completed");

                    b.Property<DateTime?>("DateCompleted");

                    b.Property<DateTime?>("Deadline");

                    b.Property<bool?>("HideFromTimesheet");

                    b.Property<int>("MasterSiteId");

                    b.Property<string>("Name");

                    b.Property<bool>("OnGoing");

                    b.Property<DateTime>("PlannedStart");

                    b.Property<double>("Quoted");

                    b.Property<int?>("StatusId");

                    b.Property<string>("Username");

                    b.HasKey("ProjectId");

                    b.HasIndex("MasterSiteId");

                    b.HasIndex("StatusId");

                    b.ToTable("Project");
                });

            modelBuilder.Entity("arthr.Data.Core.Staff", b =>
                {
                    b.Property<int>("StaffId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("Name");

                    b.Property<int>("UserId");

                    b.HasKey("StaffId");

                    b.HasIndex("UserId");

                    b.ToTable("Staff");
                });

            modelBuilder.Entity("arthr.Data.Core.StaffOnProjects", b =>
                {
                    b.Property<long>("StaffOnProjectsId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ProjectId");

                    b.Property<int>("StaffId");

                    b.HasKey("StaffOnProjectsId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("StaffId");

                    b.ToTable("StaffOnProjects");
                });

            modelBuilder.Entity("arthr.Data.Core.StaffOnTask", b =>
                {
                    b.Property<long>("StaffOnTaskId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AnthRTaskId");

                    b.Property<int>("StaffId");

                    b.HasKey("StaffOnTaskId");

                    b.HasIndex("AnthRTaskId");

                    b.HasIndex("StaffId");

                    b.ToTable("StaffOnTask");
                });

            modelBuilder.Entity("arthr.Data.Core.Status", b =>
                {
                    b.Property<int>("StatusId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Glyphicon");

                    b.Property<string>("HexColor");

                    b.Property<string>("Name");

                    b.Property<bool>("ShowIcon");

                    b.HasKey("StatusId");

                    b.ToTable("Status");
                });

            modelBuilder.Entity("arthr.Data.Core.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Created");

                    b.Property<bool?>("Deleted");

                    b.Property<string>("Email");

                    b.Property<DateTime>("LastLogin");

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.Property<string>("Username");

                    b.HasKey("UserId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("arthr.Data.Notes.Note", b =>
                {
                    b.Property<int>("NoteId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<int>("StaffId");

                    b.Property<string>("Title");

                    b.Property<string>("Username");

                    b.HasKey("NoteId");

                    b.HasIndex("StaffId");

                    b.ToTable("Note");
                });

            modelBuilder.Entity("arthr.Data.Todo.TodoItem", b =>
                {
                    b.Property<int>("TodoItemId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("Deadline");

                    b.Property<string>("Description");

                    b.Property<bool>("IsDone");

                    b.Property<int>("MasterSiteId");

                    b.Property<int>("Priority");

                    b.Property<int>("StatusId");

                    b.Property<string>("Title");

                    b.HasKey("TodoItemId");

                    b.HasIndex("MasterSiteId");

                    b.HasIndex("StatusId");

                    b.ToTable("TodoItems");
                });

            modelBuilder.Entity("arthr.Data.arTask.AnthRTask", b =>
                {
                    b.HasOne("arthr.Data.Core.Project", "Project")
                        .WithMany("Tasks")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("arthr.Data.Core.Status", "Status")
                        .WithMany("AnthRTasks")
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("arthr.Data.arTask.Timesheet", b =>
                {
                    b.HasOne("arthr.Data.arTask.AnthRTask", "AnthRTask")
                        .WithMany("Timesheet")
                        .HasForeignKey("AnthRTaskId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("arthr.Data.Core.Staff", "Staff")
                        .WithMany()
                        .HasForeignKey("StaffId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("arthr.Data.Core.Project", b =>
                {
                    b.HasOne("arthr.Data.Core.MasterSite", "MasterSite")
                        .WithMany("Projects")
                        .HasForeignKey("MasterSiteId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("arthr.Data.Core.Status")
                        .WithMany("Projects")
                        .HasForeignKey("StatusId");
                });

            modelBuilder.Entity("arthr.Data.Core.Staff", b =>
                {
                    b.HasOne("arthr.Data.Core.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("arthr.Data.Core.StaffOnProjects", b =>
                {
                    b.HasOne("arthr.Data.Core.Project", "Project")
                        .WithMany("StaffOnProjects")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("arthr.Data.Core.Staff", "Staff")
                        .WithMany("StaffOnProjects")
                        .HasForeignKey("StaffId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("arthr.Data.Core.StaffOnTask", b =>
                {
                    b.HasOne("arthr.Data.arTask.AnthRTask", "AnthRTask")
                        .WithMany("StaffOnTasks")
                        .HasForeignKey("AnthRTaskId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("arthr.Data.Core.Staff", "Staff")
                        .WithMany("StaffOnTasks")
                        .HasForeignKey("StaffId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("arthr.Data.Notes.Note", b =>
                {
                    b.HasOne("arthr.Data.Core.Staff", "Staff")
                        .WithMany("Notes")
                        .HasForeignKey("StaffId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("arthr.Data.Todo.TodoItem", b =>
                {
                    b.HasOne("arthr.Data.Core.MasterSite", "MasterSite")
                        .WithMany("TodoItems")
                        .HasForeignKey("MasterSiteId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("arthr.Data.Core.Status", "Status")
                        .WithMany("TodoItems")
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
