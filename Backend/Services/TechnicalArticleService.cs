using Backend.Interfaces.DAO;
using Backend.Interfaces.Service;
using Backend.Models.DTO.Responses;
using Backend.Models.DTO.Requests;
using Backend.Models.DTO.Requests.Common;
using Backend.Models.DB;
using Backend.Repositories.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class TechnicalArticleService : ITechnicalArticleService
    {
        private readonly ITechnicalArticleDAO _TechnicalArticleDAO;

        public TechnicalArticleService(ITechnicalArticleDAO TechnicalArticleDAO)
        {
            _TechnicalArticleDAO = TechnicalArticleDAO;
        }

        public async Task<List<TechnicalArticleListResponseDTO>> GetArticleList(int userId)
        {
            var articleList = await _TechnicalArticleDAO.GetArticleList(userId);
            return articleList;
        }

        public async Task<TechnicalArticleDetailResponseDTO?> GetTechnicalArticleDetail(int userId, int postId)
        {
            var articleDetail = await _TechnicalArticleDAO.GetTechnicalArticleDetail(userId, postId);
            return articleDetail;
        }

        public async Task<bool> ToggleTechnicalArticleBookmark(int userId, int postId)
        {
            var result = await _TechnicalArticleDAO.ToggleTechnicalArticleBookmark(userId, postId);
            return result;
        }

        public async Task<bool> ToggleTechnicalArticleFavorite(int userId, int postId)
        {
            var result = await _TechnicalArticleDAO.ToggleTechnicalArticleFavorite(userId, postId);
            return result;
        }

        public async Task AddTechnicalArticle(TechnicalArticleNewPostRequestDTO request, int userId)
        {
            var technicalArticlePostInfo = new TechnicalArticlePost
            {
                Title = request.Title,
                Text = request.Text,
                CreatedAt = DateTime.Now,
                UserId = userId
            };
            await _TechnicalArticleDAO.AddTechnicalArticle(technicalArticlePostInfo);
        }

        public async Task AddTechnicalArticleComment(CommentRequestDTO request, int userId)
        {
            var technicalArticleCommentInfo = new TechnicalArticleComment
            {
                PostId = request.PostId,
                Text = request.Text,
                CreatedAt = DateTime.Now,
                UserId = userId
            };
            await _TechnicalArticleDAO.AddTechnicalArticleComment(technicalArticleCommentInfo);
        }

        public async Task DeleteTechnicalArticle(DeletePostRequestDTO request)
        {
            await _TechnicalArticleDAO. DeleteTechnicalArticleBookmarks(request.PostId);
            await _TechnicalArticleDAO. DeleteTechnicalArticleFavorites(request.PostId);
            await _TechnicalArticleDAO. DeleteTechnicalArticleComments(request.PostId);
            await _TechnicalArticleDAO. DeleteTechnicalArticlePost(request.PostId);
        }
    }
}
