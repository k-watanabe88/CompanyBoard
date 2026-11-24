using Backend.Models.DB;
using Backend.Models.DTO.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces.DAO
{
    public interface ITechnicalOutputDAO
    {
        Task<List<TechnicalOutputResponseDTO>> GetOutputList(int userId);
        Task<TechnicalOutputDetailResponseDTO?> GetTechnicalOutputDetail(int userId, int postId);
        Task<bool> ToggleTechnicalOutputFavorite(int userId, int postId);
        Task AddTechnicalOutput(TechnicalOutputPost technicalOutputPost);
        Task AddTechnicalOutputComment(TechnicalOutputComment technicalOutputComment);
        Task DeleteTechnicalOutputFavorites(int postId);
        Task DeleteTechnicalOutputComments(int postId);
        Task DeleteTechnicalOutputPost(int postId);
    }
}
