using arthrData.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace arthrData.SeedData
{
    public interface ISeedData
    {
        bool Seed(ArthRContext arthRContext);
    }
}
