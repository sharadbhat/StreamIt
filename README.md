# Music Streaming Service

## To run locally

```bash
node app.js
```

Then head over to http://localhost:3000 to see it in action.

### API endpoints

#### Status
`GET`
http://localhost:3000/status

Returns JSON data.

#### Registration
`POST`
http://localhost:3000/register

##### Necessary fields

Field Name | Value
--- | ---
`username` | username of the user
`password` | plaintext password of the user

Data must be sent in the request body as `x-www-form-urlencoded` data.

#### Login
`POST`
http://localhost:3000/login

##### Necessary fields

Field Name | Value
--- | ---
`username` | username of the user
`password` | plaintext password of the user

Data must be sent in the request body as `x-www-form-urlencoded` data.

#### Song File
`GET`
http://localhost:3000/music/song-id

`song-id` - ID of the requested song.

Returns a MP3 file if it exists, else a JSON.

#### Song Details
`GET`
http://localhost:3000/music/details/song-id

`song-id` - ID of the requested song.

Returns data in JSON format.

#### Album Art
`GET`
http://localhost:3000/image/song-id

`song-id` - ID of the requested song.

Returns a JPG file if it exists, else a JSON.
