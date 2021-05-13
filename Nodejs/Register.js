// import required modules
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());
const port = 3000;

// Makes it easier to read JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "automobile",
});
// Create a Customer
app.post("/register", (req, res) => {
  console.log(`Creating customer ... `);

  console.log("body", req.body);

  connection.query(
    `INSERT INTO register (email,fname,lname,pass,cpass,address,phno) VALUES  ('${req.body.email}','${req.body.fname}','${req.body.lname}','${req.body.pass}','${req.body.cpass}','${req.body.address}','${req.body.phno}')`,
    (err, rows) => {
      if (err) {
        res.json({ message: "User Already exist", errorcode: "403" });
      } else {
        res.json({ message: "Register successfull", errorcode: "200" });
      }
    }
  );
});

// login api

app.get("/login/", (req, res) => {
  const email = req.query.email;
  const password = req.query.passwords;
  console.log(
    `Fetch login  with username and password ${email},${password}...`
  );
  var query =
    "SELECT * FROM register WHERE email = '" +
    email +
    "'and pass='" +
    password +
    "'";
  console.log(query);
  connection.query(query, function (error, result, fields) {
    connection.on("error", (error) => {
      console.log("[Mysql error]", error);
    });
    console.log(result);
    if (result && result.length > 0) {
      var insertt = "INSERT INTO customers (email,password) values(?,?)";
      values = [email, password];
      console.log("executing:" + insertt);
      connection.query(insertt, values, (error, result, fields) => {
        connection.on("error", (error) => {
          console.log("[Mysql error]", error);
        });
        res.json({ message: "user login successfull", errorcode: "200" });

        console.log(" User Registartion Successful");
      });
    } else {
      res.json({ message: "Invalid username or password", errorcode: "403" });
    }
  });
});

app.post("/adminloginn", (req, res, result) => {
  console.log(`login admin ... `);

  console.log("body", req.body);
  var query = `SELECT * FROM admin WHERE email ='${req.body.email}'and password='${req.body.password}'`;
  console.log(query);
  connection.query(query, (err, result, rows) => {
    if (result && result.length > 0) {
      res.json({ message: "admin login successfull", errorcode: "200" });
    } else {
      res.json({ message: "Invalid username or password", errorcode: "403" });
    }
  });
});

// Insert a car
app.post("/AddCar", (req, res) => {
  console.log(`Inserting car ... `);

  console.log("body", req.body);

  connection.query(
    `INSERT INTO inventory (brand,model,price,color,year,type,Image) VALUES  ('${req.body.brand}','${req.body.model}','${req.body.price}','${req.body.color}','${req.body.year}','${req.body.type}','${req.body.img}')`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

// Listen
app.listen(port, () => {
  console.log(`Student app listening at http://localhost:${port}`);
});
