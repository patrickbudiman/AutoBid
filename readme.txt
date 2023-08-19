Car Auction Build using Dotnet Microservices, PostgreSQL, NEXT JS

dotnet build
dotnet watch

Auction Service : 7001
Search Service : 7002

to create migration:
dotnet ef migrations add "InitialCreate" -o Data/Migrations

to run docker:
docker compose up -d

to update database:
dotnet ef database update

to drop database:
dotnet ef database drop

to stop existing mongodb :
net stop mongodb