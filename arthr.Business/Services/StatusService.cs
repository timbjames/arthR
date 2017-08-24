using arthr.Business.Core.Services;
using arthr.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using arthr.Models.Core;
using System.Threading.Tasks;
using arthr.Business.Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace arthr.Business.Services
{
    public class StatusService : BaseService, IStatusService
    {
        public StatusService(IBaseServiceBundle baseServiceBundle) : base(baseServiceBundle)
        {
        }

        public async Task<List<Status>> GetAsync()
        {
            return await Db.Status.ToListAsync();
        }
    }
}
