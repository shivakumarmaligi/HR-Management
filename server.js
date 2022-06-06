const express = require("express");
const { PORT, MONGODB_URL } = require("./config");

//create top level function
const app = express();
const { connect } = require("mongoose");
const { engine } = require("express-handlebars");

//importing all routing module
const EmployeeRoute = require("./Route/employee");
const { join } = require("path");
//!======================database connection STARTS here===============
let DatabaseConnection = async () => {
  await connect(MONGODB_URL);
  console.log("database connected");
};
DatabaseConnection();
//!======================database connection ENDS here===============
//?=================to do template engine middleare STARTS here==================
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
//?=================to do template engine middleare ENDS here==================
//*=================BUILT in middlewares STARTS Here====================
app.use(express.static(join(__dirname, "public")));
app.use(express.static(join(__dirname, "node_modules")));
app.use(express.urlencoded({ extended: true }));
//*=================BUILT in middlewares ENDS Here====================

//route setting for employees
app.use("/employee", EmployeeRoute);
//listen a port
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`HRM app is running on port number ${PORT}`);
});
