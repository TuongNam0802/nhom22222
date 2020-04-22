using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netcore1.Data;

namespace netcore1
{
    // Tổng số tiền có trong tài khoản ngân hàng
    [Route("api/banksum")]
    public class BankSumController : Controller
    {
        private readonly ApplicationDbContext db;
        public BankSumController(ApplicationDbContext dbContext)
        {
            this.db = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetSum(int ? userId = null)
        {

            var list = db.Banks.AsQueryable();
            if(userId.HasValue){
                userId = Convert.ToInt32(userId);
                list = list.Where(k =>k.UserId == userId);
            }
            var data = await list.ToListAsync();
            var query = data.Sum(i => i.RedMoney);
            return Ok(query);
        }

    }
}
