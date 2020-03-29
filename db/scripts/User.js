import React, { Component } from "react";

import * as Constants from "../../components/Constants.js";
import { openDatabase } from "expo-sqlite";
const db = openDatabase("dbUser");

class User {
  /****************************************************************************************************************************************************/
  //Reads data from 'user' table. Returns a resultset;
  grabUserDetails() {
    return new Promise((resolve, reject) => {
      try {
        db.transaction(tx => {
          tx.executeSql("SELECT * FROM user;", [], (trans, rs) => {
            resolve(rs);
          });
        });
      } catch (error) {}
    });
  }

  /****************************************************************************************************************************************************/
  //Create Table 'user'. No return;
  createUser() {
    try {
      db.transaction(tx => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, initials TEXT DEFAULT 'XX', dob TEXT DEFAULT (datetime('now')), userTypeId INT DEFAULT 0);"
        );
      });
    } catch (error) {}
  }

  /****************************************************************************************************************************************************/
  //Drops table 'user'. No return;
  dropUser() {
    try {
      db.transaction(tx => {
        tx.executeSql("DROP TABLE user");
      });
    } catch (error) {}
  }

  /****************************************************************************************************************************************************/
  //Inserts a new record into 'user' table. No return;
  insertUserDefaultRecord() {
    try {
      db.transaction(tx => {
        tx.executeSql(
          "INSERT INTO user(initials, dob, userTypeId) VALUES('','','')",
          []
        );
      });
    } catch (err) {}
  }

  /****************************************************************************************************************************************************/
  //Sets up the 'user' table for first timers.
  setUpUserTable() {
    try {
      db.transaction(
        txn => {
          txn.executeSql("SELECT * FROM user", [], (tx, rs) => {
            //console.log("item:", rs.rows.length);
            if (rs.rows.length == 0) {
              this.dropUser();
              this.createUser();
              this.insertUserDefaultRecord();
            } else if (rs.rows.length > 1) {
              txn.executeSql("DELETE FROM user WHERE id > 1;", []); //I think there is an sql bug where it duplicates records hence having more than 1 row. We delete them here.
            }
          });
        },
        (tx, err) => {
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
      db.transaction(tx => {
        tx.executeSql("UPDATE USER SET initials = ? WHERE id = 1;", [v]);
      });
    } catch (error) {}
  }
  // update 'user' dob, no return;
  updateUserDOB(v) {
    try {
      db.transaction(tx => {
        tx.executeSql("UPDATE USER SET dob = ? WHERE id = 1;", [v]);
      });
    } catch (error) {}
  }
  // update 'user' userTypeId, no return;
  updateUserType(v) {
    try {
      db.transaction(tx => {
        tx.executeSql("UPDATE USER SET userTypeId = ? WHERE id = 1;", [v]);
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
      db.transaction(tx => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS userType (id INTEGER PRIMARY KEY NOT NULL, userTypeId INT, description TEXT);"
        );
      });
    } catch (error) {}
  }

  grabUserDetailsOnConsole() {
    return new Promise((resolve, reject) => {
      try {
        db.transaction(tx => {
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
        db.transaction(tx => {
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
