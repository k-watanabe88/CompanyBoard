using Azure.Monitor.OpenTelemetry.Exporter;
using Backend.Data;
using Backend.Interfaces.DAO;
using Backend.Interfaces.Service;
using Backend.Repositories.DAO;
using Backend.Services;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Builder;
using Microsoft.Azure.Functions.Worker.OpenTelemetry;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OpenTelemetry;

var builder = FunctionsApplication.CreateBuilder(args);

builder.ConfigureFunctionsWebApplication();

if (!string.IsNullOrEmpty(Environment.GetEnvironmentVariable("APPLICATIONINSIGHTS_CONNECTION_STRING")))
{
    builder.Services.AddOpenTelemetry()
        .UseFunctionsWorkerDefaults()
        .UseAzureMonitorExporter();
}

//DBÇ∆ÇÃê⁄ë±ê›íË
builder.Services.AddDbContext<CompanyBoardContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

builder.Services.AddScoped<IUserDAO, UserDAO>();
builder.Services.AddScoped<IAuthService, AuthService>();

builder.Build().Run();
