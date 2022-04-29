#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["inside-airbnb/inside-airbnb.csproj", "inside-airbnb/"]
RUN dotnet restore "inside-airbnb/inside-airbnb.csproj"
COPY . .
WORKDIR "/src/inside-airbnb"
RUN dotnet build "inside-airbnb.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "inside-airbnb.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "inside-airbnb.dll"]