import DocumentPicker from "react-native-document-picker";
import UserManager from "../Networking/Managers/UserManager";

export default class ImagePickerAndUploader {
  static getPreSignedUrl = async (imageData, purpose) => {
    return new Promise((resolve, reject) => {
      console.log(imageData);
      let mime = imageData.type.split("/");
      let filename = "";
      if (imageData.name) {
        filename = imageData.name.split(".");
      }
      UserManager.getPreSignedUrl(mime[1], filename[0], purpose, "chat")
        .then((res) => {
          console.log(res);
          resolve(res.data.url);
        })
        .catch((err) => reject(err));
    });
  };

  static uploadDocumentOnPreSignedUrl = (url, imageData, purpose) => {
    const file = { uri: imageData.uri, type: imageData.type };
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": imageData.type },
      })
        .then((response) => {
          console.log("======res", response);
          resolve(response);
        })
        .catch((error) => {
          console.log("======error", error);
          reject(error);
        });
    });
  };

  static pickAndUpload(purpose) {
    const options = {
      type: [DocumentPicker.types.images],
    };
    return new Promise((resolve, reject) => {
      DocumentPicker.pickSingle(options)
        .then((responseData) => {
          console.log(responseData);
          this.getPreSignedUrl(responseData, purpose).then((url) => {
            console.log(url, responseData);
            this.uploadDocumentOnPreSignedUrl(url, responseData, purpose);
            url = url.split("staging/");
            url = url[1].split("?");
            const response = { fileName: responseData.name, url: url[0] };
            resolve(response);
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
