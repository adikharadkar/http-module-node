// Import HTTP Module
const http = require("http");

// Function to create the server
const server = http.createServer((req, res) => {
  // Set the "Content-type" header
  res.setHeader("Content-type", "application/json");

  // JavaScript Object
  const dataObj = {
    name: "Aditya",
    age: 21,
    channel: "Brainstorm Codings",
  };

  console.log(http.METHODS);
  console.log(http.STATUS_CODES);
  console.log(req.url);
  console.log(req.headers);
  console.log(req.method);
  res.writeHead(200, "ok", { "content-type": "text/html" });
  res.write("<p>Hello</p>");
  //   Convert JavaScript Object into String
  const data = JSON.stringify(dataObj);

  //   Send JSON as response
  res.end("<h1>Hello</h1>");
});

// Server listening on port localhost:3000
server.listen("3000", () => {
  console.log("Server is listening on port 3000...");
});
