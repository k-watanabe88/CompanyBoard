using Backend.Models.DTO.Responces;
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
    }
}
