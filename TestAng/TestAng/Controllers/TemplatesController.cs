using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TestAng.Controllers
{
    public class TemplatesController : Controller
    {
        // GET: Templates
        public ActionResult CreateEmp()
        {
            return PartialView();
        }

        public ActionResult ViewEmpDetail()
        {
            return PartialView();
        }
    }
}