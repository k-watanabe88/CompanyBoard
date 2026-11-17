using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class TechnicalOutputComment
{
    public int Id { get; set; }

    public int PostId { get; set; }

    public string? Text { get; set; }

    public int UserId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual TechnicalOutputPost Post { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
