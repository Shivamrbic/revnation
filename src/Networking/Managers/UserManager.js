import {USER} from '../EndPoints';
import APIClient from '../APIClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class UserManager {
  static loginUser(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.LOGIN, params)
        .then(response => {
          console.log('respomnse', response);
          resolve(response);
          // this.setUser();
          // this.setToken(response.data.auth.token);
        })
        .catch(reject);
    });
  }

  static signUpUser(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.SIGNUP, params)
        .then(response => {
          resolve(response);
          this.setUser();
          this.setToken(response.data.auth.token);
        })
        .catch(reject);
    });
  }

  static postConsent(params) {
    return APIClient.postAPI(USER.CONSENT, params);
  }

  static forgotPasswordCallbackUrl(email) {
    return new Promise((resolve, reject) => {
      APIClient.getAPI('/patient/forgot-password-callback-url?email=' + email)
        .then(resolve)
        .catch(reject);
    });
  }

  static logout() {
    return new Promise((resolve, reject) => {
      APIClient.deleteAPI(USER.LOGOUT)
        .then(response => {
          this.removeUserData();
          resolve(response);
        })
        .catch(reject);
    });
  }

  static setUser() {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(USER.USER)
        .then(response => {
          resolve(response);
          console.log(response);
          this.setUserData(response.data);
        })
        .catch(reject);
    });
  }

  static setUserData = data => {
    AsyncStorage.setItem('userData', JSON.stringify(data))
      .then(response => {})
      .catch(err);
  };

  static removeUserData = () => {
    AsyncStorage.clear()
      .then(() => {
        console.log('cleared');
      })
      .catch();
  };

  static setToken = token => {
    console.log(token);
    AsyncStorage.setItem('userAuthToken', token)
      .then(response => {
        console.log(response);
      })
      .catch(err);
  };

  static verifyMobile(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.VERIFY_MOBILE, params).then(resolve).catch(reject);
    });
  }

  static updateUser(params) {
    return new Promise((resolve, reject) => {
      APIClient.putAPI(USER.UPDATE, params).then(resolve).catch(reject);
    });
  }

  static deactivateUser() {
    return new Promise((resolve, reject) => {
      APIClient.putAPI(USER.DEACTIVATE).then(resolve).catch(reject);
    });
  }

  static deleteUser() {
    return new Promise((resolve, reject) => {
      APIClient.deleteAPI(USER).then(resolve).catch(reject);
    });
  }

  static addUserDependents(params) {
    return new Promise((resolve, reject) => {
      APIClient.putAPI(USER.ADD_DEPENDENTS, params).then(resolve).catch(reject);
    });
  }

  static updateUserDependents(dependentId, params) {
    return new Promise((resolve, reject) => {
      APIClient.putAPI(`/patient/dependent/${dependentId}`, params)
        .then(resolve)
        .catch(reject);
    });
  }

  static deleteDependent(id) {
    return new Promise((resolve, reject) => {
      APIClient.deleteAPI(USER.DELETE_DEPENDENT + id)
        .then(resolve)
        .catch(reject);
    });
  }

  static changePassword(params) {
    return new Promise((resolve, reject) => {
      APIClient.putAPI(USER.CHANGE_PASSWORD, params)
        .then(resolve)
        .catch(reject);
    });
  }

  static resetPassword(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.FORGOT_PASSWORD, params)
        .then(resolve)
        .catch(reject);
    });
  }

  static addFeedback(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.FEEDBACK, params).then(resolve).catch(reject);
    });
  }

  static payment(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.PAYMENT, params).then(resolve).catch(reject);
    });
  }

  static getPreSignedUrl(type, fileName, purpose, belongsTo) {
    console.log(
      `/upload?belongsTo=${belongsTo}&extension=${type}&key=${fileName}&purpose=${Number(
        purpose,
      )}`,
    );

    const params = {
      key: fileName,
      extension: type,
      belongsTo: belongsTo,
      purpose: Number(purpose),
    };
    return new Promise((resolve, reject) => {
      APIClient.postSignedUrl(
        `/upload?belongsTo=${belongsTo}&extension=${type}&key=${fileName}&purpose=${purpose}`,
      )
        .then(resolve)
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  static emailInvoice(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.EMAIL_INVOICE, params)
        .then(resolve)
        .catch(err => {
          reject(err);
        });
    });
  }

  static getTransactions(status, pageNum, limit, fromDate, toDate) {
    let finalUrl = '';
    console.log(fromDate, toDate, status, pageNum);
    if (fromDate && toDate) {
      finalUrl = `/patient/transactions?status=${status}&page_no=${pageNum}&record_limit=${limit}&start_date=${fromDate}&end_date=${toDate}`;
    } else {
      finalUrl = `/patient/transactions?status=${status}&page_no=${pageNum}&record_limit=${limit}`;
    }
    return new Promise((resolve, reject) => {
      APIClient.getAPI(finalUrl).then(resolve).catch(reject);
    });
  }

  static getHealthTips(pageNo = null, recordsPerPage = null, ids = null) {
    let finalUrl = '';
    console.log(pageNo, recordsPerPage, ids);
    if (pageNo == null) {
      finalUrl = '/patient/health-tips';
    } else if (ids == null || ids == '') {
      finalUrl = `/patient/health-tips?page_no=${pageNo}&record_limit=${recordsPerPage}`;
    } else {
      finalUrl = `/patient/health-tips?page_no=${pageNo}&record_limit=${recordsPerPage}&health_tip_category_id=${ids}`;
    }
    return new Promise((resolve, reject) => {
      APIClient.getAPI(finalUrl).then(resolve).catch(reject);
    });
  }

  static addCardDetails(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.ADD_CARD, params).then(resolve).catch(reject);
    });
  }

  static deleteCardDetails(id) {
    return new Promise((resolve, reject) => {
      APIClient.deleteAPI(`/patient/card-details/${id}`)
        .then(resolve)
        .catch(reject);
    });
  }

  static getCardDetails() {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(USER.ADD_CARD).then(resolve).catch(reject);
    });
  }

  static requestCallback(id) {
    return new Promise((resolve, reject) => {
      APIClient.putAPI(`/patient/appointment/callback/${id}`)
        .then(resolve)
        .catch(reject);
    });
  }

  static verifyEmail() {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(USER.VERIFY_EMAIL).then(resolve).catch(reject);
    });
  }

  static downloadRecommendation(id) {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(`/patient/download/recommendation?appointment_ids=${id}`)
        .then(resolve)
        .catch(reject);
    });
  }

  static emailRecommendation(id) {
    console.log('id', id);
    return APIClient.postAPI(
      `/patient/email/recommendation?appointment_id=${id}`,
    );
  }

  static getChat(appointment_id) {
    return APIClient.getAPI(`/patient/call/chat/${appointment_id}`);
  }

  static createChat({
    appointment_id,
    doctor_id,
    patient_id,
    message,
    attachment,
  }) {
    console.log('create chat in post api ', attachment);
    return APIClient.postAPI('/patient/call/chat', {
      message,
      attachment,
      appointment_id,
      doctor_id,
      patient_id,
    });
  }

  //NOTE: NO use of this method
  static updateChat(params) {
    return APIClient.putAPI('/patient/call/chat', params);
  }

  static applyCouponCode(mode, code) {
    console.log('mode in apply coupon is ', mode);
    return APIClient.getAPI(`/patient/discount/${mode}/${code}`);
  }

  static changeUserPasscode(params) {
    return APIClient.putAPI(USER.CHANGE_PASSCODE, params);
  }
}
