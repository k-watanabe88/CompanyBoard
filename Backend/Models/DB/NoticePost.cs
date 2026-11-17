using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class NoticePost
{
    public int Id { get; set; }

    public required string Title { get; set; }

    public required string Text { get; set; }

    public int UserId { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime DueDate { get; set; }

    public bool IsImportant { get; set; }

    public virtual ICollection<NoticeCheck> NoticeChecks { get; set; } = new List<NoticeCheck>();

    public virtual User? User { get; set; }
}
