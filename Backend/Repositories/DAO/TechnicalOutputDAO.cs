using Backend.Data;
using Backend.Interfaces.DAO;
using Backend.Models.DB;
using Backend.Models.DTO.Responses;
using Backend.Models.DTO.Responses.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Repositories.DAO
{
    public class TechnicalOutputDAO: ITechnicalOutputDAO
    {
        private readonly CompanyBoardContext _context;

        public TechnicalOutputDAO(CompanyBoardContext context)
        {
            _context = context;
        }

        public async Task<List<TechnicalOutputResponseDTO>> GetOutputList(int userId)
        {
            return await _context.TechnicalOutputPosts
                .OrderByDescending(n => n.CreatedAt)
                .Select(n => new TechnicalOutputResponseDTO
                {
                    Id = n.Id,
                    Title = n.Title,
                    CreatedAt = n.CreatedAt,

                    PostUserName = (
                        from user in _context.Users
                        join post in _context.TechnicalOutputPosts
                        on user.Id equals post.UserId
                        where post.Id == n.Id
                        select user.Name
                    ).FirstOrDefault(),

            // ログインユーザーがお気に入り済みか
            IsFavorite = _context.TechnicalOutputFavorites.Where(nc =>
                nc.PostId == n.Id &&
                nc.UserId == userId)
                .Select(nc => nc.IsChecked)
                .FirstOrDefault(),

            // お気に入り登録ユーザー数
            IsFavoriteCount = _context.TechnicalOutputFavorites
                    .Where(nc => nc.PostId == n.Id && nc.IsChecked)
                    .Distinct()
                    .Count()
        })
        .ToListAsync();
        }
        public async Task<TechnicalOutputDetailResponseDTO?> GetTechnicalOutputDetail(
        int userId,
        int postId)
        {
            return await _context.TechnicalOutputPosts
                .Where(n => n.Id == postId)
                .Select(n => new TechnicalOutputDetailResponseDTO
                {
                    Id = n.Id,
                    Title = n.Title,
                    Text = n.Text,
                    CreatedAt = n.CreatedAt,
                    PostUserName = (
                        from user in _context.Users
                        join post in _context.TechnicalOutputPosts
                            on user.Id equals post.UserId
                        where post.Id == n.Id
                        select user.Name
                    ).FirstOrDefault(),

                    // ログインユーザーがお気に入り済みか
                    IsFavorite = _context.TechnicalOutputFavorites.Where(nc =>
                        nc.PostId == n.Id &&
                        nc.UserId == userId)
                        .Select(nc => nc.IsChecked)
                        .FirstOrDefault(),

                    // お気に入り登録ユーザー数
                    IsFavoriteCount = _context.TechnicalOutputFavorites
                    .Where(nc => nc.PostId == n.Id && nc.IsChecked)
                    .Distinct()
                    .Count(),

                    // コメント
                    Comments = (
                from comment in _context.TechnicalOutputComments
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

        public async Task<bool> ToggleTechnicalOutputFavorite(int userId, int postId)
        {
            // 要修正
            // 対象のお知らせが存在するか確認
            var noticeExists = await _context.TechnicalOutputPosts
                .AnyAsync(n => n.Id == postId);

            if (!noticeExists)
            {
                return false;
            }

            // 確認レコードを取得
            var technicalOutputFavorite = await _context.TechnicalOutputFavorites
                .FirstOrDefaultAsync(nc =>
                    nc.PostId == postId &&
                    nc.UserId == userId);

            if (technicalOutputFavorite == null)
            {
                // レコードが存在しない場合は新規作成
                technicalOutputFavorite = new TechnicalOutputFavorite
                {
                    PostId = postId,
                    UserId = userId,
                    IsChecked = true
                };

                _context.TechnicalOutputFavorites.Add(technicalOutputFavorite);
            }
            else if (technicalOutputFavorite.IsChecked)
            {
                technicalOutputFavorite.IsChecked = false;
            }
            else
            {
                technicalOutputFavorite.IsChecked = true;
            }
            Console.WriteLine(technicalOutputFavorite.IsChecked); // デバッグ用の出力
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task AddTechnicalOutput(TechnicalOutputPost technicalOutputPost)
        {
            _context.TechnicalOutputPosts.Add(technicalOutputPost);
            await _context.SaveChangesAsync();
        }

        public async Task AddTechnicalOutputComment(TechnicalOutputComment technicalOutputComment)
        {
            _context.TechnicalOutputComments.Add(technicalOutputComment);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTechnicalOutputFavorites(int postId)
        {
            var favorites = await _context.TechnicalOutputFavorites
                .Where(x => x.PostId == postId)
                .ToListAsync();

            if (favorites.Count == 0)
            {
                return;
            }

            _context.TechnicalOutputFavorites.RemoveRange(favorites);
            await _context.SaveChangesAsync();
        }

        
        public async Task DeleteTechnicalOutputComments(int postId)
        {
            var comments = await _context.TechnicalOutputComments
                .Where(x => x.PostId == postId)
                .ToListAsync();

            if (comments.Count == 0)
            {
                return;
            }

            _context.TechnicalOutputComments.RemoveRange(comments);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTechnicalOutputPost(int postId)
        {
            var post = await _context.TechnicalOutputPosts
                .FirstOrDefaultAsync(x => x.Id == postId);

            if (post == null)
            {
                return;
            }

            _context.TechnicalOutputPosts.Remove(post);
            await _context.SaveChangesAsync();
        }
    }
}
