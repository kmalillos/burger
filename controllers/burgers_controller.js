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

// PUT request updates data.
// This is where the burger goes from "not devoured" to "devoured"
router.put("/api/burgers/:id", function(req, res) {
	var burgerId = "id=" + req.params.id;

	console.log("Burger status changed for", burgerId);

	burger.updateOne({
		// Force devoured = 1, as in {devoured: true}
		devoured: 1
	}, burgerId, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// required in server.js
module.exports = router;