using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netcore1.Data;
using netcore1.Models;

namespace netcore1.Controllers
{
    [Route("api/spendings")]
    public class SpendingController : Controller
    {
        private readonly ApplicationDbContext db;

        public SpendingController(ApplicationDbContext dbContext)
        {
            this.db = dbContext;
        }
        [HttpGet]
        // public async Task<IActionResult> GetAll(string search = null)
        // {
        //      var list =await db.Sp.ToListAsync();
        //     return Ok(list);
        // }

          public async Task<IActionResult> GetAll(int ? userId = null)
        {
             var query = db.Spendings.AsQueryable();
            if(userId.HasValue)
            {// tồn tại userId
                userId = Convert.ToInt32(userId);
                query = query.Where(item =>item.UserId== userId);
            }
                var data = await query.ToListAsync();
                return Ok(data);
        }
          [HttpGet("{id}")]
          public async Task<IActionResult> GetSpending(int id)
        { 
            var query1 = await db.Spendings.FindAsync(id);
            if(query1 != null)
            {
                return Ok(query1);
            }
            return NotFound();
        }
         [HttpPost]
        public async Task<IActionResult> Create([FromBody] Spending model,int ? userId = null)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Dữ liệu sai");
            }
            userId = Convert.ToInt32(userId);
            model.UserId = userId.Value;
            model.CreateTime= DateTime.Now;
            db.Spendings.Add(model);
            await db.SaveChangesAsync();

            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Spending model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Dữ liệu sai");
            }

            var found = await db.Spendings.FindAsync(id);
            if (found != null)
            {
                found.UserId= model.UserId;
                found.Purpose = model.Purpose;
                found.Money =model.Money;
                found.CreateTime= model.CreateTime;
                await db.SaveChangesAsync();

                return Ok(found);
            }

            return NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delette(int id)
        {
            var found = await db.Spendings.FindAsync(id);
            if (found != null)
            {
                db.Spendings.Remove(found);
                await db.SaveChangesAsync();

                return Ok(new { success = true });
            }

            return NotFound();
        }
    }
}