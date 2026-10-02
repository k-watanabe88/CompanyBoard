using Backend.Interfaces.Service;
using Backend.Models.DTO.Requests;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Net;

namespace Backend.Functions;

public class AuthFunction
{
    private readonly IAuthService _authService;

    public AuthFunction(IAuthService authService)
    {
        _authService = authService;
    }

    [Function("Login")]
    public async Task<HttpResponseData> Login(
        [HttpTrigger(AuthorizationLevel.Anonymous,"post")] HttpRequestData req)
    {
        var loginInfo = await req.ReadFromJsonAsync<LoginRequest>();
        if (loginInfo == null)
        {
            return req.CreateResponse(HttpStatusCode.BadRequest);
        }
        var user = await _authService.GetUserForLogin(
            loginInfo.EmployeeId,
            loginInfo.Password
            );
        if (user == null)
        {
            var errorResponse = req.CreateResponse(HttpStatusCode.Unauthorized);
            await errorResponse.WriteAsJsonAsync(new
            {
                message = "ユーザーIDまたはパスワードが正しくありません。"
            });
            return errorResponse;
        }
        var response = req.CreateResponse(HttpStatusCode.OK);
        await response.WriteAsJsonAsync(user);
        return response;
    }
}