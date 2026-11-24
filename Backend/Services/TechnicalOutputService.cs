using Backend.Interfaces.DAO;
using Backend.Interfaces.Service;
using Backend.Models.DB;
using Backend.Models.DTO.Requests;
using Backend.Models.DTO.Requests.Common;
using Backend.Models.DTO.Responses;
using Backend.Repositories.DAO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class TechnicalOutputService: ITechnicalOutputService
    {
        private readonly ITechnicalOutputDAO _TechnicalOutputDAO;

        public TechnicalOutputService(ITechnicalOutputDAO TechnicalOutputDAO)
        {
            _TechnicalOutputDAO = TechnicalOutputDAO;
        }

        public async Task<List<TechnicalOutputResponseDTO>> GetOutputList(int userId)
        {
            var outputList = await _TechnicalOutputDAO.GetOutputList(userId);
            return outputList;
        }

        public async Task<TechnicalOutputDetailResponseDTO?> GetTechnicalOutputDetail(int userId, int postId)
        {
            var OutputDetail = await _TechnicalOutputDAO.GetTechnicalOutputDetail(userId, postId);
            return OutputDetail;
        }

        public async Task<bool> ToggleTechnicalOutputFavorite(int userId, int postId)
        {
            var result = await _TechnicalOutputDAO.ToggleTechnicalOutputFavorite(userId, postId);
            return result;
        }

        public async Task AddTechnicalOutput(TechnicalOutputNewPostRequestDTO request, int userId)
        {
            var technicalOutputPostInfo = new TechnicalOutputPost
            {
                Title = request.Title,
                Text = request.Text,
                CreatedAt = DateTime.Now,
                UserId = userId
            };
            await _TechnicalOutputDAO.AddTechnicalOutput(technicalOutputPostInfo);
        }

        public async Task AddTechnicalOutputComment(CommentRequestDTO request, int userId)
        {
            var technicalOutputCommentInfo = new TechnicalOutputComment
            {
                PostId = request.PostId,
                Text = request.Text,
                CreatedAt = DateTime.Now,
                UserId = userId
            };
            await _TechnicalOutputDAO.AddTechnicalOutputComment(technicalOutputCommentInfo);
        }

        public async Task DeleteTechnicalOutput(DeletePostRequestDTO request)
        {
            await _TechnicalOutputDAO.DeleteTechnicalOutputFavorites(request.PostId);
            await _TechnicalOutputDAO.DeleteTechnicalOutputComments(request.PostId);
            await _TechnicalOutputDAO.DeleteTechnicalOutputPost(request.PostId);
        }
    }
}
