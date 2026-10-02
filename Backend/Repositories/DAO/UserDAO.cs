using Backend.Data;
using Backend.Interfaces.DAO;
using Backend.Models.DB;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Repositories.DAO
{
    public class UserDAO : IUserDAO
    {
        private readonly CompanyBoardContext _context;

        public UserDAO(CompanyBoardContext context)
        {
            _context = context;
        }

        /// <summary>
        /// 社員番号、パスワードによるユーザー情報取得（ログイン時に使用）
        /// </summary>
        /// <param name="employeeId">ユーザーID</param>
        /// <param name="password">パスワード</param>
        /// <returns>ユーザー情報</returns>
        public async Task<User?> GetUserByEmployeeIdAndPassword(string employeeId, string password)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.EmployeeId == employeeId && u.Password == password);
        }
    }
}
