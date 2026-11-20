using Backend.Interfaces.Service;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Backend.Models.DTO.Requests.Common;
using Backend.Models.DTO.Requests;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Net;

namespace Backend.Functions;

public class TechnicalArticleFunction
{
    private readonly ITechnicalArticleService _TechnicalArticleService;

    public TechnicalArticleFunction(ITechnicalArticleService TechnicalArticleService)
    {
        _TechnicalArticleService = TechnicalArticleService;
    }

    [Function("ArticleList")]
    public async Task<HttpResponseData> GetArticleList(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Article/List")] HttpRequestData req)
    {
        var userId = 3; // ��قǔF�؏����ɒu��������
        var articleListInfo = await _TechnicalArticleService.GetArticleList(userId);
        var response = req.CreateResponse(HttpStatusCode.OK);
        await response.WriteAsJsonAsync(articleListInfo);
        return response;
    }

    [Function("ArticleDetail")]
    public async Task<HttpResponseData> GetArticleDetail(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Article/Detail")] HttpRequestData req)
    {
         var query = System.Web.HttpUtility.ParseQueryString(req.Url.Query);
        if (!int.TryParse(query["postId"], out int postId))
        {
            var badResponse = req.CreateResponse(HttpStatusCode.BadRequest);
            return badResponse;
        }
        var userId = 3; // 認証から取り出す形に変更
        var articleDetailInfo = await _TechnicalArticleService.GetTechnicalArticleDetail(userId, postId);
        var response = req.CreateResponse(HttpStatusCode.OK);
        await response.WriteAsJsonAsync(articleDetailInfo);
        return response;
    }

    [Function("ArticleBookmark")]
    public async Task<HttpResponseData> ToggleTechnicalArticleBookmark(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Article/Bookmark")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<BookmarkRequestDTO>();

        if (request == null || request.PostId <= 0)
        {
            return req.CreateResponse(HttpStatusCode.BadRequest);
        }
        var userId = 3; // ��قǔF�؏����ɒu��������

        var result = await _TechnicalArticleService.ToggleTechnicalArticleBookmark(
            userId, request.PostId);

        if (!result)
        {
            return req.CreateResponse(HttpStatusCode.NotFound);
        }

        return req.CreateResponse(HttpStatusCode.OK);
    }

    [Function("ArticleFavorite")]
    public async Task<HttpResponseData> ToggleTechnicalArticleFavorite(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Article/Favorite")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<FavoriteRequestDTO>();

        if (request == null || request.PostId <= 0)
        {
            return req.CreateResponse(HttpStatusCode.BadRequest);
        }
        var userId = 3; // قǔF؏ɒu

        var result = await _TechnicalArticleService.ToggleTechnicalArticleFavorite(
            userId, request.PostId);

        if (!result)
        {
            return req.CreateResponse(HttpStatusCode.NotFound);
        }

        return req.CreateResponse(HttpStatusCode.OK);
    }

    [Function("TechnicalArticleNewPost")]
    public async Task<HttpResponseData> TechnicalArticleNewPost(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Article/Post")] HttpRequestData req)
    {
        var request = await req.ReadFromJsonAsync<TechnicalArticleNewPostRequestDTO>();
        var userId = 3; // قǔF؏ɒu
        if (request == null || userId <= 0)
        {
            return req.CreateResponse(HttpStatusCode.BadRequest);
        }
        await _TechnicalArticleService.AddTechnicalArticle(request, userId);

        return req.CreateResponse(HttpStatusCode.Created);
    }    
}