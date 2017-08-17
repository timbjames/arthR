using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace arthr.Data.Migrations
{
    public partial class InitialDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MasterSite",
                columns: table => new
                {
                    MasterSiteId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    HasVAT = table.Column<bool>(nullable: false),
                    LiveBidMasterSiteId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MasterSite", x => x.MasterSiteId);
                });

            migrationBuilder.CreateTable(
                name: "Status",
                columns: table => new
                {
                    StatusId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    Glyphicon = table.Column<string>(nullable: true),
                    HexColor = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    ShowIcon = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Status", x => x.StatusId);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Created = table.Column<DateTime>(nullable: false),
                    Deleted = table.Column<bool>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    LastLogin = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    RequiresPasswordReset = table.Column<bool>(nullable: true),
                    Salt = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Project",
                columns: table => new
                {
                    ProjectId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AlreadyBilled = table.Column<bool>(nullable: false),
                    Completed = table.Column<bool>(nullable: false),
                    DateCompleted = table.Column<DateTime>(nullable: true),
                    Deadline = table.Column<DateTime>(nullable: true),
                    HideFromTimesheet = table.Column<bool>(nullable: true),
                    MasterSiteId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    OnGoing = table.Column<bool>(nullable: false),
                    PlannedStart = table.Column<DateTime>(nullable: false),
                    Quoted = table.Column<double>(nullable: false),
                    StatusId = table.Column<int>(nullable: true),
                    Username = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Project", x => x.ProjectId);
                    table.ForeignKey(
                        name: "FK_Project_MasterSite_MasterSiteId",
                        column: x => x.MasterSiteId,
                        principalTable: "MasterSite",
                        principalColumn: "MasterSiteId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Project_Status_StatusId",
                        column: x => x.StatusId,
                        principalTable: "Status",
                        principalColumn: "StatusId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TodoItem",
                columns: table => new
                {
                    TodoItemId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Deadline = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    IsDone = table.Column<bool>(nullable: false),
                    MasterSiteId = table.Column<int>(nullable: false),
                    Priority = table.Column<int>(nullable: false),
                    StatusId = table.Column<int>(nullable: false),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoItem", x => x.TodoItemId);
                    table.ForeignKey(
                        name: "FK_TodoItem_MasterSite_MasterSiteId",
                        column: x => x.MasterSiteId,
                        principalTable: "MasterSite",
                        principalColumn: "MasterSiteId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TodoItem_Status_StatusId",
                        column: x => x.StatusId,
                        principalTable: "Status",
                        principalColumn: "StatusId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Staff",
                columns: table => new
                {
                    StaffId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Staff", x => x.StaffId);
                    table.ForeignKey(
                        name: "FK_Staff_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnthRTask",
                columns: table => new
                {
                    AnthRTaskId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AgreedWith = table.Column<string>(nullable: true),
                    DateCompleted = table.Column<DateTime>(nullable: true),
                    Deadline = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    HideFromTimesheet = table.Column<bool>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    PlannedStart = table.Column<DateTime>(nullable: false),
                    Priority = table.Column<int>(nullable: false),
                    ProjectId = table.Column<int>(nullable: false),
                    RequestedBy = table.Column<string>(nullable: true),
                    StatusId = table.Column<int>(nullable: false),
                    Username = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnthRTask", x => x.AnthRTaskId);
                    table.ForeignKey(
                        name: "FK_AnthRTask_Project_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Project",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AnthRTask_Status_StatusId",
                        column: x => x.StatusId,
                        principalTable: "Status",
                        principalColumn: "StatusId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StaffOnProjects",
                columns: table => new
                {
                    StaffOnProjectsId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ProjectId = table.Column<int>(nullable: false),
                    StaffId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StaffOnProjects", x => x.StaffOnProjectsId);
                    table.ForeignKey(
                        name: "FK_StaffOnProjects_Project_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Project",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StaffOnProjects_Staff_StaffId",
                        column: x => x.StaffId,
                        principalTable: "Staff",
                        principalColumn: "StaffId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Note",
                columns: table => new
                {
                    NoteId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Content = table.Column<string>(nullable: true),
                    StaffId = table.Column<int>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Note", x => x.NoteId);
                    table.ForeignKey(
                        name: "FK_Note_Staff_StaffId",
                        column: x => x.StaffId,
                        principalTable: "Staff",
                        principalColumn: "StaffId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Timesheet",
                columns: table => new
                {
                    TimesheetId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AlreadyBilled = table.Column<bool>(nullable: false),
                    AnthRTaskId = table.Column<int>(nullable: false),
                    DateRecorded = table.Column<DateTime>(nullable: true),
                    HideFromTimesheet = table.Column<bool>(nullable: true),
                    HourlyRate = table.Column<int>(nullable: false),
                    Hours = table.Column<int>(nullable: false),
                    Mins = table.Column<int>(nullable: false),
                    Quoted = table.Column<double>(nullable: false),
                    StaffId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Timesheet", x => x.TimesheetId);
                    table.ForeignKey(
                        name: "FK_Timesheet_AnthRTask_AnthRTaskId",
                        column: x => x.AnthRTaskId,
                        principalTable: "AnthRTask",
                        principalColumn: "AnthRTaskId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Timesheet_Staff_StaffId",
                        column: x => x.StaffId,
                        principalTable: "Staff",
                        principalColumn: "StaffId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StaffOnTask",
                columns: table => new
                {
                    StaffOnTaskId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AnthRTaskId = table.Column<int>(nullable: false),
                    StaffId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StaffOnTask", x => x.StaffOnTaskId);
                    table.ForeignKey(
                        name: "FK_StaffOnTask_AnthRTask_AnthRTaskId",
                        column: x => x.AnthRTaskId,
                        principalTable: "AnthRTask",
                        principalColumn: "AnthRTaskId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StaffOnTask_Staff_StaffId",
                        column: x => x.StaffId,
                        principalTable: "Staff",
                        principalColumn: "StaffId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnthRTask_ProjectId",
                table: "AnthRTask",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_AnthRTask_StatusId",
                table: "AnthRTask",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Timesheet_AnthRTaskId",
                table: "Timesheet",
                column: "AnthRTaskId");

            migrationBuilder.CreateIndex(
                name: "IX_Timesheet_StaffId",
                table: "Timesheet",
                column: "StaffId");

            migrationBuilder.CreateIndex(
                name: "IX_MasterSite_LiveBidMasterSiteId",
                table: "MasterSite",
                column: "LiveBidMasterSiteId");

            migrationBuilder.CreateIndex(
                name: "IX_Project_MasterSiteId",
                table: "Project",
                column: "MasterSiteId");

            migrationBuilder.CreateIndex(
                name: "IX_Project_StatusId",
                table: "Project",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Staff_UserId",
                table: "Staff",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_StaffOnProjects_ProjectId",
                table: "StaffOnProjects",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_StaffOnProjects_StaffId",
                table: "StaffOnProjects",
                column: "StaffId");

            migrationBuilder.CreateIndex(
                name: "IX_StaffOnTask_AnthRTaskId",
                table: "StaffOnTask",
                column: "AnthRTaskId");

            migrationBuilder.CreateIndex(
                name: "IX_StaffOnTask_StaffId",
                table: "StaffOnTask",
                column: "StaffId");

            migrationBuilder.CreateIndex(
                name: "IX_Note_StaffId",
                table: "Note",
                column: "StaffId");

            migrationBuilder.CreateIndex(
                name: "IX_TodoItem_MasterSiteId",
                table: "TodoItem",
                column: "MasterSiteId");

            migrationBuilder.CreateIndex(
                name: "IX_TodoItem_StatusId",
                table: "TodoItem",
                column: "StatusId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Timesheet");

            migrationBuilder.DropTable(
                name: "StaffOnProjects");

            migrationBuilder.DropTable(
                name: "StaffOnTask");

            migrationBuilder.DropTable(
                name: "Note");

            migrationBuilder.DropTable(
                name: "TodoItem");

            migrationBuilder.DropTable(
                name: "AnthRTask");

            migrationBuilder.DropTable(
                name: "Staff");

            migrationBuilder.DropTable(
                name: "Project");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "MasterSite");

            migrationBuilder.DropTable(
                name: "Status");
        }
    }
}
