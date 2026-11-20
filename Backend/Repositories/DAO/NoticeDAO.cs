using Backend.Data;
using Backend.Interfaces.DAO;
using Backend.Models.DB;
using Backend.Models.DTO.Requests;
using Backend.Models.DTO.Responses;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories.DAO
{
    public class NoticeDAO : INoticeDAO
    {
        private readonly CompanyBoardContext _context;

        public NoticeDAO(CompanyBoardContext context)
        {
            _context = context;
        }
        public async Task<List<NoticeListResponseDTO>> GetNoticeList(int userId)
        {
            return await _context.NoticePosts
        .Select(n => new NoticeListResponseDTO
        {
            Id = n.Id,
            Title = n.Title,
            IsImportant = n.IsImportant,
            CreatedAt = n.CreatedAt,
            DueDate = n.DueDate,

            // ログインユーザーが確認済みか
            IsChecked = _context.NoticeChecks.Any(nc =>
                nc.PostId == n.Id &&
                nc.UserId == userId),

            // 確認済みユーザー数
            CheckedCount = _context.NoticeChecks
                .Where(nc => nc.PostId == n.Id)
                .Select(nc => nc.UserId)
                .Distinct()
                .Count(),

            // 未確認ユーザー数
            UncheckedCount = _context.Users.Count()
                - _context.NoticeChecks
                    .Where(nc => nc.PostId == n.Id)
                    .Select(nc => nc.UserId)
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

        public async Task<bool> NoticeCheck(int userId, int postId)
        {
            // 対象のお知らせが存在するか確認
            var noticeExists = await _context.NoticePosts
                .AnyAsync(n => n.Id == postId);

            if (!noticeExists)
            {
                return false;
            }

            // 確認レコードを取得
            var noticeCheck = await _context.NoticeChecks
                .FirstOrDefaultAsync(nc =>
                    nc.PostId == postId &&
                    nc.UserId == userId);

            if (noticeCheck == null)
            {
                // レコードが存在しない場合は新規作成
                noticeCheck = new NoticeCheck
                {
                    PostId = postId,
                    UserId = userId,
                    IsChecked = true
                };

                _context.NoticeChecks.Add(noticeCheck);
            }
            else
            {
                // 既存レコードが未確認なら確認済みに変更
                noticeCheck.IsChecked = true;
            }

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task NoticeNewPost(NoticePost noticePost)
        {
            _context.NoticePosts.Add(noticePost);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteNoticeChecks(int postId)
        {
            var checks = await _context.NoticeChecks
                .Where(x => x.PostId == postId)
                .ExecuteDeleteAsync();
        }

        public async Task DeleteNoticePost(int postId)
        {
            var post = await _context.NoticePosts
                .Where(x => x.Id == postId)
                .ExecuteDeleteAsync(); ;
        }
    }
}

