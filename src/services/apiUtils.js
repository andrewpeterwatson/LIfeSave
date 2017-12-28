

let SERVER_DEFAULTS = {
  HOST: 'http://172.27.40.165'
}
//ERROR ON ROUTING TABLE WHEN SWITCHED TO CORE
var ApiUtils = {
  API_URL: `http://${SERVER_DEFAULTS.HOST}/api/v1/devices`,
  SERVER_HOST: SERVER_DEFAULTS.HOST,
  GROUP_URL: `http://${SERVER_DEFAULTS.HOST}/api/v1/groups/fffd/control`,
  SUBSCRIPTION_URL: `http://${SERVER_DEFAULTS.HOST}.swiftwater.lab/api/v1/subscriptions/`,
  DEFAULT_HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  deviceUrl: function(deviceId) {
    return `http://${SERVER_DEFAULTS.HOST}/api/v1/devices/${deviceId}`
  },
  checkStatus: function(response, from) {
    if (response.status >= 200 && response.status < 300) {
      return console.log('RES AT CHECK STATUS', response, from)
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      console.log('ERROR', error);
    }
  }
};

 export default ApiUtils
