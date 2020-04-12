import React, { Component } from "react";
import { View, Text } from "react-native";

import db from "app/db/scripts/User.js";
import styles from "app/cstyles/android/androidStyles.js";
import SplashScreen from "app/components/SplashScreen";
import UserSetupSwiper from "app/components/UserSetupSwiper";
import HomeDashboard from "app/components/HomeDashboard";

export default class App extends Component {
  state = {
    userLanding: <HomeDashboard />,
  };

  //"componentDidMount" will execute automatically before render()
  componentDidMount() {
    db.setUpUserTable();
    this.checkUser();
  }

  //This function is only invoked when a user has successfully confirmed their details are all correct by pressing the "Yes" button upon confirmation.
  completeUserSetUp = () => {
    db.updateUserSetUp(); // We set the 'userSetUp' boolean in our table 'user' to true;
    this.checkUser(); // We now then check the 'userSetUp' value if it's true or false then render the proper components.
  };

  async checkUser() {
    let isUserAlreadySet = await db.checkUserSetUp();
    if (isUserAlreadySet) {
      this.setState({
        userLanding: <HomeDashboard />,
      });
    } else {
      this.setState({
        userLanding: <UserSetupSwiper completeUserSetUp={this.completeUserSetUp} /> // prettier-ignore
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SplashScreen />
        {this.state.userLanding}
      </View>
    );
  }
}

/*
Git Hub Command Line
  Modified Files
  - 'git status' to see whats up
  - 'git commit -am "your message"' to bundle your modified changes ready to be pushed into your github repository. Note: your changes are not yet in the repository.

  New Files and Folders
  - 'git status' to see the list of folders and files
  - 'git add <file OR folder>' to add it in to your local repository officially. EXAMPLE: git add components/Constants.js
  - 'git commit -am "your message" to bundle your new file/folder and be ready to be pushed into your githb  repository.

  Checking in your changes.
  - 'git commit origin master' this is the code you need to push in your changes into github.
*/
