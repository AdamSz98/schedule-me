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
                await _userRepo.AddUser(user);
                return Ok("Succesful Registration.");
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<string>> Login(UserLoginDto userInput)
        {
            var loginCreds = _mapper.Map<User>(userInput);

            if (string.IsNullOrEmpty(loginCreds.Email) && string.IsNullOrEmpty(loginCreds.Username))
            {
                return BadRequest("Error: Please provide your E-mail address or username.");
            }

            var user = await _userRepo.GetUserByEmail(loginCreds.Email);

            if (string.IsNullOrEmpty(loginCreds.Email))
            {
                user = await _userRepo.GetUserByUsername(userInput.Username!);
            }

            if (user == null)
            {
                return NotFound("Error: Wrong Credentials.");
            }

            if (!_userHelper.VerifyPasswordHash(loginCreds.Password, user.Password))
            {
                return NotFound("Error: Wrong Credentials.");
            }
            string token = _userHelper.CreateToken(user);

            return Ok(token);
        }
    }
}
