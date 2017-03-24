using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.ModelBinding;

namespace TestAng.Controllers
{
    public class ValuesController : ApiController
    {
        static List<EmployeeList> lstEmployee = new List<EmployeeList>();
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void SaveData([FromBody] List<EmployeeList> empSalary)
        {
            lstEmployee = empSalary;
        }

        public EmployeeList GetAllData([FromBody]EmployeeList emp)
        {
            return lstEmployee.Where(x=>x.Id== emp.Id).FirstOrDefault();
        }



        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }

    public class EmployeeList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Salary { get; set; }
    }
}
