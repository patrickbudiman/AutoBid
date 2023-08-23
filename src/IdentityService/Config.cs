using Duende.IdentityServer.Models;

namespace IdentityService;

public static class Config
{
    public static IEnumerable<IdentityResource> IdentityResources =>
        new IdentityResource[]
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
        };

    public static IEnumerable<ApiScope> ApiScopes =>
        new ApiScope[]
        {
            new ApiScope("auctionApp", "Auction app full access")
        };

    public static IEnumerable<Client> Clients() =>
        new Client[]
        {
            new Client
            {
                ClientId = "postman",
                ClientName = "postman",
                ClientSecrets = {new Secret("NotASecret".Sha256())},
                AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                RedirectUris = {"https://www.getpostman.com/callback"}, // doesn't matter if client is postman
                AllowedScopes = {"openid", "profile", "auctionApp"}
            }
        };
}
