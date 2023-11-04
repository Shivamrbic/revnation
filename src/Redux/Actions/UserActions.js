import {APIService} from '../../Networking/Managers/APIServices';
import {
  ADD_USER,
  ADD_USER_LOADING,
  ADD_USER_ERROR,
  CHECK_IN_DATA,
  CHECK_IN_DATA_LOADING,
  CHECK_IN_DATA_ERROR,
  TIME_SHEET_LIST,
  TIME_SHEET_LIST_LOADING,
  TIME_SHEET_LIST_ERROR,
  ATTENDANCE_DATA,
  ATTENDANCE_DATA_LOADING,
  ATTENDANCE_DATA_ERROR,
} from '../Types';

export const getUserData = restoken => dispatch => {
  dispatch({type: ADD_USER_LOADING});
  APIService.getUser(JSON.parse(restoken)).then(
    userData => {
      dispatch({
        type: ADD_USER,
        payload: userData,
      });
    },
    error => {
      console.log('getUser api fail', error);
      dispatch({
        type: ADD_USER_ERROR,
        error: error.msg || 'Unexpected Error!!!',
      });
    },
  );
};

export const checkInData =
  (restoken, projectId = null) =>
  dispatch => {
    //console.log('project id user aaction', projectId);
    dispatch({type: TIME_SHEET_LIST_LOADING});
    APIService.CheckIn(JSON.parse(restoken), projectId).then(
      data => {
        dispatch({
          type: TIME_SHEET_LIST,
          payload: data,
        });
      },
      error => {
        console.log('check in api fail', error);
        dispatch({
          type: TIME_SHEET_LIST_ERROR,
          error: error.msg || 'Unexpected Error!!!',
        });
      },
    );
  };

export const checkOutData =
  (restoken, projectId = null) =>
  dispatch => {
    dispatch({type: TIME_SHEET_LIST_LOADING});
    APIService.CheckOut(JSON.parse(restoken), projectId).then(
      data => {
        dispatch({
          type: TIME_SHEET_LIST,
          payload: data,
        });
      },
      error => {
        console.log('check out api fail', error);
        dispatch({
          type: TIME_SHEET_LIST_ERROR,
          error: error.msg || 'Unexpected Error!!!',
        });
      },
    );
  };

export const timeSheetList = restoken => dispatch => {
  dispatch({type: TIME_SHEET_LIST_LOADING});
  APIService.timeSheetList(JSON.parse(restoken)).then(
    data => {
      dispatch({
        type: TIME_SHEET_LIST,
        payload: data,
      });
    },
    error => {
      console.log('timeSheetList api fail', error);
      dispatch({
        type: TIME_SHEET_LIST_ERROR,
        error: error.msg || 'Unexpected Error!!!',
      });
    },
  );
};

export const userAttendance = (restoken, data) => dispatch => {
  dispatch({type: ATTENDANCE_DATA_LOADING});
  APIService.attendance(JSON.parse(restoken), data).then(
    attendanceData => {
      dispatch({
        type: ATTENDANCE_DATA,
        payload: attendanceData,
      });
    },
    error => {
      console.log('attendance api fail', error);
      dispatch({
        type: ATTENDANCE_DATA_ERROR,
        error: error.msg || 'Unexpected Error!!!',
      });
    },
  );
};
