using Backend.Models.DTO.Responses;
using Backend.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces.DAO
{
    public interface ITechnicalArticleDAO
    {
        Task<List<TechnicalArticleListResponseDTO>> GetArticleList(int userId);
        Task<TechnicalArticleDetailResponseDTO?> GetTechnicalArticleDetail(int userId,int postId);
        Task<bool> ToggleTechnicalArticleBookmark(int userId, int postId);
        Task<bool> ToggleTechnicalArticleFavorite(int userId, int postId);
        Task AddTechnicalArticle(TechnicalArticlePost technicalArticlePost);
    }
}
