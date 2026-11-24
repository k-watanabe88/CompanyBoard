using Backend.Models.DTO.Requests;
using Backend.Models.DTO.Requests.Common;
using Backend.Models.DTO.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces.Service
{
    public interface ITechnicalOutputService
    {
        Task<List<TechnicalOutputResponseDTO>> GetOutputList(int userId);
        Task<TechnicalOutputDetailResponseDTO?> GetTechnicalOutputDetail(int userId, int postId);
        Task<bool> ToggleTechnicalOutputFavorite(int userId, int postId);
        Task AddTechnicalOutput(TechnicalOutputNewPostRequestDTO request, int userId);
        Task AddTechnicalOutputComment(CommentRequestDTO request, int userId);
        Task DeleteTechnicalOutput(DeletePostRequestDTO request);
    }
}
