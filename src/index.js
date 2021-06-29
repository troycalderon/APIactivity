var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(3000); //the server object listens on port 3000

const express = require("express");

const app = express();
const port = 7000;

const fetch = require("node-fetch");

app.listen(port, () => {
  console.log("Listening at http://localhost:$[port]");
});

// Activity Stuff
app.get("/act1", async (request, response) => {
  const api_url = "http://www.boredapi.com/api/activity/";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});

app.get("/act2", async (request, response) => {
  const api_url = "http://www.boredapi.com/api/activity/";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json.activity);
});

app.get("/param/:participants", async (request, response) => {
  const participants = request.params.participants;
  const api_url = `http://www.boredapi.com/api/activity?participants=${participants}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});
