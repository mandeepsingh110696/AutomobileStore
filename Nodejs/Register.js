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
    `INSERT INTO register (email,fname,lname,pass,address,phno) VALUES  ('${req.body.email}','${req.body.fname}','${req.body.lname}','${req.body.pass}','${req.body.address}','${req.body.phno}')`,
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
      var insertt =
        "INSERT INTO customers(email,password) values('" +
        email +
        "','" +
        password +
        "')";

      values = [email, password];
      console.log("executing:" + insertt);
      connection.query(insertt, (error, result, fields) => {
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
    `INSERT INTO inventory (brand,model,price,color,year,type,description,Image) VALUES  ('${req.body.brand}','${req.body.model}','${req.body.price}','${req.body.color}','${req.body.year}','${req.body.type}','${req.body.desc}','${req.body.img}')`,
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
app.get("/viewAllCars/:filter/:brand/:color", (req, res) => {
  var sql = "";
  console.log("Fetching all cars...");
  var filter = req.params.filter;
  var brand = req.params.brand;
  var color = req.params.color;

  console.log(req.params);
  if (filter == "All") {
    sql = "SELECT * FROM inventory  where isBooked=1 ";
  } else {
    sql =
      "SELECT * FROM inventory where isBooked=1 and type='" +
      filter +
      "' and brand='" +
      brand +
      "' and color='" +
      color +
      "'";
  }
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("rows", rows);
    res.json(rows);
  });
});

// Get All cars with filter
app.get("/viewAllCar/:filter", (req, res) => {
  var sql = "";
  console.log("Fetching all cars...");
  var filter = req.params.filter;
  console.log(req.params);
  if (filter == "All") {
    sql = "SELECT * FROM inventory ";
  } else {
    sql = "SELECT * FROM inventory where type='" + filter + "'";
  }
  console.log(sql);
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("rows", rows);
    res.json(rows);
  });
});

// Car Reservation
app.post("/bookingcar", (req, res) => {
  console.log(`booking car ... `);

  console.log("body", req.body);

  connection.query(
    `INSERT INTO reservation (invt_id,fname,lname,address,email,Phoneno,sdate) VALUES  ('${req.body.carcode}','${req.body.fname}','${req.body.lname}','${req.body.address}','${req.body.cemail}','${req.body.cphone}','${req.body.sdate}')`,
    (err, rows) => {
      if (err) throw err;
      var carcode = req.body.carcode;
      connection.query(
        `UPDATE inventory SET isBooked =0 WHERE InvtId = ${carcode}`,
        (err, rows) => {
          if (err) throw err;
          res.send(rows);
        }
      );
    }
  );
});

// cancel reservation
app.delete("/cancelbooking/:id", (req, res) => {
  console.log(`Delete car id [${req.params.id}]... `);
  connection.query(
    `DELETE FROM reservation WHERE invt_id = ${req.params.id}`,
    (err, rows) => {
      if (err) throw err;
      var carcode = req.params.id;
      connection.query(
        `UPDATE inventory SET isBooked =1 WHERE InvtId = ${carcode}`,
        (err, rows) => {
          if (err) throw err;
          res.send(rows);
        }
      );
    }
  );
});

app.post("/exchange", (req, res) => {
  console.log(`Inserting  exchnage car info  ... `);

  console.log("body", req.body);

  connection.query(
    `INSERT INTO exchange_car (brand,model,color,car_desc,current_owner,price) VALUES  ('${req.body.BrandName}','${req.body.Model}','${req.body.Color}','${req.body.Description}','${req.body.currentOwner}','${req.body.EstimatedPrice}')`,
    (err, rows) => {
      if (err) throw err;
      res.json({ message: "exchange car info send successfully" });
    }
  );
});

app.post("/finance", (req, res) => {
  console.log(`Inserting  finance car info  ... `);

  console.log("body", req.body);

  connection.query(
    `INSERT INTO finance_car (loan_term,installment_interval,InvtId) VALUES  ('${req.body.loanterm}','${req.body.interval}','${req.body.Invt_Id}')`,
    (err, rows) => {
      if (err) throw err;
      res.json({ message: "Finance info send successfully" });
    }
  );
});

// booking history
app.get("/bookhistory/:id", (req, res) => {
  console.log("params:", req.params);

  const id = req.params.id;
  console.log(`Fetching Car with id ${id}...`);
  var sql = `SELECT * FROM reservation a,inventory b  WHERE a.invt_id=b.InvtId and email = '${id}'`;
  console.log(sql);
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    if (rows.length > 0) {
      res.json(rows);
      console.log("Car retreived Successfully");
    } else {
      res.json({ message: "Invalid Car Id", errorcode: "403" });
    }
  });
});

app.post("/contact", (req, res) => {
  console.log(`Inserting  contact info  ... `);

  console.log("body", req.body);

  connection.query(
    `INSERT INTO contact (name,lname,email,date,country,message,reasonmessage) VALUES  ('${req.body.name}','${req.body.lname}','${req.body.emal}','${req.body.date}','${req.body.country}','${req.body.message}','${req.body.reasonmessage}')`,
    (err, rows) => {
      if (err) throw err;
      res.json({ message: "Contact info send successfully" });
    }
  );
});

// Get All Customers
app.get("/viewCustomers", (req, res) => {
  console.log("Fetching all customers...");

  const sql = "SELECT * FROM register";
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
