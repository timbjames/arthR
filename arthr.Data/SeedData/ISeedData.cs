using arthr.Data.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace arthr.Data.SeedData
{
    public interface ISeedData
    {
        bool Seed(ArthRContext arthRContext);
    }
}
