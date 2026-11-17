using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Models.DTO.Responces
{
    public class LoginResponseDTO
    {
        /// <summary>
        /// ユーザーID
        /// </summary>
        [Required]
        [MaxLength(20)]
        public int UserId { get; set; }

        /// <summary>
        /// ユーザー名
        /// </summary>
        [Required]
        [MaxLength(16)]
        public string UserName { get; set; } = "";

        /// <summary>
        /// 権限
        /// </summary>
        [Required]
        public string Role { get; set; } = "";
    }
}
