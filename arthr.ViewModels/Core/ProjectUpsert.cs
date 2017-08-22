using System;
using System.Collections.Generic;
using System.Text;

namespace arthr.ViewModels.Core
{
    using Models.Core;

    public sealed class ProjectUpsert
    {
        public Project Model { get; set; }

        public ProjectTools Tools { get; set; }
    }
}
