const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "application/json");
  const dataObj = {
    name: "Aditya",
    age: 21,
    channel: "Brainstorm Codings",
  };
  const data = JSON.stringify(dataObj);
  res.end(dataObj);
});

server.listen("3000", () => {
  console.log("Server is listening on port 3000...");
});
