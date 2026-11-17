using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class AnonymouQaquestion
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Text { get; set; }

    public int? UserId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? IsResolved { get; set; }

    public virtual ICollection<AnonymouQaanser> AnonymouQaansers { get; set; } = new List<AnonymouQaanser>();

    public virtual User? User { get; set; }
}
