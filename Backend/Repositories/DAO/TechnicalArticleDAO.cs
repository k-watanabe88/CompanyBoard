using Backend.Data;
using Backend.Interfaces.DAO;
using Backend.Models.DTO.Responces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Repositories.DAO
{
    public class TechnicalArticleDAO : ITechnicalArticleDAO
    {
        private readonly CompanyBoardContext _context;

        public TechnicalArticleDAO(CompanyBoardContext context)
        {
            _context = context;
        }
        public async Task<List<TechnicalArticleListResponseDTO>> GetArticleList(int userId)
        {
            return await _context.TechnicalArticlePosts
        .OrderByDescending(n => n.CreatedAt)
        .Select(n => new TechnicalArticleListResponseDTO
        {
            Id = n.Id,
            Title = n.Title,
            CreatedAt = n.CreatedAt,

            PostUserName = (
    from user in _context.Users
    join post in _context.TechnicalArticlePosts
        on user.Id equals post.UserId
    where post.Id == n.Id
    select user.Name
).FirstOrDefault(),

            // ログインユーザーがブックマーク済みか
                       IsBookmark = _context.TechnicalArticleBookmarks.Any(nc =>
                nc.PostId == n.Id &&
                nc.UserId == userId),

            // ログインユーザーがお気に入り済みか
            IsFavorite = _context.TechnicalArticleFavorites.Any(nc =>
                nc.PostId == n.Id &&
                nc.UserId == userId),

            // お気に入り登録ユーザー数
            IsFavoriteCount = _context.TechnicalArticleFavorites
                    .Where(nc => nc.PostId == n.Id)
                    .Distinct()
                    .Count()
        })
        .ToListAsync();
        }

        public async Task<NoticeDetailResponseDTO?> GetNoticeDetail(
    int userId,
    int postId)
        {
            return await _context.NoticePosts
                .Where(n => n.Id == postId)
                .Select(n => new NoticeDetailResponseDTO
                {
                    Id = n.Id,
                    Title = n.Title,
                    Text = n.Text,
                    IsImportant = n.IsImportant,
                    CreatedAt = n.CreatedAt,
                    DueDate = n.DueDate,

                    // ログインユーザーが確認済みか
                    IsChecked = _context.NoticeChecks.Any(nc =>
                        nc.PostId == n.Id &&
                        nc.UserId == userId &&
                        nc.IsChecked),

                    // 未確認ユーザー一覧
                    UnconfirmedUserList = (
                from user in _context.Users
                join check in _context.NoticeChecks
                    .Where(nc => nc.PostId == n.Id)
                    on user.Id equals check.UserId into checks
                from check in checks.DefaultIfEmpty()
                where check == null || !check.IsChecked
                select new UnconfirmedUserDTO
                {
                    EmployeeId = user.EmployeeId,
                    Department = user.Department,
                    UserName = user.Name
                }
                    ).ToList()
                })
                .FirstOrDefaultAsync();
        }
    }
}
