using Backend.Interfaces.Service;
using Backend.Models.DTO.Requests;
using Backend.Models.DTO.Requests.Common;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using System.Net;

namespace Backend.Functions;

public class NoticeFunction
{
    private readonly INoticeService _NoticeService;

    public NoticeFunction(INoticeService NoticeService)
    {
        _NoticeService = NoticeService;
    }

    [Function("NoticeList")]
    public async Task<HttpResponseData> GetNoticeList(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Notice/List")] HttpRequestData req)
    {
        var userId = 3; // 後ほど認証処理に置き換える
        var noticeListInfo = await _NoticeService.GetNoticeList(userId);
        var response = req.CreateResponse(HttpStatusCode.OK);
        await response.WriteAsJsonAsync(noticeListInfo);
        return response;
    }

    [Function("NoticeDetail")]
    public async Task<HttpResponseData> GetNoticeDetail(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Notice/Detail")] HttpRequestData req)
    {
        var query = System.Web.HttpUtility.ParseQueryString(req.Url.Query);
        if (!int.TryParse(query["postId"], out int postId))
        {
            var badResponse = req.CreateResponse(HttpStatusCode.BadRequest);
            return badResponse;
        }
        var userId = 3; // 後ほど認証処理に置き換える
        var noticeDetailInfo = await _NoticeService.GetNoticeDetail(postId, userId);
        var response = req.CreateResponse(HttpStatusCode.OK);
        await response.WriteAsJsonAsync(noticeDetailInfo);
        return response;
    }

    [Function("NoticeCheck")]
    public async Task<HttpResponseData> NoticeCheck(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Notice/Check")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<NoticeCheckRequestDTO>();

        if (request == null || request.PostId <= 0)
        {
            return req.CreateResponse(HttpStatusCode.BadRequest);
        }
        var userId = 3; // 後ほど認証処理に置き換える

        var result = await _NoticeService.NoticeCheck(
            request.PostId, userId);

        if (!result)
        {
            return req.CreateResponse(HttpStatusCode.NotFound);
        }

        return req.CreateResponse(HttpStatusCode.OK);
    }

    [Function("NoticeNewPost")]
    public async Task<HttpResponseData> NoticeNewPost(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Notice/Post")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<NoticeNewPostRequestDTO>();
        var userId = 3; // 後ほど認証処理に置き換える
        if (request == null || userId <= 0)
        {
            return req.CreateResponse(HttpStatusCode.BadRequest);
        }
        await _NoticeService.NoticeNewPost(request, userId);

        return req.CreateResponse(HttpStatusCode.Created);
    }

    [Function("NoticeDelete")]
    public async Task<HttpResponseData> NoticeDelete(
    [HttpTrigger(AuthorizationLevel.Anonymous, "delete", Route = "Notice/Delete")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<DeletePostRequestDTO>();
        if (request == null)
        {
            return req.CreateResponse(HttpStatusCode.NoContent);
        }
        await _NoticeService.DeleteNotice(request);

        return req.CreateResponse(HttpStatusCode.Created);
    }
}