/*
   Service Name : Users
*/
/** *************************** Models Import *************************************** */
const { User } = require("../models");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBodyData, req) => {
  console.log("Request body for create User ->", userBodyData);
  const userBody = userBodyData;
  try {
    const user = await User.create(userBody);
    return user;
  } catch (err) {
    console.log("Error" + " " + err);
  }
};

const queryUser = async (req) => {
  console.log("Get User");
  try {
    const getUser = await User.find();
    return getUser;
  } catch (err) {
    console.log("Error in fetching data" + err);
  }
};

// exporting all the methods
module.exports = {
  createUser,
  queryUser
};
