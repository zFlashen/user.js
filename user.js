// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-30
// @description  try to take over the world!
// @author       You
// @match        https://gota.io/web/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gota.io
// @grant        none
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
