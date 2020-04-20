using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netcore1.Data;
using netcore1.Models;

namespace my_new_app.Controllers
{
    [Route("api/spending_details")]
    public class Spending_DetailController : Controller
    {
        private readonly ApplicationDbContext db;

        public Spending_DetailController(ApplicationDbContext dbContext)
        {
            this.db = dbContext;
        }
        // [HttpGet]
        // public async Task<IActionResult> GetAll(string search = null)
        // {
            // var list =await db.Spending_Details.Select(item => new{
            //     item.Id,
            //     item.BankId,
            //     item.Note,
            //     item.SpendingId,
            //     item.Status,
            //     item.DateTime,
            //     Bank =new {
            //         item.Bank.Id,
            //         item.Bank.BankName,
            //         item.Bank.RedMoney
            //     },
            //     ApplicationUser = new {
            //         item.ApplicationUser.Id,
            //         item.ApplicationUser.UserName,
            //         item.ApplicationUser.FullName,
            //         item.ApplicationUser.Password,
            //         item.ApplicationUser.Address
            //     },
            //     Spending = new  {
            //         item.Spending.Id,
            //         item.Spending.Money,
            //         item.Spending.Purpose,
            //         item.Spending.revenue_and_expenditure
            //     }
        //     }).ToListAsync();
        //     return Ok(list);
        // }
          [HttpGet("{id}")]
          public async Task<IActionResult> GetSpending_Details(int id)
        { 
            var query1 = await db.Spending_Details.FirstOrDefaultAsync(m => m.Id == id);
            if(query1 != null)
            {
                return Ok(query1);
            }
            return NotFound();
        }
        
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Spending_Detail model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Dữ liệu sai");
            }
            model.DateTime = DateTime.Now;
            db.Spending_Details.Add(model);
            await db.SaveChangesAsync();

            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Spending_Detail model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Dữ liệu sai");
            }

            var found = await db.Spending_Details.FindAsync(id);
            if (found != null)
            {
                found.Note = model.Note;
                
                await db.SaveChangesAsync();

                return Ok(found);
            }

            return NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delette(int id)
        {
            var found = await db.Spending_Details.FindAsync(id);
            if (found != null)
            {
                db.Spending_Details.Remove(found);
                await db.SaveChangesAsync();

                return Ok(new { success = true });
            }

            return NotFound();
        }
    }
}