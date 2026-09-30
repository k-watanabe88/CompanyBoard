using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace Backend.Functions;

public class InternalBoardFunction
{
    private readonly ILogger<InternalBoardFunction> _logger;

    public InternalBoardFunction(ILogger<InternalBoardFunction> logger)
    {
        _logger = logger;
    }

    [Function("BoardFunction")]
    public IActionResult Run([HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequest req)
    {
        _logger.LogInformation("C# HTTP trigger function processed a request.");
        return new OkObjectResult("Welcome to Azure Functions!");
    }
}