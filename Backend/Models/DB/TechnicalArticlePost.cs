using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class TechnicalArticlePost
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Text { get; set; }

    public int? UserId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual ICollection<TechnicalArticleBookmark> TechnicalArticleBookmarks { get; set; } = new List<TechnicalArticleBookmark>();

    public virtual ICollection<TechnicalArticleComment> TechnicalArticleComments { get; set; } = new List<TechnicalArticleComment>();

    public virtual ICollection<TechnicalArticleFavorite> TechnicalArticleFavorites { get; set; } = new List<TechnicalArticleFavorite>();

    public virtual User? User { get; set; }
}
