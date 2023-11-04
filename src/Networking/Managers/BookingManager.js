import { USER } from "../EndPoints";
import APIClient from "../APIClient";

export default class BookingManager {
  static getMedicalInfo() {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(USER.MEDICAL_INFO).then(resolve).catch(reject);
    });
  }

  static createAppointment(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.APPOINTMENT, params).then(resolve).catch(reject);
    });
  }

  static updateAppointment(appointment_id, params) {
    return new Promise((resolve, reject) => {
      APIClient.putAPI(`/patient/appointment/${appointment_id}`, params)
        .then(resolve)
        .catch(reject);
    });
  }

  static getAppointmentDetails(appointment_id) {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(`/patient/appointment/${appointment_id}`)
        .then(resolve)
        .catch(reject);
    });
  }

  static getCallDecline(appointment_id) {
    return new Promise((resolve, reject) => {
      APIClient.putAPI(`/patient/appointment/declineCall/${appointment_id}`, {})
        .then(resolve)
        .catch(reject);
    });
  }

  static getAllAppointments(pageNum, type, record, fromDate, toDate) {
    let finalUrl = "";
    if (fromDate && toDate) {
      finalUrl = `/patient/appointments?page_no=${pageNum}&status=${type}&page_no=${pageNum}&record_limit=${record}&start_date=${fromDate}&end_date=${toDate}`;
    } else {
      finalUrl = `/patient/appointments?status=${type}&page_no=${pageNum}&record_limit=${record}`;
    }
    return new Promise((resolve, reject) => {
      APIClient.getAPI(finalUrl).then(resolve).catch(reject);
    });
  }

  static getAllAppointmentsCount() {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(`/patient/appointments?status=all`)
        .then(resolve)
        .catch(reject);
    });
  }

  static getSpeciality() {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(USER.SPECIALITY).then(resolve).catch(reject);
    });
  }

  static getHealthTipsCategories() {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(USER.HEALTH_TIPS_CATEGORIES).then(resolve).catch(reject);
    });
  }

  static getPharmacyByLoc(search) {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(`/patient/ezs/pharmacy/${search}`)
        .then(resolve)
        .catch(reject);
    });
  }

  static getPharmacyByName(search) {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(`/patient/ezs/pharmacy/name/${search}`)
        .then(resolve)
        .catch(reject);
    });
  }

  static updatePharmacy(appointmentId, params) {
    return new Promise((resolve, reject) => {
      APIClient.putAPI(`/patient/appointment/pharmacy/${appointmentId}`, params)
        .then(resolve)
        .catch(reject);
    });
  }

  static submitMedicalInfoAnswers(params) {
    return new Promise((resolve, reject) => {
      APIClient.postAPI(USER.MEDICAL_INFO_ANSWERS, params)
        .then(resolve)
        .catch(reject);
    });
  }

  static getAnnouncements(pageNo, record, source, type) {
    console.log(":page no", pageNo, record, source);
    return new Promise((resolve, reject) => {
      APIClient.getAPI(
        `/patient/announcements?page_no=${pageNo}&record_limit=${record}&source=${source}&type=${type}`
      )
        .then(resolve)
        .catch(reject);
    });
  }

  static downloadInvoice(ids) {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(`/patient/download/invoice?appointment_ids=${ids}`)
        .then(resolve)
        .catch(reject);
    });
  }

  static getPrescriptions() {
    return new Promise((resolve, reject) => {
      APIClient.getAPI(USER.PRESCRITIONS).then(resolve).catch(reject);
    });
  }
}
