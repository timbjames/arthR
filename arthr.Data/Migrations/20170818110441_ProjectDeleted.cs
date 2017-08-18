using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace arthr.Data.Migrations
{
    public partial class ProjectDeleted : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "Project",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "Project");
        }
    }
}
