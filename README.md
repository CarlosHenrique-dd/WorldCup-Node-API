# WorldCup-Node-API

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 18.12.0
- Install [DockerDesktop](https://www.docker.com/products/docker-desktop/)

# Getting started
- Clone the repository
```
git clone  https://github.com/CarlosHenrique-dd/WorldCup-Node-API
```
- Install dependencies
```
cd WorldCup-Node-API/
npm install
```
- Build and run the project
```
docker compose up
```
# Manual image Download
```
docker pull dd3ll/node-cup
```
# API Endpoints

- POST
```
http://localhost:8087/api/v1/cup/
```
POST example
```
{
"team_a": "Barcelona",
"goal_a": 4,
"team_b": "Real Madrid",
"goal_b": 1,
"match_day": "2015-08-01"
}
```
- GET all Teams
```
http://localhost:8087/api/v1/cup/
```
- GET by Name
```
http://localhost:8087/api/v1/cup/team/{name}
```
example
```
http://localhost:8087/api/v1/cup/team/Barcelona
```
- GET by Date
```
http://localhost:8087/api/v1/cup/date/{date}
```
example
```
http://localhost:8087/api/v1/cup/date/2001-10-22
```
- PUT 
```
http://localhost:8087/api/v1/cup/{id}
```
example
```
http://localhost:8087/api/v1/cup/1
```
- DELETE
```
http://localhost:8087/api/v1/cup/{id}
```
example
```
http://localhost:8087/api/v1/cup/1
```
