var connection = require("./connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
};

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

  updateOne: function (table, condition, callback) {

    var query = "UPDATE "+table+" SET devoured=true WHERE "+condition+";";
    
    // UPDATE table SET devoured=true WHERE id=condition;
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