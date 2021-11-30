var express = require("express");
var bodyParser = require('body-parser')
var path = require("path");

var app = express();

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))
app.use(express.static(path.join(__dirname, 'node_modules/fontawesome')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));

app.listen(app.get("port"), function(){

    console.log("Server started on port " + app.get("port"));
})