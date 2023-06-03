(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LibDate = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * @return "14:54:26" for 14h54 26s
 */
const time = function(){
  const now = new Date()
  const hh = now.getHours().toString().padStart(2, "0")
  const mm = now.getMinutes().toString().padStart(2, "0")
  const ss = now.getSeconds().toString().padStart(2, "0")
  return `${hh}:${mm}:${ss}`
}

/**
 * @param Reference timestamp in ms
 * @return "00:15:24" for 15 minutes and 24 seconds
 */
const elapsedTime = function(Reference){
  const chrono = Date.now() - Reference // ms

  let rest = chrono
  const hours = Math.floor(rest / 3600000)
  rest -= hours * 3600000

  const minutes = Math.floor(rest / 60000)
  rest -= minutes * 60000

  const seconds = Math.floor(rest / 1000)

  const hh = hours.toString().padStart(2, "0")
  const mm = minutes.toString().padStart(2, "0")
  const ss = seconds.toString().padStart(2, "0")
  return `${hh}:${mm}:${ss}`
}

/**
 * CommonJS format for NodeJS and Espruino
 */
module.exports = {
  time,
  elapsedTime,
}

},{}]},{},[1])(1)
});
