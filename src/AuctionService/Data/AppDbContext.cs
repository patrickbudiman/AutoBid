using AuctionService.Models;
using Microsoft.EntityFrameworkCore;

namespace AuctionService.Data
{
    public class AppDbContext : DbContext
    {
        //generate constructor
        public AppDbContext(DbContextOptions options) : base(options) 
        {
            
        }

        public DbSet<Auction> Auctions { get; set; }
    }
}
