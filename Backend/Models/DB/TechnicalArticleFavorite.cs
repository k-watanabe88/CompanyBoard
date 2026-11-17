using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class TechnicalArticleFavorite
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? PostId { get; set; }

    public bool? IsChecked { get; set; }

    public virtual TechnicalArticlePost? Post { get; set; }

    public virtual User? User { get; set; }
}
