using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string EmployeeId { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Role { get; set; } = null!;

    public string Department { get; set; } = null!;

    public bool IsActive { get; set; }

    public virtual ICollection<Bookmark> Bookmarks { get; set; } = new List<Bookmark>();

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

    public virtual ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();

    public virtual ICollection<NoticeCheck> NoticeChecks { get; set; } = new List<NoticeCheck>();

    public virtual ICollection<Post> Posts { get; set; } = new List<Post>();
}