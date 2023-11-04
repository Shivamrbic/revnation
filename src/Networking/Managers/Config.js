module.exports = {
  url: 'baseurl',
  baseurl: 'https://sandbox-api.revcorp.in',
  // sandbox: 'http://65.0.168.90:8080',
  localurl: 'http://192.168.1.3:3333',
  // ngrokurl: 'https://da259a6e2b86.ngrok.io',
  apiKey: '9542fb433949640e3eeb1b68907d74231cbd756f',
  contentType: 'application/json',
  endpoints: {
    mobileverify: '/api/v1/user/is-exist/',
    login: '/api/v1/users/login',
    users: '/api/v1/user',
    checkin: '/api/v1/timesheet/check-in',
    checkout: '/api/v1/timesheet/check-out',
    timesheet: '/api/v1/timesheet/list',
    attendance: '/api/v1/users/monthly-attendance',
  },
};
