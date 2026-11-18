using Backend.Models.DTO.Responces.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Models.DTO.Responces
{
    public class TechnicalArticleDetailDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Text {  get; set; } =string.Empty;
        public string PostUserName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public bool IsBookmark { get; set; }
        public bool IsFavorite { get; set; }
        public int IsFavoriteCount { get; set; }
        public List<CommentDTO>? Comments { get; set; }
    }
}
