using Azure.Core;
using Backend.Interfaces.DAO;
using Backend.Interfaces.Service;
using Backend.Models.DB;
using Backend.Models.DTO.Requests;
using Backend.Models.DTO.Responces;
using Backend.Repositories.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class NoticeService : INoticeService
    {
        private readonly INoticeDAO _noticeDAO;

        public NoticeService(INoticeDAO NoticeDAO)
        {
            _noticeDAO = NoticeDAO;
        }

        /// <summary>
        /// ログインユーザー情報検索
        /// </summary>
        /// <param name="employeeId">社員番号</param>
        /// <param name="password">パスワード</param>
        /// <returns>ユーザー情報</returns>
        public async Task<List<NoticeListResponseDTO>> GetNoticeList(int userId)
        {
            var noticeList = await _noticeDAO.GetNoticeList(userId);
            return noticeList;
        }

        public async Task<NoticeDetailResponseDTO?> GetNoticeDetail(int postId, int userId)
        {
            var noticeDetail = await _noticeDAO.GetNoticeDetail(userId, postId);

            return noticeDetail;
        }
        public async Task<bool> NoticeCheck(int postId, int userId)
        {
            return await _noticeDAO.NoticeCheck(userId, postId);
        }
        public async Task NoticeNewPost(NoticeNewPostRequestDTO request,int userId)
        {
            var noticePost = new NoticePost
            {
                Title = request.Title,
                Text = request.Text,
                UserId = userId,
                CreatedAt = DateTime.Now,
                DueDate = request.DueDate,
                IsImportant = request.IsImportant
            };
            await _noticeDAO.NoticeNewPost(noticePost);
        }
    }
}
