using Backend.Models.DTO.Responces;
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
    }
}
