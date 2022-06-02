using inside_airbnb.Cache;
using inside_airbnb.Models;
using inside_airbnb.Services;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;
using Microsoft.Identity.Web.UI;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApp(builder.Configuration.GetSection("AzureAd"));

builder.Services.AddDbContext<InsideAirbnbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("database") ?? throw new InvalidOperationException("Connection string 'default' not found.")));

builder.Services.AddScoped<IListingRepository, ListingRepository>();
builder.Services.AddScoped<INeighbourhoodRepository, NeighbourhoodRepository>();
builder.Services.AddScoped<IReviewRepository, ReviewRepository>();

builder.Services.AddScoped<IListingService, ListingService>();
builder.Services.AddScoped<INeighbourhoodService, NeighbourhoodService>();
builder.Services.AddScoped<IReviewService, ReviewService>();

builder.Services.AddScoped<IListingCache, ListingCache>();
builder.Services.AddScoped<INeighbourhoodCache, NeighbourhoodCache>();
builder.Services.AddScoped<IReviewCache, ReviewCache>();

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

app.UseSecurityHeaders(policies =>
        policies
            .AddContentSecurityPolicy(builder =>
            {
                builder.AddDefaultSrc()
                    .None();

                builder.AddScriptSrc()
                    .Self()
                    .From("https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js")
                    .From("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js")
                    .WithNonce();

                builder.AddConnectSrc()
                    .Self()
                    .From("https://*.tiles.mapbox.com")
                    .From("https://api.mapbox.com")
                    .From("https://events.mapbox.com");

                builder.AddImgSrc()
                    .Self()
                    .Data()
                    .Blob();

                builder.AddStyleSrc()
                    .Self()
                    .From("https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css")
                    .UnsafeInline();

                builder.AddBaseUri()
                    .Self();

                builder.AddFormAction()
                    .Self();

                builder.AddFrameAncestors()
                    .None();

                builder.AddWorkerSrc()
                    .Blob();
            })
    );

app.UseResponseCompression();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseMiniProfiler();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.Use(async (context, next) =>
{
    context.Response.Headers.Add("X-Frame-Options", "Deny");

    await next();
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

app.Run();
