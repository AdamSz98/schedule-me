using MongoDB.Driver;

namespace ScheduleMeApi.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoCollection<User> _users;
        private readonly IOptions<ApplicationDbContext> _context;

        public UserRepository(IOptions<ApplicationDbContext> context)
        {
            _context = context;
            var mongoClient = new MongoClient(context.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(context.Value.DatabaseName);
            _users = mongoDatabase.GetCollection<User>
                (context.Value.UsersCollectionName);
        }
        public async Task AddUser(User user) => 
            await _users.InsertOneAsync(user);

        public bool UsernameExists(string username) => 
            _users.Find(a => a.Username == username).FirstOrDefault() != null;

        public bool EmailExists(string email) => 
            _users.Find(a => a.Email == email).FirstOrDefault() != null;

        public Task<User> GetUserByUsername(string username) =>
            _users.Find(a => a.Username == username).FirstOrDefaultAsync();

        public Task<User> GetUserByEmail(string email) => 
            _users.Find(a => a.Email == email).FirstOrDefaultAsync();

    }
}
