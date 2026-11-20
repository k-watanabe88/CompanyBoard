using Backend.Data;
using Backend.Interfaces.DAO;
using Backend.Models.DTO.Responses;
using Backend.Models.DTO.Responses.Common;
using Microsoft.EntityFrameworkCore;
using Backend.Models.DB;
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
            IsBookmark = _context.TechnicalArticleBookmarks.Where(nc =>
     nc.PostId == n.Id &&
     nc.UserId == userId)
     .Select(nc => nc.IsChecked)
     .FirstOrDefault(),

            // ログインユーザーがお気に入り済みか
            IsFavorite = _context.TechnicalArticleFavorites.Where(nc =>
                nc.PostId == n.Id &&
                nc.UserId == userId)
                .Select(nc => nc.IsChecked)
                .FirstOrDefault(),

            // お気に入り登録ユーザー数
            IsFavoriteCount = _context.TechnicalArticleFavorites
                    .Where(nc => nc.PostId == n.Id && nc.IsChecked)
                    .Distinct()
                    .Count()
        })
        .ToListAsync();
        }

        public async Task<TechnicalArticleDetailResponseDTO?> GetTechnicalArticleDetail(
    int userId,
    int postId)
        {
            return await _context.TechnicalArticlePosts
                .Where(n => n.Id == postId)
                .Select(n => new TechnicalArticleDetailResponseDTO
                {
                    Id = n.Id,
                    Title = n.Title,
                    Text = n.Text,
                    CreatedAt = n.CreatedAt,
                    PostUserName = (
                        from user in _context.Users
                        join post in _context.TechnicalArticlePosts
                            on user.Id equals post.UserId
                        where post.Id == n.Id
                        select user.Name
                    ).FirstOrDefault(),

                    // ログインユーザーがブックマーク済みか
                    IsBookmark = _context.TechnicalArticleBookmarks.Where(nc =>
                        nc.PostId == n.Id &&
                        nc.UserId == userId)
                        .Select(nc => nc.IsChecked)
                        .FirstOrDefault(),

                    // ログインユーザーがお気に入り済みか
                    IsFavorite = _context.TechnicalArticleFavorites.Where(nc =>
                        nc.PostId == n.Id &&
                        nc.UserId == userId)
                        .Select(nc => nc.IsChecked)
                        .FirstOrDefault(),

                    // お気に入り登録ユーザー数
                    IsFavoriteCount = _context.TechnicalArticleFavorites
                    .Where(nc => nc.PostId == n.Id)
                    .Distinct()
                    .Count(),

                    // コメント
                    Comments = (
                from comment in _context.TechnicalArticleComments
                join user in _context.Users
                    on comment.UserId equals user.Id
                where comment.PostId == n.Id
                select new CommentDTO
                {
                    Id = comment.Id,
                    CommentUserName = user.Name,
                    Text = comment.Text,
                    CreatedAt = comment.CreatedAt
                }).ToList()
                })
                .FirstOrDefaultAsync();
        }

        public async Task<bool> ToggleTechnicalArticleBookmark(int userId, int postId)
        {
            // 要修正
            // 対象のお知らせが存在するか確認
            var noticeExists = await _context.TechnicalArticlePosts
                .AnyAsync(n => n.Id == postId);

            if (!noticeExists)
            {
                return false;
            }

            // 確認レコードを取得
            var technicalArticleBookmark = await _context.TechnicalArticleBookmarks
                .FirstOrDefaultAsync(nc =>
                    nc.PostId == postId &&
                    nc.UserId == userId);

            if (technicalArticleBookmark == null)
            {
                // レコードが存在しない場合は新規作成
                technicalArticleBookmark = new TechnicalArticleBookmark
                {
                    PostId = postId,
                    UserId = userId,
                    IsChecked = true
                };

                _context.TechnicalArticleBookmarks.Add(technicalArticleBookmark);
            }
            else if (technicalArticleBookmark.IsChecked)
            {
                technicalArticleBookmark.IsChecked = false;
            }
            else
            {
                technicalArticleBookmark.IsChecked = true;
            }
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> ToggleTechnicalArticleFavorite(int userId, int postId)
        {
            // 要修正
            // 対象のお知らせが存在するか確認
            var noticeExists = await _context.TechnicalArticlePosts
                .AnyAsync(n => n.Id == postId);

            if (!noticeExists)
            {
                return false;
            }

            // 確認レコードを取得
            var technicalArticleFavorite = await _context.TechnicalArticleFavorites
                .FirstOrDefaultAsync(nc =>
                    nc.PostId == postId &&
                    nc.UserId == userId);

            if (technicalArticleFavorite == null)
            {
                // レコードが存在しない場合は新規作成
                technicalArticleFavorite = new TechnicalArticleFavorite
                {
                    PostId = postId,
                    UserId = userId,
                    IsChecked = true
                };

                _context.TechnicalArticleFavorites.Add(technicalArticleFavorite);
            }
            else if (technicalArticleFavorite.IsChecked)
            {
                technicalArticleFavorite.IsChecked = false;
            }
            else
            {
                technicalArticleFavorite.IsChecked = true;
            }
            Console.WriteLine(technicalArticleFavorite.IsChecked); // デバッグ用の出力
            await _context.SaveChangesAsync();
            return true;
        }
         public async Task AddTechnicalArticle(TechnicalArticlePost technicalArticlePost)
        {
            _context.TechnicalArticlePosts.Add(technicalArticlePost);
            await _context.SaveChangesAsync();
        }
    }
}
