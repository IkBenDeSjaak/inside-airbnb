using inside_airbnb.Models;
using inside_airbnb.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Identity.Web;
using Microsoft.Identity.Web.UI;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApp(builder.Configuration.GetSection("AzureAd"));

builder.Services.AddDbContext<InsideAirbnbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("default") ?? throw new InvalidOperationException("Connection string 'default' not found.")));

builder.Services.AddScoped<IListingRepository, ListingRepository>();
builder.Services.AddScoped<INeighbourhoodRepository, NeighbourhoodRepository>();
builder.Services.AddScoped<IReviewRepository, ReviewRepository>();

builder.Services.
    AddMiniProfiler(options =>
    {
        options.PopupRenderPosition = StackExchange.Profiling.RenderPosition.BottomLeft;
        options.PopupShowTimeWithChildren = true;
    }).AddEntityFramework();

builder.Services.AddControllersWithViews(options =>
{
    var policy = new AuthorizationPolicyBuilder()
        .RequireAuthenticatedUser()
        .Build();
    options.Filters.Add(new AuthorizeFilter(policy));
});

builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = builder.Configuration.GetConnectionString("redis");
});

builder.Services.AddRazorPages()
    .AddMicrosoftIdentityUI();

builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseResponseCompression();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseMiniProfiler();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Content-Security-Policy", "default-src 'none'; script-src 'self' https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js 'unsafe-inline' https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js; connect-src 'self' https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com; img-src 'self' data: blob: ; style-src 'self' https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css 'unsafe-inline'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; child-src blob: ; worker-src blob: ");
    context.Response.Headers.Add("X-Frame-Options", "Deny");

    await next();
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

app.Run();
