//Libraries
const express = require("express");
const router = express.Router();

//Model
const Details = require("../models/details");

//Create details
router.post("/", async (req, res) => {
  console.log("Request body for create details ->", req.body);
  const reqBodyDetail = new Details({
    name: req.body.name,
    professionalTitle: req.body.professionalTitle,
    dateOfBirth: req.body.dateOfBirth,
    designation: req.body.designation,
  });

  try {
    const postDetails = await reqBodyDetail.save();
    res.json(postDetails);
  } catch (err) {
    res.send("Error" + " " + err);
  }
});

//Get All Data
router.get("/", async (req, res) => {
  console.log("Get details");
  try {
    const getDetails = await Details.find();
    res.json(getDetails);
  } catch (err) {
    res.send("Error in fetching data" + err);
  }
});

//Get Data by ID
router.get("/:id", async (req, res) => {
  console.log("Get details by ID");
  try {
    console.log("Req id ->", req.params.id);
    const getDetail = await Details.findById(req.params.id);
    console.log("Result", getDetail);
    if (!getDetail) {
      console.log("Not found");
      res.sendStatus(404);
    } else {
      console.log("Found");
      res.json(getDetail);
    }
  } catch (err) {
    res.send("Error in fetching data" + err);
  }
});

//Update Data by ID
router.put("/:id", async (req, res) => {
  console.log(
    "Put details by ID",
    "Req params ->",
    req.params,
    "Req body ->",
    req.body
  );
  const employeeId = req.params.id;
  const updateData = req.body;
  try {
    const employeeData = await Details.findById(employeeId);
    console.log("Requested employee data", employeeData);
    if (!employeeData) {
      console.log("Not found");
      res.sendStatus(404);
    }
    console.log("Employee data Found");
    Object.assign(employeeData, updateData);
    console.log("Modified employee data", employeeData);
    await employeeData.save().then((data) => {
      // console.log("Res check in update ->", res);
      res.send(data);
    });
    // res.send("Update successfully");
  } catch (err) {
    res.send("Error in fetching data" + err);
  }
});

//Delete Data by ID
router.delete("/:id", async (req, res) => {
  console.log(
    "Put details by ID",
    "Req params ->",
    req.params,
    "Req body ->",
    req.body
  );
  const employeeId = req.params.id;
  try {
    const employeeData = await Details.findById(employeeId);
    console.log("Requested employee data", employeeData);
    if (!employeeData) {
      console.log("Not found");
      res.sendStatus(404);
    }
    const deleteEmployeeData = await employeeData.remove();
    res.status(200).send("This record deleted succfully");
  } catch (err) {
    res.send("Error in fetching data" + err);
  }
});

module.exports = router;
