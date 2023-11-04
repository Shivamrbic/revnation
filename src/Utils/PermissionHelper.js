import { StatusBar, Platform, Dimensions } from "react-native";
import Permissions from "react-native-permissions";

export default class PermissionHelper {
  static checkMediaPermissions = async () => {
    let isCameraAllowed = await Permissions.check("camera");
    //let isMicrophoneAllowed = Permissions.check("microphone");

    if (isCameraAllowed !== "authorized") {
      // console.log("not Permissions", forwardAction);
      isCameraAllowed = await Permissions.request("camera");
      console.log("new value", isCameraAllowed);
      //isMicrophoneAllowed = await Permissions.request("microphone");
      //forwardAction();
      return isCameraAllowed == "authorized";
    } else {
      console.log("not heyjkjkjljlj");
      return true;
    }
  };

  static notificationPermission = async () => {
    let isPNAllowed = await Permissions.check("notification");
    if (isPNAllowed !== "authorized") {
      isPNAllowed = await Permissions.request("notification");
      console.log("hey", isPNAllowed);
      return isPNAllowed == "authorized";
    } else {
      return true;
    }
  };

  static cameraPermission = async (forwardAction) => {
    let isCameraAllowed = await Permissions.check("camera");
    console.log(isCameraAllowed);
    if (isCameraAllowed !== "authorized") {
      isCameraAllowed = await Permissions.request("camera");
      alert("Enable Camera Permission");
    } else {
      forwardAction();
    }
  };

  static locationPermission = async () => {
    let isLocationAllowed = await Permissions.check("location");
    console.log("hey", isLocationAllowed);
    if (isLocationAllowed !== "authorized") {
      isLocationAllowed = await Permissions.request("location");
      console.log("hey", isLocationAllowed);
      return isLocationAllowed == "authorized";
    } else {
      return true;
    }
  };
}
