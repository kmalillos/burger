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

  // An example of objColVals would be {burger_name: "Double Cheese Burger", devoured: true}
  updateOne: function (table, objColVals, condition, callback) {

    var query = "UPDATE "+table+" SET "+objToSql(objColVals)+" WHERE "+condition+";";
    
    // UPDATE table SET col_name = 'col_value' WHERE condition;
    console.log(query);
    
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