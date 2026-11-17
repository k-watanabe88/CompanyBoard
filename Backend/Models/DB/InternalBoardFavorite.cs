using System;
using System.Collections.Generic;

namespace Backend.Models.DB;

public partial class InternalBoardFavorite
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? PostId { get; set; }

    public bool? IsChecked { get; set; }

    public virtual InternalBoardPost? Post { get; set; }

    public virtual User? User { get; set; }
}
