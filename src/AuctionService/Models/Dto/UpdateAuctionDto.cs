using System.ComponentModel.DataAnnotations;

namespace AuctionService.Models.Dto;

public class UpdateAuctionDto
{  
    public string RegNo { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int? Year { get; set; }
    public string Color { get; set; }
    public int? Mileage { get; set; }
}