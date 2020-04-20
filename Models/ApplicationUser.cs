using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using netcore1.Data;

namespace netcore1.Models
{
    public class ApplicationUser : IdentityUser<int>
    {
        [MaxLength(50)]
        public string FullName { get; set; }

        [MaxLength(200)]
        public string Address { get; set; }
        [MaxLength(8)]
        public string Password{get;set;}
        public ICollection<Bank> Banks { get;set; }
        public ICollection<Spending> Spendings { get;set; }
    }

    public class Role : IdentityRole<int>
    {
        public virtual ICollection<UserRole> Users { get; set; }

        public virtual ICollection<IdentityRoleClaim<int>> Claims { get; set; }
    }

    public class UserRole : IdentityUserRole<int>
    {
        [ForeignKey("RoleId")]
        public virtual Role Role { get; set; }

        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }
     //   public ICollection<Spending_Detail> Spending_Details { get;set; }
    }

    /* user and role stores */
    public class ApplicationUserStore : UserStore<ApplicationUser, Role, ApplicationDbContext, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityUserToken<int>, IdentityRoleClaim<int>>
    {
        public ApplicationUserStore(ApplicationDbContext db, IdentityErrorDescriber describer = null) : base(db, describer) { }
    }

    public class ApplicationRoleStore : RoleStore<Role, ApplicationDbContext, int, UserRole, IdentityRoleClaim<int>>
    {
        public ApplicationRoleStore(ApplicationDbContext db, IdentityErrorDescriber describer = null) : base(db, describer)
        {

        }
    }
}