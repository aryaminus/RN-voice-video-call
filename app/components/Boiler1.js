import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  DeviceEventEmitter
} from "react-native";

//import { StackNavigator } from "react-navigation";
import { createIconSet } from "react-native-vector-icons";
import Button from "react-native-button";
import VoxImplant from "react-native-voximplant";
var update = require("react-addons-update");

import ColorSwitch from "./ColorSwitch";
import ToggleButton from "./ToggleButton";
import { Keypad } from "./Keypad";



var currentCallId,
  uaInstance,
  number = "",
  settings_p2p = false,
  settings_video = false,
  micMuted = false,
  loudSpeaker = false,
  sendVideo = true,
  camera = "front";

export default class Boiler extends Component {
  constructor() {
    super();
    this.state = {
      modalText: "",
      isModalOpen: false,
      status: "idle"
    };
    VoxImplant.SDK.switchToCamera(camera);
  }

  componentDidMount() {
    uaInstance = this;
    this._thisNumber.focus();
  }

  /*updateNumber(text) {
    number = text;
    this._thisNumber.setNativeProps({ text: text });
  }*/

  /*onSubmit(event) {
    this.makeCall();
  }*/

  /*makeCall(event) {
    console.log("calling " + number);
    VoxImplant.SDK.createCall(
      number,
      settings_video,
      null,
      function(callId) {
        currentCallId = callId;
        if (settings_p2p)
          VoxImplant.SDK.startCall(callId, { "X-DirectCall": "true" });
        else VoxImplant.SDK.startCall(callId);
        this.setState(
          update(this.state, {
            $merge: {
              status: "calling"
            }
          })
        );
      }.bind(this)
    );
  }*/

  onPressBackdrop() {
    if (this.state.status != "inboundcall") this.closeModal();
  }


  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    headerLeft: null
  };

  render() {
    var button,
      modalButtons = <View style={styles.modalButtons} />,
      settingsTable,
      keypad,
      videoPanel,
      callingText,
      numberInput,
      flipButton;



    if (this.state.status == "idle") {
      );


    } else if (
      this.state.status == "calling" ||
      this.state.status == "connected"
    ) {
    } else if (this.state.status == "connected_keypad") {


      if (this.state.status == "connected_keypad")
    } else if (this.state.status == "inboundcall") {
    }

    return (
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  modalBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20
  },
  innerContainer: {
    borderRadius: 10
  },
  innerContainerTransparent: {
    backgroundColor: "#fff",
    padding: 20
  },
  forminput: {
    borderRadius: 4,
    padding: 5,
    marginBottom: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5
  },
  button: {
    margin: 15
  },
  buttonText: {
    color: "#007aff",
    fontFamily: ".HelveticaNeueInterface-MediumP4",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center"
  },
  useragent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column"
  },
  selfview: {
    position: "relative",
    marginTop: -80,
    left: 110,
    width: 80,
    height: 60,
    borderColor: "#007AFF",
    borderWidth: 1,
    alignSelf: "center",
    backgroundColor: "#000000"
  },
  remotevideo: {
    width: 320,
    height: 240,
    borderColor: "#FF1300",
    borderWidth: 1,
    alignSelf: "center",
    backgroundColor: "#000000"
  },
  videopanel: {
    marginTop: 10,
    marginBottom: 20
  },
  numberinput: {
    margin: 10
  },
  callingLabel: {
    alignSelf: "center",
    fontSize: 18,
    marginVertical: 20
  },
  callbutton: {
    alignSelf: "center",
    borderColor: "#4CD964",
    borderWidth: 1,
    color: "#4CD964",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  cancelbutton: {
    alignSelf: "center",
    borderColor: "#FF3B30",
    borderWidth: 1,
    color: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  modalButtons: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  settings_switch: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  settings_label: {
    margin: 5
  },
  settings_table: {
    borderTopWidth: 0.5,
    borderColor: "#000000",
    marginTop: 15,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  icon: {
    width: 70,
    height: 70,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 35
  },
  phone_icon: {
    width: 70,
    height: 70,
    alignSelf: "center",
    borderColor: "#4CD964",
    backgroundColor: "#4CD964",
    marginHorizontal: 10
  },
  keypad_icon: {
    borderColor: "#2B2B2B",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    borderWidth: 0.5
  },
  cancel_icon: {
    alignSelf: "center",
    borderColor: "#FF3B30",
    backgroundColor: "#FF3B30"
  },
  hidekeypad: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: "center",
    color: "#007aff",
    fontFamily: ".HelveticaNeueInterface-MediumP4",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center"
  }
});

AppRegistry.registerComponent("Boiler", () => Boiler);
