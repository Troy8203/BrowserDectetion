let userAgent = navigator.userAgent;
let browserName;
if (userAgent.match(/edg/i)) {
  browserName = "edge";
} else if (userAgent.match(/chrome|chromium|crios/i)) {
  browserName = "chrome";
} else if (userAgent.match(/firefox|fxios/i)) {
  browserName = "firefox";
} else if (userAgent.match(/safari/i)) {
  browserName = "safari";
} else {
  browserName = "No browser detection";
}

let element = document.querySelector(`#${browserName}`);
element.style.filter = "grayscale(0%)";
