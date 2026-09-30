using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace Backend.Functions;

public class TechnicalOutputFunction
{
    private readonly ILogger<TechnicalOutputFunction> _logger;

    public TechnicalOutputFunction(ILogger<TechnicalOutputFunction> logger)
    {
        _logger = logger;
    }

    [Function("TechnicalOutputFunction")]
    public IActionResult Run([HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequest req)
    {
        _logger.LogInformation("C# HTTP trigger function processed a request.");
        return new OkObjectResult("Welcome to Azure Functions!");
    }
}