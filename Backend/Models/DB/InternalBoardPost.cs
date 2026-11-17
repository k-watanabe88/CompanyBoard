using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class InternalBoardPost
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Text { get; set; }

    public int? UserId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public string? Image { get; set; }

    public virtual ICollection<InternalBoardComment> InternalBoardComments { get; set; } = new List<InternalBoardComment>();

    public virtual ICollection<InternalBoardFavorite> InternalBoardFavorites { get; set; } = new List<InternalBoardFavorite>();

    public virtual User? User { get; set; }
}
