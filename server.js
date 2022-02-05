// Import HTTP Module
const http = require("http");

// Function to create the server
const server = http.createServer((req, res) => {
  // METHODS
  // console.log(http.METHODS);

  // http://localhost:3000/home
  // pathanme is /home

  // Store the PATH in a variable using "url" property
  const pathname = req.url;

  // Create "/" and "/home" routes
  if (pathname == "/" || pathname == "/home") {
    // Set a header "content-type" to "text/html"
    res.writeHead(200, "ok", {
      "content-type": "text/html",
    });

    // Send a response
    res.write("<h1>Welcome to the home page</h1>");
  } else if (pathname == "/cars") {
    // Set a header "content-type" to "text/html"
    res.writeHead(200, "ok", {
      "content-type": "text/html",
    });

    // Send a response
    res.write("<h1>Welcome to the world of cars</h1>");
  } else if (pathname == "/car") {
    // Set a header "content-type" to "text/html"
    res.writeHead(200, "ok", {
      "content-type": "text/html",
    });

    // Send a response
    res.write("Welcome to the particular car");

    // IF user requests none of the above routes
  } else {
    // Set a header "content-type" to "text/html"
    res.writeHead(200, "ok", {
      "content-type": "text/html",
    });

    // Send a response
    res.write("<h1>Page not found!</h1>");
  }

  // STATUS_CODES
  // console.log(http.STATUS_CODES);
});

// Server listening on port localhost:3000
server.listen("3000", () => {
  console.log("Server is listening on port 3000...");
});
