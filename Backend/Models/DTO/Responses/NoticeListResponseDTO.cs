using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Models.DTO.Responses
{
    public class NoticeListResponseDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public bool IsImportant { get; set; }
        public bool IsChecked { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime DueDate { get; set; }

        public int CheckedCount { get; set; }
        public int UncheckedCount { get; set; }
    }
}
