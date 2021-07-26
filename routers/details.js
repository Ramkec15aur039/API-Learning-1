//Libraries
const express = require("express");
const router = express.Router();

//Model
const Details = require("../models/details");

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

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Employee Details
 *   description: Employee details management and retrieval
 */

/**
 * @swagger
 * /details:
 *  get:
 *    summary: Get all the employees
 *    tags: [Employee Details]
 *    responses:
 *      200:
 *        description: Ok
 *        content:
 *          application/json:
 *             schema:
 *                type: array
 *                employees:
 *                    $ref: '#/components/schemas/EmployeeDetails'
 */

/**
 * @swagger
 * /details/{id}:
 *  get:
 *    summary: Get employees by id
 *    tags: [Employee Details]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *           type: string
 *           required: true
 *        description: Employee Id
 *    responses:
 *      "200":
 *        description: Ok
 *        content:
 *          application/json:
 *             schema:
 *                    $ref: '#/components/schemas/EmployeeDetails'
 *      "404":
 *        description: Employee not found
 */
