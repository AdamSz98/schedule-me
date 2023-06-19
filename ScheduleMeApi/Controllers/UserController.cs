namespace ScheduleMeApi.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;
        private readonly IUserHelper _userHelper;

        public UserController(IUserRepository userRepo, IMapper mapper, IUserHelper userHelper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
            _userHelper = userHelper;
        }

        [HttpPost("register")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<string>> CreateUser(UserCreationDto inputUser)
        {
            var user = _mapper.Map<User>(inputUser);

            if (string.IsNullOrEmpty(user.Username)
                || string.IsNullOrEmpty(inputUser.FirstName)
                || string.IsNullOrEmpty(inputUser.LastName)
                || string.IsNullOrEmpty(inputUser.Password)
                || string.IsNullOrEmpty(inputUser.Email))
            {
                return BadRequest("Error: All required fields need to be filled in.");
            }

            if (user.Password.Length < 8)
            {
                return BadRequest("Error: Password needs to be at least 8 characters long.");
            }

            if (!_userHelper.IsValidEmail(user.Email))
            {
                return BadRequest("Error: E-mail address given is invalid.");
            }

            if (_userRepo.UsernameExists(user.Username))
            {
                return Conflict("Error: Username already exists.");
            }

            if (_userRepo.EmailExists(user.Email))
            {
                return Conflict("Error: E-mail address given is already in use.");
            }

            try
            {
                user.Password = _userHelper.HashedPassword(user.Password);
                _userRepo.AddUser(user);
                await _userRepo.SaveAsync();
                return Ok("Succesful Registration.");
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}
