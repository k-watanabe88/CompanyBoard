using Backend.Interfaces.DAO;
using Backend.Interfaces.Service;
using Backend.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserDAO _userDAO;

        public AuthService(IUserDAO userDAO)
        {
            _userDAO = userDAO;
        }

        /// <summary>
        /// ログインユーザー情報検索
        /// </summary>
        /// <param name="employeeId">社員番号</param>
        /// <param name="password">パスワード</param>
        /// <returns>ユーザー情報</returns>
        public async Task<User?> GetUserForLogin(string employeeId, string password)
        {
            var user = await _userDAO.GetUserByEmployeeIdAndPassword(employeeId, password);
            return user;
        }
    }
}
