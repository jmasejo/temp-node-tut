const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Here is short history");
  }

  res.end(
    `<h1>oops!</h1><p>We can't seem to find the page that your are looking for </p>
    <a href="/">Back home</a>`
  );
});

server.listen(5000);
