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
} from './Types';

const INITIAL_STATE = {
  userData: {},
  userDataLoading: false,
  userDataError: '',
  checkInDataLoading: false,
  checkInData: [],
  checkInDataError: '',
  timeSheetListLoading: false,
  timeSheetList: [],
  timeSheetListError: '',
  attendanceLoading: false,
  attendanceData: [],
  attendanceError: '',
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_LOADING: {
      return {
        ...state,
        userDataLoading: true,
        userDataError: '',
      };
    }
    case ADD_USER: {
      return {
        ...state,
        userData: action.payload,
        userDataLoading: false,
      };
    }
    case ADD_USER_ERROR: {
      return {
        ...state,
        userDataLoading: false,
        userDataError: action.error,
      };
    }
    case CHECK_IN_DATA_LOADING: {
      return {
        ...state,
        checkInDataLoading: true,
        checkInDataError: '',
      };
    }
    case CHECK_IN_DATA: {
      return {
        ...state,
        checkInData: action.payload,
        checkInDataLoading: false,
      };
    }
    case CHECK_IN_DATA_ERROR: {
      return {
        ...state,
        checkInDataLoading: false,
        checkInDataError: action.error,
      };
    }
    case TIME_SHEET_LIST_LOADING: {
      return {
        ...state,
        timeSheetListLoading: true,
        timeSheetListError: '',
      };
    }
    case TIME_SHEET_LIST: {
      return {
        ...state,
        timeSheetList: action.payload,
        timeSheetListLoading: false,
      };
    }
    case TIME_SHEET_LIST_ERROR: {
      return {
        ...state,
        timeSheetListLoading: false,
        timeSheetListError: action.error,
      };
    }
    case ATTENDANCE_DATA_LOADING: {
      return {
        ...state,
        attendanceLoading: true,
        attendanceError: '',
      };
    }
    case ATTENDANCE_DATA: {
      return {
        ...state,
        attendanceLoading: false,
        attendanceData: action.payload,
      };
    }
    case ATTENDANCE_DATA_ERROR: {
      return {
        ...state,
        attendanceLoading: false,
        attendanceError: action.error,
      };
    }
    default:
      return state;
  }
};
export default UserReducer;
