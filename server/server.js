const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyapi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "65d54765e7c64452b5a7f205da48f64b",
    clientSecret: "4f05141a25e6417fa763af45000f534e",
  });
  spotifyapi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        refreshToken: data.body.refreshToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      res.sendStatus(400);
    });
});

// Refresh token
app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyapi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "65d54765e7c64452b5a7f205da48f64b",
    clientSecret: "4f05141a25e6417fa763af45000f534e",
    refreshToken,
  });
  // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => res.sendStatus(400));
});
app.listen(30001);
