using AuctionService.Models.Dto;
using AuctionService.Models;
using AutoMapper;

namespace AuctionService.RequestHelpers;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Auction, AuctionDto>().IncludeMembers(x => x.Item);
        CreateMap<Item, AuctionDto>();
        CreateMap<CreateAuctionDto, Auction>()
            .ForMember(dest => dest.Item, o => o.MapFrom(src => src));
        CreateMap<CreateAuctionDto, Item>();
    }
}
