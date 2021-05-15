// all node api's
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

// Update a car
app.put("/editCar/:id", (req, res) => {
  console.log("params:", req.params);
  const id = req.params.id;
  console.log("body:", req.body);

  connection.query(
    `UPDATE inventory SET brand = '${req.body.brand}', model = '${req.body.model}',
      price = '${req.body.price}',color = '${req.body.color}',year = '${req.body.year}',type = '${req.body.type}',Image = '${req.body.img}' ` +
      `WHERE InvtId = ${id}`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

// Delete a car
app.delete("/deleteCar/:id", (req, res, result) => {
  console.log(`Delete car id [${req.params.id}]... `);

  connection.query(
    `DELETE FROM inventory WHERE InvtId = ${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err;
      console.log(result.affectedRows);
      if (result.affectedRows) {
        res.json({ message: "Car Deleted Successfully", errorcode: "200" });

        console.log("Car Deleted Successfully");
      } else {
        res.json({ message: "Invalid Inventory Id", errorcode: "403" });
      }
    }
  );
});

// View Car By Id
app.get("/viewCar/:id", (req, res) => {
  console.log("params:", req.params);

  const id = req.params.id;
  console.log(`Fetching Car with id ${id}...`);

  connection.query(
    `SELECT * FROM inventory WHERE InvtId = ${id}`,
    (err, rows) => {
      if (err) throw err;
      if (rows.length > 0) {
        res.json(rows);
        console.log("Car retreived Successfully");
      } else {
        res.json({ message: "Invalid Inventory Id", errorcode: "403" });
      }
    }
  );
});


// Get All cars with filter
app.get("/viewAllCars/:filter", (req, res) => {
  var sql = "";
  console.log("Fetching all cars...");
  var filter = req.params.filter;
  console.log(req.params);
  if (filter == "all") {
    sql = "SELECT * FROM inventory ";
  } else {
    sql = "SELECT * FROM inventory where type='" + filter + "'";
  }
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("rows", rows);
    res.json(rows);
  });
});
// Listen
app.listen(port, () => {
  console.log(`Student app listening at http://localhost:${port}`);
});
