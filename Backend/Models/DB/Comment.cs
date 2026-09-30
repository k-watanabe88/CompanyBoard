using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class Comment
{
    public int Id { get; set; }

    public int PostId { get; set; }

    public string Text { get; set; } = null!;

    public int UserId { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual Post Post { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}