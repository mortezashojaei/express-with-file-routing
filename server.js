const express = require("express");
const app = express();
var glob = require("glob"),
  path = require("path");

glob.sync("./routes/**/*.js").forEach(function (file) {
  require(path.resolve(file))(app);
});

app.listen(3000, () => console.log("Server is runing on prot 3000"));
