using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class Favorite
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int PostId { get; set; }

    public bool IsFavorite { get; set; }

    public virtual Post Post { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}