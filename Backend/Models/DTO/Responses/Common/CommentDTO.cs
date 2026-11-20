using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Models.DTO.Responses.Common
{
    public class CommentDTO
    {
        public int Id { get; set; }
        public string CommentUserName { get; set; } = string.Empty;
        public string Text { get; set; } = string.Empty;
        public DateTime? CreatedAt { get; set; }
    }
}
