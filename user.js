// ==UserScript==
// @name         Login Gota.io
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  That is a login for game Gota.io
// @author       Flashen
// @match        https://gota.io/web/
// @updateURL    https://raw.githubusercontent.com/zFalshen/user.js/main/user.js
// @downloadURL  https://raw.githubusercontent.com/zFalshen/user.js/main/user.js
// ==/UserScript==

(function() {
    'use strict';

    const correctUsername = "weynoyungtrappa";
    const correctPassword = "weynoweyno12345";

    function login() {
        const username = prompt("Введите логин:");
        const password = prompt("Введите пароль:");

        if (username === correctUsername && password === correctPassword) {
            alert("Успешный вход!");

        } else {
            alert("Неверный логин или пароль. За ними обращайтесь к weyno. Discord: weyyn");

            window.location.href = "https://discord.com/channels/@me/1192510380329680936"; // Замените на нужный URL
        }
    }


    window.onload = login;
})();
