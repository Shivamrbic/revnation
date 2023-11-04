import ImagePicker from "react-native-image-crop-picker";
import UserManager from "../Networking/Managers/UserManager";

export default class ImagePickerAndUploader {
  static getPreSignedUrl = async (imageData, purpose) => {
    console.log("purpose is ", purpose);
    return new Promise((resolve, reject) => {
      let mime = imageData.mime.split("/");
      let filename = "";
      if (imageData.filename) {
        filename = imageData.filename.split(".");
      }
      filename = imageData.path.substring(imageData.path.lastIndexOf("/") + 1);
      filename = filename.split(".");
      const params = {
        key: filename[0].includes(".")
          ? filename[0].substring(0, filename[0].indexOf("."))
          : filename[0],
        extension: imageData.mime.includes("/") ? mime[1] : imageData.mime,
        belongsTo: "patient",
        purpose: purpose,
      };
      UserManager.getPreSignedUrl(
        mime[1],
        filename[0],
        purpose,
        purpose == "public" ? "patient" : "chat"
      )
        .then((res) => {
          console.log("response ", res);
          resolve(res.data);
        })
        .catch((err) => reject(err));
    });
  };

  static uploadImageOnPreSignedUrl = (url, imageData, purpose) => {
    console.log("url is second time", url);
    console.log("Image data is ", imageData);
    // const file = { name: url?.imageName, type: imageData };
    const file = {
      uri: imageData.path,
      name: url?.imageName,
      type: imageData.mime,
    };
    return new Promise((resolve, reject) => {
      fetch(url?.url, {
        method: "PUT",
        body: file,
      })
        .then((response) => {
          console.log("response is put api upload image", response);
          resolve(response);
        })
        .catch((error) => {
          console.log("====== error in put api", error);
          reject(error);
        });
    });
  };

  static pickAndUpload(config, purpose, pickType = "photo") {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      compressImageQuality: 0.5,
      ...config,
    };
    console.log("pickType", pickType);
    if (pickType != "photo") {
      return new Promise((resolve, reject) => {
        ImagePicker.openCamera(options)
          .then((responseData) => {
            this.getPreSignedUrl(responseData, purpose).then((url) => {
              console.log(url, responseData);
              this.uploadImageOnPreSignedUrl(url, responseData, purpose);
              const response = { image: responseData, url: url };
              resolve(response);
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
    } else {
      return new Promise((resolve, reject) => {
        ImagePicker.openPicker(options)
          .then((responseData) => {
            console.log("response datas", responseData);
            this.getPreSignedUrl(responseData, purpose).then((url) => {
              console.log("url on click of photo", url);
              this.uploadImageOnPreSignedUrl(url, responseData, purpose);
              const response = { image: responseData, url: url };
              resolve(response);
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }
}
