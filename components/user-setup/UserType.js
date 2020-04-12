import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as Constants from "app/components/Constants.js";
// Database
import db from "app/db/scripts/User.js";
// Styles
import styles from "app/cstyles/android/androidStyles.js";
import CustomModal from "app/components/user-setup/CustomModal";

const UserType = (props) => {
  /***********************************************************************************/
  // States
  const [modalVisible, setModalVisible] = useState(false); //State for our modal
  const [getUserDetails, setUserDetails] = useState(""); //State for our user detail display inside the modal body

  /***********************************************************************************/
  // Functional components
  const modalVisibleHandler = (v) => {
    setModalVisible(v);
  };

  const userTypeHandler = (v) => {
    db.updateUserType(v);
    props.onNext();
    readUserDetails();
  };

  async function readUserDetails() {
    let rs = await db.grabUserDetails();
    if (rs != null) {
      let item = rs.rows.item(0);
      setUserDetails(
        "Initials: " +
          item.initials +
          "\n\nDOB: " +
          item.dob +
          "\n\nType of User: " +
          Constants.userTypeDescArr[item.userTypeId - 1]
      );
    }
  }

  return (
    <View style={styles.frame}>
      {/***********************************************************************************************/}
      {/* MODAL */}
      <CustomModal
        modalVisible={modalVisible}
        modalVisibleHandler={modalVisibleHandler}
        modalHeader={"Confirmation"}
        modalBody={
          "Could you please confirm if your details below are all correct. \n\n" +
          getUserDetails
        }
      />

      {/***********************************************************************************************/}
      {/* JUST LEARNING BUTTON */}
      <TouchableOpacity
        style={styles.userTypeBtn}
        onPress={() => {
          // modalVisibleHandler(true);
          userTypeHandler(Constants.USER_TYPE_LEARNING);
        }}
      >
        <Text style={styles.buttonText}>{"Just Learning"}</Text>
      </TouchableOpacity>

      {/***********************************************************************************************/}
      {/* PARENT / GUARDIAN BUTTON */}
      <TouchableOpacity
        style={styles.userTypeBtn}
        onPress={() => {
          // modalVisibleHandler(true);
          userTypeHandler(Constants.USER_TYPE_PARENT_GUARDIAN);
        }}
      >
        <Text style={styles.buttonText}>{"A Parent / Guardian"}</Text>
      </TouchableOpacity>

      {/***********************************************************************************************/}
      {/* AVO HOLDER BUTTON */}
      <TouchableOpacity
        style={styles.userTypeBtn}
        onPress={() => {
          // modalVisibleHandler(true);
          userTypeHandler(Constants.USER_TYPE_AVO_HOLDER);
        }}
      >
        <Text style={styles.buttonText}>{"An AVO Holder"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserType;
