﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arthr.Data.Core
{
    public class MasterSiteEditModel
    {
        public int MasterSiteId { get; set; }
        public string Name { get; set; }
        public bool HasVAT { get; set; }
        public int LiveBidMasterSiteId { get; set; }
    }
}
