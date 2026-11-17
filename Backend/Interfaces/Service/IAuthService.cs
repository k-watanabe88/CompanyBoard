using Backend.Models.DB;
using Backend.Models.DTO.Responces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces.Service
{
    public interface IAuthService
    {
        Task<LoginResponseDTO?> GetUserForLogin(string employeeId, string password);
    }
}
