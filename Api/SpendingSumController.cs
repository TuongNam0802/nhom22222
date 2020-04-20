
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_new_app.Data;
using my_new_app.Models;

namespace my_new_app.Controllers
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
            var list = await db.Spending_Details.Select(item => new
            {
                item.Id,
                item.CreateTime,
                item.Note,
                Spending = new
                {
                    item.Spending.Id,
                    item.Spending.Money,
                    item.Spending.Purpose,
                    item.Spending.revenue_and_expenditure
                }
            }).ToListAsync();
            // Tổng thu chi theo tháng
            var query = list.GroupBy(r => new { r.CreateTime.Year, r.CreateTime.Month, r.Spending.revenue_and_expenditure })
             .Select(g => new { g.Key.Year, g.Key.Month, Name = g.Key.revenue_and_expenditure, Tổngthuchi = g.Sum(i => i.Spending.Money)})
             .OrderBy(x => x.Year).ThenBy(x => x.Month);

            //  // Tổng thu chi của người dùng
            // var query = list.GroupBy(s =>s.Spending.revenue_and_expenditure)
            //                         .Select( s => new {Name = s.Key ,Tổngthuchi =s.Sum( i =>i.Spending.Money)});
            return Ok(query);



        }
    }
}
