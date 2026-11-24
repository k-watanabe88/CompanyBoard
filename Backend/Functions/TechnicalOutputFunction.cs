using Backend.Interfaces.Service;
using Backend.Models.DTO.Requests;
using Backend.Models.DTO.Requests.Common;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Net;

namespace Backend.Functions;

public class TechnicalOutputFunction
{
    private readonly ITechnicalOutputService _TechnicalOutputService;

    public TechnicalOutputFunction(ITechnicalOutputService TechnicalOutputService)
    {
        _TechnicalOutputService = TechnicalOutputService;
    }

    [Function("OutputList")]
    public async Task<HttpResponseData> GetOutputList(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Output/List")] HttpRequestData req)
    {
        var userId = 3; // 
        var outputListInfo = await _TechnicalOutputService.GetOutputList(userId);
        var response = req.CreateResponse(HttpStatusCode.OK);
        await response.WriteAsJsonAsync(outputListInfo);
        return response;
    }

    [Function("OutputDetail")]
    public async Task<HttpResponseData> GetOutputDetail(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Output/Detail")] HttpRequestData req)
    {
        var query = System.Web.HttpUtility.ParseQueryString(req.Url.Query);
        if (!int.TryParse(query["postId"], out int postId))
        {
            var badResponse = req.CreateResponse(HttpStatusCode.BadRequest);
            return badResponse;
        }
        var userId = 3; // 認証から取り出す形に変更
        var outputDetailInfo = await _TechnicalOutputService.GetTechnicalOutputDetail(userId, postId);
        var response = req.CreateResponse(HttpStatusCode.OK);
        await response.WriteAsJsonAsync(outputDetailInfo);
        return response;
    }

    [Function("OutputFavorite")]
    public async Task<HttpResponseData> ToggleTechnicalOutputFavorite(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Output/Favorite")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<FavoriteRequestDTO>();

        if (request == null || request.PostId <= 0)
        {
            return req.CreateResponse(HttpStatusCode.BadRequest);
        }
        var userId = 3; // 認証から取り出す形に変更

        var result = await _TechnicalOutputService.ToggleTechnicalOutputFavorite(
            userId, request.PostId);

        if (!result)
        {
            return req.CreateResponse(HttpStatusCode.NotFound);
        }

        return req.CreateResponse(HttpStatusCode.OK);
    }

    [Function("OutputNewPost")]
    public async Task<HttpResponseData> TechnicalOutputNewPost(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Output/Post")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<TechnicalOutputNewPostRequestDTO>();
        var userId = 3; // 認証から取り出す形に変更
        if (request == null || userId <= 0)
        {
            return req.CreateResponse(HttpStatusCode.BadRequest);
        }
        await _TechnicalOutputService.AddTechnicalOutput(request, userId);

        return req.CreateResponse(HttpStatusCode.Created);
    }

    [Function("OutputNewComment")]
    public async Task<HttpResponseData> TechnicalOutputNewComment(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Output/Comment")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<CommentRequestDTO>();
        var userId = 3; // 認証から取り出す形に変更
        if (request == null || userId <= 0)
        {
            return req.CreateResponse(HttpStatusCode.BadRequest);
        }
        await _TechnicalOutputService.AddTechnicalOutputComment(request, userId);

        return req.CreateResponse(HttpStatusCode.Created);
    }

    [Function("OutputDelete")]
    public async Task<HttpResponseData> TechnicalOutputDelete(
    [HttpTrigger(AuthorizationLevel.Anonymous, "delete", Route = "Output/Delete")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<DeletePostRequestDTO>();
        if (request == null)
        {
            return req.CreateResponse(HttpStatusCode.NoContent);
        }
        await _TechnicalOutputService.DeleteTechnicalOutput(request);

        return req.CreateResponse(HttpStatusCode.Created);
    }
}