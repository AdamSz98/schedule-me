namespace ScheduleMeApi.Repositories
{
    public interface IUserRepository
    {
        Task AddUser(User user);
        bool UsernameExists(string username);
        bool EmailExists(string email);
        Task<User> GetUserByUsername(string username);
        Task<User> GetUserByEmail(string email);
    }
}
