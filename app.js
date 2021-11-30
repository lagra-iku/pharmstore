var express = require("express");
var bodyParser = require('body-parser')
var { Client } = require('pg');
var path = require("path");

var app = express();

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))
app.use(express.static(path.join(__dirname, 'node_modules/fontawesome')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(  bodyParser.urlencoded({    extended: true,  }))

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));

const client = new Client({
  connectionString: process.env.DATABASE_URL || "postgres://lgzdcorcxbvrgv:d4ed8ed76ccfe15034e68dc5c7f13423d10ba2598997673571023783923e0783@ec2-34-241-19-183.eu-west-1.compute.amazonaws.com:5432/deemmih6prckja",
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();


// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });
// const connectionString = 'postgres://deemmih6prckja:d4ed8ed76ccfe15034e68dc5c7f13423d10ba2598997673571023783923e0783@localhost:5433/pharmstore';
// const client = new Client({
//     connectionString: connectionString
// });
// client.connect();

app.get('/store', function (req, res, next) {
  client.query('SELECT * FROM patients', function (err, result) {
      if (err) {
          console.log(err);
          res.status(400).send(err);
      }
      res.status(200).send(result.rows);
  });
});



app.listen(app.get("port"), function(){

    console.log("Server started on port " + app.get("port"));
})