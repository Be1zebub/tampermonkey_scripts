// ==UserScript==
// @name         Github file download button
// @namespace    https://github.com/
// @version      0.1
// @description  Github file download button
// @author       Beelzebub
// @match        https://github.com/*/*
// @exclude      *~edit
// @icon         https://github.githubassets.com/favicons/favicon-dark.png
// ==/UserScript==

(function() {
    'use strict';

    HTMLElement.prototype.Add = function(tag, eclass){
        var child = document.createElement(tag);
        if (eclass) {
            child.className = eclass;
        }
        this.append(child);
        return child;
    }

    HTMLElement.prototype.AddClass = function(eclass) {
        this.classList.add(eclass);
    }

   function downloadFile(data, fileName, type="text/plain") {
        const a = document.createElement("a");
        a.style.display = "none";
        document.body.appendChild(a);

        a.href = window.URL.createObjectURL(
          new Blob([data], { type })
        );
        a.setAttribute("download", fileName);
        a.click();
        window.URL.revokeObjectURL(a.href);
        document.body.removeChild(a);
    }

    function work() {
        console.log("Github file download button work!");

        var raw = document.getElementById("raw-url");
        if (raw == null) {return};

        var BtnGroup = raw.parentElement;

        var url = raw.getAttribute("href");
        var filename = url.substring(url.lastIndexOf('/')+1);

        var download = BtnGroup.Add("a");
        download.AddClass("btn-sm");
        download.AddClass("btn");
        download.AddClass("BtnGroup-item");
        download.setAttribute("data-view-component", true);
        download.setAttribute("role", "button");
        download.setAttribute("href", url);
        download.innerHTML = "Download";
        download.addEventListener("click", function (e) {
            e.preventDefault();
            downloadFile(url, filename)
        });
    }

    work();
    document.addEventListener("pjax:end", work);
})();
