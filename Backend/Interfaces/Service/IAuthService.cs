using Backend.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces.Service
{
    public interface IAuthService
    {
        Task<User?> GetUserForLogin(string employeeId, string password);
    }
}
