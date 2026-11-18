using Backend.Interfaces.Service;
using Backend.Services;
using Microsoft.AspNetCore.Http;
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
        var userId = 3; // å„ÇŸÇ«îFèÿèàóùÇ…íuÇ´ä∑Ç¶ÇÈ
        var articleListInfo = await _TechnicalArticleService.GetArticleList(userId);
        var response = req.CreateResponse(HttpStatusCode.OK);
        await response.WriteAsJsonAsync(articleListInfo);
        return response;
    }
}