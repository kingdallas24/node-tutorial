const http = require("http");

// req reps the incoming request, res is what we are sending back
const sever = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`<h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href = ".">Back Home </a>
  `);
});

sever.listen(5000);
