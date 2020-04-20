
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netcore1.Data;
using netcore1.Models;

namespace netcore1.Controllers
{
    //Tổng thu chi theo tháng
    [Route("api/spendingsum")]
    public class SpendingSumController : Controller
    {
        private readonly ApplicationDbContext db;

        public SpendingSumController(ApplicationDbContext dbContext)
        {
            this.db = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll(string search = null)
        {
            var list = await db.Spendings.ToListAsync();
            // Tổng thu chi theo tháng
            var query = list.GroupBy(r => new { r.CreateTime.Year, r.CreateTime.Month, r.revenue_and_expenditure })
             .Select(g => new { g.Key.Year, g.Key.Month, Name = g.Key.revenue_and_expenditure, Tong = g.Sum(i => i.Money) })
             .OrderBy(x => x.Year).ThenBy(x => x.Month);


            // var Thongke = new List<Thongke>();
            // foreach (var item in query)
            // {
            //     if (item.Name == 0)
            //     {
            //         Thongke.Add(new Thongke() { Tong = "thu", sum = item.Sum });
            //     }

            //     Thongke.Add(new Thongke() { name = "chi", sum = item.Sum });

            // }

            //  // Tổng thu chi của người dùng
            // var query = list.GroupBy(s =>s.Spending.revenue_and_expenditure)
            //                         .Select( s => new {Name = s.Key ,Tổngthuchi =s.Sum( i =>i.Spending.Money)});
            return Ok(query);

        }
    }

    // class Thongke
    // {
        
    //     public string name { get; set; }
    //     public int sum { get; set; }

    // }
}
