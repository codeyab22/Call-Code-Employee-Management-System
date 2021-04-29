var mysql = require("mysql");
var app = require("../app");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "company_db"
  });

exports.viewAllEmployees = () => {
    var queryString = "SELECT e.emp_id, e.first_name, e.last_name, title, salary, dept_name, " +
      "e2.first_name AS manager_first_name, e2.last_name AS manager_last_name " +
      "FROM employees AS e " +
      "INNER JOIN company_role AS c ON e.emp_role_id = c.role_id " +
      "INNER JOIN department AS d ON c.dept_id = d.dept_id " +
      "LEFT JOIN employees AS e2 ON e.manager_id = e2.emp_id;";
   
   connection.query(queryString, function(err,res) {
      if(err) {throw err}
      console.log(res)
      console.table(res)
       
    app.start();
   });
};

exports.getAllRoles = (cb) => {
 connection.query("SELECT * FROM company_role", function(err,results) {
      if(err) throw err;
      cb(results);
   });
}

exports.getAllDepartments = (cb) => {
    connection.query("SELECT * FROM department", function(err,results) {
      if(err) throw err;
      cb(results);
   });
}

exports.getAllEmployees = (cb) => {
   connection.query("SELECT * FROM employees", function(err,results) {
     if(err) throw err;
     cb(results);
  });
}
