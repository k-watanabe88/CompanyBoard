using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class Post
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string Text { get; set; } = null!;

    public int UserId { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? DueDate { get; set; }

    public int Category { get; set; }

    public bool? IsImportant { get; set; }

    public bool? IsResolved { get; set; }

    public string? Image { get; set; }

    public bool? IsReminded { get; set; }

    public virtual ICollection<Bookmark> Bookmarks { get; set; } = new List<Bookmark>();

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

    public virtual ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();

    public virtual ICollection<NoticeCheck> NoticeChecks { get; set; } = new List<NoticeCheck>();

    public virtual User User { get; set; } = null!;
}
