// ==UserScript==
// @name         Stock Redirect Button
// @namespace    Violentmonkey Scripts
// @version      1.0
// @description  Adds a button to redirect from Screener.in to Groww.in for the stock being viewed
// @author       dude-with-the-long-username
// @match        https://www.screener.in/company/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=screener.in
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Create a button
    var redirectButton = document.createElement("button");
    redirectButton.innerHTML = "Groww";
    redirectButton.style.position = "fixed";
    redirectButton.style.top = "calc(100% - 61.8vh)";
    // redirectButton.style.right = "10px";
    redirectButton.style.left = "0px";
    redirectButton.style.zIndex = "10000";
    var screenerPath = window.location.href.split("/");
    var stockSymbol = screenerPath[screenerPath.length - 3];  // 3rd last entry in array
    redirectButton.addEventListener ("click", function() {
        window.location.href = "https://groww.in/search?q=" + stockSymbol;
    });
    document.body.appendChild(redirectButton);
})();