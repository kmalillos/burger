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

  insertOne: function (table, cols, vals, callback) {
    var query = "INSERT INTO "+table+" ("+cols+") VALUES (?);";
    // INSERT INTO table (columns) VALUES (?);
    connection.query(query, vals, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  updateOne: function (table, burgerId, callback) {
    var query = "UPDATE "+table+" SET devoured=true WHERE id="+burgerId+";";
    // UPDATE table SET devoured=true WHERE id=burgerId;
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