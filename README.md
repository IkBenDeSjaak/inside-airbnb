# inside-airbnb

## Local development

### Prerequisites
- Install Docker
- Install the .NET CLI

### Run it
1. Clone the project
2. Create a database with the bacpac file in the `db` folder.
3. Open the project in your favourite editor and fill in the blanks in `appsettings.json`
4. Open the command line and navigate to `/inside-airbnb/inside-airbnb`
5. Run the following command to run a Redis server in a Docker container on port 6379.
```sh
docker run -p 6379:6379 --name inside-airbnb -d redis
```
6. Run the following command to start the project.
```sh
dotnet run
```

## Helpers

### Clearing the Redis cache
```
docker exec -it inside-airbnb redis-cli FLUSHALL
```
