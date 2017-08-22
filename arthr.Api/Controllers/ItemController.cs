using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using arthr.Models.Core;
using arthr.Utils.Attributes;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace arthr.Api.Controllers
{
    [Route("api/[controller]")]
    public class ItemController : BaseController
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpPost, Route("/api/item/dosomething"), ReturnType(typeof(Person))]
        public async Task<IActionResult> DoSomething([FromBody]Person person)
        {
            return Ok(person);
        }
    }
}
