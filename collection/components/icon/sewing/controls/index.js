var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { h } from '@stencil/core';
const SewingIcon = (_a) => {
  var { icon, button } = _a, props = __rest(_a, ["icon", "button"]);
  if (icon === 'pause-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M8.5 2h-3v16h3V2zM14.5 2h-3v16h3V2z", fill: "#FF8000" })));
  }
  if (icon === 'pause-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.5 2v16h3V2h-3zm1 15V3h1v14h-1zM11.5 2v16h3V2h-3zm1 15V3h1v14h-1z", fill: "#FF8000" })));
  }
  if (icon === 'play-circle-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 8l3 1.926L9 12V8z", fill: "#FF8000" })));
  }
  if (icon === 'play-circle-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.5 7.085v5.869l4.402-3.043L8.5 7.085zm1 3.962V8.915l1.598 1.026L9.5 11.046z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z", fill: "#FF8000" })));
  }
  if (icon === 'play-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M16.431 9.618L4 2v15.822l12.431-8.204z", fill: "#FF8000" })));
  }
  if (icon === 'play-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4 2l12.431 7.618L4 17.822V2zm1 1.786v12.178l9.569-6.315L5 3.786z", fill: "#FF8000" })));
  }
  if (icon === 'puase-circle-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm-.5-5h-1V7h1v6zm2 0h-1V7h1v6z", fill: "#FF8000" })));
  }
  if (icon === 'puase-circle-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M8.5 7h1v6h-1V7zM11.5 7h-1v6h1V7z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 100-14 7 7 0 000 14z", fill: "#FF8000" })));
  }
  if (icon === 'skip-backward-circle-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm-4-8l3 2.598V7.402L6 10zm3.5 0l3 2.598V7.402L9.5 10z", fill: "#FF8000" })));
  }
  if (icon === 'skip-backward-circle-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M9.5 10l3 2.598V7.402L9.5 10zM9 12.598L6 10l3-2.598v5.196z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 100-14 7 7 0 000 14z", fill: "#FF8000" })));
  }
  if (icon === 'skip-backward-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M9 16.856L1.5 9.928 9 3v13.856zM17 16.856L9.5 9.928 17 3v13.856z", fill: "#FF8000" })));
  }
  if (icon === 'skip-backward-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M1.5 9.928L9 16.856V3L1.5 9.928zM8 5.285L2.974 9.928 8 14.571V5.285zM9.5 9.928l7.5 6.928V3L9.5 9.928zM16 5.285l-5.026 4.643L16 14.571V5.285z", fill: "#FF8000" })));
  }
  if (icon === 'skip-forward-circle-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-8l-3 2.598V7.402L10 10zm3.5 0l-3 2.598V7.402l3 2.598z", fill: "#FF8000" })));
  }
  if (icon === 'skip-forward-circle-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M10 10l-3 2.598V7.402L10 10zM10.5 12.598l3-2.598-3-2.598v5.196z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 100-14 7 7 0 000 14z", fill: "#FF8000" })));
  }
  if (icon === 'skip-forward-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M3 16.856l7.5-6.928L3 3v13.856zM11 16.856l7.5-6.928L11 3v13.856z", fill: "#FF8000" })));
  }
  if (icon === 'skip-forward-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10.5 9.928L3 16.856V3l7.5 6.928zM4 5.285l5.026 4.643L4 14.571V5.285zM18.5 9.928L11 16.856V3l7.5 6.928zM12 5.285l5.026 4.643L12 14.571V5.285z", fill: "#FF8000" })));
  }
  if (icon === 'stop-circle-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm2-10H8v4h4V8z", fill: "#FF8000" })));
  }
  if (icon === 'stop-circle-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M12 8H8v4h4V8z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z", fill: "#FF8000" })));
  }
  if (icon === 'stop-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M2 2h16v16H2V2z", fill: "#FF8000" })));
  }
  if (icon === 'stop-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17 3H3v14h14V3zM2 2v16h16V2H2z", fill: "#FF8000" })));
  }
  if (icon === 'volume-down-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M11.5 18l-7-5.714V7.714L11.5 2v16zM3.5 8H2v4h1.5V8zM14.146 7.854c.36.36.798 1.019.923 1.789.12.74-.038 1.619-.923 2.503l.708.708c1.115-1.116 1.373-2.32 1.202-3.372-.166-1.021-.73-1.862-1.202-2.336l-.708.708z", fill: "#FF8000" })));
  }
  if (icon === 'volume-down-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 2v15.943l-7.66-5.471H2v-5h2.34L12 2zM4 8.472v3H3v-3h1zM11 16l-6-4.286V8.23l6-4.286V16z", fill: "#FF8000" }),
      h("path", { d: "M14.646 7.825c.36.36.798 1.02.923 1.79.12.739-.038 1.618-.923 2.503l.708.707c1.115-1.115 1.373-2.319 1.202-3.371-.166-1.022-.73-1.863-1.202-2.336l-.708.707z", fill: "#FF8000" })));
  }
  if (icon === 'volume-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M7.5 12.286l7 5.714V2l-7 5.714v4.572zM5 8h1.5v4H5V8z", fill: "#FF8000" })));
  }
  if (icon === 'volume-mute-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M11.5 18l-7-5.714V7.714L11.5 2v16zM3.5 8H2v4h1.5V8zM17.175 12.182l-1.06-1.06-1.061 1.06-.708-.707 1.061-1.06-1.06-1.061.707-.708 1.06 1.061 1.06-1.06.708.707-1.06 1.06 1.06 1.06-.707.708z", fill: "#FF8000" })));
  }
  if (icon === 'volume-mute-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 2v15.943l-7.66-5.471H2v-5h2.34L12 2zM4 8.472v3H3v-3h1zM11 16l-6-4.286V8.23l6-4.286V16z", fill: "#FF8000" }),
      h("path", { d: "M17.175 12.154l-1.06-1.061-1.061 1.06-.708-.706 1.061-1.061-1.06-1.06.707-.708 1.06 1.06 1.06-1.06.708.707-1.06 1.06 1.06 1.062-.707.707z", fill: "#FF8000" })));
  }
  if (icon === 'volume-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14.5 2.028L6.84 7.5H4.5v5h2.34l7.66 5.472V2.028zm-8 9.472v-3h-1v3h1zm1 .243l6 4.285V3.972l-6 4.285v3.486z", fill: "#FF8000" })));
  }
  if (icon === 'volume-up-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M11.5 18l-7-5.714V7.714L11.5 2v16zM3.5 8H2v4h1.5V8zM14.069 9.643c-.125-.77-.563-1.43-.923-1.79l.707-.707c.474.474 1.037 1.315 1.203 2.336.171 1.053-.087 2.256-1.202 3.372l-.708-.707c.885-.885 1.043-1.765.923-2.504zM16.569 9.643c-.125-.77-.563-1.43-.923-1.79l.707-.707c.474.474 1.037 1.315 1.203 2.336.171 1.053-.087 2.256-1.203 3.372l-.707-.707c.885-.885 1.043-1.765.923-2.504z", fill: "#FF8000" })));
  }
  if (icon === 'volume-up-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 2L4.34 7.472H2v5h2.34L12 17.943V2zm-8 9.472v-3H3v3h1zm1 .242L11 16V3.943L5 8.23v3.485z", fill: "#FF8000" }),
      h("path", { d: "M14.069 9.615c-.125-.77-.563-1.43-.923-1.79l.708-.707c.473.473 1.036 1.314 1.202 2.336.171 1.052-.087 2.256-1.202 3.371l-.708-.707c.885-.885 1.043-1.764.923-2.503zM15.646 7.825c.36.36.798 1.02.923 1.79.12.739-.038 1.618-.923 2.503l.708.707c1.115-1.115 1.373-2.319 1.202-3.371-.166-1.022-.73-1.863-1.202-2.336l-.708.707z", fill: "#FF8000" })));
  }
};
export default SewingIcon;
