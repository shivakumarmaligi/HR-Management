//router level middleware
const { Router } = require("express");
const router = Router();
/*@HTTP GET METHOD
    @ACCESS PUBLIC
    @URL employee/home
 */
router.get("/home", (req, res) => {
  res.render("../views/home", { title: "Home page" });
});
/*@HTTP GET METHOD
    @ACCESS PUBLIC
    @URL employee/create-emp
 */
router.get("/create-emp", (req, res) => {
  res.render("../views/employees/create-emp", { title: "create employee" });
});
/*=====================END OF ALL GET METHODS===========================*/
/*@HTTP POST METHOD
    @ACCESS PRIVATE
    @URL employee/create-emp
 */
router.post("/create-emp", (req, res) => {
  res.send("ok");
  console.log(req.body);
});
module.exports = router;
