var myOrg = '18';
var myDomain = 'tubanco.com.py';
var myDomain2 = 'www.tubanco.com.py';
var target = 'http://127.0.0.1:5000/api';
var hostname = window.location.hostname;
if ( hostname !== myDomain && hostname !== myDomain2) {
const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
  .then(FingerprintJS => FingerprintJS.load())
fpPromise
  .then(fp => fp.get())
  .then(result => {
    var visitId = result.visitorId
    console.log(visitId);
fetch('https://ipinfo.io/json?token=b391ba3b1d2a9e').then(
  (response) => response.json()
).then(
  (jsonResponse) => {
  console.log(jsonResponse);
  var vIP = (jsonResponse.ip);
  var vHostname = (jsonResponse.hostname);
  var vCity = (jsonResponse.city);
  var vRegion = (jsonResponse.region);
  var vCountry = (jsonResponse.country);
  var vLoc = (jsonResponse.loc);
  var vOrg = (jsonResponse.org);
  var vTimezone = (jsonResponse.timezone);
  var date = Date();
  var hostname = window.location.hostname;
  var port = window.location.port;
  var href = window.location.href;
  var userAgent = navigator.userAgent;
  var cookieEnabled = navigator.cookieEnabled;
  var appName = navigator.appName;
  var language = navigator.language;
  var appVersion = navigator.appVersion;
  var platform = navigator.platform;
  setTimeout(esperar, 10);
  function esperar() {
  (async () => {
    const rawResponse = await fetch(target, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({myOrg: myOrg, myDomain: myDomain, date: date, visitId: visitId, hostname: hostname, port: port, href: href, userAgent: userAgent, language: language, vIP: vIP, vCity: vCity, vRegion: vRegion, vCountry: vCountry, vLoc: vLoc, vOrg: vOrg, vTimezone: vTimezone})
    });
  })();
  }
})
})
}