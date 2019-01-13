var orm = require("../config/orm")

var burger = {

  selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },

    // // The variables cols and vals are arrays.
    // insertOne: function(cols, vals, callback) {
    //   orm.create("burgers", cols, vals, function(res) {
    //     callback(res);
    //   });
    // },

    // updateOne: function(objColVals, condition, callback) {
    //   orm.updateOne("burgers", objColVals, condition, function(res) {
    //     callback(res);
    //   });
    // }

};

// required in burgers_controller.js
module.exports = burger;