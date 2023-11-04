import moment from 'moment';
export default class Validator {
  static passwordPolicy(val): Boolean {
    var isValid = true;
    const regex = {
      min_lower_case: /(.*[a-z]){1,}/,
      min_upper_case: /(.*[A-Z]){1,}/,
      min_number_chars: /(.*[0-9]){1,}/,
      min_special_chars: /^(((?!.*[&;:*]).*\W{1,}).*)+$/,
      min_length: /^.{6,23}$/,
    };

    Object.keys(regex).forEach(function (key) {
      isValid = isValid && regex[key].test(val);
    });
    return isValid;
  }

  static confirmPassword(val1, val2): Boolean {
    return val1 === val2;
  }

  static normalisePhoneNumber(f): String {
    if (f.length >= 3) {
      return f.replace(f, f + '-');
    }

    return f;
  }

  static Greetings() {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      return 'Good Morning';
    } else if (curHr < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }

  static timeSheetArray(timeLogs, leaves, start_date, end_date) {
    //console.log('time logs ', timeLogs);
    let desiredArr = [];
    const getDatesInRange = (start_date, end_date) => {
      let dates = [];

      let startDate = moment(start_date);
      let endDate = moment(end_date);

      let currentDate = startDate.clone();
      while (currentDate.isSameOrBefore(endDate)) {
        dates.push(currentDate.format('YYYY-MM-DD'));
        currentDate.add(1, 'days');
      }
      return dates;
    };
    let dates = getDatesInRange(start_date, end_date);

    // console.log('dates', dates);
    dates.map(date => {
      //console.log(date);
      let obj = {
        date: '',
        hours: '',
        attendance: '',
      };
      obj.date = moment(date).format('YYYY-MM-DD');

      let timelogs = timeLogs?.filter(
        timelog => moment(timelog?.date).format('YYYY-MM-DD') === date,
      );

      // obj.hours = '';
      let minutes = 0;
      let hours = 0;
      let overtime_hour = 0;
      let overtime_min = 0;
      for (let timelog of timelogs) {
        // console.log(timelog.hours);

        let min = timelog.hours ? Number(timelog.hours.split(':')[1]) : 0;
        let hr = timelog.hours ? Number(timelog.hours.split(':')[0]) : 0;
        // console.log(hr, min);
        let over_min = timelog.overtime_hours
          ? Number(timelog.overtime_hours.split(':')[1])
          : 0;
        let over_hr = timelog.overtime_hours
          ? Number(timelog.overtime_hours.split(':')[0])
          : 0;

        minutes += min;
        hours += hr;
        overtime_hour += over_hr;
        overtime_min += over_min;
      }

      if (minutes >= 60) {
        hours++;
        minutes %= 60;
      }

      if (overtime_min >= 60) {
        overtime_hour++;
        overtime_min %= 60;
      }
      function pad(d) {
        return d < 10 ? '0' + d.toString() : d.toString();
      }
      obj.hours = `${pad(hours)}:${pad(minutes)}`;
      obj.overtime = `${pad(overtime_hour)}:${pad(overtime_min)}`;

      obj.attendance = 'Present';

      if (timelogs?.length === 0) {
        let leave = leaves.find(leave => {
          let leave_start_date = moment(leave?.start_date).format('YYYY-MM-DD');
          let leave_end_date = moment(leave?.end_date).format('YYYY-MM-DD');
          return (
            moment(leave_start_date).isSameOrBefore(date) &&
            moment(leave_end_date).isSameOrAfter(date)
          );
        });
        if (leave) {
          obj.attendance = leave?.leaveType?.name;
          //console.log(leave?.leaveType?.name);
        } else {
          obj.attendance = 'Absent';
        }
      } else {
      }
      desiredArr.push(obj);
    });
    return desiredArr;
  }

  // NOTE: val must be a date string as format `MM/DD/YYYY`
  static workingTime(timelist) {
    let difference = 0;
    if (timelist?.check_out_time?.length == null) {
      const current_time = moment();
      const check_in_time = moment(timelist?.check_in_time);
      difference = current_time.diff(check_in_time);
    } else {
      const check_in_time = moment(timelist?.check_in_time);
      const check_out_time = moment(timelist?.check_out_time);
      difference = check_out_time.diff(check_in_time);
    }
    const getHrMinSec = milliseconds => {
      try {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        hours %= 24;
        let ans = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        return ans;
      } catch (error) {
        throw error;
      }
    };
    function pad(d) {
      return d < 10 ? '0' + d.toString() : d.toString();
    }
    return getHrMinSec(difference);
  }
}
