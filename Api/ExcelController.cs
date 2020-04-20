using System;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netcore1.Data;
using netcore1.Models;
using OfficeOpenXml;
using OfficeOpenXml.Style;

namespace netcore1.Controllers
{
    // in ra bản excel
    [Route("api/excel")]
    public class ExcelController : ControllerBase
    {
        private readonly ApplicationDbContext db;
        public ExcelController(ApplicationDbContext dbContext)
        {
            this.db = dbContext;
        }
        [HttpGet]
        public IActionResult Export()
        {
            var data = db.Spendings.ToList();

            var query = data.GroupBy(r => new { r.CreateTime.Year, r.CreateTime.Month, r.revenue_and_expenditure })
             .Select(g => new { Year = g.Key.Year, Month = g.Key.Month, Name = g.Key.revenue_and_expenditure, Tổngthuchi = g.Sum(i => i.Money) })
             .OrderBy(x => x.Year).ThenBy(x => x.Month);
            var stream = new MemoryStream();

            using (var package = new ExcelPackage(stream))
            {
                var sheet = package.Workbook.Worksheets.Add("Spending_Detail");

                using (var range = sheet.Cells["A:N"])
                {

                    range.Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;

                }
                sheet.Cells[1, 1].Value = "Mã chi tiêu";
                sheet.Cells[1, 2].Value = "Nội dung chi tiêu";
                sheet.Cells[1, 3].Value = "Số tiền chi tiêu";
                sheet.Cells[1, 4].Value = "Thời gian";
                sheet.Cells[1, 5].Value = "Thu hay chi";


                int rowIdx = 2;
                foreach (var item in data)
                {
                    sheet.Cells[rowIdx, 1].Value = item.Id;
                    sheet.Cells[rowIdx, 2].Value = item.Purpose;
                    sheet.Cells[rowIdx, 3].Value = item.Money;
                    sheet.Cells[rowIdx, 3].Style.Numberformat.Format = "$#,##";
                    sheet.Cells[rowIdx, 4].Value = item.CreateTime;
                    sheet.Cells[rowIdx, 4].Style.Numberformat.Format = ("MM/dd/yyyy HH:mm:ss");
                    sheet.Cells[rowIdx + 1, 1].Value = "";
                    sheet.Cells[rowIdx + 2, 1].Value = "Tổng thu chi theo tháng";

                    sheet.Cells[1, 1, 1, 4].AutoFitColumns(25);

                    if (item.revenue_and_expenditure == 0)
                    {
                        sheet.Cells[rowIdx, 5].Value = "Chi";
                    }
                    else
                    {
                        sheet.Cells[rowIdx, 5].Value = "Thu";
                    }

                    if (item.revenue_and_expenditure == 0)
                    {
                        using (var range = sheet.Cells[rowIdx, 1, rowIdx, 10])
                        {
                            range.Style.Font.Color.SetColor((OfficeOpenXml.Style.ExcelIndexedColor)ConsoleColor.Red);
                        }
                    }

                    rowIdx++;
                }
                foreach (var item1 in query)
                {

                    sheet.Cells[rowIdx + 3, 3, rowIdx + 3, 5].Style.Numberformat.Format = "$#,##";
                    sheet.Cells[rowIdx + 3, 1].Value = "Tháng " + item1.Month + " Năm " + item1.Year;
                    if (item1.Name == 1)
                    {

                        sheet.Cells[rowIdx + 3, 2].Value = "Số tiền kiếm được";
                        sheet.Cells[rowIdx + 3, 3].Value = item1.Tổngthuchi;

                    }
                    else
                    {

                        sheet.Cells[rowIdx + 3, 2].Value = "Số tiền chi tiêu";
                        sheet.Cells[rowIdx + 3, 3].Value = item1.Tổngthuchi;
                        using (var range = sheet.Cells[rowIdx + 3, 1, rowIdx + 3, 10])
                        {
                            range.Style.Font.Color.SetColor((OfficeOpenXml.Style.ExcelIndexedColor)ConsoleColor.Red);
                        }

                    }

                    rowIdx++;
                }

                package.Save();
            }

            stream.Position = 0;

            var fileName = $"Spending_Detail_{System.DateTime.Now.ToString("yyyyMMddHHmmss")}.xlsx";
            return File(stream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);
        }
        public IActionResult Index()
        {
            return View();
        }

        private IActionResult View()
        {
            throw new NotImplementedException();
        }
    }
}