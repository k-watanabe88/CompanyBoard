using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class TechnicalOutputPost
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Text { get; set; }

    public int? UserId { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual ICollection<TechnicalOutputComment> TechnicalOutputComments { get; set; } = new List<TechnicalOutputComment>();

    public virtual ICollection<TechnicalOutputFavorite> TechnicalOutputFavorites { get; set; } = new List<TechnicalOutputFavorite>();

    public virtual User? User { get; set; }
}
