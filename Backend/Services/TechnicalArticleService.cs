using Backend.Interfaces.DAO;
using Backend.Interfaces.Service;
using Backend.Models.DTO.Responces;
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
    }
}
