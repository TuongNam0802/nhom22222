
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
        public async Task<IActionResult> GetAll(int ? userId = null)
        {
            var list =  db.Spendings.AsQueryable();
            if(userId.HasValue){
                userId = Convert.ToInt32(userId);
                list = list.Where(k =>k.UserId == userId);
            }
            var data = await list.ToListAsync();
            // Tổng thu chi theo tháng
            var query = list.GroupBy(r => new { r.CreateTime.Year, r.CreateTime.Month, r.revenue_and_expenditure })
             .Select(g => new { g.Key.Year, g.Key.Month, Name = g.Key.revenue_and_expenditure, Tong = g.Sum(i => i.Money) })
             .OrderBy(x => x.Year).ThenBy(x => x.Month);

            var thongke1 = new List<thongke>();
            foreach (var item in query)
            {
                if (item.Name == 0)
                {
                    thongke1.Add(new thongke() { Year = item.Year, Month = item.Month, Name = item.Name, Thu = item.Tong });
                }
                else
                {
                    thongke1.Add(new thongke() { Year = item.Year, Month = item.Month, Name = item.Name, Chi = item.Tong });
                }
            }
            //  // Tổng thu chi của người dùng
            // var query = list.GroupBy(s =>s.Spending.revenue_and_expenditure)
            //                         .Select( s => new {Name = s.Key ,Tổngthuchi =s.Sum( i =>i.Spending.Money)});
            return Ok(thongke1);

        }


        class thongke
        {

            public int Name { get; set; }
            public int Thu { get; set; }
            public int Chi { get; set; }
            public int Year { get; set; }
            public int Month { get; set; }

        }

    }

}
