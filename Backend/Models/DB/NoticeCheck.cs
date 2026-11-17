using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class NoticeCheck
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int PostId { get; set; }

    public bool IsChecked { get; set; }

    public virtual NoticePost Post { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
