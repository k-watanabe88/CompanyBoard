using Backend.Models.DTO.Responses;
using Backend.Models.DTO.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces.Service
{
    public interface ITechnicalArticleService
    {
        Task<List<TechnicalArticleListResponseDTO>> GetArticleList(int userId);
        Task<TechnicalArticleDetailResponseDTO?> GetTechnicalArticleDetail(int userId, int postId);
        Task<bool> ToggleTechnicalArticleBookmark(int userId, int postId);
        Task<bool> ToggleTechnicalArticleFavorite(int userId, int postId);
        Task AddTechnicalArticle(TechnicalArticleNewPostRequestDTO request, int userId);
    }
}
