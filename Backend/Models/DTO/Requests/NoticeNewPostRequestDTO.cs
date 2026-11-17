using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Models.DTO.Requests
{
    public class NoticeNewPostRequestDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty; 
        public string Text {  get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime DueDate { get; set; }
        public bool IsImportant { get; set; }
    }
}
