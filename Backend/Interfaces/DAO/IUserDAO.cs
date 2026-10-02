using Backend.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces.DAO
{
    public interface IUserDAO
    {
        Task<User?> GetUserByEmployeeIdAndPassword(string employeeId, string password);
    }
}
