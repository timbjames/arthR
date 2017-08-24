using arthr.Models.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace arthr.Business.Interfaces
{
    public interface IStatusService
    {
        Task<List<Status>> GetAsync();
    }
}
