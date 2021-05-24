// ==UserScript==
// @name         Gmod Wiki Dark Style
// @namespace    https://wiki.facepunch.com/gmod/
// @version      0.1
// @description  try to take over the world!
// @author       Phoenixf129
// @match        https://wiki.facepunch.com/gmod/*
// @exclude      *~edit
// @icon         https://files.facepunch.com/garry/822e60dc-c931-43e4-800f-cbe010b3d4cc.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('.body { background: url(https://cdn.hbn.gg/f/wikibg2.png); background-color: #333; }');
    addGlobalStyle('.body-tabs ul li a.active { background-color: #333; color: #fff; }');
    addGlobalStyle('.markdown { color: #999; }');
    addGlobalStyle('.markdown code { background-color: #000; }');
    addGlobalStyle('.markdown span.key { background-color: #000; }'); // make span copy markdown code
    addGlobalStyle('.markdown h2 { color: #0082ff; }');
    addGlobalStyle('.markdown h3 { color: #0082ff; }');
    addGlobalStyle('.body-tabs ul li a { color: #fff; }');
    addGlobalStyle('.markdown table td { border: 1px solid #111; background-color: #222; }');
    addGlobalStyle('.markdown table th { border: 1px solid #111; background-color: #333; }');
})();
