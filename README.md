# Music Streaming Service

## To run locally

```bash
npm install

node app.js
```

Then head on over to http://localhost:3000 to see it in action.

## API endpoints

### Status
`GET`
http://localhost:3000/status

Returns JSON data.

### Registration
`POST`
http://localhost:3000/users/register

#### Necessary fields

Field Name | Value
--- | ---
`username` | username of the user
`password` | plaintext password of the user

Data must be sent in the request body as `x-www-form-urlencoded` data.

### Login
`POST`
http://localhost:3000/users/login

#### Necessary fields

Field Name | Value
--- | ---
`username` | username of the user
`password` | plaintext password of the user

Data must be sent in the request body as `x-www-form-urlencoded` data.

### Song File
`GET`
http://localhost:3000/music/< song-id >

`song-id` - ID of the requested song.

Returns a MP3 file if it exists, else a JSON.

### Song Details
`GET`
http://localhost:3000/music/details/< song-id >

`song-id` - ID of the requested song.

Returns data in JSON format.

### Album Art
`GET`
http://localhost:3000/image/< song-id >

`song-id` - ID of the requested song.

Returns a JPG file if it exists, else a JSON.

### Favorites
`GET`
http://localhost:3000/favorites/< username >

`username` - Username of the user.

Returns details of all songs favorited by the user, if the user exists.
If no song has been favorited yet, returns an empty list.
If user does not exist, returns 404 error.

### Search
`GET`
http://localhost:3000/search?query=< query >

Returns details of all songs with artist names closely matching the search query.

### Random
`GET`
http://localhost:3000/random

Returns details of 5 random songs.
