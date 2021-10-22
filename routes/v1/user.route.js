/** ************************** package Import ************************************ */
const express = require("express");

/** ************************** userController from controller Import ******************* */
const { userController } = require("../../controllers");

const router = express.Router();

/*
path - v1/users
router to create user and get user
post - to create user from getting user inputs
get - to show the gathered user details to admin or user
function validate - This function is to validate the user input
function userController - This function is to create the user after the auth and validation completed
*/

router.route("/").post(userController.createUser).get(userController.getUsers);

/*
path - /:userId
router to get user by id , update user by id and to delete user by id
post - to create user from getting user inputs
get - to show the gathered user details to admin or user
put - to update the collection
delete - the delete is used to delete the user based on id given
function auth - This function is to authenticate the valid user by tokens
function validate - This function is to validate the user input
function userController - This function is to create the user after the auth and validation completed

*/

// router
//   .route('/:userId')
//   .get(
//     userController.getUser,
//   )
//   .put(
//     userController.updateUser,
//   )
//   .delete(
//     userController.deleteUser,
//   );
module.exports = router;

//Get Data by ID
// router.get("/:id", async (req, res) => {
//   console.log("Get User by ID");
//   try {
//     console.log("Req id ->", req.params.id);
//     const getDetail = await User.findById(req.params.id);
//     console.log("Result", getDetail);
//     if (!getDetail) {
//       console.log("Not found");
//       res.sendStatus(404);
//     } else {
//       console.log("Found");
//       res.json(getDetail);
//     }
//   } catch (err) {
//     res.send("Error in fetching data" + err);
//   }
// });

//Update Data by ID
// router.put("/:id", async (req, res) => {
//   console.log(
//     "Put User by ID",
//     "Req params ->",
//     req.params,
//     "Req body ->",
//     req.body
//   );
//   const employeeId = req.params.id;
//   const updateData = req.body;
//   try {
//     const employeeData = await User.findById(employeeId);
//     console.log("Requested employee data", employeeData);
//     if (!employeeData) {
//       console.log("Not found");
//       res.sendStatus(404);
//     }
//     console.log("Employee data Found");
//     Object.assign(employeeData, updateData);
//     console.log("Modified employee data", employeeData);
//     await employeeData.save().then((data) => {
//       // console.log("Res check in update ->", res);
//       res.send(data);
//     });
//     // res.send("Update successfully");
//   } catch (err) {
//     res.send("Error in fetching data" + err);
//   }
// });

// //Delete Data by ID
// router.delete("/:id", async (req, res) => {
//   console.log(
//     "Put User by ID",
//     "Req params ->",
//     req.params,
//     "Req body ->",
//     req.body
//   );
//   const employeeId = req.params.id;
//   try {
//     const employeeData = await User.findById(employeeId);
//     console.log("Requested employee data", employeeData);
//     if (!employeeData) {
//       console.log("Not found");
//       res.sendStatus(404);
//     }
//     const deleteEmployeeData = await employeeData.remove();
//     res.status(200).send("This record deleted succfully");
//   } catch (err) {
//     res.send("Error in fetching data" + err);
//   }
// });

module.exports = router;