using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netcore1.Data;
using netcore1.Models;

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
        public async Task<IActionResult> GetSum()
        {
            var list =await db.Banks.ToListAsync();
            var query =  list.Sum(i => i.RedMoney);
            return Ok(query);
        }

    }
}
