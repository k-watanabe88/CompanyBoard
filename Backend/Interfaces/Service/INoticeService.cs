using Backend.Models.DTO.Requests;
using Backend.Models.DTO.Responces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces.Service
{
    public interface INoticeService
    {
        Task<List<NoticeListResponseDTO>> GetNoticeList(int userId);

        Task<NoticeDetailResponseDTO?> GetNoticeDetail(int postId, int userId);
        Task<bool> NoticeCheck(int postId, int userId);
        Task NoticeNewPost(NoticeNewPostRequestDTO request, int userId);
    }
}
