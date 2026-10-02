using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Models.DTO.Requests
{
    /// <summary>
    /// ログインリクエスト用DTO
    /// </summary>
    public class LoginRequest
    {
        /// <summary>
        /// 社員番号
        /// </summary>
        [Required]
        [MaxLength(10)]
        public string EmployeeId { get; set; } = "";

        [Required]
        public string Password { get; set; } = "";
    }
}
