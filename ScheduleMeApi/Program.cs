var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.Configure<ApplicationDbContext>(
    builder.Configuration.GetSection("Database")
    );

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddTransient<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserHelper, UserHelper>();

var app = builder.Build();

app.UseAuthorization();

app.MapControllers();

app.Run();
