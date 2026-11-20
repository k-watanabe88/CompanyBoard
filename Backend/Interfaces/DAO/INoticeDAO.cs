using Backend.Models.DB;
using Backend.Models.DTO.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces.DAO
{
    public interface INoticeDAO
    {
        Task<List<NoticeListResponseDTO>> GetNoticeList(int userId);
        Task<NoticeDetailResponseDTO?> GetNoticeDetail(int userId, int postId);
        Task<bool> NoticeCheck(int userId, int postId);
        Task NoticeNewPost(NoticePost noticePost);
    }
}
