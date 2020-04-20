using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netcore1.Data;
using netcore1.Models;

namespace my_new_app
{
    [Route("api/banks")]
    public class BankController :Controller
    {
        private readonly ApplicationDbContext db;
        public BankController(ApplicationDbContext dbContext)
        {
            this.db=dbContext;
        }
          [HttpGet]
        public async Task<IActionResult> GetAll(int ? userId = null)
        { 
            var query = db.Banks.AsQueryable();
            if(userId.HasValue)
            {// tồn tại userId
                userId = Convert.ToInt32(userId);
                query = query.Where(item =>item.UserId== userId);
            }
                var data = await query.ToListAsync();
                return Ok(data);
        }
          [HttpGet("{id}")]
          public async Task<IActionResult> GetBankItem(int id)
        { 
            var query1 = await db.Banks.FirstOrDefaultAsync(m => m.Id == id);
            if(query1 != null)
            {
                return Ok(query1);
            }
            return NotFound();
        }
         [HttpPost]
        public async Task<IActionResult> Create([FromBody] Bank model)
        {
            if (!ModelState.IsValid)// bắt lỗi string
            {
                return BadRequest("Dữ liệu không chuẩn");
            }
            db.Banks.Add(model);
            await db.SaveChangesAsync();

            return Ok(model);
        }
          [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Bank model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Dữ liệu không chuẩn");
            }

            var found = await db.Banks.FindAsync(id);
            if (found != null)
            {
                found.BankName = model.BankName;
                found.RedMoney = model.RedMoney;
                found.UserId = model.UserId;
                await db.SaveChangesAsync();

                return Ok(found);
            }

            return NotFound();
        }
         [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var found = await db.Banks.FindAsync(id);
            if (found != null)
            {
                db.Banks.Remove(found);
                await db.SaveChangesAsync();

                return Ok(new { success = true });
            }

            return NotFound();
        }
         
    }
}
        