namespace ScheduleMeApi.Helpers
{
    public interface IUserHelper
    {
        string HashedPassword(string password);
        bool IsValidEmail(string input);
    }
}
