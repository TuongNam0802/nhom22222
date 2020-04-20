using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace netcore1.Models
{
    public class Spending 
    {
        [Key]
        public int Id{get;set;}
        [MaxLength(50)]
        public string Purpose{get;set;}
        public int Money{get;set;}
        public int revenue_and_expenditure{get;set;}
        // 1 là thu, 0 là chi
         public int Status {get;set;}
        //tiền mặt hay chuyển khoản( int  0/1)
        // 0 là tiền mặt --- 1 là chuyển khoản
         public int UserId{get;set;}
        [ForeignKey("UserId")]
        public virtual ApplicationUser ApplicationUser { get;set; }
       
        public int BankId{get;set;}

        [ForeignKey("BankId")]
        public virtual Bank Bank { get;set; }
        public int Spd_DetailId {get;set;}

        [ForeignKey("Spd_DetailId")]
        public virtual Spending_Detail Spending_Details { get;set; }
        //public ICollection<Spending_Detail> Spending_Details { get;set; }
    //   public DateTime DateTime { get; internal set; }
        //  public List<Spending_Detail> OtherSpending {set; get;}

    }
}