using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class AnonymouQaanser
{
    public int Id { get; set; }

    public int QuestionId { get; set; }

    public string? Text { get; set; }

    public int UserId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual AnonymouQaquestion Question { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
