namespace ScheduleMeApi.Helpers
{
    public interface IUserHelper
    {
        string HashedPassword(string password);
        bool IsValidEmail(string input);
        bool VerifyPasswordHash(string passwordIncoming, string passwordDb);
        string CreateToken(User user);
    }
}
