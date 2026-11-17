using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class User
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? EmployeeId { get; set; }

    public string? Password { get; set; }

    public string? Role { get; set; }

    public string? Department { get; set; }

    public bool? IsActive { get; set; }

    public virtual ICollection<AnonymouQaanser> AnonymouQaansers { get; set; } = new List<AnonymouQaanser>();

    public virtual ICollection<AnonymouQaquestion> AnonymouQaquestions { get; set; } = new List<AnonymouQaquestion>();

    public virtual ICollection<InternalBoardComment> InternalBoardComments { get; set; } = new List<InternalBoardComment>();

    public virtual ICollection<InternalBoardFavorite> InternalBoardFavorites { get; set; } = new List<InternalBoardFavorite>();

    public virtual ICollection<InternalBoardPost> InternalBoardPosts { get; set; } = new List<InternalBoardPost>();

    public virtual ICollection<NoticeCheck> NoticeChecks { get; set; } = new List<NoticeCheck>();

    public virtual ICollection<NoticePost> NoticePosts { get; set; } = new List<NoticePost>();

    public virtual ICollection<TechnicalArticleBookmark> TechnicalArticleBookmarks { get; set; } = new List<TechnicalArticleBookmark>();

    public virtual ICollection<TechnicalArticleComment> TechnicalArticleComments { get; set; } = new List<TechnicalArticleComment>();

    public virtual ICollection<TechnicalArticleFavorite> TechnicalArticleFavorites { get; set; } = new List<TechnicalArticleFavorite>();

    public virtual ICollection<TechnicalArticlePost> TechnicalArticlePosts { get; set; } = new List<TechnicalArticlePost>();

    public virtual ICollection<TechnicalOutputComment> TechnicalOutputComments { get; set; } = new List<TechnicalOutputComment>();

    public virtual ICollection<TechnicalOutputFavorite> TechnicalOutputFavorites { get; set; } = new List<TechnicalOutputFavorite>();

    public virtual ICollection<TechnicalOutputPost> TechnicalOutputPosts { get; set; } = new List<TechnicalOutputPost>();
}
