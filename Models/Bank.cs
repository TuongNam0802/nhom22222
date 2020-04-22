using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace netcore1.Models
{
    public class Bank
    {
        [Key]
        public int Id{get;set;}
        [MaxLength(50)]
        public string BankName{get;set;}
        public int RedMoney{get;set;}
        public int UserId{get;set;}
        [ForeignKey("UserId")]
        public virtual ApplicationUser ApplicationUsers { get;set; }
       public ICollection<Spending> Spendings{ get;set; }

        internal object Sum(Func<object, object> p)
        {
            throw new NotImplementedException();
        }
        //  public List<Spending_Detail> OtherSpenDetails {set; get;}
    }
}