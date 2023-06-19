namespace ScheduleMeApi.DTO.Incoming
{
    public class UserCreationDto
    {
        [JsonPropertyName("username")]
        [StringLength(maximumLength: 64, MinimumLength = 3)]
        public string Username { get; set; } = string.Empty;
        [JsonPropertyName("firstName")]
        [StringLength(maximumLength: 255, MinimumLength = 3)]
        public string FirstName { get; set; } = string.Empty;
        [JsonPropertyName("lastName")]
        [StringLength(maximumLength: 255, MinimumLength = 3)]
        public string LastName { get; set; } = string.Empty;
        [JsonPropertyName("password")]
        [StringLength(maximumLength: 30, MinimumLength = 8)]
        public string Password { get; set; } = string.Empty;
        [JsonPropertyName("email")]
        [StringLength(maximumLength: 128, MinimumLength = 3)]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}
