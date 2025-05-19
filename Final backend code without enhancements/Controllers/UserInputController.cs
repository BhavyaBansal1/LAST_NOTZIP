using Microsoft.AspNetCore.Mvc;
using WisVestAPI.Models.DTOs;
using WisVestAPI.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using WisVestAPI.Constants;

namespace WisVestAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserInputController : ControllerBase
    {
        private readonly IUserInputService _userInputService;
        private readonly ILogger<UserInputController> _logger;

        public UserInputController(IUserInputService userInputService, ILogger<UserInputController> logger)
        {
            _userInputService = userInputService;
            _logger = logger;
        }

        /// <summary>
        /// Handles user input and returns allocation results.
        /// </summary>
        [HttpPost("submit-input")]
        public async Task<IActionResult> SubmitInput([FromBody] UserInputDTO input)
        {
            if (input == null)
            {
                _logger.LogWarning("Null input received.");
                return BadRequest(ResponseMessages.NullInput);
            }

            try
            {
                var result = await _userInputService.HandleUserInput(input);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                _logger.LogWarning(ex, "Invalid input data.");
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ResponseMessages.InternalServerError);
                return StatusCode(500, new { message = ResponseMessages.InternalServerError, error = ex.Message });
            }
        }
    }
}
