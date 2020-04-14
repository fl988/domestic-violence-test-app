import React, { Component } from "react";

import * as Constants from "app/components/Constants.js";
import { openDatabase } from "expo-sqlite";
const db = openDatabase("dbUser");

class User {
  /****************************************************************************************************************************************************/
  //Checks if a user has already done their personal set up. Returns a boolean;
  checkUserSetUp() {
    return new Promise((resolve, reject) => {
      try {
        db.transaction((tx) => {
          tx.executeSql(
            "SELECT userSetUp FROM user;",
            [],
            (trans, rs) => { resolve(rs.rows.item(0).userSetUp == true); }, // prettier-ignore
            (tx, error) => { resolve(false); } // prettier-ignore
          );
        });
      } catch (error) {}
    });
  }

  /****************************************************************************************************************************************************/
  //Reads user's condition from 'user' table. Returns an array of conditions;
  grabUserConditionsAsArray() {
    return new Promise((resolve, reject) => {
      try {
        db.transaction((tx) => {
          tx.executeSql(
            "SELECT * FROM user;",
            [],
            (trans, rs) => {
              let item = rs.rows.item(0);
              let conditionArr = [
                item.condition1,
                item.condition2,
                item.condition3,
                item.condition4,
                item.condition5,
                item.condition6,
                item.condition7,
                item.condition8,
                item.condition9,
                item.condition10,
                item.condition11,
              ];
              resolve(conditionArr);
            },
            (tx, error) => {
              console.log("error grabUserConditionsAsArray = " + error);
            }
          );
        });
      } catch (error) {}
    });
  }

  /****************************************************************************************************************************************************/
  //Reads data from 'user' table. Returns a resultset;
  grabUserDetails() {
    return new Promise((resolve, reject) => {
      try {
        db.transaction((tx) => {
          tx.executeSql(
            "SELECT * FROM user;",
            [],
            (trans, rs) => { resolve(rs); }, // prettier-ignore
            (tx, error) => { console.log("error grabUserDetails = " + error); } // prettier-ignore
          );
        });
      } catch (error) {}
    });
  }

  /****************************************************************************************************************************************************/
  //Create Table 'user'. No return;
  createUser() {
    try {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, initials TEXT DEFAULT 'XX', dob TEXT DEFAULT (datetime('now')), userTypeId INT DEFAULT 0, userSetUp BOOLEAN DEFAULT 0, " +
              " condition1 BOOLEAN DEFAULT 1, " +
              " condition2 BOOLEAN DEFAULT 0, " +
              " condition3 BOOLEAN DEFAULT 0, " +
              " condition4 BOOLEAN DEFAULT 0, " +
              " condition5 BOOLEAN DEFAULT 0, " +
              " condition6 BOOLEAN DEFAULT 0, " +
              " condition7 BOOLEAN DEFAULT 0, " +
              " condition8 BOOLEAN DEFAULT 0, " +
              " condition9 BOOLEAN DEFAULT 0, " +
              " condition10 BOOLEAN DEFAULT 0, " +
              " condition11 BOOLEAN DEFAULT 0 " +
              ");",
            [],
            (tx, success) => {/* success */}, // prettier-ignore
            (tx, error) => { console.log("error createUser = " + error); } // prettier-ignore
          );
        },
        (tx, err) => {
          console.log(err);
        }
      );
    } catch (error) {}
  }

  /****************************************************************************************************************************************************/
  //Drops table 'user'. No return;
  dropUser() {
    try {
      db.transaction((tx) => {
        tx.executeSql("DROP TABLE IF EXISTS user");
      });
    } catch (error) {}
  }

  /****************************************************************************************************************************************************/
  //Inserts a new record into 'user' table. No return;
  insertUserDefaultRecord() {
    try {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "INSERT INTO " +
              " user(initials, dob, userTypeId) " +
              " VALUES('','','')",
            [],
            function(tx, success) {/* success */}, // prettier-ignore
            function (tx, error) {
              console.log("error insertUserDefaultRecord = " + error);
            }
          );
        },
        (tx, err) => {
          console.log(err);
        }
      );
    } catch (err) {}
  }

  /****************************************************************************************************************************************************/
  //Sets up the 'user' table for first timers.
  setUpUserTable() {
    try {
      db.transaction(
        (txn) => {
          txn.executeSql("SELECT * FROM user", [], (tx, rs) => {
            //console.log("item:", rs.rows.length);
            if (rs.rows.length == 0) {
              // No rows found on the 'user' table. We then drop if user table exist, create user table then insert a default record.
              this.dropUser();
              this.createUser();
              this.insertUserDefaultRecord();
            } else if (rs.rows.length > 1) {
              //I think there is an sql bug where it duplicates records hence having more than 1 row. We delete them here.
              txn.executeSql("DELETE FROM user WHERE id > 1;", []);
            }
          });
        },
        (tx, err) => {
          console.log(err);
          //This is 100% the error: => "no such table: user (code 1 SQLITE_ERROR[1]): , while compiling: SELECT * FROM user"
          //So to overcome this problem we'll have to create a "user" table then insert a default record.
          this.createUser();
          this.insertUserDefaultRecord();
        }
      );
    } catch (error) {}
  }

  /****************************************************************************************************************************************************/
  // Update Statements

  // update 'user' initials, no return;
  updateUserInitials(v) {
    try {
      db.transaction((tx) => {
        tx.executeSql("UPDATE USER SET initials = ? WHERE id = 1;", [v]);
      });
    } catch (error) {}
  }
  // update 'user' dob, no return;
  updateUserDOB(v) {
    try {
      db.transaction((tx) => {
        tx.executeSql("UPDATE USER SET dob = ? WHERE id = 1;", [v]);
      });
    } catch (error) {}
  }
  // update 'user' userTypeId, no return;
  updateUserType(v) {
    try {
      db.transaction((tx) => {
        tx.executeSql("UPDATE USER SET userTypeId = ? WHERE id = 1;", [v]);
      });
    } catch (error) {}
  }

  // updates 'user' condition(s), no return;
  updateUserConditions(conditionNum, conditionValue) {
    // console.log( "conditionNum: " + conditionNum + " conditionValue: " + conditionValue );
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE USER SET condition" + conditionNum + " = ? WHERE id = 1;",
          [conditionValue]
        );
      });
    } catch (error) {}
  }

  // update 'user' userSetUp, no return;
  updateUserSetUp() {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE USER SET userSetUp = 1 WHERE id = 1;",
          [],
          function(tx, success) {/* success */}, // prettier-ignore
          function (tx, error) {/* fail */} // prettier-ignore
        );
      });
    } catch (error) {}
  }

  /****************************************************************************************************************************************************/
  /****************************************************************************************************************************************************/
  /****************************************************************************************************************************************************/
  /****************************************************************** FOR DEBUGGINGS ******************************************************************/
  /****************************************************************************************************************************************************/
  /****************************************************************************************************************************************************/
  /****************************************************************************************************************************************************/
  //Create Table 'user'Type. No return;
  createUserType() {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS userType (id INTEGER PRIMARY KEY NOT NULL, userTypeId INT, description TEXT);"
        );
      });
    } catch (error) {}
  }

  grabUserDetailsOnConsole() {
    return new Promise((resolve, reject) => {
      try {
        db.transaction((tx) => {
          tx.executeSql("SELECT * FROM user;", [], (trans, rs) => {
            if (rs != null) {
              for (let x = 0; x < rs.rows.length; x++) {
                let item = rs.rows.item(x);
                console.log(item);
              }
            }
          });
        });
      } catch (error) {}
    });
  }

  /****************************************************************************************************************************************************/
  //Reads data from 'user' table. Returns a number of rows/records.
  getUserTableRowCount() {
    return new Promise((resolve, reject) => {
      try {
        db.transaction((tx) => {
          tx.executeSql(
            "SELECT count(*) as cnt FROM user;",
            [],
            (trans, rs) => {
              if (rs != null) {
                console.log("number of rows: " + rs.rows.item(0).cnt);
                resolve(rs);
              }
            }
          );
        });
      } catch (error) {}
    });
  }
}

const user = new User();
export default user;
