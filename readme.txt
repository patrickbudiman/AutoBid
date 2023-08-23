Car Auction Build using Dotnet Microservices, PostgreSQL, NEXT JS

dotnet build
dotnet watch

Identity Server : http://localhost:5000
Gateway Server : http://localhost:6001
Auction Service : 7001
Search Service : 7002

to create migration:
dotnet ef migrations add "InitialCreate" -o Data/Migrations
dotnet ef migrations add Outbox

to run docker:
docker compose up -d

to update database:
dotnet ef database update

to drop database:
dotnet ef database drop

to stop existing mongodb :
net stop mongodb

user:
tom
Pass123$
