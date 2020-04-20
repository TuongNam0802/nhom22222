using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using netcore1.Models;

namespace netcore1.Models
{
    // chi tiết thu chi
    public class Spending_Detail
    {
        [Key]
        public int Id{get;set;}
        public DateTime DateTime{get;set;}
        [MaxLength(100)]
        public string Note {get;set;}
       
    }
}