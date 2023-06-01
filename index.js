//////////////////////////////////////  MEDIUM  //////////////////////////////////////////////

// This code will work if you add type module to package.json. The hard question wouldn't work with type module in the json file

// import fs from "fs";

// fs.readFile("./planets.txt", (err, data) => {
//   console.log(data.toString());
// });

////////////////////////////////////  HARD  //////////////////////////////////////////////////
const express = require("express");
const employeesFiles = require("./employees.json");

app = express();
port = 3000;

app.get("/employees", (req, res) => {
  res.json(employeesFiles);
  console.log(employeesFiles);
});

app.get("/employees/:employeeID", (req, res) => {
  const employeeID = req.params.employeeID;
  const employee = employeesFiles.employees.find(
    (emp) => emp.employeeID === employeeID
  );

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
