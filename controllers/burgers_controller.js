var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log(data);
    var hbsObj = {
      burger: data
    };
    console.log(hbsObj);
    res.render("index", hbsObj)
  });
});

// router.post("/api/burger", function (req, res) {
//   burger.insertOne([
//     "name", "sleepy"
//   ], [
//       req.body.name, req.body.sleepy
//     ], function (result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
// });

// router.put("/api/burger/:id", function (req, res) {

//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne({
//     devoured: req.body.devoured
//   },
//     condition, function (result) {
//       if (result.changedRows == 0) {
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
// });

// required in server.js
module.exports = router;