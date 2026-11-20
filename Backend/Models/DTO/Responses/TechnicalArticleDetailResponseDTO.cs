using Backend.Models.DTO.Responses.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Models.DTO.Responses
{
    public class TechnicalArticleDetailResponseDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Text {  get; set; } =string.Empty;
        public string PostUserName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public bool IsBookmark { get; set; }
        public bool IsFavorite { get; set; }
        public int IsFavoriteCount { get; set; }
        
        required
        public List<CommentDTO> Comments { get; set; }
    }
}
