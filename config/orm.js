var connection = require("./connection.js");

var orm = {

  selectAll: function (table, callback) {
    var query = "SELECT * FROM "+table+";";

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });

  },

  // insertOne: function (table, cols, vals, callback) {
  //   var query = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + "); ";
  //   // INSERT INTO table (columns) VALUES (?);
  //   console.log(query);
  //   connection.query(query, vals, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     callback(result);
  //   });
  // },

  updateOne: function (table, burgerId, callback) {

    var query = "UPDATE "+table+" SET devoured=true WHERE id="+burgerId+";";
    
    // UPDATE table SET devoured=true WHERE id=burgerId;
    // console.log(query);
    
    connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }

};

// required in burger.js
module.exports = orm;