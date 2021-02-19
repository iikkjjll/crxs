/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

window._w_entity = "0123456789";

window._w_ken = "0123456789abcdef";

window._w_signal = "0123456789abcdefghijklmnopqrstuvwxyz";

window._w_viand = 8e3;

window._w_influx = "https://www.pullywood.com/ImageAssistant/blank.html";

window._w_byline = _w_spike(window._w_influx);

window._w_clog = _w_spike(window._w_influx);

window._w_hulk = "http://www.pullywood.com/ImageAssistant/images/IAnalytic.png";

window._w_mayhem = "http://www.pullywood.com/publish/imageassistant-resource-list";

window._w_toll = _w_spike("http://www.pullywood.com/ImageAssistant/defaultRegexpUrlRule.properties");

window._w_scurvy = _w_spike("http://localhost:61257/check");

window._w_sluice = _w_spike("http://localhost:61257/collection/save");

window._w_patent = _w_spike("http://www.pullywood.com/ImageAssistant/dynamic_config.json");

window._w_tyro = false;

window._w_quarry = {};

window._w_jolt = 512;

window._w_buoy = "./images/loading.gif";

window._w_sash = {
    _keyStr: "bFf2YMpEZLT6OBqN/DCtJlnc9G154W=wP+h3Rrk8xadIzjQoHmv7sAS0yeUiKVugX",
    encode: function(e) {
        let t = "";
        let n, r, i, s, o, u, a;
        let f = 0;
        e = _w_sash._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64;
            } else if (isNaN(i)) {
                a = 64;
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
        }
        return t;
    },
    decode: function(e) {
        let t = "";
        let n, r, i;
        let s, o, u, a;
        let f = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r);
            }
            if (a != 64) {
                t = t + String.fromCharCode(i);
            }
        }
        t = _w_sash._utf8_decode(t);
        return t;
    },
    _utf8_encode: function(e) {
        e = e.replace(/\r\n/g, "\n");
        let t = "";
        for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128);
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128);
            }
        }
        return t;
    },
    _utf8_decode: function(e) {
        let t = "";
        let n = 0;
        let r = 0, c1 = 0, c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++;
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2;
            } else {
                c2 = e.charCodeAt(n + 1);
                var c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3;
            }
        }
        return t;
    }
};

if (!Object.entries) {
    Object.entries = function(obj) {
        var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
        while (i--) {
            resArray[i] = [ ownProps[i], obj[ownProps[i]] ];
        }
        return resArray;
    };
}

if (!Object.values) {
    Object.values = function(obj) {
        return Object.keys(obj).map((function(key) {
            return obj[key];
        }));
    };
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        let _w_loop = this.toString();
        if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > _w_loop.length) {
            position = _w_loop.length;
        }
        position -= searchString.length;
        let _w_avowal = _w_loop.indexOf(searchString, position);
        return _w_avowal !== -1 && _w_avowal === position;
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

if (!Number.parseInt) Number.parseInt = parseInt;

if (!window.URL) {
    window.URL = function(url) {
        if (url.indexOf("://") < 0) throw new TypeError("Invalid URL");
        this.url = url;
        this.link = document.createElement("a");
        this.link.href = url;
        this.href = this.link.href;
        this.protocol = this.link.protocol;
        this.host = this.link.host;
        this.hostname = this.link.hostname;
        this.port = this.link.port;
        this.pathname = this.link.pathname;
        this.search = this.link.search;
        this.hash = this.link.hash;
        this.username = this.link.username;
        this.password = this.link.password;
        this.origin = this.link.origin;
    };
}

const _w_gem = /(['"\s\n\r])[^'"\s\n\r]*?\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp)(\?[^'"\s\n\r]*)?(?=['"\s\n\r])/gi;

const _w_dogma = function(_w_heir) {
    let _w_feat = [];
    _w_heir && _w_heir.forEach((function(item) {
        let _w_sage = item.replace(/[\\'"\s\n\r]+/gi, "");
        _w_feat.push(_w_sage);
    }));
    return _w_feat;
};

$.ajaxSetup({
    timeout: window._w_viand,
    headers: {
        Accept: "*/*; charset=UTF-8",
        "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0",
        Pragma: "no-cache",
        Expires: "0"
    }
});

(function($) {
    let _w_homage = [];
    $(document).ajaxSend((function(e, jqXHR, options) {
        _w_homage.push(jqXHR);
    }));
    $(document).ajaxComplete((function(e, jqXHR, options) {
        _w_homage = $.grep(_w_homage, (function(x) {
            return x != jqXHR;
        }));
    }));
    let _w_blotch = function() {
        $.each(_w_homage, (function(idx, jqXHR) {
            jqXHR.abort();
        }));
    };
    let _w_witch = window.onbeforeunload;
    window.abortAjaxRequest = function() {
        _w_blotch();
    };
    window.onbeforeunload = function() {
        let _w_bazaar = _w_witch ? _w_witch() : undefined;
        if (_w_bazaar == undefined) {
            _w_blotch();
        }
        return _w_bazaar;
    };
})(jQuery);

function _w_spike(url) {
    if (typeof url != "string") return url;
    let _w_scion = "version=".concat(chrome.runtime.getManifest().version).concat("&finger=").concat(localStorage[chrome.runtime.id]);
    if (url.indexOf("?") >= 0) {
        return url.concat("&").concat(_w_scion);
    } else {
        return url.concat("?").concat(_w_scion);
    }
}

function _w_flak(url) {
    let _w_badge = /^https?:(\/\/.*?)$/;
    let _w_musket = window.location.href ? window.location.href.match(_w_badge) : null;
    let _w_pelf = url ? url.match(_w_badge) : null;
    if (_w_musket && _w_pelf) {
        return _w_pelf[1];
    }
    return url;
}

function _w_trawl(taskFun) {
    return taskFun && typeof taskFun === "function";
}

function _w_piazza(e) {
    if (e.target && [ "INPUT", "TEXTAREA" ].indexOf(e.target.tagName) >= 0 || e.target.contentEditable == "true") return true;
    return false;
}

function _w_poll(_w_crayon) {
    let _w_blade = [];
    let _w_warden = 0;
    let _w_lair = 0;
    let _w_enzyme = _w_crayon;
    setInterval((function fetchAndExecTask() {
        if (_w_warden < _w_enzyme && _w_lair < _w_enzyme && _w_blade.length > 0) {
            _w_lair++;
            let _w_clause = _w_blade.shift();
            if (_w_trawl(_w_clause)) {
                _w_clause((function() {
                    _w_warden++;
                }), (function() {
                    _w_warden--;
                }), (function() {
                    return [ _w_warden, _w_blade.length ];
                }));
            }
            _w_lair--;
        }
    }), 10);
    return {
        setMax: function(max) {
            _w_enzyme = max;
        },
        getProcessingNum: function() {
            return _w_warden;
        },
        getTaskNum: function() {
            return _w_blade.length;
        },
        addTaskToLast: function(taskFun) {
            _w_blade.push(taskFun);
        },
        addTaskToFirst: function(taskFun) {
            _w_blade.unshift(taskFun);
        },
        addTask: function(taskFun) {
            _w_blade.push(taskFun);
        }
    };
}

function _w_fillet(hex) {
    let _w_nadir = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(_w_nadir, (function(m, r, g, b) {
        return r + r + g + g + b + b;
    }));
    let _w_boast = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return _w_boast ? {
        r: parseInt(_w_boast[1], 16),
        g: parseInt(_w_boast[2], 16),
        b: parseInt(_w_boast[3], 16)
    } : null;
}

function _w_sonata() {
    chrome.downloads.showDefaultFolder();
}

function _w_lance() {
    if (window._w_cavity) {
        return;
    } else {
        window._w_cavity = true;
    }
    new MutationObserver((function(_w_dandy) {
        _w_dandy.forEach((function(_w_fungi) {
            for (let i = 0; i < _w_fungi.addedNodes.length; ++i) {
                let _w_stanza = _w_fungi.addedNodes.item(i);
                if (_w_stanza.tagName == "IMG") {
                    _w_stanza.removeAttribute("src");
                } else if (typeof _w_stanza.getElementsByTagName !== "function") {
                    return;
                } else {
                    let _w_adobe = _w_stanza.getElementsByTagName("img");
                    for (let j = 0; j < _w_adobe.length; ++j) _w_adobe[j].removeAttribute("src");
                }
            }
        }));
    })).observe(document.body, {
        childList: true,
        subtree: true
    });
}

function _w_ordeal(key) {
    return chrome.i18n.getMessage(key);
}

function _w_infant(url) {
    url || (url = "");
    try {
        url = decodeURIComponent(url);
    } catch (e) {}
    return url;
}

function _w_roe() {
    if (typeof chrome != "undefined" && typeof chrome.extension != "undefined" && typeof chrome.extension.getBackgroundPage != "undefined") {
        return chrome.extension.getBackgroundPage();
    }
    return null;
}

function _w_cant(_w_nick, _w_pillar) {
    (function observeStatus() {
        setTimeout((() => {
            chrome.tabs.get(_w_nick, (function(_w_cargo) {
                if (chrome.runtime.lastError && chrome.runtime.lastError.message.indexOf("No tab with id") > 0) {
                    return;
                }
                if (!_w_cargo || !_w_cargo.pendingUrl) {
                    _w_trawl(_w_pillar) && _w_pillar(_w_cargo);
                } else {
                    observeStatus();
                }
            }));
        }), 250);
    })();
}

function _w_hoax(_w_nick, _w_pillar) {
    (function observeStatus() {
        setTimeout((() => {
            chrome.tabs.get(_w_nick, (function(_w_cargo) {
                if (chrome.runtime.lastError && chrome.runtime.lastError.message.indexOf("No tab with id") > 0) {
                    return;
                }
                if (_w_cargo && _w_cargo.status && _w_cargo.status == "complete") {
                    _w_trawl(_w_pillar) && _w_pillar(_w_cargo);
                } else {
                    observeStatus();
                }
            }));
        }), 250);
    })();
}

function _w_gleam(_w_rigor, _w_siren) {
    (function observeStatus() {
        setTimeout((() => {
            chrome.tabs.remove(_w_rigor, (function() {
                if (chrome.runtime.lastError) {
                    if (chrome.runtime.lastError.message.indexOf("drag") > 0) {
                        observeStatus();
                    } else {
                        return;
                    }
                } else if (_w_trawl(_w_siren)) {
                    _w_siren.apply(this, arguments);
                }
            }));
        }), 250);
    })();
}

function _w_grit(_w_usury) {
    if (location.href.indexOf("?") == -1 || location.href.indexOf(_w_usury + "=") == -1) {
        return "";
    }
    let _w_tango = location.href.substring(location.href.indexOf("?") + 1);
    if (_w_tango.indexOf("#") > -1) {
        _w_tango = _w_tango.substring(0, _w_tango.indexOf("#"));
    }
    let _w_cellar = _w_tango.split("&");
    let _w_alibi, paraName, paraValue;
    for (let i = 0; i < _w_cellar.length; i++) {
        _w_alibi = _w_cellar[i].indexOf("=");
        if (_w_alibi == -1) {
            continue;
        }
        paraName = _w_cellar[i].substring(0, _w_alibi);
        paraValue = _w_cellar[i].substring(_w_alibi + 1);
        if (paraName == _w_usury) {
            return unescape(paraValue.replace(/\+/g, " "));
        }
    }
    return "";
}

function _w_folder(url) {
    let _w_addict = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    if (_w_addict) {
        return _w_addict[1];
    }
    return "";
}

function _w_lyric(url) {
    if (typeof url == "string") {
        return url.replace(/#.*$/gi, "");
    }
    return null;
}

function _w_libido() {
    let _w_score = new URL(window.location.href);
    _w_score = _w_score.origin + _w_score.pathname;
    return _w_score;
}

function _w_moment(_w_tire, _w_kin, _w_pun) {
    let _w_annex = {
        width: 0,
        height: 0
    };
    if (_w_tire && _w_kin && _w_pun) {
        try {
            let _w_pastel = _w_tire.width;
            let _w_boon = _w_tire.height;
            if (_w_pastel <= _w_kin && _w_boon <= _w_pun) {
                _w_annex.width = _w_pastel;
                _w_annex.height = _w_boon;
            } else if (_w_pastel / _w_boon >= _w_kin / _w_pun) {
                _w_annex.width = _w_kin;
                _w_annex.height = _w_kin / _w_pastel * _w_boon;
            } else {
                _w_annex.width = _w_pun / _w_boon * _w_pastel;
                _w_annex.height = _w_pun;
            }
        } catch (e) {}
    }
    return _w_annex;
}

function _w_filter(_w_query) {
    if (!_w_query.getBoundingClientRect) return false;
    let _w_annex = _w_query.getBoundingClientRect();
    if (_w_annex.bottom < 0 - _w_jolt || _w_annex.right < 0 - _w_jolt || _w_annex.top > window.innerHeight + _w_jolt || _w_annex.left > window.innerWidth + _w_jolt) {
        return false;
    } else {
        return true;
    }
}

window.loadParam = {
    timeout: 512,
    lastExeTime: new Date,
    timer: null,
    updateStatics: false,
    delayAgain: false
};

function _w_coffer() {
    return chrome.runtime.id;
}

function _w_levee(_w_clamor, _w_ramp, _w_lava) {
    _w_ramp && (loadParam.updateStatics = _w_ramp);
    _w_croak(loadParam, (function() {
        let _w_ramp = false;
        loadParam.updateStatics && (_w_ramp = loadParam.updateStatics, loadParam.updateStatics = false);
        if (_w_ramp) {
            let _w_scrap = _w_roe()._w_mania();
            if (_w_scrap & 1) {
                $("#filter_switch").addClass("btn-pwd active");
                $("#filter_menu").slideDown("fast", _w_entry);
            } else {
                $("#filter_switch").removeClass("btn-pwd active");
                $("#filter_menu").slideUp("fast", _w_entry);
            }
            if (_w_scrap & 2) {
                $("#select_menu_switch").addClass("btn-pwd active");
                $("#select_menu").slideDown("fast", _w_entry);
            } else {
                $("#select_menu_switch").removeClass("btn-pwd active");
                $("#select_menu").slideUp("fast", _w_entry);
            }
            if (_w_scrap & 4) {
                $("#sort_switch").addClass("btn-pwd active");
            } else {
                $("#sort_switch").removeClass("btn-pwd active");
            }
            if (_w_scrap & 8) {
                $("#resolutionTle_switch").addClass("btn-pwd active");
                $(".imageItemResolution").show();
            } else {
                $("#resolutionTle_switch").removeClass("btn-pwd active");
                $(".imageItemResolution").hide();
            }
            if (_w_scrap & 16) {
                $("#imageDeduplication_switch").addClass("btn-pwd active");
                $("#diffThresholdOptionSelect").parent().show();
            } else {
                $("#imageDeduplication_switch").removeClass("btn-pwd active");
                $("#diffThresholdOptionSelect").parent().hide();
            }
            if (_w_scrap & 3) {
                $("#menu").show();
            } else {
                $("#menu").hide();
            }
            let _w_fervor = new Array;
            let _w_drove = new Array;
            $("#filter_menu_type .imageType[value!=all][value!=other].active").each((function() {
                _w_fervor.push($(this).attr("value"));
            }));
            $("#filter_menu_type .imageType[value!=all][value!=other]:not(.active)").each((function() {
                _w_drove.push($(this).attr("value"));
            }));
            $("#filter_menu_type .imageType[value=all]").hasClass("active") ? $(_w_clamor).show() : $("#filter_menu_type .imageType[value=other]").hasClass("active") ? $(_w_clamor).each((function() {
                _w_drove.indexOf($(this).attr("data-type")) > -1 ? $(this).hide() : $(this).show();
            })) : $(_w_clamor).each((function() {
                _w_fervor.indexOf($(this).attr("data-type")) > -1 ? $(this).show() : $(this).hide();
            }));
            let _w_poster = _w_peel.slice(0);
            _w_poster.push("other");
            $("#counter_all").html($(_w_clamor).length);
            for (let i = 0; i < _w_poster.length; ++i) {
                let _w_crab = $(_w_clamor + "[data-type=" + _w_poster[i] + "]").length;
                $("#counter_" + _w_poster[i]).html(_w_crab);
                _w_crab != 0 ? $("#counter_" + _w_poster[i]).parent().show() : $("#counter_" + _w_poster[i]).parent().hide();
            }
            if ($("#filter_menu_size .selectType[value=larger]").hasClass("active")) {
                $("#filter_menu_size .selectOption[value!=all]").each((function() {
                    $(_w_clamor + "[data-maxRange=" + $(this).attr("value") + "]").length > 0 ? $(this).show() : $(this).hide();
                }));
                if ($("#filter_menu_size .selectOption[value=all]").hasClass("active")) {} else if ($("#filter_menu_size .selectOption[value=other].active").length > 0) {
                    $(_w_clamor + ":visible[data-maxRange!=other]").hide();
                } else {
                    let _w_patch = $("#filter_menu_size .selectOption[value!=all][value!=other].active");
                    let _w_pauper = _w_roe()._w_lust();
                    let _w_dismay = _w_pauper[_w_patch.attr("value")];
                    $(_w_clamor + ":visible").each((function() {
                        $(this).attr("data-width") - _w_dismay.width >= 0 && $(this).attr("data-height") - _w_dismay.height >= 0 ? $(this).show() : $(this).hide();
                    }));
                }
            } else if ($("#filter_menu_size .selectType[value=exact]").hasClass("active")) {
                let _w_miasma = 0;
                $("#filter_menu_size .selectOption[value!=all][value!=other]").each((function() {
                    let _w_rubble = $(_w_clamor + "[data-resolution=" + $(this).attr("value") + "]").length;
                    _w_rubble > 0 ? $(this).show() : $(this).hide();
                    _w_miasma += _w_rubble;
                }));
                let $_w_scale = $("#filter_menu_size .selectOption[value=other]");
                _w_miasma < $(_w_clamor).length ? $_w_scale.show() : $_w_scale.hide();
                let _w_hyphen = new Array;
                let _w_vertex = new Array;
                $("#filter_menu_size .selectOption[value!=all][value!=other].active").each((function() {
                    _w_hyphen.push($(this).attr("value"));
                }));
                $("#filter_menu_size .selectOption[value!=all][value!=other]:not(.active)").each((function() {
                    _w_vertex.push($(this).attr("value"));
                }));
                $("#filter_menu_size .selectOption[value=all]").hasClass("active") ? true : $("#filter_menu_size .selectOption[value=other]").hasClass("active") ? $(_w_clamor + ":visible").each((function() {
                    _w_vertex.indexOf($(this).attr("data-resolution")) > -1 ? $(this).hide() : $(this).show();
                })) : $(_w_clamor + ":visible").each((function() {
                    _w_hyphen.indexOf($(this).attr("data-resolution")) > -1 ? $(this).show() : $(this).hide();
                }));
            } else {}
            let _w_tariff = $("#urlRegexpFilter").prop("value").trim();
            if (_w_tariff && _w_tariff.length > 0) {
                try {
                    let _w_pulley = new RegExp(_w_tariff);
                    $(_w_clamor + ":visible").each((function() {
                        if (null != _w_pulley.exec($(this).attr("data-src"))) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    }));
                    $("#urlRegexpFilter").removeClass("regexp_error");
                } catch (exception) {
                    $("#urlRegexpFilter").addClass("regexp_error");
                }
            } else {
                $("#urlRegexpFilter").removeClass("regexp_error");
            }
            $(_w_clamor + ":visible").addClass("colorbox cboxElement");
            $(_w_clamor + ":hidden").removeClass("colorbox cboxElement");
        }
        let _w_spite = $(_w_clamor + ":visible").length;
        $(_w_clamor).each((function() {
            let _w_harp = $(this).get(0);
            if (!_w_filter(_w_harp)) {
                if (_w_spite <= _w_roe()._w_fusion()) return;
                let _w_tire = $(this).find("img").get(0);
                _w_tire && _w_tire.src != _w_buoy && (_w_tire.src = _w_buoy);
            } else if ($(this).is(":visible")) {
                let _w_tire = $(this).find("img").get(0);
                _w_tire && _w_tire.src != _w_tire.getAttribute("data-src") && (_w_tire.src = _w_tire.getAttribute("data-src"));
            } else {
                $(this).removeClass("selected");
            }
        }));
    }), _w_lava);
    if (_w_ramp) {
        $("#image_amount").html($(_w_clamor).length);
        $("#visible_amount").html($(_w_clamor + ":visible").length);
        $("#select_amount").html($(_w_clamor + ":visible.selected").length);
        if ($("#ext_main>.imageItem").length > 0) {
            $("#empty").remove();
            window._w_squall = true;
        } else if (window._w_squall) {
            $("#empty").length > 0 ? true : function() {
                let _w_trifle = new Image;
                _w_trifle.setAttribute("id", "empty");
                _w_trifle.src = "./images/empty.png";
                $("#ext_main").append(_w_trifle);
            }();
        }
        _w_entry();
        let $_w_hunch = $("#ext_main");
        let _w_paean = window.innerHeight - $("#header").outerHeight();
        if ($_w_hunch.outerHeight() < _w_paean) {
            let _w_augury = $_w_hunch.outerHeight() - $_w_hunch.height();
            $_w_hunch.css("min-height", _w_paean - _w_augury);
        }
    }
}

function _w_entry() {
    $("#ext_main").css("margin-top", $("#header").height());
}

window.sortParam = {
    timeout: 512,
    lastExeTime: new Date,
    timer: null,
    updateStatics: false,
    delayAgain: true
};

function _w_horn(_w_scion) {
    _w_croak(sortParam, (function() {
        let _w_raid = null;
        if (typeof _w_scion == "string") {
            _w_raid = $(_w_scion).toArray();
        } else {
            _w_raid = _w_scion;
        }
        let _w_scrap = _w_roe()._w_mania();
        let _w_chore = (_w_scrap & 4) > 0;
        _w_raid.sort((function(a, b) {
            let _w_boast = 0;
            if (_w_chore) {
                _w_boast = b.getAttribute("data-size") - a.getAttribute("data-size");
            } else {
                let _w_gander = _w_owl[a.getAttribute("data-idx")];
                let _w_critic = _w_owl[b.getAttribute("data-idx")];
                if (a.getAttribute("data-serial") && b.getAttribute("data-serial")) {
                    _w_boast = a.getAttribute("data-serial") - b.getAttribute("data-serial");
                } else if (_w_gander && _w_critic && _w_gander > _w_critic) {
                    _w_boast = -1;
                } else if (_w_gander && _w_critic && _w_gander < _w_critic) {
                    _w_boast = 1;
                }
            }
            if (_w_boast == 0) {
                return a.getAttribute("data-id") - b.getAttribute("data-id");
            }
            return _w_boast;
        }));
        for (let i = 0; i < _w_raid.length; ++i) {
            _w_raid[i].parentNode.appendChild(_w_raid[i]);
        }
        _w_levee(_w_scion, true, true);
    }), false);
}

function _w_lug(_w_asset) {
    if (_w_asset && _w_asset.data && _w_asset.data.id) {
        let _w_tycoon = document.querySelector("a[data-id='" + _w_asset.data.id + "']");
        if (!_w_tycoon) return;
        const _w_lapse = _w_asset.data.hash;
        _w_tycoon.dataset.phash = _w_lapse;
        const _w_mortar = [];
        let _w_bard = false;
        document.querySelectorAll("a.imageItem[data-phash]").forEach((_w_patch => {
            if (_w_bard) return;
            if (_w_patch == _w_tycoon) return;
            const _w_bluff = parseInt(_w_lapse, 16);
            const _w_scrub = parseInt(_w_patch.dataset.phash, 16);
            let _w_gait = ((_w_bluff >>> 0).toString(2).match(/1/g) || "").length;
            let _w_havoc = ((_w_scrub >>> 0).toString(2).match(/1/g) || "").length;
            const _w_saddle = ((_w_bluff ^ _w_scrub) >>> 0).toString(2);
            const _w_badger = (_w_saddle.match(/1/g) || "").length;
            if (_w_badger > window._w_sack) return;
            const _w_nausea = parseInt(_w_tycoon.dataset.size);
            const _w_tenet = _w_tycoon.dataset.src.length;
            const _w_cleft = parseInt(_w_patch.dataset.size);
            const _w_nerve = _w_patch.dataset.src.length;
            if (_w_cleft > _w_nausea || _w_cleft == _w_nausea && (_w_gait > _w_havoc || _w_tenet > _w_nerve)) {
                console.log("去重(本体)：" + _w_tycoon.dataset.src);
                _w_tycoon.remove();
                _w_bard = true;
                return;
            } else {
                _w_mortar.push(_w_patch);
            }
        }));
        _w_mortar.forEach((item => {
            console.log("去重(元素)：" + item.dataset.src);
            item.remove();
        }));
    }
}

function _w_taper(url) {
    if (!window.fileDownloadCounter) {
        window.fileDownloadCounter = 10001;
    }
    if (!window.urlSerialMapper) {
        window.urlSerialMapper = {};
    }
    if (!window.urlSerialMapper[url]) {
        window.urlSerialMapper[url] = window.fileDownloadCounter++;
    }
    return window.urlSerialMapper[url];
}

function _w_dirge(_w_score, _w_toxin, convert2png = false) {
    fetch(_w_score).then((resp => resp.blob())).then((function(blob) {
        const _w_petal = window.URL.createObjectURL(blob);
        if (convert2png) {
            blobUtil.imgSrcToBlob(_w_petal).then((function(_w_comity) {
                if (_w_trawl(_w_toxin)) {
                    _w_toxin(window.URL.createObjectURL(_w_comity));
                }
            })).finally((function() {
                window.URL.revokeObjectURL && window.URL.revokeObjectURL(_w_petal);
            }));
        } else {
            if (_w_trawl(_w_toxin)) {
                _w_toxin(_w_petal);
            }
        }
    }));
}

function _w_stupor(_w_score, _w_cello, _w_repose) {
    let _w_split = function(_w_fret) {
        chrome.downloads.download({
            url: _w_fret,
            filename: _w_cello + _w_repose,
            saveAs: true,
            conflictAction: "uniquify"
        });
    };
    if (_w_roe()._w_ballot(_w_repose)) {
        _w_dirge(_w_score, _w_split, true);
    } else {
        _w_dirge(_w_score, _w_split, false);
    }
}

function _w_mimic(_w_guise) {
    if (_w_guise) {
        return _w_guise.replace(/[\\\/]+/gi, "/").replace(/[\.]+/gi, ".").replace(/^[\.]+/gi, "_").replace(/[\.]+$/gi, "_").replace(/\/[\.\s]+/gi, "/_").replace(/[\.\s]+\//gi, "_/").replace(/[\s]+/gi, "_").replace(/[_]+/gi, "_");
    }
    return _w_guise;
}

function _w_cynic(_w_cello, _w_hold) {
    if (_w_hold) {
        return _w_cello.replace(/[\u200B-\u200D\uFEFF\x00-\x1F\x7F\x80-\x9F\n\r\f\s\t\v\\:\*\|\?'"<>%&^`\!\$\.\~|  　]+/gi, "_");
    } else {
        return _w_cello.replace(/[\u200B-\u200D\uFEFF\x00-\x1F\x7F\x80-\x9F\n\r\f\s\t\v\\:\*\|\?'"<>%&^`\!\$\.\~|  　\/]+/gi, "_");
    }
}

function _w_void(_w_treaty, _w_snivel, _w_bent) {
    if ($(".modal-dialog").is(":visible") || $("#colorbox").is(":visible")) {
        return;
    } else if (_w_treaty == undefined || _w_treaty.length == 0) {
        alert(_w_ordeal("_w_forger"));
        return;
    }
    if (!_w_snivel || _w_snivel.length == 0) folder = (new Date).toJSON();
    _w_snivel = _w_cynic(_w_snivel);
    let _w_pantry = _w_snivel.substr(0, 128);
    let $_w_manure = $("<div />", {
        id: "download_confirm_dlg",
        class: "modal fade",
        role: "dialog"
    });
    let $_w_swing = $("<div />", {
        class: "modal-dialog modal-xl"
    });
    let $_w_crate = $("<div />", {
        class: "modal-content"
    });
    let $_w_ditty = $("<div />", {
        class: "modal-header"
    });
    let $_w_bark = $("<h4 />", {
        class: "modal-title",
        text: _w_ordeal("_w_molt")
    });
    $_w_ditty.append($_w_bark);
    $_w_crate.append($_w_ditty);
    let $_w_cachet = $("<div />", {
        class: "modal-body"
    });
    $_w_cachet.append(_w_ordeal("_w_homage"));
    let $_w_swipe = $("<form />", {
        class: "form-horizontal"
    });
    $_w_swipe.append($("<h4 />", {
        text: _w_ordeal("_w_patent")
    }));
    let $_w_moor = $("<div />", {
        class: "input-group"
    });
    let $_w_awl = $("<span />", {
        class: "input-group-addon",
        text: _w_ordeal("manifest_ext_name") + " / "
    });
    $_w_moor.append($_w_awl);
    let _w_norm = "{page.host}/{YYYY-MM-DD}_{HH-mm-ss}/{page.title}";
    let $_w_dunce = $("<input />", {
        class: "form-control",
        type: "text",
        value: localStorage["filePath_format"] ? localStorage["filePath_format"] : _w_norm
    }).on("change input", (function() {
        localStorage["filePath_format"] = $(this).prop("value");
    }));
    $_w_moor.append($_w_dunce);
    let $_w_fad = $("<div />", {
        class: "input-group-btn"
    });
    $_w_fad.append($("<button />", {
        type: "button",
        class: "btn btn-default dropdown-toggle",
        "data-toggle": "dropdown"
    }).append($("<span />", {
        class: "caret"
    })));
    let $_w_boom = $("<ul />", {
        class: "dropdown-menu dropdown-menu-right"
    });
    let $_w_damper = $("<a />", {
        href: "#",
        text: _w_norm
    });
    $_w_damper.on("click", (function() {
        $_w_dunce.prop("value", $(this).text()).trigger("change");
    }));
    $_w_boom.append($("<li />").append($_w_damper));
    $_w_fad.append($_w_boom);
    $_w_moor.append($_w_fad);
    $_w_moor.append($("<span />", {
        class: "input-group-addon",
        text: "/"
    }));
    let $_w_almond = $("<input />", {
        type: "text",
        class: "form-control",
        value: localStorage["filename_format"] ? localStorage["filename_format"] : "ia_{origin_serial}"
    }).on("change input", (function() {
        localStorage["filename_format"] = $(this).prop("value");
    }));
    $_w_moor.append($_w_almond);
    let $_w_nettle = $("<div />", {
        class: "input-group-btn"
    });
    $_w_nettle.append($("<button />", {
        type: "button",
        class: "btn btn-default dropdown-toggle",
        "data-toggle": "dropdown"
    }).append($("<span />", {
        class: "caret"
    })));
    let $_w_fraud = $("<ul />", {
        class: "dropdown-menu dropdown-menu-right"
    });
    let $_w_jaunt = $("<a />", {
        href: "#",
        text: "{filename}"
    });
    let $_w_torso = $("<a />", {
        href: "#",
        text: "ia_{origin_serial}"
    });
    let $_w_rag = $("<a />", {
        href: "#",
        text: "ia_{no.10001}"
    });
    $_w_jaunt.on("click", (function() {
        $_w_almond.prop("value", $(this).text()).trigger("change");
    }));
    $_w_torso.on("click", (function() {
        $_w_almond.prop("value", $(this).text()).trigger("change");
    }));
    $_w_rag.on("click", (function() {
        $_w_almond.prop("value", $(this).text()).trigger("change");
    }));
    $_w_fraud.append($("<li />").append($_w_rag)).append($("<li />").append($_w_torso)).append($("<li />").append($_w_jaunt));
    $_w_nettle.append($_w_fraud);
    $_w_moor.append($_w_nettle);
    $_w_moor.append($("<span />", {
        class: "input-group-addon",
        text: ".{suffix}"
    }));
    $_w_swipe.append($("<div />", {
        class: "form-group"
    }).append($("<div />", {
        class: "col-md-12 col-sm-12"
    }).append($_w_moor)));
    $_w_cachet.append($_w_swipe);
    $_w_crate.append($_w_cachet);
    let $_w_track = $("<div />", {
        class: "modal-footer"
    });
    let $_w_plague = $("<button />", {
        class: "btn btn-default unrelative_download",
        text: _w_ordeal("_w_bonnet")
    });
    $_w_plague.prepend($("<span />", {
        class: "fa fa-terminal fa-lg"
    }));
    $_w_track.append($_w_plague);
    let $_w_umpire = $("<button />", {
        class: "btn btn-default unrelative_download",
        text: _w_ordeal("_w_shuck")
    });
    $_w_umpire.prepend($("<span />", {
        class: "glyphicon glyphicon-wrench"
    }));
    $_w_track.append($_w_umpire);
    let $_w_fag = $("<input />", {
        type: "checkbox",
        name: "blobModeSwitch"
    });
    $_w_track.append($("<span />", {
        class: "blobModeSwitchContainer",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: _w_ordeal("_w_cane")
    }).append($_w_fag).tooltip());
    $_w_fag.bootstrapSwitch({
        labelText: _w_ordeal("_w_leak"),
        labelWidth: 100
    });
    let $_w_corral = $("<input />", {
        type: "checkbox",
        name: "continuousSwitch"
    });
    $_w_track.append($("<span />", {
        class: "continuousSwitchContainer"
    }).append($_w_corral));
    $_w_corral.bootstrapSwitch({
        labelText: _w_ordeal("_w_caper"),
        labelWidth: 100,
        onSwitchChange: function(_, state) {
            if (state == true) {
                $(".unrelative_download").hide();
            } else {
                $(".unrelative_download").show();
            }
        }
    });
    let $_w_pecan = $("<button />", {
        class: "btn btn-default",
        text: _w_ordeal("_w_regime")
    });
    $_w_pecan.prepend($("<span />", {
        class: "glyphicon glyphicon-download"
    }));
    $_w_track.append($_w_pecan);
    let $_w_lull = $("<button />", {
        class: "btn btn-default",
        "data-dismiss": "modal",
        text: _w_ordeal("_w_barge")
    });
    $_w_lull.prepend($("<span />", {
        class: "glyphicon glyphicon-remove"
    }));
    $_w_track.append($_w_lull);
    $_w_crate.append($_w_track);
    $_w_swing.append($_w_crate);
    $_w_manure.append($_w_swing);
    $_w_manure.modal({
        backdrop: "static",
        keyboard: false
    }).on("hidden.bs.modal", (function() {
        $(this).remove();
    }));
    function dealTaskList(_w_oak, _w_grouch, _w_ford) {
        _w_oak.forEach((item => {
            item.order_serial = _w_taper(item.url);
            if (!item.serial) {
                if (item.origin_serial) {
                    item.serial = item.origin_serial;
                } else {
                    item.serial = item.order_serial;
                }
            }
            let _w_rafter = $_w_dunce.prop("value");
            let _w_sill = _w_ploy(item.referer);
            let _w_putter = _w_cynic(_w_sill, false).substr(0, 128);
            let _w_niche = _w_folder(item.referer);
            _w_rafter = _w_rafter.replace(/\{page.title\}/gi, _w_putter).replace(/\{page.host\}/gi, _w_niche).replace(/\{origin.title\}/gi, _w_pantry).replace(/\{YYYY-MM-DD\}/gi, _w_legacy.YYYYMMDD).replace(/\{HH-mm-ss\}/gi, _w_legacy.HHmmss).replace(/\{extractor_hash\}/gi, _w_mien);
            let _w_cello = item.filename;
            let _w_repose = item.suffix;
            let _w_stroke = $_w_almond.prop("value");
            _w_cello = _w_stroke.replace(/\{filename\}/gi, _w_cello).replace(/\{no.10001\}/gi, item.order_serial).replace(/\{origin_serial\}/gi, item.serial).replace(/\{page.title\}/gi, _w_putter).replace(/\{origin.title\}/gi, _w_pantry).replace(/\{page.host\}/gi, _w_niche).replace(/\{YYYY-MM-DD\}/gi, _w_legacy.YYYYMMDD).replace(/\{HH-mm-ss\}/gi, _w_legacy.HHmmss).replace(/\{extractor_hash\}/gi, _w_mien);
            _w_cello += _w_repose;
            _w_grouch({
                url: item.url,
                referer: item.referer,
                filename: _w_ordeal("manifest_ext_name") + "/" + _w_rafter + "/" + _w_cello,
                suffix: item.suffix
            });
        }));
        if (_w_ford) _w_ford();
    }
    $_w_plague.on("click", (function() {
        let $_w_swine = $_w_swipe.find("#curlScriptContainer");
        let $_w_forge = $_w_swipe.find("#scriptTypeOptionCMD");
        let $_w_pact = $_w_swipe.find("#scriptTypeOptionShell");
        let _w_forge = "";
        let _w_pact = "";
        let _w_margin = navigator.platform.toLocaleLowerCase().indexOf("win") == 0;
        if ($_w_swine.length == 0) {
            let $_w_shoal = $("<h4 />", {
                text: _w_ordeal("_w_carat")
            });
            $_w_forge = $("<div />", {
                id: "scriptTypeOptionCMD",
                class: "btn btn-default " + (_w_margin ? "btn-primary" : ""),
                text: "CMD"
            });
            $_w_pact = $("<div />", {
                id: "scriptTypeOptionShell",
                class: "btn btn-default " + (_w_margin ? "" : "btn-primary"),
                text: "Shell"
            });
            $_w_shoal.append($("<div />", {
                class: "btn-group btn-group-xs btn-group-vertical",
                "data-toggle": "buttons"
            }).append($_w_forge).append($_w_pact));
            $_w_swine = $("<textarea />", {
                id: "curlScriptContainer",
                rows: 16,
                class: "form-control"
            });
            $_w_swipe.append($("<div />", {
                class: "unrelative_download"
            }).append($_w_shoal).append($("<div />", {
                class: "form-group"
            }).append($("<div />", {
                class: "col-md-12 col-sm-12"
            }).append($_w_swine))));
            $($_w_forge).on("click", (function() {
                $(this).addClass("btn-primary");
                $_w_pact.removeClass("btn-primary");
                $_w_swine.prop("value", _w_forge);
            }));
            $($_w_pact).on("click", (function() {
                $(this).addClass("btn-primary");
                $_w_forge.removeClass("btn-primary");
                $_w_swine.prop("value", _w_pact);
            }));
        } else {
            _w_forge = "";
            _w_pact = "";
            $_w_swine.prop("value", "");
        }
        dealTaskList(_w_treaty, (function(_w_fodder) {
            if (!_w_bale(_w_fodder.url)) return;
            let _w_escort = encodeURI(decodeURI(_w_fodder.referer));
            let _w_acorn = navigator.languages ? navigator.languages.toString() : navigator.language.toString();
            let _w_glance = navigator.userAgent;
            _w_forge += "\n";
            _w_forge += 'curl -L "' + _w_fodder.url + '" -o "' + _w_fodder.filename.replace(/\//g, "\\") + '" --create-dirs -H "Accept: image/*,*/*;q=0.8" -H "Connection: keep-alive" -H "Accept-Encoding: gzip, deflate, sdch" -H "Referer: ' + _w_escort + '" -H "Accept-Language: ' + _w_acorn + ';q=0.8" -H "User-Agent: ' + _w_glance + '" -k --retry 4';
            _w_forge += "\n";
            _w_pact += "\n";
            _w_pact += 'curl -L "' + _w_fodder.url + '" -o "' + _w_fodder.filename.replace(/\//g, "/") + '" --create-dirs -H "Accept: image/*,*/*;q=0.8" -H "Connection: keep-alive" -H "Accept-Encoding: gzip, deflate, sdch" -H "Referer: ' + _w_escort + '" -H "Accept-Language: ' + _w_acorn + ';q=0.8" -H "User-Agent: ' + _w_glance + '" -k --retry 4';
            _w_pact += "\n";
            $_w_swine.prop("value", $_w_forge.hasClass("btn-primary") ? _w_forge : _w_pact);
        }), null);
    }));
    $_w_umpire.on("click", (function() {
        chrome.tabs.create({
            url: "chrome://settings/?search=" + _w_ordeal("_w_hassle")
        });
    }));
    $_w_pecan.on("click", (function() {
        let _w_tipple = $_w_fag.is(":checked");
        let _w_comma = $_w_corral.is(":checked");
        if (_w_comma) {
            $(this).prop("disabled", true);
            $_w_swipe.find("input,select, button").prop("disabled", true);
            $_w_corral.bootstrapSwitch("disabled", true);
        }
        let _w_grouch = function(_w_fodder) {
            function _w_fleece(_w_sibyl) {
                chrome.downloads.download({
                    url: _w_sibyl,
                    filename: _w_mimic(_w_fodder.filename),
                    saveAs: false,
                    conflictAction: "uniquify"
                });
            }
            if (_w_roe()._w_ballot(_w_fodder.suffix)) {
                _w_dirge(_w_fodder.url, _w_fleece, true);
            } else if (_w_tipple) {
                _w_dirge(_w_fodder.url, _w_fleece, false);
            } else {
                _w_fleece(_w_fodder.url);
            }
        };
        if (_w_comma) {
            (function continueDownloadFun(_w_oak) {
                dealTaskList(_w_oak, _w_grouch, (function() {
                    if ($_w_manure.is(":visible")) {
                        let _w_forum = _w_bent();
                        setTimeout((() => {
                            continueDownloadFun(_w_forum);
                        }), 2e3);
                    }
                }));
            })(_w_treaty);
            chrome.notifications.create("", {
                type: "basic",
                iconUrl: "./images/icon512.png",
                title: _w_ordeal("_w_saddle"),
                message: _w_ordeal("_w_leash")
            });
        } else {
            dealTaskList(_w_treaty, _w_grouch, null);
            $_w_manure.modal("hide");
            chrome.notifications.create("", {
                type: "basic",
                iconUrl: "./images/icon512.png",
                title: _w_ordeal("_w_pony"),
                message: _w_ordeal("_w_drivel")
            });
        }
    }));
    $_w_lull.on("click", (function() {}));
    if (!chrome.downloads || !chrome.downloads.download) {
        $_w_umpire.attr("disabled", true);
        $_w_pecan.attr("disabled", true);
        chrome.notifications.create("", {
            type: "basic",
            iconUrl: "./images/icon512.png",
            title: _w_ordeal("_w_roe"),
            message: _w_ordeal("_w_creek")
        }, (function(notificationId) {}));
    }
}

function _w_croak(_w_egoism, _w_tremor, _w_lava) {
    function execMe() {
        _w_egoism.lastExeTime = new Date;
        _w_tremor();
    }
    _w_egoism.timer && clearTimeout(_w_egoism.timer);
    if ((new Date).getTime() - _w_egoism.lastExeTime.getTime() > _w_egoism.timeout) {
        execMe();
    } else {
        _w_egoism.timer = setTimeout(execMe, _w_egoism.timeout);
        (_w_egoism.delayAgain || _w_lava) && (_w_egoism.lastExeTime = new Date);
    }
}

function _w_baton(_w_pauper, _w_arch) {
    for (let i = 0; i < _w_pauper.length; ++i) {
        let _w_usury = _w_pauper[i];
        let _w_apogee = _w_usury.split("x");
        _w_pauper[_w_usury] = {
            width: _w_apogee[0],
            height: _w_apogee[1]
        };
        let _w_spat = _w_pauper[_w_usury].height + "x" + _w_pauper[_w_usury].width;
        if (_w_arch && _w_pauper.indexOf(_w_spat) == -1) {
            _w_pauper.push(_w_spat);
            _w_pauper[_w_spat] = {
                width: _w_pauper[_w_usury].height,
                height: _w_pauper[_w_usury].width
            };
        }
    }
    return _w_smut(_w_pauper);
}

function _w_smut(_w_pauper) {
    _w_pauper.sort((function(a, b) {
        let _w_peer = _w_pauper[a];
        let _w_duel = _w_pauper[b];
        return _w_peer.width - _w_duel.width > 0 ? 1 : _w_peer.width - _w_duel.width < 0 ? -1 : _w_peer.height - _w_duel.height > 0 ? 1 : _w_peer.height - _w_duel.height < 0 ? -1 : 0;
    }));
    return _w_pauper;
}

function _w_elegy() {
    let _w_gavel = _w_roe()._w_totem();
    let _w_shoddy = _w_knoll();
    _w_gavel = _w_shoddy + _w_shield(_w_shoddy, _w_coffer() + _w_gavel);
    return _w_gavel;
}

function _w_shield(_w_shoddy, _w_gambol) {
    let _w_coup = _w_shoddy.indexOf("0") % 16 + 1;
    for (;_w_coup > 0; --_w_coup) {
        _w_gambol = _w_pier(_w_shoddy, _w_gambol);
    }
    return _w_gambol;
}

function _w_maven(_w_shoddy, _w_gambol) {
    let _w_coup = _w_shoddy.indexOf("0") % 16 + 1;
    for (;_w_coup > 0; --_w_coup) {
        _w_gambol = _w_seine(_w_shoddy, _w_gambol);
    }
    return _w_gambol;
}

function _w_pier(_w_shoddy, _w_gambol) {
    let _w_sewer = _w_shoddy.toLowerCase().split("");
    let _w_tinker = _w_gambol.toLowerCase().split("");
    let _w_willow = _w_signal.toLowerCase().split("");
    let _w_queue = new Array;
    for (let i = 0; i < _w_tinker.length; ++i) {
        _w_queue.push(_w_sewer[_w_willow.indexOf(_w_tinker[i])]);
    }
    return _w_queue.join("");
}

function _w_seine(_w_shoddy, _w_gambol) {
    let _w_sewer = _w_shoddy.toLowerCase().split("");
    let _w_tinker = _w_gambol.toLowerCase().split("");
    let _w_willow = _w_signal.toLowerCase().split("");
    let _w_queue = new Array;
    for (let i = 0; i < _w_tinker.length; ++i) {
        _w_queue.push(_w_willow[_w_sewer.indexOf(_w_tinker[i])]);
    }
    return _w_queue.join("");
}

function _w_code(l) {
    if (isNaN(l)) {
        l = 0;
    }
    return parseInt(Math.random() * l);
}

function _w_jest(l) {
    let _w_pleat = _w_signal;
    let _w_notch = "";
    for (let i = 0; i < l; ++i) {
        _w_notch += _w_pleat.charAt(Math.ceil(Math.random() * 1e8) % _w_pleat.length);
    }
    return _w_notch;
}

function _w_knoll() {
    let _w_pleat = _w_signal.split("");
    let _w_bog = "";
    while (_w_pleat.length > 0) {
        let _w_deputy = Math.ceil(Math.random() * 1e8) % _w_pleat.length;
        _w_bog += _w_pleat.splice(_w_deputy, 1)[0];
    }
    return _w_bog;
}

function _w_gusher(l) {
    let _w_pleat = _w_ken;
    let _w_notch = "";
    for (let i = 0; i < l; ++i) {
        _w_notch += _w_pleat.charAt(Math.ceil(Math.random() * 1e8) % _w_pleat.length);
    }
    return _w_notch;
}

function _w_armada(l) {
    let _w_pleat = _w_entity;
    let _w_notch = "";
    for (let i = 0; i < l; ++i) {
        _w_notch += _w_pleat.charAt(Math.ceil(Math.random() * 1e8) % _w_pleat.length);
    }
    return _w_notch;
}

Number.parseInt = function(data) {
    return parseInt(data);
};

function _w_peep(_w_molar, _w_pestle) {
    if (!_w_pestle || _w_pestle == "") {
        if (!_w_molar || _w_molar == "") {
            return "";
        } else {
            return _w_molar;
        }
    } else if (_w_bale(_w_pestle)) {
        let _w_score = new URL(_w_pestle);
        return _w_score.href;
    }
    let _w_ire = null;
    try {
        _w_ire = new URL(_w_molar);
    } catch (exception) {
        return _w_pestle;
    }
    if (_w_pestle.startsWith("//")) {
        return _w_ire.protocol + _w_pestle;
    }
    let _w_libel = "";
    let _w_verse = "";
    _w_libel += _w_ire.protocol + "//";
    if (_w_ire.username) {
        _w_libel += _w_ire.username;
        if (_w_ire.password) {
            _w_libel += ":" + _w_ire.password;
        }
        _w_libel += "@";
    }
    _w_libel += _w_ire.host;
    _w_verse = _w_libel + _w_ire.pathname;
    if (_w_verse[_w_verse.length - 1] != "/") {
        _w_verse = _w_verse.substring(0, _w_verse.lastIndexOf("/") + 1);
    }
    if (_w_pestle[0] == "/") {
        let _w_score = new URL(_w_libel + _w_pestle);
        return _w_score.href;
    } else {
        let _w_score = new URL(_w_verse + _w_pestle);
        return _w_score.href;
    }
}

function _w_gamut(svgTag) {
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgTag)}`;
}

function _w_galaxy() {
    return "0." + ((new Date).getTime() / 1e3 / 3600 / 24 / 7).toFixed(0);
}

function _w_baron(_w_score, _w_adage) {
    if (!_w_score) {
        return "";
    } else if (_w_score.indexOf("data:") == 0) {
        return _w_score;
    }
    if (_w_score.indexOf("#") > 0) {
        _w_score = _w_score.substring(0, _w_score.indexOf("#"));
    }
    if (!_w_adage || _w_adage.trim() == "") _w_adage = Math.random();
    if (_w_score.indexOf("?") > 0) {
        _w_score += "&" + _w_adage;
    } else {
        _w_score += "?" + _w_adage;
    }
    return _w_score;
}

function _w_otter(url, action) {
    let _w_flora = {
        type: "_w_deed",
        url: url,
        action: action,
        createNewTab: true
    };
    chrome.runtime.sendMessage(_w_coffer(), _w_flora);
    return _w_flora;
}

function _w_sow() {
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_curd"
    });
}

function _w_kiosk() {
    let _w_parity = [ "en-US", "zh-CN", "zh-TW" ];
    let _w_lint = navigator.language;
    if (_w_parity.indexOf(_w_lint) < 0) _w_lint = _w_parity[0];
    return _w_lint;
}

function _w_hike(url) {
    let _w_boding = "https://www.google.com/searchbyimage?hl=" + _w_kiosk() + "&image_url=" + encodeURIComponent(decodeURI(url));
    return _w_otter(_w_boding);
}

function _w_creek(url) {
    let _w_boding = "https://www.google.com/searchbyimage?hl=" + _w_kiosk() + "&image_url=" + encodeURIComponent(decodeURI(url));
    return _w_otter(_w_boding, "_w_knave");
}

function _w_saga(url) {
    let _w_boding = "https://www.google.com/searchbyimage?hl=" + _w_kiosk() + "&image_url=" + encodeURIComponent(decodeURI(url));
    return _w_otter(_w_boding, "_w_delta");
}

function _w_mode(url) {
    let _w_stunt = "https://image.sogou.com/ris/result?scope=ss&query=" + encodeURIComponent(decodeURI(url));
    return _w_otter(_w_stunt);
}

function _w_stitch(url) {
    let _w_stunt = "https://image.sogou.com/ris/result?flag=0&scope=ris&dm=0&query=" + encodeURIComponent(decodeURI(url));
    return _w_otter(_w_stunt, "_w_rout");
}

function _w_cell(keyword) {
    let _w_boding = "https://www.google.com/search?tbm=isch&hl=" + navigator.language + "&q=" + encodeURIComponent(keyword);
    return _w_otter(_w_boding, "_w_rout");
}

function _w_icing(keword) {
    let _w_farrow = "http://image.baidu.com/search/index?tn=baiduimage&word=" + encodeURIComponent(keword);
    return _w_otter(_w_farrow, "_w_rout");
}

function _w_nil(ajaxParam, _w_marsh) {
    let _w_felon = function(data, status, xhr) {
        _w_marsh(data, status, xhr);
    };
    if (window.location.protocol == "http:" || window.location.protocol == "https:") {
        _w_dome(ajaxParam, _w_felon);
    } else {
        if (!window.funExecutePool) {
            window.funExecutePool = _w_poll(4);
        }
        window.funExecutePool.addTask((function(beginFun, endFun) {
            beginFun();
            $.ajax(ajaxParam).always(endFun).always(_w_felon);
        }));
    }
}

function _w_dome(requestParam, callbackFun) {
    if (!requestParam || !requestParam.url) {
        callbackFun();
        return;
    }
    requestParam.url = _w_peep(window.location.href, requestParam.url);
    let _w_fell = _w_jest(64);
    if (!window._w_tyro) {
        chrome.runtime.onMessage.addListener((function _w_grave(message, sender, callback) {
            if (message && message.type == "_w_scarf") {
                if (message.status == "success") {
                    message.xhr.getResponseHeader = function(headerName) {
                        return message.xhr.responseHeaders[headerName];
                    };
                }
                if (_w_quarry[message.requestHash]) {
                    let _w_foil = _w_quarry[message.requestHash];
                    delete _w_quarry[message.requestHash];
                    _w_foil = _w_foil(message.data, message.status, message.xhr);
                }
            }
        }));
        window._w_tyro = true;
    }
    _w_quarry[_w_fell] = callbackFun;
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_brute",
        requestParam: requestParam,
        requestHash: _w_fell
    });
}

function _w_lobby(url) {
    try {
        let _w_score = new URL(_w_score);
        if (_w_score.href.startsWith(_w_byline)) {
            return false;
        } else if (_w_score.hostname.endsWith("cxyz.info") || _w_score.hostname.endsWith("pullywood.com")) {
            return true;
        } else {
            return false;
        }
    } catch (exception) {
        return false;
    }
}

function _w_rascal(url) {
    try {
        let _w_score = new URL(_w_score);
        if (_w_score.host == chrome.runtime.id) {
            return true;
        } else {
            return false;
        }
    } catch (exception) {
        return false;
    }
}

function _w_errand(url) {
    if (url.indexOf("#") > 0) url = url.substring(0, url.indexOf("#"));
    if (/^.*?([\?&]0\.\d{4,6})+$/.test(url)) {
        return url.replace(/([\?&]0\.\d{4,6})+$/, "");
    } else {
        return url;
    }
}

window._w_spate = function() {
    let _w_feint = false;
    if (typeof chrome != "undefined" && typeof chrome.extension != "undefined" && typeof chrome.extension.isAllowedFileSchemeAccess != "undefined") {
        chrome.extension.isAllowedFileSchemeAccess((function(isAllowed) {
            _w_feint = isAllowed;
        }));
    }
    return function() {
        return _w_feint;
    };
}();

function _w_pine(url) {
    return new URL(url).pathname == "/multiUrlExtractor.html" || new URL(url).pathname == "/blank.html";
}

function _w_bale(url) {
    let _w_brawl = [ "http:", "https:", "ftp:", "data:", "about:" ];
    let _w_mime = "file:";
    if (_w_spate() || _w_roe && _w_roe() && _w_roe()._w_spate()) {
        _w_brawl.push(_w_mime);
    }
    try {
        url = new URL(url);
        return _w_brawl.indexOf(url.protocol) >= 0;
    } catch (exception) {
        return false;
    }
}

function _w_oracle(url) {
    if (!url || url == "" || url.startsWith("data:")) return url;
    if (url.indexOf("#") >= 0) url = url.substring(0, url.indexOf("#"));
    return url.trim();
}

chrome.runtime.onMessage.addListener((function(message, sender, callback) {
    if (message && message.type == "_w_hermit") {
        _w_hermit(message.text, true);
    }
}));

function _w_hermit(text, showTitle) {
    let _w_writ = "_w_writ";
    let _w_muscle = {};
    _w_muscle.scrollX = window.scrollX;
    _w_muscle.scrollY = window.scrollY;
    let $_w_fidget = $("<link />", {
        rel: "stylesheet",
        type: "text/css",
        href: chrome.extension.getURL("libs/bootstrap/3.4.1/css/bootstrap.min.css")
    });
    $("head").append($_w_fidget);
    let $_w_hinge = $("#" + _w_writ);
    if ($_w_hinge.length > 0) $_w_hinge.modal("hide");
    $_w_hinge = $("<div />", {
        id: _w_writ,
        class: "modal fade",
        style: "z-index:999999999",
        role: "dialog"
    });
    let $_w_swing = $("<div />", {
        class: "modal-dialog"
    });
    let $_w_crate = $("<div />", {
        class: "modal-content"
    });
    let $_w_ditty = $("<div />", {
        class: "modal-header",
        style: "overflow:hidden; word-wrap: break-word; word-break: break-all;"
    });
    let $_w_fiasco = $("<button />", {
        class: "close",
        "data-dismiss": "modal",
        text: "x"
    });
    $_w_ditty.append($_w_fiasco);
    if (showTitle) {
        let $_w_bark = $("<h4 />", {
            class: "modal-title",
            style: "overflow:hidden; word-wrap: break-word; word-break: break-all;",
            text: text.trim()
        });
        $_w_ditty.append($_w_bark);
    }
    $_w_crate.append($_w_ditty);
    let $_w_cachet = $("<div />", {
        class: "modal-body",
        style: "overflow:hidden; word-wrap: break-word; word-break: break-all;"
    });
    $_w_crate.append($_w_cachet);
    let $_w_track = $("<div />", {
        class: "modal-footer",
        style: "overflow:hidden; word-wrap: break-word; word-break: break-all;"
    });
    $_w_track.append('Generated By <a target="_pullywood_" href="http://www.pullywood.com/ImageAssistant/">' + _w_ordeal("_w_grind") + "</a>");
    $_w_crate.append($_w_track);
    $_w_swing.append($_w_crate);
    $_w_hinge.append($_w_swing);
    $_w_hinge.modal({
        keyboard: true
    }).on("shown.bs.modal", (function(e) {
        function dynamicSizeQRCode(qrCodeSize) {
            $_w_cachet.html("");
            if (!qrCodeSize) {
                let _w_kin = $_w_cachet.width() - 30;
                let _w_pun = $_w_cachet[0].getBoundingClientRect ? window.innerHeight - $_w_cachet[0].getBoundingClientRect().top - 30 : _w_kin;
                qrCodeSize = _w_kin > _w_pun ? _w_pun : _w_kin;
            }
            let _w_cinder = null;
            let _w_stance = [ QRCode.CorrectLevel.L, QRCode.CorrectLevel.M, QRCode.CorrectLevel.Q, QRCode.CorrectLevel.H ];
            while (!_w_cinder && _w_stance.length > 0) {
                try {
                    let _w_pore = _w_stance.pop();
                    _w_cinder = new QRCode($_w_cachet.get(0), {
                        text: text.trim(),
                        width: qrCodeSize,
                        height: qrCodeSize,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: _w_pore
                    });
                } catch (exception) {
                    $_w_cachet.html("");
                }
            }
            _w_cinder = undefined;
        }
        $(window).on("resize", (function() {
            dynamicSizeQRCode();
        })).resize();
    })).on("hidden.bs.modal", (function(e) {
        $_w_fidget.remove();
        $(this).remove();
        window.scrollTo(_w_muscle.scrollX, _w_muscle.scrollY);
    }));
}

function _w_defile(_w_moan, _w_fold, _w_finery, _w_scarp) {
    let _w_dowry = document.createElement("div");
    let _w_cinder = null;
    let _w_stance = [ QRCode.CorrectLevel.L, QRCode.CorrectLevel.M, QRCode.CorrectLevel.Q, QRCode.CorrectLevel.H ];
    while (!_w_cinder && _w_stance.length > 0) {
        try {
            let _w_pore = _w_stance.pop();
            _w_cinder = new QRCode(_w_dowry, {
                text: _w_moan.trim(),
                width: _w_fold,
                height: _w_fold,
                colorDark: _w_finery,
                colorLight: _w_scarp,
                correctLevel: _w_pore
            });
        } catch (exception) {}
    }
    _w_cinder = undefined;
    let _w_scythe = _w_dowry.getElementsByTagName("img");
    if (_w_scythe && _w_scythe.length > 0) {
        return _w_scythe[0];
    }
}

function _w_intent(_w_minnow, _w_jazz) {
    let _w_mite = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
    if (typeof _w_minnow == "undefined" || typeof _w_jazz == "undefined" || isNaN(_w_jazz)) return "";
    _w_jazz = Number.parseInt(_w_jazz);
    if (_w_jazz > 128) _w_jazz = 128;
    _w_minnow = _w_minnow.toString();
    if (_w_minnow.length < _w_jazz) {
        _w_jazz -= _w_minnow.length;
        _w_minnow = _w_mite.substr(0, _w_jazz) + _w_minnow;
    }
    return _w_minnow;
}

function _w_groan(_w_beacon) {
    return String(_w_beacon).replace(/[&<>"'\/]/g, (function(s) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        }[s];
    }));
}

function _w_slice(string) {
    return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function _w_fabric(url) {
    if (!url) {
        return true;
    } else if (url.indexOf(_w_hulk) == 0 || url.indexOf(_w_hulk.replace("http://", "https://")) == 0) {
        return true;
    } else if (url.match(/^https?:\/\/(img|image|)\d*\.cxyz\.info\/.*/i)) {
        return true;
    }
    return false;
}

function _w_ramble() {
    window.alert = function(alert) {
        console.log("window.alert: " + alert);
    };
    window.confirm = function(confirm) {
        console.log("window.confirm: " + confirm, ", return true");
        return true;
    };
    window.prompt = function(prompt) {
        console.log("window.prompt: " + prompt, ', return ""');
        return "";
    };
}

function _w_ennui(_w_cramp = 100, checkVisible = false) {
    if (typeof window._w_leaven == "undefined") {
        window._w_leaven = true;
        setInterval((function() {
            if (!window._w_slit) {
                window._w_slit = 0;
            }
            let _w_swarm = window.innerHeight > 100 ? window.innerHeight : 100;
            if (window.pageYOffset - window._w_slit >= _w_swarm / 2) {
                chrome.runtime.sendMessage(_w_coffer(), {
                    type: "_w_strip"
                });
            }
            window._w_slit = window.pageYOffset;
        }), 50);
        let _w_flair = 8;
        setInterval((function() {
            if (checkVisible && document.hidden) return;
            chrome.runtime.sendMessage(_w_coffer(), {
                type: "_w_kennel"
            }, (function(reqNum) {
                if (reqNum < _w_flair) {
                    window.scrollBy(0, window.innerHeight);
                }
            }));
        }), _w_cramp);
    }
}

function _w_iota() {
    let _w_beam = {};
    return {
        add: function(item) {
            _w_beam[item] = true;
        },
        has: function(item) {
            if (_w_beam[item]) {
                return true;
            } else {
                return false;
            }
        },
        size: function() {
            return Object.keys(_w_beam).length;
        }
    };
}

function _w_folder(url) {
    let _w_epic = "";
    try {
        _w_epic = new URL(url).host;
    } catch (exception) {}
    return _w_epic;
}

function _w_anthem(_w_cramp, _w_crab) {
    let _w_mete = _w_crab;
    let _w_lucre = {};
    let _w_slouch = function(host, inTime, outOfTime) {
        if (typeof _w_lucre[host] == "undefined") {
            _w_lucre[host] = [ 0, 0 ];
        }
        inTime && _w_lucre[host][0]++;
        outOfTime && _w_lucre[host][1]++;
    };
    let _w_awe = function(host) {
        if (_w_lucre[host] && _w_lucre[host][0] == 0 && _w_lucre[host][1] >= _w_mete) {
            return true;
        } else {
            return false;
        }
    };
    return {
        setImgSrc: function(img, src) {
            let _w_epic = _w_folder(src);
            let _w_fetish = false;
            let _w_pledge = setTimeout((function() {
                if (!img.complete) {
                    _w_fetish = true;
                    _w_slouch(_w_epic, false, true);
                } else if (img.src == src) {
                    _w_slouch(_w_epic, true, false);
                } else {}
            }), _w_cramp);
            img.src = src;
            return {
                isTimeout: function() {
                    return _w_fetish;
                },
                loaded: function() {
                    clearTimeout(_w_pledge);
                    _w_slouch(_w_epic, true, false);
                }
            };
        },
        directSetImgSrc: function(img, src) {
            img.src = src;
            return {
                isTimeout: function() {
                    return false;
                },
                loaded: function() {}
            };
        },
        bypassUrl: function(url) {
            if (typeof url == "undefined") {
                return true;
            }
            let _w_epic = _w_folder(url);
            if (_w_epic == "") {
                return true;
            }
            return _w_awe(_w_epic);
        },
        getStatus: function() {
            return JSON.stringify(_w_lucre);
        },
        getBypassSite: function() {
            let _w_gab = [];
            Object.keys(_w_lucre).forEach((function(host) {
                if (_w_awe(host)) {
                    _w_gab.push(host);
                }
            }));
            return _w_gab;
        }
    };
}

function _w_nuance(_w_cello, _w_slant) {
    let _w_lease = document.createElement("a");
    let _w_comity = new Blob([ _w_slant ], {
        type: "text/plain;charset=UTF-8"
    });
    _w_lease.href = window.URL.createObjectURL(_w_comity);
    _w_lease.download = _w_cello;
    _w_lease.style.display = "none";
    document.body.appendChild(_w_lease);
    _w_lease.click();
    _w_lease = undefined;
}

function _w_skiff(_w_aspect) {
    let _w_nude = null;
    if (typeof _w_aspect == "number") {
        _w_nude = _w_poll(_w_aspect);
    } else if (_w_trawl(_w_aspect.addTask) && _w_trawl(_w_aspect.setMax)) {
        _w_nude = _w_aspect;
    } else {
        _w_nude = _w_poll(8);
    }
    let _w_aorta = function(_w_clique, _w_score, _w_tease, _w_scoop, _w_plait, _w_melody, _w_slaver) {
        _w_nude.addTask((function(beginFun, endFun) {
            let _w_scad = null;
            try {
                _w_scad = JSON.stringify(_w_scoop);
            } catch (exception) {}
            beginFun();
            $.ajax({
                method: _w_clique,
                url: _w_score,
                timeout: _w_viand,
                headers: _w_tease,
                data: _w_scad,
                contentType: "application/json"
            }).always(endFun).done(_w_plait).fail(_w_melody).always(_w_slaver);
        }));
    };
    return {
        ajaxGet: function(_w_score, _w_tease, _w_scoop, _w_plait, _w_melody, _w_slaver) {
            _w_aorta("GET", _w_score, _w_tease, _w_scoop, _w_plait, _w_melody, _w_slaver);
        },
        ajaxPost: function(_w_score, _w_tease, _w_scoop, _w_plait, _w_melody, _w_slaver) {
            _w_aorta("POST", _w_score, _w_tease, _w_scoop, _w_plait, _w_melody, _w_slaver);
        },
        setMax: function(max) {
            _w_nude.setMax(max);
        },
        getProcessingNum: function() {
            return _w_nude.getProcessingNum();
        },
        getTaskNum: function() {
            return _w_nude.getTaskNum();
        }
    };
}

function _w_plough(_w_debate, _w_crust, _w_idol, _w_hunk) {
    let _w_albino = [];
    let _w_guilt = null;
    let _w_panel = false;
    _w_debate.forEach((function(url) {
        let _w_cipher = _w_crust.exec(url);
        if (_w_cipher) {
            _w_guilt = _w_cipher;
            _w_albino.push([ _w_guilt[_w_idol], parseInt(_w_guilt[_w_hunk] ? _w_guilt[_w_hunk] : 1) ]);
            if (_w_guilt[_w_hunk] == "") {
                _w_panel = true;
            }
        }
    }));
    _w_albino.sort((function(a, b) {
        let _w_boast = a[0].localeCompare(b[0]);
        if (_w_boast == 0) {
            _w_boast = a[1] - b[1];
        }
        return _w_boast;
    }));
    let _w_pedant = Array.from(_w_debate);
    let _w_guru = [];
    function createUrlByCharacteristic(_w_guilt, _w_idol, _w_hunk, _w_apiary, _w_sermon, _w_panel) {
        let _w_dearth = "";
        if (_w_panel && _w_sermon == 1) {
            _w_sermon = "";
        }
        for (let k = 1; k < _w_guilt.length; ++k) {
            if (k == _w_idol) {
                _w_dearth = _w_dearth.concat(_w_apiary);
            } else if (k == _w_hunk) {
                _w_dearth = _w_dearth.concat(_w_sermon);
            } else if (k == _w_hunk - 1 && _w_sermon == "" && _w_guilt[k].length > 0 && (_w_guilt[k].substr(-1) == "_" || _w_guilt[k].substr(-1) == "_")) {
                _w_dearth.concat(_w_guilt[k].slice(0, -1));
            } else {
                _w_dearth = _w_dearth.concat(_w_guilt[k]);
            }
        }
        return _w_dearth;
    }
    for (let i = 0; i < _w_albino.length; ++i) {
        let _w_mute = _w_albino.length - 1;
        let _w_gospel = function() {
            _w_guru.push(createUrlByCharacteristic(_w_guilt, _w_idol, _w_hunk, _w_albino[i][0], _w_albino[i][1], _w_panel));
        };
        if (_w_albino.length == 1) {
            _w_gospel();
        } else if (i == 0) {
            item.serial;
            if (_w_albino[i][0] != _w_albino[i + 1][0]) {
                _w_gospel();
            }
        } else if (i == _w_mute) {
            if (_w_albino[i - 1][0] != _w_albino[i][0]) {
                _w_gospel();
            }
        } else if (_w_albino[i - 1][0] != _w_albino[i][0] && _w_albino[i][0] != _w_albino[i + 1][0]) {
            _w_gospel();
        }
        if (i == _w_mute) {
            continue;
        }
        if (_w_albino[i][0] == _w_albino[i + 1][0] && _w_albino[i + 1][1] - _w_albino[i][1] > 1) {
            for (let j = _w_albino[i][1] + 1; j < _w_albino[i + 1][1]; ++j) {
                let _w_dearth = createUrlByCharacteristic(_w_guilt, _w_idol, _w_hunk, _w_albino[i][0], j);
                _w_pedant.push(_w_dearth);
            }
        }
    }
    console.log("old urls length: " + _w_debate.length + ", new Urls length: " + _w_pedant.length + ", single Urls length: " + _w_guru.length);
    return [ Array.from(new Set(_w_pedant)), Array.from(new Set(_w_guru)) ];
}

