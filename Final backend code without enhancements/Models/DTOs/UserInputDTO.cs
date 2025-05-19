using System.Text.Json.Serialization; 
namespace WisVestAPI.Models.DTOs
{
    public class UserInputDTO
    {
        public string? RiskTolerance { get; set; }    
        [JsonPropertyName("investmentHorizon")]       
        public int InvestmentHorizon { get; set; }       
        public int Age { get; set; }
        public string? Goal { get; set; }                    
        public decimal TargetAmount { get; set; }           
    }
}

    