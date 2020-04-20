using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netcore1.Data;
using netcore1.Models;

namespace Netcore1.Controllers
{
     [Route("api/users")]
    public class AdminController : Controller
    {
        ApplicationDbContext dbContext;
        UserManager<ApplicationUser> userManager;
        RoleManager<Role> roleManager;

        public AdminController(ApplicationDbContext dbContext,
            UserManager<ApplicationUser> userManager, RoleManager<Role> roleManager)
        {
            this.dbContext = dbContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

         [HttpGet]
          public async Task<IActionResult> GetAll(string search = null)
        { 
            var query = dbContext.Users.AsQueryable();
            if(!string.IsNullOrWhiteSpace(search))//Cho biết một chuỗi được chỉ định là null, 
            //trống hay chỉ bao gồm các ký tự khoảng trắng.
            {
               query = query.Where(item=> item.UserName.Contains(search));
                // query = from i in User select User.UserName , Use
                // from word in words
                //             orderby word.Length
                //             select word;
            //         var roles = roleManager.Roles.Where(r =>
            //     r.Users.Any(u => u.UserId == user.Id)
            // ).Select(r => r.Name).ToList();


            }
            var list = await query.ToListAsync();
            return Ok(list);
        }

          [HttpGet("{id}")]
          public async Task<IActionResult>GeyUser(int id)
        { 
            //đầu vào là userID, ra là banks cỉa ID đó
            var query1 = await dbContext.Users.FindAsync(id);// lấy mảng User
            if(query1 != null) //khác null
            {
             
                return Ok(query1);
            }
            return NotFound();
        }
        

         [HttpPost]
        public async Task<IActionResult> CreateUsers([FromBody] ApplicationUser model)
        {
            if (!ModelState.IsValid)
            {
                var roleResult = ModelState.Select(x => x.Value.Errors)
                                            .Where(y => y.Count >0)
                                            .ToList();
                return BadRequest(roleResult);
            }
                var user = new ApplicationUser
                {
                    UserName = model.UserName,
                    Password = model.Password,
                    Email = model.Email,
                    FullName = model.FullName,
                    Address = model.Address
                };

                var result = await userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    return Ok(model);
                }
                return BadRequest("thêm user thất bại");
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditUser(int id , [FromBody] ApplicationUser user)
        {
             if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                       .Where(y => y.Count > 0)
                                       .ToList();
                return BadRequest(errors);
            }
              var found = await dbContext.Users.FindAsync(id);
            if (found != null)
            {
                found.FullName = user.FullName;
                found.Email = user.Email;
                found.Password = user.Password;
                found.FullName = user.FullName;
                found.Address = user.Address;
                await dbContext.SaveChangesAsync();

                return Ok(found);
            }
            return NotFound();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser (int id)
        {
             var found = await dbContext.Users.FindAsync(id);
            if (found != null)
            {
                dbContext.Users.Remove(found);
                await dbContext.SaveChangesAsync();

                return Ok(new { success = true });
            }

            return NotFound();
        }
    }
}