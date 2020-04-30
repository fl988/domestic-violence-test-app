import React, { Component, useState } from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Linking,
  Modal,
  Text,
} from "react-native";
import { Icon, Container, Header, Content, Left, Right } from "native-base";
import styles2 from "app/cstyles/android/androidStyles";




export default class Support extends Component {

  state = {
    modalVisible: false,
  };


// Beyond Blue 
  modalVisibleHandler = (v) => {
    this.setState({
      modalVisible: v,
    });
  };

  modalHeader = (
    <View style={styles.modalHeader}>
      <Text style={styles.title}>{"Beyond Blue"}</Text>
      <Text style={styles.number}>{"1300 22 4636"}</Text>
      <TouchableOpacity
          style={{ ...styles.action1}}
          onPress={() => {
            this.modalVisibleHandler(!this.state.modalVisible || false);
          }}
        >
          <Text style={styles.actionText1}>{"X"}</Text>
      </TouchableOpacity>
    </View>

    

  );

  modalBody = (
    <View style={styles.modalBody}>
      <Text style={styles.bodyText}>
        {"Beyond Blue is an Australian independent nonprofit organization working to address issues associated with depression, suicide, anxiety disorders and other related mental disorders."}
      </Text>
    </View>
  );

  modalFooter = (
    <View style={styles.modalFooter}>
      <View style={{ flexDirection: "row-reverse", margin: 10 }}>
        
        <TouchableOpacity
          style={{ ...styles.action2}}
        >
          <Text style={styles.actionText2} onPress={() => Linking.openURL(`tel:${1300224636}`)}>Call now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.action2}}
        >
          <Text style={styles.actionText2} onPress={() => Linking.openURL('https://www.beyondblue.org.au/')}>Go to Website
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  modalContainer = (
    <View style={styles.modalContainer}>
      {this.modalHeader}
      {this.modalBody}
      {this.modalFooter}
    </View>
  );

  Modal = () => {
    return (
      <Modal
        transparent={true}
        visible={this.state.modalVisible || false}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <View style={styles.modal}>
          <View>{this.modalContainer}</View>
        </View>
      </Modal>
    );
  };


  //Kindshelpline 
  modalVisibleHandler1 = (v) => {
    this.setState({
      modalVisible1: v,
    });
  };

  modalHeader1 = (
    <View style={styles.modalHeader}>
      <Text style={styles.title}>{"Kids Helpline"}</Text>
      <Text style={styles.number}>{"1800 55 1800"}</Text>
      <TouchableOpacity
          style={{ ...styles.action1}}
          onPress={() => {
            this.modalVisibleHandler1(!this.state.modalVisible1 || false);
          }}
        >
          <Text style={styles.actionText1}>{"X"}</Text>
      </TouchableOpacity>
    </View>
  );

  modalBody1 = (
    <View style={styles.modalBody}>
      <Text style={styles.bodyText}>
        {"Kids Helpline is an Australian free, private and confidential, telephone and online counselling service specifically for young people aged between 5 and 25."}
      </Text>
    </View>
  );

  modalFooter1 = (
    <View style={styles.modalFooter}>
      <View style={{ flexDirection: "row-reverse", margin: 10 }}>
        
        <TouchableOpacity
          style={{ ...styles.action2}}
        >
          <Text style={styles.actionText2} onPress={() => Linking.openURL(`tel:${1800551800}`)}>Call now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.action2}}
        >
          <Text style={styles.actionText2} onPress={() => Linking.openURL('https://kidshelpline.com.au/')}>Go to Website
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  modalContainer1 = (
    <View style={styles.modalContainer}>
      {this.modalHeader1}
      {this.modalBody1}
      {this.modalFooter1}
    </View>
  );

  Modal1 = () => {
    return (
      <Modal
        transparent={true}
        visible={this.state.modalVisible1 || false}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <View style={styles.modal}>
          <View>{this.modalContainer1}</View>
        </View>
      </Modal>
    );
  };



//lifeline 
modalVisibleHandler2 = (v) => {
  this.setState({
    modalVisible2: v,
  });
};

modalHeader2 = (
  <View style={styles.modalHeader}>
    <Text style={styles.title}>{"Lifeline Australia"}</Text>
    <Text style={styles.number}>{"13 11 14"}</Text>
    <TouchableOpacity
        style={{ ...styles.action1}}
        onPress={() => {
          this.modalVisibleHandler2(!this.state.modalVisible2 || false);
        }}
      >
        <Text style={styles.actionText1}>{"X"}</Text>
    </TouchableOpacity>
  </View>
);

modalBody2 = (
  <View style={styles.modalBody}>
    <Text style={styles.bodyText}>
      {"Lifeline is a non-profit organisation that provides free, 24-hour Telephone Crisis Support service in Australia. Volunteer Crisis Supporters provide suicide prevention services, mental health support and emotional assistance, not only via telephone but face-to-face and online."}
    </Text>
  </View>
);

modalFooter2 = (
  <View style={styles.modalFooter}>
    <View style={{ flexDirection: "row-reverse", margin: 10 }}>
      
      <TouchableOpacity
        style={{ ...styles.action2}}
      >
        <Text style={styles.actionText2} onPress={() => Linking.openURL(`tel:${131114}`)}>Call now
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.action2}}
      >
        <Text style={styles.actionText2} onPress={() => Linking.openURL('https://www.lifeline.org.au/')}>Go to Website
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

modalContainer2 = (
  <View style={styles.modalContainer}>
    {this.modalHeader2}
    {this.modalBody2}
    {this.modalFooter2}
  </View>
);

Modal2 = () => {
  return (
    <Modal
      transparent={true}
      visible={this.state.modalVisible2 || false}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      // }}
    >
      <View style={styles.modal}>
        <View>{this.modalContainer2}</View>
      </View>
    </Modal>
  );
};







  render() {
    return (
        <View style={styles.background}>

        <View>{this.Modal()}</View>
        <TouchableOpacity
          style={styles.Support}
          activeOpacity={0.5}
          onPress={() => {
            this.modalVisibleHandler(true);
          }}
        >
          <Image source={require('app/assets/bb-logo.png')} style = {styles.ImageClass} />
        </TouchableOpacity>

        <View>{this.Modal1()}</View>
        <TouchableOpacity
          style={styles.Support}
          activeOpacity={0.5}
          onPress={() => {
            this.modalVisibleHandler1(true);
          }}
        >
          <Image source={require('app/assets/Kids-Helpline_logo.png')} style = {styles.ImageClass} />
        </TouchableOpacity>

        <View>{this.Modal2()}</View>
        <TouchableOpacity
          style={styles.Support}
          activeOpacity={0.5}
          onPress={() => {
            this.modalVisibleHandler2(true);
          }}
        >
          <Image source={require('app/assets/lifeline-logo.png')} style = {styles.ImageClass} />
        </TouchableOpacity>



      </View>
    );
  }
}










const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#00000099",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "#101726",
    width: "80%",
    borderRadius: 5,
  },
  modalHeader: {},
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 40,
    color: "#fff",
    textAlign: "center",
    
  },
  number: {
    fontWeight: '400',
    fontSize: 15,
    padding: 5,
    color: "#fff",
    textAlign: 'center',
  },
  modalBody: {
    backgroundColor: "#101726",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  bodyText: {
    color: "#fff",
    marginVertical: 10,
  },
  modalFooter: {},
  action1: {
    position: 'absolute',
    left: 270,
    right: 0,
    top: 15,
    bottom: 0,
  },
  action2: {
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  actionText1: {
    color: "#fff",
    fontWeight: "bold",
  },
  actionText2: {
    color: "#fff",
    fontWeight: "bold",

  },
  Support: { 
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  ImageClass: {
    width: 350,
    height: 200,
    top: 70,
    bottom: 500,
    borderRadius: 40,
    alignSelf: 'center',
    resizeMode: 'cover',

  },

  background: {
    flex: 1,
    backgroundColor: "#101726",
  },
});

AppRegistry.registerComponent("Support", () => Support);
