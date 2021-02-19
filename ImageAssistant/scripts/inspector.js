/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

if (typeof _w_domain == "undefined") {
    window._w_domain = "_w_elixir";
}

if (document.querySelector("input#" + window._w_domain) == null && typeof chrome != "undefined" && typeof chrome.runtime != "undefined" && typeof chrome.runtime.id != "undefined" && typeof chrome.runtime.getURL != "undefined") {
    let _w_verve = document.createElement("input");
    _w_verve.type = "hidden";
    _w_verve.id = _w_domain;
    (document.head || document.documentElement).appendChild(_w_verve);
    let _w_sheaf = document.createElement("script");
    _w_sheaf.type = "text/javascript";
    _w_sheaf.src = chrome.runtime.getURL("/scripts/inspector.js");
    (document.head || document.documentElement).appendChild(_w_sheaf);
} else if (!window._w_rivet) {
    window._w_rivet = function() {
        let _w_feat = [];
        let _w_comic = {};
        const _w_gem = /(['"\s\n\r])[^'"\s\n\r]*?\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp)(\?[^'"\s\n\r]*)?(?=['"\s\n\r])/gi;
        let _w_dogma = function(_w_heir) {
            _w_heir && _w_heir.forEach((function(item) {
                let _w_sage = item.replace(/[\\'"\s\n\r]+/gi, "");
                if (!_w_comic[_w_sage]) {
                    _w_comic[_w_sage] = true;
                    _w_feat.push(_w_sage);
                }
            }));
        };
        XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function(value) {
            this.addEventListener("load", (function() {
                if (!this.responseType || this.responseType === "text") {
                    let _w_heir = this.responseText.replace(/[<>]/gi, '"').match(_w_gem);
                    _w_dogma(_w_heir);
                }
            }), false);
            this.realSend(value);
        };
        const _w_truism = window.fetch;
        window.fetch = function() {
            return new Promise(((resolve, reject) => {
                _w_truism.apply(this, arguments).then((function(response) {
                    response.clone && response.clone().text().then((function(_w_tinder) {
                        let _w_heir = _w_tinder.replace(/[<>]/gi, '"').match(_w_gem);
                        _w_dogma(_w_heir);
                    }));
                    resolve(response);
                })).catch((function(response) {
                    reject(response);
                }));
            }));
        };
        setInterval((function() {
            let _w_verve = document.getElementById(_w_domain);
            if (_w_verve && _w_verve.value && _w_verve.value.length > 0 && _w_verve.value == _w_domain && _w_feat.length > 0) {
                _w_verve.value = JSON.stringify(_w_feat);
                _w_feat = [];
            }
        }), 512);
        return {
            _w_hut: function() {
                return _w_feat.length;
            }
        };
    }();
}