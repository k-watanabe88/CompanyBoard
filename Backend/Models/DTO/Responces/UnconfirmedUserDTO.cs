using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Models.DTO.Responces
{
    public class UnconfirmedUserDTO
    {
        public string EmployeeId {  get; set; } = string.Empty;
        public string Department {  get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
    }
}
