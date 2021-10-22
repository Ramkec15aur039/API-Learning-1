/*
   controller Name : User
*/

/** ********************************  Import httpStatus **************************************** */
const httpStatus = require("http-status");

/** ********************************  Import Services ****************************************** */
const { userService } = require("../services");

/** ********************************  Import Utils ******************************************** */
const catchAsync = require("../utils/catchAsync");

/*
function createUser  -  This function is used to create an user
*/
const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body, req); // send to createUser request before create
  res.status(httpStatus.CREATED).send(user);
});

/*
function getUser  -  This function is used to get an user based on query
*/
const getUsers = catchAsync(async (req, res) => {
  const result = await userService.queryUser(req);
  res.send(result);
});

/*
exporting all the function using module exports
*/
module.exports = {
  createUser,
  getUsers,
};
