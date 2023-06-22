namespace ScheduleMeApi.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoCollection<User> _users;
        private readonly IOptions<ApplicationDbContext> _context;

        public UserRepository(IOptions<ApplicationDbContext> context)
        {
            _context = context;
            var mongoClient = new MongoClient(_context.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(_context.Value.DatabaseName);
            _users = mongoDatabase.GetCollection<User>
                (_context.Value.UsersCollectionName);
        }
        public Task AddUser(User user) => 
            _users.InsertOneAsync(user);

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
