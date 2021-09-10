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
  if (icon === 'alarm-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M2.768 6.768a2.5 2.5 0 013.535-3.536L2.768 6.768z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a7 7 0 100-14 7 7 0 000 14zM9.5 7v4.53l3.166 2.842.668-.744-2.834-2.543V7h-1z", fill: "#FF8000" }),
      h("path", { d: "M17.232 3.232a2.5 2.5 0 010 3.536l-3.535-3.536a2.5 2.5 0 013.535 0z", fill: "#FF8000" })));
  }
  if (icon === 'alarm-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.45 2.672a2.5 2.5 0 00-2.682 4.096l3.535-3.536a2.492 2.492 0 00-.854-.56zM3.474 3.94c-.314.314-.46.733-.437 1.144l1.581-1.58a1.496 1.496 0 00-1.144.436z", fill: "#FF8000" }),
      h("path", { d: "M10.5 11.085V7h-1v4.53l3.166 2.842.668-.744-2.834-2.543z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17 11a7 7 0 11-14 0 7 7 0 0114 0zm-1 0a6 6 0 11-12 0 6 6 0 0112 0zM17.232 3.232a2.5 2.5 0 00-3.535 0l3.535 3.536a2.5 2.5 0 000-3.536zm-.27 1.851a1.496 1.496 0 00-.437-1.144 1.496 1.496 0 00-1.144-.437l1.581 1.581z", fill: "#FF8000" })));
  }
  if (icon === 'attached-file') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.515 3.954c1.985 1.885 1.974 4.97.003 6.911l-5.125 5.05-.702-.711 5.125-5.051c1.582-1.56 1.572-3.994.007-5.477l-.007-.007c-1.586-1.563-4.07-1.553-5.578-.007l-.007.008-6.457 6.332a2.639 2.639 0 000 3.733c1.035 1.02 2.772 1.02 3.808 0v-.001l6.458-6.332a1.391 1.391 0 000-1.982 1.459 1.459 0 00-2.032 0l-4.92 4.849-.702-.712 4.92-4.849a2.459 2.459 0 013.436 0c.95.937.95 2.47 0 3.406h-.001l-6.457 6.333c-1.425 1.404-3.788 1.404-5.212 0a3.638 3.638 0 010-5.157l6.454-6.33c1.908-1.95 5.023-1.94 6.989-.006z", fill: "#FF8000" })));
  }
  if (icon === 'blocked') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 7A7 7 0 015.05 5.05l9.9 9.9A6.978 6.978 0 0110 17zm5.606-2.808a7 7 0 00-9.799-9.799l9.8 9.8z", fill: "#FF8000" })));
  }
  if (icon === 'bookmark-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M16.316 18V2H3.684v16L10 13.624 16.316 18z", fill: "#FF8000" })));
  }
  if (icon === 'bookmark-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 13.624L16.316 18V2H3.684v16L10 13.624zM4.684 16.09L10 12.407l5.316 3.683V3H4.684v13.09z", fill: "#FF8000" })));
  }
  if (icon === 'calendar-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M6 5V2H5v3H2v13h16v-8H5V9h13V5h-3V2h-1v3H6z", fill: "#FF8000" })));
  }
  if (icon === 'calendar-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6 5V2H5v3H2v13h16V5h-3V2h-1v3H6zm11 4V6H3v11h14v-7H5V9h12z", fill: "#FF8000" })));
  }
  if (icon === 'chart-bars-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M2 2h1v15h15v1H2V2z", fill: "#FF8000" }),
      h("path", { d: "M16 4h-3v12h3V4zM9 8h3v8H9V8zM5 10h3v6H5v-6z", fill: "#FF8000" })));
  }
  if (icon === 'chart-bars-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M2 2h1v15h15v1H2V2z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13 4h3v12h-3V4zm1 1h1v10h-1V5zM9 8v8h3V8H9zm2 1h-1v6h1V9zM5 10v6h3v-6H5zm2 1H6v4h1v-4z", fill: "#FF8000" })));
  }
  if (icon === 'chart-donut') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18.913 9H15.5A4.5 4.5 0 0011 4.5V1a8 8 0 018 8h-.087v.002h-3.078L18.913 9zm-.984-.998A7.005 7.005 0 0012 2.071v1.52C14.236 4 16 5.765 16.41 8l1.52.001z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 10a8 8 0 018-8v3.5a4.5 4.5 0 104.5 4.5h3.253l-2.987-.004h2.987V10H18a8 8 0 11-16 0zm1 0a7.002 7.002 0 016-6.93v1.52a5.502 5.502 0 001 10.91 5.502 5.502 0 005.41-4.504h1.52A7.002 7.002 0 013 10z", fill: "#FF8000" })));
  }
  if (icon === 'chart-pie-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M10 18a8 8 0 008-8h-8V2a8 8 0 100 16z", fill: "#FF8000" }),
      h("path", { d: "M11 1v8h8a8 8 0 00-8-8z", fill: "#FF8000" })));
  }
  if (icon === 'chart-pie-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18.938 8A8.004 8.004 0 0011 1v8h8a8.07 8.07 0 00-.062-1zM12 8V2.07A7.004 7.004 0 0117.93 8H12z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a8.001 8.001 0 008-8h-8V2a8.001 8.001 0 000 16zM9 3.07V11h7.93A7.001 7.001 0 013 10a7.002 7.002 0 016-6.93z", fill: "#FF8000" })));
  }
  if (icon === 'cloud-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M13.692 15.077h-8a3.692 3.692 0 110-7.385 3.692 3.692 0 017.2-1.156 4.308 4.308 0 11.874 8.54h-.074z", fill: "#FF8000" })));
  }
  if (icon === 'cloud-off-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M13.692 14.538h-8a3.692 3.692 0 110-7.384c0-.438.076-.857.216-1.246L4.343 4.343l.707-.707 11.314 11.313-.707.707-1.188-1.188a4.318 4.318 0 01-.702.07h-.075zM9.385 3.461c-.872 0-1.672.302-2.304.807l9.316 9.316a4.308 4.308 0 00-3.505-7.586A3.694 3.694 0 009.385 3.46z", fill: "#FF8000" })));
  }
  if (icon === 'cloud-off-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.692 7.154a3.692 3.692 0 100 7.384h8.075c.239-.004.474-.028.702-.07l1.188 1.188.707-.707L5.05 3.636l-.707.707 1.565 1.565c-.14.389-.216.808-.216 1.246zm1.034-.428c-.022.14-.034.282-.034.428v1h-1a2.692 2.692 0 100 5.384h7.847L6.726 6.726z", fill: "#FF8000" }),
      h("path", { d: "M18 10.23a4.3 4.3 0 01-1.603 3.354l-.712-.713a3.308 3.308 0 00-2.608-5.891l-.86.162-.275-.832a2.694 2.694 0 00-4.148-1.329l-.713-.713a3.694 3.694 0 015.811 1.73A4.308 4.308 0 0118 10.231z", fill: "#FF8000" })));
  }
  if (icon === 'cloud-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.692 7.692a3.692 3.692 0 100 7.385h8.075a4.308 4.308 0 10-.875-8.541 3.694 3.694 0 00-7.2 1.156zm8.062 6.384a3.308 3.308 0 10-.677-6.557l-.86.161-.275-.831a2.694 2.694 0 00-5.25.843v1h-1a2.692 2.692 0 100 5.385H13.754z", fill: "#FF8000" })));
  }
  if (icon === 'cloud-right-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.692 14.538h8.075a4.308 4.308 0 10-.875-8.54 3.694 3.694 0 00-7.2 1.156 3.692 3.692 0 100 7.384zm3.678-2.477l3.484-3.484-.708-.707-2.812 2.813-1.5-1.35-.668.744L9.37 12.06z", fill: "#FF8000" })));
  }
  if (icon === 'cloud-right-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M9.37 12.06l3.484-3.483-.707-.707-2.813 2.813-1.5-1.35-.668.744L9.37 12.06z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 10.846a3.692 3.692 0 013.692-3.692 3.692 3.692 0 017.2-1.157 4.308 4.308 0 11.874 8.54l-.074.001h-8A3.692 3.692 0 012 10.846zm15-.615a3.308 3.308 0 01-3.246 3.307H5.692a2.692 2.692 0 110-5.384h1v-1a2.692 2.692 0 015.25-.844l.274.832.86-.162A3.308 3.308 0 0117 10.23z", fill: "#FF8000" })));
  }
  if (icon === 'cloud-wrong-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.692 14.538h-8a3.692 3.692 0 110-7.384 3.692 3.692 0 017.2-1.157 4.308 4.308 0 11.874 8.54l-.074.001zm-3.69-5.245l1.769-1.768.707.707L10.71 10l1.768 1.768-.707.707-1.768-1.768-1.768 1.768-.707-.707L9.296 10 7.528 8.232l.707-.707 1.768 1.768z", fill: "#FF8000" })));
  }
  if (icon === 'cloud-wrong-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M10.003 9.27l1.744-1.745.707.707-1.744 1.745 1.791 1.79-.707.708-1.791-1.791-1.791 1.79-.707-.706 1.79-1.791-1.744-1.745.707-.707 1.745 1.745z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.692 7.154a3.692 3.692 0 100 7.384h8.075a4.308 4.308 0 10-.875-8.54 3.694 3.694 0 00-7.2 1.156zm8.062 6.384a3.308 3.308 0 10-.677-6.558l-.86.162-.275-.832a2.694 2.694 0 00-5.25.844v1h-1a2.692 2.692 0 100 5.384H13.754z", fill: "#FF8000" })));
  }
  if (icon === 'coment-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M6 13l-4 4V3h16v10H6z", fill: "#FF8000" })));
  }
  if (icon === 'coment-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.586 12H17V4H3v10.586L5.586 12zM2 17V3h16v10H6l-4 4z", fill: "#FF8000" })));
  }
  if (icon === 'devices-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M9 15v-1H2V4h14v4h-3v6h-3v1h1.5v1h-4v-1H9z", fill: "#FF8000" }),
      h("path", { d: "M14 16V9h4v7h-4z", fill: "#FF8000" })));
  }
  if (icon === 'devices-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14 9v6h3V9h-3zm-1 4H3V5h12v3h-2v5zm-4 1H2V4h14v4h2v8h-5v-2h-3v1h1.5v1h-4v-1H9v-1z", fill: "#FF8000" })));
  }
  if (icon === 'draggable-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M7.333 5.556a1.778 1.778 0 110-3.556 1.778 1.778 0 010 3.556zM5.556 10a1.778 1.778 0 103.555 0 1.778 1.778 0 00-3.555 0zM5.556 16.222a1.778 1.778 0 103.555 0 1.778 1.778 0 00-3.555 0zM10.889 10a1.778 1.778 0 103.556 0 1.778 1.778 0 00-3.556 0zM12.667 18a1.778 1.778 0 110-3.556 1.778 1.778 0 010 3.556zM10.889 3.778a1.778 1.778 0 103.556 0 1.778 1.778 0 00-3.556 0z", fill: "#FF8000" })));
  }
  if (icon === 'draggable-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.555 3.778a1.778 1.778 0 103.556 0 1.778 1.778 0 00-3.556 0zm1 0a.778.778 0 101.556 0 .778.778 0 00-1.556 0zM7.333 11.778a1.778 1.778 0 110-3.556 1.778 1.778 0 010 3.556zm0-1a.778.778 0 110-1.556.778.778 0 010 1.556zM7.333 18a1.778 1.778 0 110-3.556 1.778 1.778 0 010 3.556zm0-1a.778.778 0 110-1.556.778.778 0 010 1.556zM12.667 11.778a1.778 1.778 0 110-3.556 1.778 1.778 0 010 3.556zm0-1a.778.778 0 110-1.556.778.778 0 010 1.556zM10.889 16.222a1.778 1.778 0 103.555 0 1.778 1.778 0 00-3.555 0zm1 0a.778.778 0 101.555 0 .778.778 0 00-1.555 0zM12.667 5.556a1.778 1.778 0 110-3.556 1.778 1.778 0 010 3.556zm0-1a.778.778 0 110-1.556.778.778 0 010 1.556z", fill: "#FF8000" })));
  }
  if (icon === 'excel-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.571 6.5L11.333 2H4v16h12.571V6.5zM9.07 10.52L7.534 7.714H9.44l.847 1.582.846-1.582h1.905l-1.534 2.806 1.64 2.909h-1.958l-.9-1.684-.952 1.684H7.43l1.64-2.909z", fill: "#FF8000" })));
  }
  if (icon === 'excel-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M9.44 7.714H7.533L9.07 10.52l-1.64 2.909h1.904l.953-1.684.9 1.684h1.957l-1.64-2.909 1.534-2.806h-1.905l-.846 1.582-.847-1.582z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.571 6.5L11.333 2H4v16h12.571V6.5zm-1 10.5H5V3h5.963l4.608 3.96V17z", fill: "#FF8000" })));
  }
  if (icon === 'file-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M4 18h12V6.5L11 2H4v16z", fill: "#FF8000" })));
  }
  if (icon === 'file-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5 17h10V6.945L10.616 3H5v14zm6-15l5 4.5V18H4V2h7z", fill: "#FF8000" })));
  }
  if (icon === 'file-pdf-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M9.527 7.902c.07-.221.124-.422.16-.594.026-.125.042-.228.048-.309a.772.772 0 00.002-.095c-.001-.024-.004-.035-.004-.035-.023-.08-.098-.135-.188-.141a.229.229 0 00-.13.03.376.376 0 00-.146.17c-.08.161-.065.34.115.703.042.085.09.175.143.271zM9.664 9.788c-.128.3-.262.594-.395.867-.055.112-.11.229-.166.347l.37-.136a10.078 10.078 0 00.162-.061c.079-.036.305-.116.58-.203l.09-.029a5.37 5.37 0 01-.64-.785zM7.544 12.425a7.507 7.507 0 00-.292.144c-.146.076-.26.143-.339.2a.621.621 0 00-.079.065l-.001.001a.443.443 0 00.017.373c.026.044.05.058.057.062.003 0 .014.007.048-.002a.284.284 0 00.047-.035 1.21 1.21 0 00.16-.18 5.01 5.01 0 00.382-.628zM11.874 10.912c.277.191.54.339.758.427.127.051.224.077.292.085.03.004.048.004.056.003.188-.1.222-.207.22-.277-.003-.085-.062-.218-.255-.338h-.002a.46.46 0 00-.104-.016 2.098 2.098 0 00-.357.014c-.183.02-.39.055-.608.101z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 18H4V2h7l5 4.5V18zM9.606 6.003c.409.028.79.284.902.687.033.115.034.243.025.358-.009.12-.03.255-.06.398-.06.284-.16.623-.282.981-.046.134-.095.272-.147.412.046.09.093.184.14.281.184.387.544.82.967 1.211l.1-.025c.38-.095.784-.18 1.137-.219a2.95 2.95 0 01.511-.017c.151.01.334.042.488.136.358.22.602.55.613.924.011.388-.23.728-.64.938a.94.94 0 01-.544.077 2.055 2.055 0 01-.51-.142 5.185 5.185 0 01-1.068-.62 7.464 7.464 0 01-.301-.234 17.684 17.684 0 00-.798.252 4.94 4.94 0 00-.142.053c-.053.024-.208.08-.403.152l-.206.075c-.214.08-.468.174-.734.278-.12.25-.237.492-.351.71-.158.3-.319.578-.48.794-.082.108-.17.21-.266.294a.933.933 0 01-1.001.166.904.904 0 01-.411-.371 1.11 1.11 0 01-.047-1.006c.069-.153.211-.27.32-.348.122-.088.274-.176.436-.26a13.6 13.6 0 011.13-.507l.06-.024.111-.239c.125-.266.252-.538.383-.807.22-.455.446-.973.642-1.476-.054-.1-.108-.197-.16-.289l-.069-.121c-.11-.193-.213-.377-.297-.545-.201-.407-.341-.839-.116-1.298.215-.44.637-.66 1.068-.63z", fill: "#FF8000" })));
  }
  if (icon === 'file-pdf-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.606 6.003c.409.028.79.284.902.687.033.115.034.243.025.358-.009.12-.03.255-.06.398-.06.284-.16.623-.282.981-.046.134-.095.272-.147.412.046.09.093.184.14.281.184.387.544.82.967 1.211l.1-.025c.38-.095.784-.18 1.137-.219a2.95 2.95 0 01.511-.017c.151.01.334.042.488.136.358.22.602.55.613.924.011.388-.23.728-.64.938a.94.94 0 01-.544.077 2.055 2.055 0 01-.51-.142 5.185 5.185 0 01-1.068-.62 7.464 7.464 0 01-.301-.234 17.684 17.684 0 00-.798.252 4.94 4.94 0 00-.142.053c-.053.024-.208.08-.403.152l-.206.075c-.214.08-.468.174-.734.278-.12.25-.237.492-.351.71-.158.3-.319.578-.48.794-.082.108-.17.21-.266.294a.933.933 0 01-1.001.166.904.904 0 01-.411-.371 1.11 1.11 0 01-.047-1.006c.069-.153.211-.27.32-.348.122-.088.274-.176.436-.26a13.6 13.6 0 011.13-.507l.06-.024.111-.239c.125-.266.252-.538.383-.807.22-.455.446-.973.642-1.476-.054-.1-.108-.197-.16-.289l-.069-.121c-.11-.193-.213-.377-.297-.545-.201-.407-.341-.839-.116-1.298.215-.44.637-.66 1.068-.63zm-.079 1.9c.07-.222.124-.423.16-.595.026-.125.042-.228.048-.309a.772.772 0 00.002-.095c-.001-.024-.004-.035-.004-.035-.023-.08-.098-.135-.188-.141a.229.229 0 00-.13.03.376.376 0 00-.146.17c-.08.161-.065.34.115.703.042.085.09.175.143.271zm.137 1.885c-.128.3-.262.594-.395.867-.055.112-.11.229-.166.347l.37-.136a10.078 10.078 0 00.162-.061c.079-.036.305-.116.58-.203l.09-.029a5.37 5.37 0 01-.64-.785zm-2.12 2.637a7.507 7.507 0 00-.292.144c-.146.076-.26.143-.339.2a.621.621 0 00-.079.065l-.001.001a.443.443 0 00.017.373c.026.044.05.058.057.062.003 0 .014.007.048-.002a.284.284 0 00.047-.035 1.21 1.21 0 00.16-.18 5.01 5.01 0 00.382-.628zm4.33-1.514c.277.193.54.34.758.428.127.051.224.077.292.085.03.004.048.004.056.003.188-.1.222-.207.22-.277-.003-.085-.062-.218-.255-.338h-.002a.46.46 0 00-.104-.016 2.098 2.098 0 00-.357.014c-.183.02-.39.055-.608.101z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 6.5L11 2H4v16h12V6.5zM15 17H5V3h5.616L15 6.945V17z", fill: "#FF8000" })));
  }
  if (icon === 'files-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M6 5H3v13h10v-2H6V5z", fill: "#FF8000" }),
      h("path", { d: "M17 15V5.656L12.833 2H7v13h10z", fill: "#FF8000" })));
  }
  if (icon === 'files-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7 5V2h5.833L17 5.656V15h-4v3H3V5h4zm9 9H8V3h4.457L16 6.11V14zM7 6H4v11h8v-2H7V6z", fill: "#FF8000" })));
  }
  if (icon === 'flag-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M4 18V2h12l-3.429 4.053L16 10H5v8H4z", fill: "#FF8000" })));
  }
  if (icon === 'flag-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4 18V2h12.032L12.64 6.296l3.41 4.204H5V18H4zm1-8.5h8.95l-2.59-3.196L13.968 3H5v6.5z", fill: "#FF8000" })));
  }
  if (icon === 'folder-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M9 3l2 2h7v12H2V3h7z", fill: "#FF8000" })));
  }
  if (icon === 'folder-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11 5L9 3H2v14h16V5h-7zm6 1h-6.414l-2-2H3v12h14V6z", fill: "#FF8000" })));
  }
  if (icon === 'globe-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M17.983 10.531h-4.99C12.891 14.701 11.59 18 10 18c-1.59 0-2.891-3.298-2.994-7.469H2.017a8 8 0 0015.966 0zM8.005 9.531h3.99c-.044-1.928-.356-3.625-.81-4.837-.247-.658-.517-1.121-.766-1.402C10.17 3.01 10.025 3 10 3c-.025 0-.169.01-.419.292-.248.28-.518.744-.765 1.402-.454 1.212-.766 2.91-.81 4.837z", fill: "#FF8000" }),
      h("path", { d: "M12.995 9.531h4.991a8 8 0 00-15.973 0h4.992C7.096 5.331 8.402 2 10 2s2.904 3.331 2.995 7.531zM8.007 10.531c.049 1.902.358 3.576.808 4.775.247.658.517 1.121.765 1.402.25.282.394.292.42.292.025 0 .17-.01.42-.292.248-.28.518-.744.765-1.402.45-1.199.76-2.873.808-4.775H8.007z", fill: "#FF8000" })));
  }
  if (icon === 'globe-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.986 9.531a8 8 0 00-15.973 0H2v1h.017a8 8 0 0015.966 0H18v-1h-.014zm-7.567 7.177c-.25.282-.394.292-.419.292-.026 0-.17-.01-.42-.292-.248-.28-.518-.744-.765-1.402-.45-1.199-.76-2.873-.808-4.775h3.986c-.049 1.902-.359 3.576-.808 4.775-.247.658-.517 1.121-.766 1.402zm1.576-7.177h-3.99c.044-1.928.356-3.625.81-4.837.247-.658.517-1.121.766-1.402C9.83 3.01 9.974 3 10 3c.025 0 .17.01.42.292.248.28.518.744.765 1.402.454 1.212.766 2.91.81 4.837zm.998 1c-.065 2.665-.62 4.973-1.427 6.293a7.004 7.004 0 005.414-6.293h-3.987zm3.992-1h-3.99c-.058-2.69-.615-5.025-1.428-6.355a7.004 7.004 0 015.418 6.355zm-13.965 1a7.004 7.004 0 005.413 6.293c-.806-1.32-1.361-3.628-1.426-6.293H3.02zm3.985-1c.058-2.69.615-5.025 1.428-6.355a7.004 7.004 0 00-5.418 6.355h3.99z", fill: "#FF8000" })));
  }
  if (icon === 'grid-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3 3h5v5H3V3zM2 2h7v7H2V2zm1 10h5v5H3v-5zm-1-1h7v7H2v-7zm15-8h-5v5h5V3zm-5-1h-1v7h7V2h-6zm0 10h5v5h-5v-5zm-1-1h7v7h-7v-7z", fill: "#FF8000" })));
  }
  if (icon === 'grid-underlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9 2H2v7h7V2zm9 0h-7v7h7V2zm-7 9h7v7h-7v-7zm-2 0H2v7h7v-7z", fill: "#FF8000" })));
  }
  if (icon === 'group') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M4 5.33a1 1 0 11-2 0 1 1 0 012 0zM18 5H5v1h13V5zM18 10H8v1h10v-1zM11 15h7v1h-7v-1zM6 11.514a1 1 0 100-2 1 1 0 000 2zM10 15.334a1 1 0 11-2 0 1 1 0 012 0z", fill: "#FF8000" })));
  }
  if (icon === 'history') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M10 3a7 7 0 11-6.943 6.1l-.992-.127a8 8 0 102.34-4.692V2.917h-.999v3.151h3.152v-1H5.032A6.966 6.966 0 0110 3z", fill: "#FF8000" }),
      h("path", { d: "M10.5 5v4.793l3.354 3.353-.708.708L9.5 10.207V5h1z", fill: "#FF8000" })));
  }
  if (icon === 'home-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M8.5 18L3 17.998v-8.93l-.377.301L2 8.587l1.16-.925L9.974 2l6.772 5.588L18 8.587l-.623.782-.377-.3V18h-5.5v-4.998C11.5 12.5 11.5 11 10 11s-1.5 1.5-1.5 2v5z", fill: "#FF8000" })));
  }
  if (icon === 'home-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.5 18v-5c0-.5 0-2 1.5-2s1.5 1.5 1.5 2.002V18H17V9.069l.377.3.623-.782-1.254-1L9.974 2 3.16 7.662 2 8.587l.623.782.377-.3v8.93L8.5 18zM4 16.998L7.5 17v-4.025c0-.254-.001-.927.268-1.556a2.31 2.31 0 01.79-.995C8.96 10.14 9.45 10 10 10c.55 0 1.039.14 1.443.425.398.28.641.649.789.994.27.63.268 1.303.268 1.558V17H16V8.268l-6.024-4.97L4 8.265v8.733z", fill: "#FF8000" })));
  }
  if (icon === 'image-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M6.416 7.096a1.048 1.048 0 100-2.096 1.048 1.048 0 000 2.096z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 2h16v15.282l-4.359-9.686-4.714 5.238-3.626-2.59L2 17.318V2zm4.416 6.096a2.048 2.048 0 100-4.096 2.048 2.048 0 000 4.096z", fill: "#FF8000" }),
      h("path", { d: "M17.227 18H2.785L5.7 11.757l3.374 2.41 4.286-4.762L17.227 18z", fill: "#FF8000" })));
  }
  if (icon === 'image-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6.416 8.096a2.048 2.048 0 100-4.096 2.048 2.048 0 000 4.096zm0-1a1.048 1.048 0 100-2.096 1.048 1.048 0 000 2.096z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 17.276V2H2v15.277l-.012.025.012.006V18h16v-.683l.015-.007-.015-.034zM17 3H3v12.148l2.302-4.904 3.625 2.59 4.714-5.238L17 15.056V3zm-.221 14l-3.42-7.596-4.286 4.762-3.375-2.41L3.235 17h13.544z", fill: "#FF8000" })));
  }
  if (icon === 'link-external') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M14.595 2.86h2.008l-9.561 9.562.678.679 9.562-9.562v2.008h.96V1.901h-3.647v.96z", fill: "#FF8000" }),
      h("path", { d: "M11 2v1H3v14h14V9h1v9H2V2h9z", fill: "#FF8000" })));
  }
  if (icon === 'link-off') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M5.73 2.027l-.858.515 9.27 15.43.858-.516L5.73 2.027zM12.888 12l.601 1H18V6h-7v2h1V7h5v5h-4.112zM9 11.354L8.788 11H8v1H3V7h3.384l-.6-1H2v7h7v-1.646z", fill: "#FF8000" }),
      h("path", { d: "M7.586 9l.6 1H7V9h.586zM11.086 9l.6 1H13V9h-1.914z", fill: "#FF8000" })));
  }
  if (icon === 'link') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M3 7h5v1h1V6H2v7h7v-2H8v1H3V7zM11 11v2h7V6h-7v2h1V7h5v5h-5v-1h-1z", fill: "#FF8000" }),
      h("path", { d: "M13 10V9H7v1h6z", fill: "#FF8000" })));
  }
  if (icon === 'list') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M4 5.33a1 1 0 11-2 0 1 1 0 012 0zM18 5H5v1h13V5zM18 10H5v1h13v-1zM5 15h13v1H5v-1zM3 11.514a1 1 0 100-2 1 1 0 000 2zM4 15.334a1 1 0 11-2 0 1 1 0 012 0z", fill: "#FF8000" })));
  }
  if (icon === 'location-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.829 18C11.886 15.985 16 11.173 16 8.044 16 4 12.914 2 9.829 2 6.743 2 4 4.25 4 8.044c0 3.2 3.872 7.689 5.819 9.944l.01.012zM10 10a2 2 0 100-4 2 2 0 000 4z", fill: "#FF8000" })));
  }
  if (icon === 'location-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM8.5 8a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.99 17.84c.17-.169.351-.355.542-.556C12.698 15.001 16 10.847 16 8.044 16 4 12.914 2 9.829 2 6.743 2 4 4.25 4 8.044c0 2.877 3.13 6.795 5.175 9.196.23.27.447.52.643.748l.01.012a22.8 22.8 0 00.162-.16zm2.875-4.972a33.183 33.183 0 01-2.988 3.653c-.888-1.044-1.952-2.344-2.867-3.708C5.804 11.018 5 9.317 5 8.044 5 4.833 7.264 3 9.829 3c1.337 0 2.636.435 3.586 1.26C14.345 5.068 15 6.3 15 8.044c0 .581-.196 1.32-.586 2.18-.384.85-.928 1.752-1.549 2.644z", fill: "#FF8000" })));
  }
  if (icon === 'mail-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M2 5.625l8 6 8-6V15H2V5.625z", fill: "#FF8000" }),
      h("path", { d: "M2.833 5L10 10.375 17.167 5H2.833z", fill: "#FF8000" })));
  }
  if (icon === 'mail-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 5H2v10h16V5zm-2.027 1H4.027L10 10.38 15.973 6zM3 6.487V14h14V6.487l-7 5.133-7-5.133z", fill: "#FF8000" })));
  }
  if (icon === 'menu-horizontal-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M11.778 10a1.778 1.778 0 11-3.556 0 1.778 1.778 0 013.556 0zM18 10a1.778 1.778 0 11-3.556 0A1.778 1.778 0 0118 10zM5.556 10A1.778 1.778 0 112 10a1.778 1.778 0 013.556 0z", fill: "#FF8000" })));
  }
  if (icon === 'menu-horizontal-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.556 10A1.778 1.778 0 112 10a1.778 1.778 0 013.556 0zm-1 0A.778.778 0 113 10a.778.778 0 011.556 0zM10 11.778a1.778 1.778 0 100-3.556 1.778 1.778 0 000 3.556zm0-1a.778.778 0 100-1.556.778.778 0 000 1.556zM16.222 11.778a1.778 1.778 0 100-3.556 1.778 1.778 0 000 3.556zm0-1a.778.778 0 100-1.556.778.778 0 000 1.556z", fill: "#FF8000" })));
  }
  if (icon === 'menu-vertical-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M8.222 3.778a1.778 1.778 0 103.556 0 1.778 1.778 0 00-3.556 0zM10 11.778a1.778 1.778 0 110-3.556 1.778 1.778 0 010 3.556zM10 18a1.778 1.778 0 110-3.556A1.778 1.778 0 0110 18z", fill: "#FF8000" })));
  }
  if (icon === 'menu-vertical-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.222 10a.778.778 0 101.556 0 .778.778 0 00-1.556 0zm-1 0a1.778 1.778 0 103.556 0 1.778 1.778 0 00-3.556 0zM9.222 16.222a.778.778 0 101.556 0 .778.778 0 00-1.556 0zm-1 0a1.778 1.778 0 103.556 0 1.778 1.778 0 00-3.556 0zM9.222 3.778a.778.778 0 101.556 0 .778.778 0 00-1.556 0zm-1 0a1.778 1.778 0 103.556 0 1.778 1.778 0 00-3.556 0z", fill: "#FF8000" })));
  }
  if (icon === 'menu') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M2 7h16V6H2v1zM2 10.5h16v-1H2v1zM2 14h10v-1H2v1z", fill: "#FF8000" })));
  }
  if (icon === 'microphone-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 2a3 3 0 00-3 3v5a3 3 0 106 0V5a3 3 0 00-3-3zm.5 12.984c2.114-.14 3.27-1.167 3.873-2.239A5.03 5.03 0 0015 10.521V10.5l-.5-.001H14V10.525l-.007.106a4.029 4.029 0 01-.491 1.623C13.026 13.1 12.065 14 10 14c-2.065 0-3.026-.899-3.502-1.745a4.031 4.031 0 01-.497-1.729L6 10.502V10.5l-.5.001H5v.021a2.252 2.252 0 00.01.19 5.03 5.03 0 00.616 2.033c.604 1.073 1.76 2.1 3.874 2.24V17h-2v1h5v-1h-2v-2.016z", fill: "#FF8000" })));
  }
  if (icon === 'microphone-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 5v5a2 2 0 11-4 0V5a2 2 0 114 0zM7 5a3 3 0 016 0v5a3 3 0 11-6 0V5zm3.5 9.984c2.114-.14 3.27-1.167 3.873-2.239A5.03 5.03 0 0015 10.521V10.5l-.5-.001H14V10.525l-.007.106a4.029 4.029 0 01-.491 1.623C13.026 13.1 12.065 14 10 14c-2.065 0-3.026-.899-3.502-1.745a4.031 4.031 0 01-.497-1.729L6 10.502V10.5l-.5.001H5v.021a2.252 2.252 0 00.01.19 5.03 5.03 0 00.616 2.033c.604 1.073 1.76 2.1 3.874 2.24V17h-2v1h5v-1h-2v-2.016z", fill: "#FF8000" })));
  }
  if (icon === 'moon-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M8.362 7.682c0-2.417 1.276-4.506 3.127-5.617-.191 0-.446-.065-.638-.065C6.511 2 3 5.592 3 10.033 3 14.408 6.51 18 10.851 18c3.192 0 5.936-1.96 7.149-4.702a6.12 6.12 0 01-3.255.914c-3.575 0-6.383-2.938-6.383-6.53z", fill: "#FF8000" })));
  }
  if (icon === 'moon-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.49 2.065c-.096 0-.208-.016-.32-.032-.111-.017-.223-.033-.319-.033-.35 0-.694.023-1.032.069C5.967 2.585 3 5.949 3 10.033 3 14.408 6.51 18 10.851 18c2.562 0 4.836-1.263 6.261-3.18.35-.47.649-.981.888-1.522-.472.29-.976.516-1.51.671-.549.16-1.13.243-1.745.243-3.575 0-6.383-2.938-6.383-6.53 0-1.837.737-3.484 1.903-4.657a6.355 6.355 0 011.224-.96zM8.698 3.354C5.977 4.276 4 6.902 4 10.033 4 13.873 7.08 17 10.851 17a6.757 6.757 0 004.602-1.82 7.539 7.539 0 01-.708.032c-4.155 0-7.383-3.415-7.383-7.53 0-1.616.497-3.109 1.337-4.328z", fill: "#FF8000" })));
  }
  if (icon === 'notification-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M10 2a6 6 0 00-6 6v4.5h12V8a6 6 0 00-6-6zM8.063 16.5a2 2 0 003.874 0H8.063zM3.5 15.5v-2h13v2h-13z", fill: "#FF8000" })));
  }
  if (icon === 'notification-off-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M4.003 8c0-.572.08-1.125.23-1.65l6.149 6.15H4.003V8zM14.625 12.5L5.822 3.697A6 6 0 0116.004 8v4.5h-1.38zM3.503 13.5h7.879l2 2H3.503v-2zM15.625 13.5l.878.879V13.5h-.878zM10.003 18a2 2 0 01-1.937-1.5h3.874a2 2 0 01-1.937 1.5zM2.817 2.107l-.707.707 15.062 15.061.707-.707L2.817 2.107z", fill: "#FF8000" })));
  }
  if (icon === 'notification-off-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M6.52 4.413l-.707-.707A6 6 0 0116.003 8v5h1v1.896l-2-2V8A5 5 0 006.52 4.413z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12.864 15l1 1h-1.86a2 2 0 11-4 0h-5v-3h1V8c0-.567.078-1.116.225-1.636l.838.838c-.042.26-.064.526-.064.798v5h5.861l1 1h-7.86v1h8.86zm-2.86 2a1 1 0 01-1-1h2a1 1 0 01-1 1z", fill: "#FF8000" }),
      h("path", { d: "M2.817 2.107l-.707.707 15.062 15.061.707-.707L2.817 2.107z", fill: "#FF8000" })));
  }
  if (icon === 'notification-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4 8v5H3v3h5a2 2 0 104 0h5v-3h-1V8A6 6 0 004 8zm11 5V8A5 5 0 005 8v5h10zm-4 3H9a1 1 0 102 0zm-7-1v-1h12v1H4z", fill: "#FF8000" })));
  }
  if (icon === 'pin-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M8 8.666L12.167 4.5 13 2l5 5-2.5.833-4.166 4.166L13 15.333 11.333 17l-3.776-3.776-4.849 4.849-.781-.782 4.849-4.848L3 8.667l1.667-1.668L8 8.666z", fill: "#FF8000" })));
  }
  if (icon === 'pin-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 7l-5-5-.833 2.5L8 8.665 4.667 6.999 3 8.667l3.776 3.776-4.849 4.848.781.782 4.85-4.849L11.332 17 13 15.333 11.334 12 15.5 7.833 18 7zM8.198 9.883l4.843-4.844.396-1.188 2.711 2.712-1.188.396-4.843 4.843 1.666 3.334-.45.45-6.919-6.92.45-.45 3.334 1.667z", fill: "#FF8000" })));
  }
  if (icon === 'print-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M6 2h8v2.5H6V2z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 5.5V15h4v-3h8v3h4V5.5H2zm13 3a.5.5 0 100-1 .5.5 0 000 1z", fill: "#FF8000" }),
      h("path", { d: "M13 13H7v5h6v-5z", fill: "#FF8000" })));
  }
  if (icon === 'print-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M15 8.5a.5.5 0 100-1 .5.5 0 000 1z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6 5H2v10h4v3h8v-3h4V5h-4V2H6v3zm7-2H7v2h6V3zm1 11h3V6H3v8h3v-3h8v3zm-7-2h6v5H7v-5z", fill: "#FF8000" })));
  }
  if (icon === 'settings-alt') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15 5.5A2 2 0 0116.937 7H19v1h-2.063a2 2 0 01-3.874 0H1V7h12.063A2 2 0 0115 5.5zm0 3a1 1 0 100-2 1 1 0 000 2zM6.937 12a2 2 0 00-3.874 0H1v1h2.063a2 2 0 003.874 0H19v-1H6.937zM4 12.5a1 1 0 102 0 1 1 0 00-2 0z", fill: "#FF8000" })));
  }
  if (icon === 'settings-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.222 2h3.556v2.035c.396.118.776.275 1.136.466l1.611-1.612 2.586 2.586L15.5 7.087c.191.359.348.739.466 1.135H18v3.556h-2.035a6.184 6.184 0 01-.466 1.136l1.612 1.611-2.586 2.586-1.612-1.612c-.359.191-.739.348-1.135.466V18H8.222v-2.035a6.191 6.191 0 01-1.135-.466l-1.612 1.612-2.586-2.586L4.5 12.914c-.191-.36-.348-.74-.466-1.136H2V8.222h2.035c.118-.396.275-.776.466-1.135L2.889 5.475l2.586-2.586L7.086 4.5c.36-.191.74-.348 1.136-.466V2zM10 12a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z", fill: "#FF8000" })));
  }
  if (icon === 'settings-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13 10a3 3 0 11-6 0 3 3 0 016 0zm-1 0a2 2 0 11-4 0 2 2 0 014 0z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.778 2v2.035c.396.118.776.275 1.136.466l1.611-1.612 2.586 2.586L15.5 7.087c.191.359.348.739.466 1.135H18v3.556h-2.035a6.184 6.184 0 01-.466 1.136l1.612 1.611-2.586 2.586-1.612-1.612c-.359.191-.739.348-1.135.466V18H8.222v-2.035a6.191 6.191 0 01-1.135-.466l-1.612 1.612-2.586-2.586L4.5 12.914c-.191-.36-.348-.74-.466-1.136H2V8.222h2.035c.118-.396.275-.776.466-1.135L2.889 5.475l2.586-2.586L7.086 4.5c.36-.191.74-.348 1.136-.466V2h3.556zm1.32 3.73l1.427-1.427 1.172 1.172-1.428 1.427.347.653c.16.302.291.62.39.952l.213.715H17v1.556h-1.781l-.213.714c-.099.333-.23.651-.39.953l-.347.653 1.428 1.427-1.172 1.172-1.427-1.428-.654.347c-.3.16-.62.291-.952.39l-.714.213V17H9.222v-1.781l-.715-.213a5.184 5.184 0 01-.952-.39l-.653-.347-1.427 1.428-1.172-1.172 1.428-1.427-.347-.653a5.182 5.182 0 01-.39-.953l-.213-.714H3V9.222h1.781l.213-.715c.099-.332.23-.65.39-.952l.347-.653-1.428-1.427 1.172-1.172 1.427 1.428.653-.347c.302-.16.62-.291.952-.39l.715-.213V3h1.556v1.781l.714.213c.333.099.651.23.953.39l.653.347z", fill: "#FF8000" })));
  }
  if (icon === 'star-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.389 8.111L9.5 2 7.611 8.111H1.5l4.944 3.777L4.556 18 9.5 14.223 14.444 18l-1.888-6.111L17.5 8.11h-6.111z", fill: "#FF8000" })));
  }
  if (icon === 'star-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.389 8.111L9.5 2 7.611 8.111H1.5l4.944 3.777L4.556 18 9.5 14.223 14.444 18l-1.888-6.111L17.5 8.11h-6.111zm3.187 1h-3.878L9.5 5.233 8.302 9.111H4.424l3.137 2.396-1.198 3.877L9.5 12.988l3.137 2.396-1.198-3.877 3.137-2.396z", fill: "#FF8000" })));
  }
  if (icon === 'tag-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 2H9.5L2 9.5l8.5 8.5 7.5-7.326V2zm-3.883 5.89a2.031 2.031 0 100-4.062 2.031 2.031 0 000 4.063z", fill: "#FF8000" })));
  }
  if (icon === 'tag-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.148 5.86a2.031 2.031 0 11-4.063 0 2.031 2.031 0 014.063 0zm-1 0a1.032 1.032 0 11-2.063 0 1.032 1.032 0 012.063 0z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 9.5L9.5 2H18v8.675L10.5 18 2 9.5zm1.414 0l6.5-6.5H17v7.254l-6.492 6.34L3.414 9.5z", fill: "#FF8000" })));
  }
  if (icon === 'time-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.5 6.103v4.707l2.959 2.959.707-.707-2.666-2.667V6.103h-1z", fill: "#FF8000" })));
  }
  if (icon === 'time-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M9.5 6.102v4.707l2.959 2.96.707-.708-2.666-2.666V6.102h-1z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z", fill: "#FF8000" })));
  }
  if (icon === 'trending-down') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M16.331 14.969l-1.636.017.01 1.01 3.293-.034-.036-3.364-.989.011.017 1.6-6.335-6.814L8.598 8.94l-5.743-5.8-.71.703 6.356 6.42 2.034-1.528 5.796 6.234z", fill: "#FF8000" })));
  }
  if (icon === 'trending-up') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M16.297 5.028l-1.602-.017.01-1.011 3.293.035-.036 3.363-.989-.01.017-1.638-6.835 7.352-2.057-1.545-5.243 5.3-.71-.703L8 10.234l2.035 1.528 6.262-6.734z", fill: "#FF8000" })));
  }
  if (icon === 'update') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M10 3a7 7 0 106.943 6.1l.992-.127a8 8 0 11-2.34-4.692V2.917h.999v3.151h-3.152v-1h1.526A6.966 6.966 0 0010 3z", fill: "#FF8000" }),
      h("path", { d: "M10.5 5v4.793l3.354 3.353-.708.708L9.5 10.207V5h1z", fill: "#FF8000" })));
  }
  if (icon === 'user-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M10 10a4 4 0 100-8 4 4 0 000 8zM10 10a8 8 0 00-8 8h16a8 8 0 00-8-8z", fill: "#FF8000" })));
  }
  if (icon === 'user-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14 6a4 4 0 11-8 0 4 4 0 018 0zm-1 0a3 3 0 11-6 0 3 3 0 016 0z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 10a8.001 8.001 0 00-8 8h16a8.001 8.001 0 00-8-8zm0 1a7.001 7.001 0 016.93 6H3.07A7.002 7.002 0 0110 11z", fill: "#FF8000" })));
  }
  if (icon === 'video-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M14 6H2v8h12v-2.563l3.95 2.027V6.536L14 8.563V6z", fill: "#FF8000" })));
  }
  if (icon === 'video-off-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M4.104 3.414l-.707.707L16.125 16.85l.707-.707L4.104 3.414zM3.861 6l8 8H2V6h1.861zM8.104 6L14 11.896v-.459l3.95 2.027V6.536L14 8.563V6H8.104z", fill: "#FF8000" })));
  }
  if (icon === 'video-off-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M4.104 3.414l-.707.707L16.125 16.85l.707-.707L4.104 3.414zM10.861 13l1 1H2V6h1.861l1 1H3v6h7.861z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13 7v3.896l1 1v-.459l3.95 2.027V6.536L14 8.563V6H8.104l1 1H13zm1 3.313l2.95 1.514V8.173L14 9.687v.626z", fill: "#FF8000" })));
  }
  if (icon === 'video-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 6h12v2.563l3.95-2.027v6.928L14 11.437V14H2V6zm12 3.687v.626l2.95 1.514V8.173L14 9.687zM13 7H3v6h10V7z", fill: "#FF8000" })));
  }
  if (icon === 'view-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 15.333c4.97 0 8-5.333 8-5.333s-3.03-5.333-8-5.333C5.03 4.667 2 10 2 10s3.03 5.333 8 5.333zM12 10a2 2 0 11-4 0 2 2 0 014 0zm1 0a3 3 0 11-6 0 3 3 0 016 0z", fill: "#FF8000" })));
  }
  if (icon === 'view-off-filled') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.653 14.337l1.636 1.635.707-.707L4.714 3.983l-.707.707 1.502 1.502C3.268 7.768 2 10 2 10s3.03 5.333 8 5.333c1.374 0 2.599-.407 3.653-.996zm-1.901-1.902l-.721-.72A2 2 0 018.286 8.97l-.722-.722a3 3 0 004.188 4.188z", fill: "#FF8000" }),
      h("path", { d: "M18 10s-.97 1.707-2.712 3.19l-2.395-2.394a3 3 0 00-3.689-3.689L7.302 5.204A7.155 7.155 0 0110 4.667c4.97 0 8 5.333 8 5.333z", fill: "#FF8000" }),
      h("path", { d: "M10.1 8.002A2 2 0 0111.998 9.9L10.1 8.002z", fill: "#FF8000" })));
  }
  if (icon === 'view-off-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { d: "M15.288 13.19C17.03 11.707 18 10 18 10s-3.03-5.333-8-5.333c-.977 0-1.88.206-2.698.537l.778.779A6.067 6.067 0 0110 5.667c2.115 0 3.878 1.137 5.169 2.385A12.966 12.966 0 0116.813 10a12.971 12.971 0 01-1.644 1.948c-.187.18-.384.36-.59.532l.709.71z", fill: "#FF8000" }),
      h("path", { d: "M12.893 10.796a3 3 0 00-3.689-3.689l.896.895A2 2 0 0111.998 9.9l.895.896z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.735 4.004l-.021-.021-.707.707 1.502 1.502C3.268 7.768 2 10 2 10s3.03 5.333 8 5.333c1.374 0 2.599-.407 3.653-.997l1.636 1.636.683-.683L4.712 4.028l.023-.024zm8.18 9.594l-1.163-1.163a3 3 0 01-4.188-4.188L6.228 6.912c-.512.346-.978.738-1.396 1.141A12.969 12.969 0 003.187 10a12.974 12.974 0 001.644 1.948c1.29 1.248 3.054 2.385 5.169 2.385 1.066 0 2.043-.289 2.915-.735zm-1.884-1.884L8.286 8.97a2 2 0 002.745 2.745z", fill: "#FF8000" })));
  }
  if (icon === 'view-outlined') {
    return (h("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { role: button && 'button' }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 10s3.03 5.333 8 5.333c4.97 0 8-5.333 8-5.333s-3.03-5.333-8-5.333C5.03 4.667 2 10 2 10zm1.187 0a12.961 12.961 0 001.644 1.948c1.29 1.248 3.054 2.385 5.169 2.385 2.115 0 3.878-1.137 5.169-2.385A12.958 12.958 0 0016.813 10a12.966 12.966 0 00-1.644-1.948C13.879 6.804 12.115 5.667 10 5.667c-2.115 0-3.878 1.137-5.169 2.385A12.969 12.969 0 003.187 10z", fill: "#FF8000" }),
      h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 12a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z", fill: "#FF8000" })));
  }
};
export default SewingIcon;
