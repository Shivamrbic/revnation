import { StatusBar, Platform, Dimensions } from "react-native";
export default class DeviceHelper {
  static isIphoneX() {
    let { height, width } = Dimensions.get("window");
    return (
      Platform.OS === "ios" &&
      !Platform.isPad &&
      (height >= 812 || width >= 812)
    );
  }

  //iPhone X condition helper
  static ifIphoneX(iphoneXStyle, regularStyle) {
    return this.isIphoneX() ? iphoneXStyle : regularStyle;
  }

  //Status bar height
  static getStatusBarHeight() {
    return Platform.select({
      ios: this.ifIphoneX(44, 20),
      android: 0,
    });
  }
  static checkPassword(val) {
    const regex = {
      min_lower_case: /(.*[a-z]){1,}/,
      min_upper_case: /(.*[A-Z]){1,}/,
      min_number_chars: /(.*[0-9]){1,}/,
      min_special_chars: /^(((?!.*[;:*]).*\W{1,}).*)+$/,
      min_length: /^.{6,23}$/,
    };
    const valid1 =
      regex.min_lower_case.test(val) && regex.min_upper_case.test(val);
    const valid2 =
      regex.min_number_chars.test(val) && regex.min_special_chars.test(val);
    const valid3 = regex.min_length.test(val);
    return [{ isValid: valid1 }, { isValid: valid2 }, { isValid: valid3 }];
  }

  static getTime(time) {
    var time = String(time).split(":");
    var TimeType, hour, minutes;
    var hour = time[0];
    var minutes = time[1];
    if (hour <= 11) {
      TimeType = "AM";
    } else {
      TimeType = "PM";
    }
    if (hour > 12) {
      hour = "0" + (hour - 12);
    }
    if (hour == 0) {
      hour = 12;
    }
    return hour + ":" + minutes + " " + TimeType;
  }

  static getParsedDate(date) {
    console.log(date);
    // if (date.includes(' ')) {
    //   date = String(date).split(' ');
    // } else {
    //   date = String(date).split('T');
    // }
    date = String(date).split(" ");
    var days = String(date[0]).split("-");
    var time = this.getTime(date[1]);
    return (
      (parseInt(days[2]) <= 9 ? "0" + parseInt(days[2]) : parseInt(days[2])) +
      "/" +
      (parseInt(days[1]) <= 9 ? "0" + parseInt(days[1]) : parseInt(days[1])) +
      "/" +
      parseInt(days[0]) +
      " | " +
      time
    );
  }

  static getDate(date) {
    if (date.includes(" ")) {
      date = String(date).split(" ");
    } else {
      date = String(date).split("T");
    }

    var days = String(date[0]).split("-");

    return (
      (parseInt(days[2]) <= 9 ? "0" + parseInt(days[2]) : parseInt(days[2])) +
      "/" +
      (parseInt(days[1]) <= 9 ? "0" + parseInt(days[1]) : parseInt(days[1])) +
      "/" +
      parseInt(days[0])
    );
  }

  static checkLoginPassword(val) {
    const regex = {
      min_lower_case: /(.*[a-z]){1,}/,
      min_upper_case: /(.*[A-Z]){1,}/,
      min_number_chars: /(.*[0-9]){1,}/,
      min_special_chars: /^(((?!.*[&;:*]).*\W{1,}).*)+$/,
      min_length: /^.{6,15}$/,
    };
    const valid1 =
      regex.min_lower_case.test(val) && regex.min_upper_case.test(val);
    const valid2 =
      regex.min_number_chars.test(val) && regex.min_special_chars.test(val);
    const valid3 = regex.min_length.test(val);
    return [{ isValid: valid1 }, { isValid: valid2 }, { isValid: valid3 }];
  }

  static GetCardType(number) {
    // visa
    var re = new RegExp("^4");
    if (number.match(re) != null) {
      return "Visa";
    }

    // Mastercard
    // Updated for Mastercard 2017 BINs expansion
    if (
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
        number
      )
    ) {
      return "Mastercard";
    }

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null) {
      return "AMEX";
    }

    // Discover
    re = new RegExp(
      "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
    );
    if (number.match(re) != null) {
      return "Discover";
    }

    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null) {
      return "Diners";
    }

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re) != null) {
      return "Diners - Carte Blanche";
    }

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null) {
      return "JCB";
    }

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null) {
      return "Visa Electron";
    }

    return "";
  }

  static seconds2time = (seconds) => {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - hours * 3600) / 60);
    var seconds = seconds - hours * 3600 - minutes * 60;
    var time = "";

    if (hours != 0) {
      time = hours + ":";
    }
    if (minutes != 0 || time !== "") {
      minutes = minutes < 10 && time !== "" ? "0" + minutes : String(minutes);
      time += minutes + ":";
    }
    if (time === "") {
      time = seconds + "s";
    } else {
      time += seconds < 10 ? "0" + seconds : String(seconds);
    }
    return time;
  };
}
