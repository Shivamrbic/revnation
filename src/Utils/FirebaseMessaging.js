import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
import APIKit from "../Networking/crypto";
import { BookingManager } from "@Networking";
import { store } from "../Redux/store";

export default class FirebaseMessaging {
  static requestUserPermission = async () => {
    const authStatus = messaging().requestPermission();
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };

  static getDeviceToken = async () => {
    const token = await messaging().getToken();
    return token;
  };

  static addPnToken = async () => {
    const token = await this.getDeviceToken();
    await AsyncStorage.setItem("pntoken", token);
    APIKit.defaults.headers.common["x-pn-token"] = `${token}`;
  };

  static removePnToken = async () => {
    const headers = { "x-pn-token": null };
    APIKit.updateHeaders(headers);
  };

  static initializeCall = (response, cb) => {
    console.log("====", response);
    BookingManager.getAppointmentDetails(response.appointment_det?.id)
      .then((res) => {
        store.dispatch({
          type: "START_CALL",
          payload: {
            vonage: response.vonage_det,
            appointmentDetails: res.data,
          },
        });
        cb();
      })
      .catch((err) => {
        cb(err);
      });
  };

  static navigateToScreens = (response, navigation) => {
    console.log(response);
    switch (response.target) {
      case "announcement":
        navigation.navigate("announcements", {
          fromPN: true,
        });
        break;
      case "call":
        this.initializeCall(response, navigation);
        break;
      case "appointment":
        break;
      default:
        navigation.navigate("Home");
    }
  };

  static handlePushNotification = async (navigation) => {
    await messaging().onMessage((remoteMessage) => {
      console.log(
        "Notification caused app to open from foreground state:",
        remoteMessage
      );
      if (!!remoteMessage.data.data) {
        let response = JSON.parse(remoteMessage.data.data);
        if (response.target !== "payment") {
          this.navigateToScreens(response, navigation);
        }
      }
    });

    await messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage
      );
      if (!!remoteMessage.data.data) {
        let response = JSON.parse(remoteMessage.data.data);
        this.navigateToScreens(response, navigation);
      }
    });
    await messaging().getInitialNotification((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state hey:",
        remoteMessage
      );
    });

    await messaging().setBackgroundMessageHandler((remoteMessage) => {
      console.log(
        "Notification setBackgroundMessageHandler state hey:",
        remoteMessage
      );
    });
  };
}
