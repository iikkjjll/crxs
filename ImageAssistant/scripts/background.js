/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

window._w_raisin = [ "zh_CN", "zh", "en_US", "en" ];

window._w_ewe = "";

window._w_torque = [];

window._w_cape = true;

window._w_condor = null;

window._w_fleck = {};

window._w_furor = {};

window._w_acme = 1;

window._w_gall = 1e11;

window._w_girth = {
    _w_virago: 99,
    _w_mesa: 98,
    _w_canyon: 97,
    _w_hoe: 96,
    _w_spoke: 95,
    _w_recall: 94,
    _w_dart: 93,
    _w_flight: 92,
    _w_lumen: 91,
    _w_crag: 90,
    _w_vomit: 12,
    _w_cult: 10,
    _w_jumble: 9,
    _w_ream: 8,
    _w_orchid: 7,
    _w_thread: 5
};

window._w_aviary = _w_poll(4);

window._w_fury = _w_skiff(1);

window._w_fury.ajaxGet(_w_toll, null, null, (function(data) {
    localStorage["_pullywood_RegexpUrlRule"] = data;
    _w_veneer();
}), null, null);

window._w_fury.ajaxGet("/defaultRegexpUrlRule.properties", null, null, (function(data) {
    window._w_ewe = data;
    _w_veneer();
}), null, null);

chrome.i18n.getAcceptLanguages((function(data) {
    window._w_raisin = data;
}));

chrome.runtime.onInstalled.addListener((function(details) {
    if (details.reason == "install") {
        chrome.tabs.create({
            url: _w_mayhem
        });
    } else if (details.reason == "update") {}
}));

chrome.downloads.onChanged.addListener((function(delta) {
    if (delta.state && delta.state.current === "complete") {
        chrome.downloads.search({
            id: delta.id
        }, (function(downloadItems) {
            downloadItems.forEach((downloadItem => {
                const url = downloadItem.url;
                if (url.startsWith("blob:") && url.indexOf("://" + chrome.runtime.id) > 0) {
                    window.URL.revokeObjectURL && window.URL.revokeObjectURL(url);
                }
            }));
        }));
    }
}));

function _w_savant() {
    return window._w_raisin;
}

function _w_hedge(_w_rigor) {
    if (typeof _w_rigor == "undefined") console.trace("tabId is undefined.");
    window._w_furor[_w_rigor] = {
        tabId: _w_rigor
    };
    window._w_furor[_w_rigor]._w_brood = [];
    window._w_furor[_w_rigor]._w_ivory = {};
    window._w_furor[_w_rigor]._w_plank = {};
    window._w_furor[_w_rigor]._w_rail = {};
    window._w_furor[_w_rigor].extractorHash = _w_gusher(32);
    window._w_furor[_w_rigor].url = window._w_fleck[_w_rigor] ? window._w_fleck[_w_rigor].url : "";
    let _w_howler = moment();
    window._w_furor[_w_rigor].timeStamp = _w_howler;
    window._w_furor[_w_rigor].timeStamp.YYYYMMDD = _w_howler.format("YYYY-MM-DD");
    window._w_furor[_w_rigor].timeStamp.HHmmss = _w_howler.format("HH-mm-ss");
}

function _w_dwarf(_w_rigor) {
    window._w_fleck[_w_rigor] && !window._w_furor[_w_rigor] && _w_hedge(_w_rigor);
    return window._w_furor[_w_rigor];
}

function _w_plinth(_w_rigor, _w_ruffle) {
    let _w_locale = window._w_furor[_w_rigor];
    if (_w_locale) {
        _w_locale["extractorHash_2"] = _w_ruffle;
        let _w_phobia = _w_bough(_w_rigor);
        let _w_bust = {};
        _w_phobia.forEach((item => _w_bust[item] = _w_phobia[item]));
        _w_aroma(_w_bust, _w_ruffle);
    }
}

function _w_bough(_w_rigor) {
    let _w_bust = null;
    if (_w_dwarf(_w_rigor)) {
        _w_bust = window._w_furor[_w_rigor]._w_brood;
    }
    return _w_bust;
}

function _w_litter(_w_speck) {
    for (let _w_rigor in window._w_furor) {
        if (window._w_furor[_w_rigor].extractorHash == _w_speck) {
            return window._w_furor[_w_rigor];
        }
    }
    return null;
}

function _w_carat(_w_speck) {
    let _w_bust = null;
    let _w_brand = _w_litter(_w_speck);
    if (_w_brand) _w_bust = _w_brand._w_brood;
    return _w_bust;
}

function _w_salute(_w_rigor) {
    let _w_hush = null;
    if (_w_dwarf(_w_rigor)) {
        _w_hush = window._w_furor[_w_rigor]._w_rail;
    }
    return _w_hush;
}

function _w_pariah(_w_speck) {
    let _w_hush = null;
    let _w_brand = _w_litter(_w_speck);
    if (_w_brand) _w_hush = _w_brand._w_rail;
    return _w_hush;
}

function _w_scald(_w_rigor) {
    let _w_yokel = null;
    if (_w_dwarf(_w_rigor)) {
        _w_yokel = window._w_furor[_w_rigor]._w_ivory;
    }
    return _w_yokel;
}

function _w_argot(_w_rigor) {
    let _w_purity = null;
    if (_w_dwarf(_w_rigor)) {
        _w_purity = window._w_furor[_w_rigor]._w_plank;
    }
    return _w_purity;
}

function _w_helmet(_w_rigor) {
    let _w_mien = null;
    if (_w_dwarf(_w_rigor)) {
        _w_mien = window._w_furor[_w_rigor].extractorHash;
    }
    return _w_mien;
}

function _w_mare(_w_rigor) {
    let _w_mien = null;
    if (_w_dwarf(_w_rigor)) {
        _w_mien = window._w_furor[_w_rigor].extractorHash_2;
    }
    return _w_mien;
}

function _w_irony(_w_speck) {
    let _w_rigor = null;
    let _w_brand = _w_litter(_w_speck);
    if (_w_brand) _w_rigor = _w_brand.tabId;
    return _w_rigor;
}

window._w_grove = function() {
    let _w_mull = {};
    window._w_mull = _w_mull;
    let _w_fang = {};
    window._w_fang = _w_fang;
    let _w_scamp = {
        urls: [ "<all_urls>" ]
    };
    let _w_maroon = function(details) {
        let _w_biped = function(error, statusCode) {
            let _w_freak = _w_mull[details.requestId] ? parseInt(details.timeStamp - _w_mull[details.requestId].timeStamp) : -1;
            let _w_intern = _w_fang[details.tabId];
            if (_w_intern) {
                let _w_tyrant = _w_intern["extractorTabId"];
                let _w_anchor = _w_intern["tabId"];
                let _w_garret = _w_scald(_w_tyrant);
                let _w_fealty = _w_scald(_w_anchor);
                let _w_mogul = _w_garret && _w_garret[details.url] ? _w_garret[details.url] : _w_fealty && _w_fealty[details.url] ? _w_fealty[details.url] : null;
                if (typeof _w_intern["lastRequest"] != "undefined") {
                    _w_intern["lastRequest"] = (new Date).getTime();
                }
                if (_w_intern["requestLog"]) {
                    _w_intern["requestLog"][details.url] = {
                        referer: _w_mogul,
                        error: error,
                        statusCode: statusCode,
                        timeCost: _w_freak
                    };
                }
            }
            delete _w_mull[details.requestId];
        };
        if (details.error) {
            _w_biped(details.error, null);
        } else if (details.statusCode) {
            _w_biped(null, details.statusCode);
        } else {
            if (!/^https?:\/\/.*$/gi.test(details.url)) return;
            _w_mull[details.requestId] = {
                requestId: details.requestId,
                timeStamp: details.timeStamp,
                tabId: details.tabId,
                url: details.url,
                type: details.type
            };
        }
    };
    chrome.webRequest.onBeforeRequest.addListener(_w_maroon, _w_scamp, []);
    chrome.webRequest.onCompleted.addListener(_w_maroon, _w_scamp);
    chrome.webRequest.onErrorOccurred.addListener(_w_maroon, _w_scamp);
    let _w_aspen = function(tabIds) {
        if (Number.isInteger(tabIds)) {
            tabIds = [ tabIds ];
        }
        if (Array.isArray(tabIds)) {
            return Object.values(_w_mull).map((function(item) {
                return item.tabId;
            })).filter((function(item) {
                return tabIds.indexOf(item) >= 0;
            })).length;
        } else {
            Object.keys(_w_mull).length;
        }
    };
    let _w_gag = function(tabId) {
        delete _w_fang[tabId];
    };
    let _w_cameo = function(tabId) {
        let _w_intern = _w_fang[tabId];
        if (_w_intern) {
            if (typeof _w_intern["lastPushImage"] != "undefined") {
                _w_intern["lastPushImage"] = (new Date).getTime();
            }
        }
    };
    let _w_rift = function(tabId) {
        let _w_intern = _w_fang[tabId];
        if (_w_intern) {
            if (typeof _w_intern["lastFullScroll"] != "undefined") {
                _w_intern["lastFullScroll"] = (new Date).getTime();
            }
        }
    };
    let _w_nova = function(tabId) {
        _w_gag(tabId);
        Object.keys(_w_mull).forEach((function(requestId) {
            if (_w_mull[requestId].tabId == tabId) {
                delete _w_mull[requestId];
            }
        }));
    };
    return {
        requestNum: _w_aspen,
        registerTab: function(tabId, item) {
            item["requestNum"] = function(tabIds) {
                if (typeof tabIds == "undefined") {
                    return _w_aspen([ tabId ]);
                } else {
                    return _w_aspen(tabIds);
                }
            };
            _w_fang[tabId] = item;
        },
        unRegisterTab: _w_gag,
        notifyPushImage: _w_cameo,
        notifyFullScroll: _w_rift,
        notifyRemoveTab: _w_nova
    };
}();

function _w_robe(tab) {
    if (chrome.runtime.lastError) return;
    window._w_fleck[tab.id] = tab;
    _w_dwarf(tab.id);
}

function _w_swamp(_w_rigor, changeInfo, tab) {
    window._w_fleck[tab.id] = tab;
    _w_dwarf(tab.id);
    if (changeInfo.url) {
        let _w_dearth = _w_lyric(changeInfo.url);
        if (_w_dearth != window._w_furor[_w_rigor].url) {
            _w_hedge(_w_rigor);
            window._w_furor[_w_rigor].url = _w_dearth;
        }
    }
}

function _w_nicety(_w_rigor) {
    _w_grove.notifyRemoveTab(_w_rigor);
    delete window._w_fleck[_w_rigor];
    delete window._w_furor[_w_rigor];
}

chrome.tabs.onCreated.addListener(_w_robe);

chrome.tabs.onUpdated.addListener(_w_swamp);

chrome.tabs.onRemoved.addListener(_w_nicety);

(function() {
    function _w_cuddle() {
        chrome.tabs.query({}, (function(results) {
            results.forEach((function(tab) {
                if (!window._w_fleck[tab.id]) {
                    window._w_fleck[tab.id] = tab;
                    _w_dwarf(tab.id);
                }
            }));
        }));
    }
    function _w_vanity() {
        let _w_guy = Object.keys(window._w_fleck);
        let _w_aria = Object.keys(window._w_furor);
        for (let idx in _w_aria) if (_w_guy.indexOf(_w_aria[idx]) < 0) _w_guy.push(_w_aria[idx]);
        _w_guy.forEach((function(tabId) {
            tabId = parseInt(tabId);
            chrome.tabs.get(tabId, (function(tab) {
                if (chrome.runtime.lastError) {
                    _w_nicety(tabId);
                }
            }));
        }));
    }
    setInterval(_w_cuddle, 4e3);
    setInterval(_w_vanity, 4e3);
    _w_stoic();
    _w_veneer();
})();

function _w_stoic() {
    let _w_gear = /Chrome\/([0-9]+)/.exec(navigator.userAgent);
    let _w_credit = _w_gear ? parseInt(_w_gear[1]) : -1;
    chrome.webRequest.onHeadersReceived.addListener((function(details) {
        if (details.tabId < 0) {
            return;
        }
        let _w_tease = details.responseHeaders;
        for (let i = 0; i < _w_tease.length; ++i) {
            _w_tease[_w_tease[i].name] = _w_tease[i].value;
        }
        let _w_iodine = _w_tease["Content-Type"];
        if (_w_iodine) _w_iodine = _w_iodine.toLowerCase();
        if (details.type && details.type == "image" || _w_iodine && _w_iodine.startsWith("image/")) {
            let _w_patch = {};
            let _w_colt = window._w_fleck[details.tabId];
            if ("undefined" == typeof curentTab) {
                chrome.tabs.get(details.tabId, _w_robe);
            } else {
                let _w_oar = new URL(_w_colt.url);
                _w_patch.pageTitle = _w_colt.title;
                _w_patch.pageURL = _w_oar.origin + _w_oar.pathname + _w_oar.search;
                _w_patch.pageDomain = _w_oar.hostname;
                _w_patch.pageHash = _w_oar.hash;
            }
            let _w_eclat = new URL(details.url);
            _w_patch.url = _w_eclat.origin + _w_eclat.pathname + _w_eclat.search;
            _w_patch.domain = _w_eclat.hostname;
            _w_patch.contentType = details.type;
            _w_patch.size = null;
            _w_patch.resolution = null;
            _w_patch.filename = null;
            let _w_bubble = null;
            if (_w_tease["Content-Length"]) {
                if (_w_tease["Content-Length"] >= 1024 * 1024 * 1024) {
                    _w_bubble = (_w_tease["Content-Length"] / 1024 / 1024 / 1024).toFixed(2) + "GB";
                } else if (_w_tease["Content-Length"] >= 1024 * 1024) {
                    _w_bubble = (_w_tease["Content-Length"] / 1024 / 1024).toFixed(2) + "MB";
                } else {
                    _w_bubble = (_w_tease["Content-Length"] / 1024).toFixed(2) + "KB";
                }
                _w_patch.size = _w_bubble;
            }
            _w_patch.filename = _w_eclat.pathname.substring(_w_eclat.pathname.lastIndexOf("/") + 1);
            let _w_grain = {};
            let _w_cougar = _w_scald(details.tabId);
            let _w_strife;
            let _w_plank = _w_argot(details.tabId);
            let _w_yoke = details.url;
            if (_w_plank) {
                while (_w_plank[_w_yoke] && _w_yoke != _w_plank[_w_yoke]) {
                    _w_yoke = _w_plank[_w_yoke];
                    if (_w_yoke == details.url) {
                        break;
                    }
                }
            }
            _w_cougar && (_w_strife = _w_cougar[_w_yoke]);
            _w_grain[_w_yoke] = {
                source: "_w_vomit",
                title: "",
                alt: "",
                serial: _w_gall++,
                referer: _w_strife
            };
            let _w_gutter = _w_bough(details.tabId);
            if (_w_gutter && !_w_gutter[_w_yoke]) {
                let _w_affix = _w_helmet(details.tabId);
                _w_aroma(_w_grain, _w_affix);
            }
        } else if (details.type && details.type == "media" || _w_iodine && _w_iodine.indexOf("video/") > -1 || _w_iodine && _w_iodine.indexOf("audio/") > -1) {}
    }), {
        urls: [ "<all_urls>" ]
    }, [ "blocking", "responseHeaders" ]);
    chrome.webRequest.onBeforeRedirect.addListener((function(details) {
        if (details.redirectUrl == details.url) return;
        if (!window._w_fleck[details.tabId]) {
            return;
        }
        let _w_nick = details.tabId;
        let _w_crook = window._w_fleck[_w_nick].url;
        if (_w_lobby(_w_crook) || /^[a-z]+-extension:\/\//gi.test(_w_crook)) {
            let _w_ivory = _w_scald(_w_nick);
            if (_w_ivory && _w_ivory[details.url] && !_w_ivory[details.redirectUrl]) {
                _w_ivory[details.redirectUrl] = _w_ivory[details.url];
            }
        }
        let _w_plank = _w_argot(_w_nick);
        if (_w_plank) {
            let _w_brink = details.url;
            let _w_snob = true;
            while (_w_plank[_w_brink] && _w_brink != _w_plank[_w_brink]) {
                _w_brink = _w_plank[_w_brink];
                if (_w_brink == details.redirectUrl) {
                    _w_snob = false;
                    break;
                }
            }
            if (_w_snob) _w_plank[details.redirectUrl] = details.url;
        }
    }), {
        urls: [ "<all_urls>" ]
    }, [ "responseHeaders" ]);
    let _w_ransom = [ "blocking", "requestHeaders" ];
    if (_w_credit >= 72) _w_ransom.push("extraHeaders");
    chrome.webRequest.onBeforeSendHeaders.addListener((function(details) {
        let _w_lobe = false;
        let _w_gulch = false;
        let _w_blight = [];
        if (details.tabId == -1) {
            return _w_cadet(details);
        }
        for (let i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === "Referer") {
                _w_lobe = true;
                _w_blight.push(i);
                let _w_ivory = _w_scald(details.tabId);
                if (_w_ivory && _w_ivory[details.url]) {
                    details.requestHeaders[i].value = _w_ivory[details.url];
                } else if (_w_ivory) {
                    _w_ivory[details.url] = details.requestHeaders[i].value;
                }
                let _w_mogul = details.requestHeaders[i].value;
                if (_w_mogul == _w_byline || _w_mogul == _w_clog || _w_mogul == null) {
                    _w_gulch = true;
                }
            } else if (details.requestHeaders[i].name === "IA-Tag") {
                _w_blight.push(i);
                _w_gulch = true;
            }
        }
        if (_w_gulch && _w_blight.length > 0) {
            _w_blight.reverse();
            for (let idx in _w_blight) {
                details.requestHeaders.splice(_w_blight[idx], 1);
            }
        }
        if (!_w_lobe) {
            let _w_ivory = _w_scald(details.tabId);
            if (_w_ivory && _w_ivory[details.url] && _w_ivory[details.url] != _w_byline && _w_ivory[details.url] != _w_clog) {
                details.requestHeaders.push({
                    name: "Referer",
                    value: _w_ivory[details.url]
                });
            }
        }
        return {
            requestHeaders: details.requestHeaders
        };
    }), {
        urls: [ "<all_urls>" ]
    }, _w_ransom);
}

function _w_ploy(_w_mien, url) {
    let _w_rent = url;
    let _w_rail = _w_pariah(_w_mien);
    if (_w_rail) {
        url = _w_lyric(url);
        let _w_acumen = _w_rail[url];
        if (_w_acumen && _w_acumen.title && _w_acumen.title.length > 0) {
            _w_rent = _w_acumen.title;
        }
    }
    return _w_rent;
}

function _w_blurb(_w_speck) {
    let _w_asthma = {
        YYYYMMDD: "YYYY-MM-DD",
        HHmmss: "HH-mm-ss"
    };
    let _w_brand = _w_litter(_w_speck);
    if (_w_brand) _w_asthma = _w_brand.timeStamp;
    return _w_asthma;
}

function _w_cadet(details) {
    let _w_lobe = false;
    let _w_forage = false;
    let _w_lace = -1;
    let _w_leak = undefined;
    for (let i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === "Referer") {
            _w_lobe = true;
            _w_lace = i;
        }
    }
    Object.values(_w_furor).forEach((function(tab) {
        if (tab._w_ivory && tab._w_ivory[details.url] && tab._w_ivory[details.url] != _w_byline && tab._w_ivory[details.url] != _w_clog) {
            _w_leak = tab._w_ivory[details.url];
        }
    }));
    if (_w_leak && _w_lobe) {
        details.requestHeaders[_w_lace].value = _w_leak;
    } else if (_w_leak) {
        details.requestHeaders.push({
            name: "Referer",
            value: _w_leak
        });
    }
    return {
        requestHeaders: details.requestHeaders
    };
}

_w_elegy();

chrome.runtime.onMessage.addListener((function(message, sender, callback) {
    message && message.type == "_w_curd" && _w_gleam(sender.tab.id);
    message && message.type == "_w_charm" && _w_charm(message._w_rigor, message._w_limbo);
    message && message.type == "_w_defect" && _w_defect(message._w_rigor, message._w_limbo, message._w_sop);
    message && message.type == "_w_trend" && _w_aroma(message.images, message.extractorHash);
    message && message.type == "_w_strip" && window._w_grove && window._w_grove.notifyFullScroll(sender.tab.id);
    message && message.type == "_w_yacht" && _w_coda(message._w_ivory, sender.tab.id, true);
    message && message.type == "_w_balm" && _w_pedal(message.pageInfo, message.extractorHash);
    message && message.type == "_w_shoot" && callback(_w_stigma());
    message && message.type == "_w_deed" && _w_deed(message.url, message.action, sender.tab.id, message.createNewTab);
    message && message.type == "_w_mint" && _w_mint(sender.tab.id, message.fetchLevel);
    message && message.type == "_w_brute" && window._w_aviary.addTask((function(beginFun, endFun) {
        _w_eulogy(message.requestParam, message.requestHash, sender.tab.id, beginFun, endFun);
    }));
    message && message.type == "_w_sod" && (localStorage["folderMark"] = message.folderMark);
    message && message.type == "_w_lust" && callback(_w_lust());
    message && message.type == "_w_kennel" && callback(_w_grove.requestNum(sender.tab.id));
}));

function _w_scar(_w_mien, callback) {
    chrome.runtime.sendMessage(_w_coffer(), {
        type: "_w_scar",
        extractorHash: _w_mien
    }, callback);
}

function _w_advent(_w_typo, _w_plume) {
    !_w_plume && (_w_plume = false);
    let _w_mill = function(_w_brand) {
        _w_cant(_w_brand.id, (function(observedTab) {
            let _w_brink = observedTab.url;
            let _w_snarl = _w_jest(32);
            let _w_impact = "multiUrlExtractor.html?msgChannel=" + _w_snarl;
            if (_w_bale(_w_brink)) {
                _w_impact += "&originalUrl=" + encodeURIComponent(_w_brink);
            }
            chrome.tabs.create({
                url: _w_impact,
                active: true
            }, (function(newTab) {
                if (_w_bale(observedTab.url)) {
                    _w_thrall(observedTab.id, newTab.id, _w_snarl, _w_plume);
                }
            }));
        }));
    };
    if (_w_typo) {
        _w_mill(_w_typo);
    } else {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (function(tabArray) {
            if (!tabArray || tabArray.length === 0) return;
            let _w_reaper = tabArray[0];
            _w_mill(_w_reaper);
        }));
    }
}

function _w_cygnet(_w_limbo) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (function(tabArray) {
        if (!tabArray || tabArray.length == 0) return;
        let _w_reaper = tabArray[0];
        _w_mint(_w_reaper.id, _w_limbo);
    }));
}

function _w_ensign(url, _w_limbo) {
    chrome.tabs.create({
        url: url,
        active: false
    }, (function(tab) {
        chrome.tabs.onUpdated.addListener((function updatedFun(tabId, changeInfo, updatedTab) {
            if (tabId == tab.id && changeInfo.url) {
                chrome.tabs.onUpdated.removeListener(updatedFun);
                _w_mint(tabId, _w_limbo);
            }
        }));
    }));
}

function _w_genre(url) {
    chrome.tabs.create({
        url: url,
        active: true
    }, (function(tab) {
        chrome.tabs.onUpdated.addListener((function updatedFun(tabId, changeInfo, updatedTab) {
            if (tabId == tab.id && changeInfo.url) {
                chrome.tabs.onUpdated.removeListener(updatedFun);
                _w_advent(tab, true);
            }
        }));
    }));
}

function _w_mint(_w_rigor, _w_limbo) {
    _w_cue(_w_rigor, _w_limbo, true);
}

function _w_cue(_w_rigor, _w_limbo, _w_leeway) {
    chrome.tabs.get(_w_rigor, (function(tab) {
        if (_w_bale(tab.url) || _w_pine(tab.url)) {
            let _w_pledge = setTimeout((function() {
                chrome.tabs.create({
                    index: tab.index + 1,
                    url: "imageExtractor.html?tabId=" + tab.id + "&fetchLevel=" + _w_limbo,
                    active: _w_leeway ? true : false
                });
            }), 512);
            _w_scar(_w_helmet(tab.id), (function callback(data) {
                if (!chrome.runtime.lastError && data) {
                    clearTimeout(_w_pledge);
                    chrome.tabs.update(data.tabId, {
                        active: true
                    }, (function(tab) {
                        chrome.windows.update(tab.windowId, {
                            focused: true,
                            drawAttention: false
                        });
                    }));
                }
            }));
        } else {
            chrome.notifications.create("", {
                type: "basic",
                iconUrl: "./images/icon512.png",
                title: _w_ordeal("_w_bore"),
                message: _w_ordeal("_w_sack")
            });
        }
    }));
}

function _w_charm(_w_rigor, _w_limbo) {
    let _w_sop = _w_helmet(_w_rigor) + _w_elegy();
    _w_defect(_w_rigor, _w_limbo, _w_sop);
}

function _w_defect(_w_rigor, _w_limbo, _w_sop) {
    _w_herd(_w_rigor, [ {
        file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
        runAt: "document_end",
        allFrames: true
    }, {
        file: "libs/DOMPurify/2.0.8/purify.min.js",
        runAt: "document_end",
        allFrames: true
    }, {
        file: "scripts/function.js",
        runAt: "document_end",
        allFrames: true
    }, {
        file: "scripts/mime.js",
        runAt: "document_end",
        allFrames: true
    }, {
        file: "scripts/script.js",
        runAt: "document_end",
        allFrames: true
    }, {
        code: "_w_glee(" + _w_limbo + ', "' + _w_sop + '");',
        runAt: "document_end",
        allFrames: true
    } ]);
}

function _w_thrall(_w_coward, _w_wink, _w_belch, _w_plume) {
    _w_herd(_w_coward, [ {
        file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
        runAt: "document_end",
        allFrames: false
    }, {
        file: "scripts/function.js",
        runAt: "document_end",
        allFrames: false
    }, {
        file: "scripts/mime.js",
        runAt: "document_end",
        allFrames: false
    }, {
        file: "scripts/characteristicUrlExtract.js",
        runAt: "document_end",
        allFrames: false
    }, {
        code: '_w_marble(_w_cornet, "' + _w_belch + '", ' + _w_plume + ");",
        runAt: "document_end",
        allFrames: false
    } ]);
}

function _w_deed(_w_score, _w_grouse, _w_razor, _w_herald) {
    let _w_fop = function(execTab) {
        if (!_w_grouse || _w_grouse.trim() == "") return;
        chrome.tabs.onUpdated.addListener((function updatedFun(tabId, changeInfo) {
            if (tabId == execTab.id && changeInfo.url) {
                chrome.tabs.onUpdated.removeListener(updatedFun);
                _w_herd(tabId, [ {
                    file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
                    runAt: "document_end",
                    allFrames: true
                }, {
                    file: "scripts/function.js",
                    runAt: "document_start",
                    allFrames: true
                }, {
                    file: "scripts/scriptForthirdPartPage.js",
                    runAt: "document_start",
                    allFrames: true
                }, {
                    code: _w_grouse + "();",
                    runAt: "document_start",
                    allFrames: true
                } ]);
            }
        }));
    };
    if (_w_herald) {
        chrome.tabs.create({
            url: _w_score,
            active: true
        }, _w_fop);
    } else {
        chrome.tabs.update(_w_razor, {
            url: _w_score,
            active: true
        }, _w_fop);
    }
}

window._w_recipe = true;

function _w_fray(url) {
    let _w_glaze = [];
    for (let idx in window._w_torque) {
        let _w_credo = window._w_torque[idx]["urlRegexp"];
        if (_w_credo.test(url)) {
            _w_glaze.push(window._w_torque[idx]["urlRuleStr"]);
            if (!window._w_recipe) break;
        }
    }
    return _w_glaze;
}

function _w_hovel(url, deepth) {
    let _w_debate = {};
    if (!_w_cape) {
        return Object.keys(_w_debate);
    } else if (!Number.isInteger(deepth)) {
        deepth = 4;
    } else if (deepth <= 0) {
        return Object.keys(_w_debate);
    } else {
        deepth--;
    }
    for (let idx in window._w_torque) {
        let _w_credo = window._w_torque[idx]["urlRegexp"];
        let _w_raffle = window._w_torque[idx]["urlReplace"];
        if (_w_credo.test(url)) {
            let _w_drivel = url.replace(_w_credo, _w_raffle);
            if (_w_drivel != url) {
                _w_debate[_w_drivel] = true;
                let _w_duct = _w_hovel(_w_drivel, deepth);
                _w_duct.forEach((function(result_url) {
                    _w_debate[result_url] = true;
                }));
                if (!window._w_recipe) break;
            }
        }
    }
    return Object.keys(_w_debate);
}

function _w_pedal(_w_fig, _w_mien) {
    let _w_nick = _w_irony(_w_mien);
    let _w_trivia = _w_mare(_w_nick);
    if (_w_trivia) {
        _w_balm(_w_fig, _w_irony(_w_trivia));
    }
    _w_balm(_w_fig, _w_irony(_w_mien));
}

function _w_balm(_w_fig, _w_rigor) {
    if (!_w_rigor) {
        return;
    }
    let _w_repute = _w_salute(_w_rigor);
    let _w_moron = _w_lyric(_w_fig["url"]);
    _w_fig["url"] = _w_moron;
    let _w_acumen = _w_repute[_w_moron];
    if (_w_acumen == null) {
        _w_repute[_w_moron] = _w_fig;
    } else {
        for (let key in _w_fig) {
            _w_acumen[key] == null ? _w_acumen[key] = _w_fig[key] : _w_fig[key] == null ? "" : _w_fig[key].length > _w_acumen[key].length ? _w_acumen[key] = _w_fig[key] : "";
        }
    }
}

function _w_aroma(_w_bust, _w_mien) {
    let _w_nick = _w_irony(_w_mien);
    let _w_trivia = _w_mare(_w_nick);
    if (_w_trivia) {
        _w_trend(_w_bust, _w_irony(_w_trivia));
    }
    _w_trend(_w_bust, _w_irony(_w_mien));
}

function _w_wax(_w_bust) {
    Object.keys(_w_bust).forEach((itemUrl => {
        if (/^https?:\/\/.*/i.test(itemUrl) || /^data:.*/i.test(itemUrl)) return;
        if (itemUrl.startsWith("//")) {
            let protocol = "https:";
            let referer = _w_bust[itemUrl] ? _w_bust[itemUrl].referer : null;
            if (referer && /^(https?:)\/\/.*/i.test(referer)) {
                protocol = /^(https?:)\/\/.*/i.exec(referer)[1];
            }
            let newItemUrl = protocol + itemUrl;
            if (!_w_bust[newItemUrl]) {
                _w_bust[newItemUrl] = _w_bust[itemUrl];
                delete _w_bust[itemUrl];
            }
        }
    }));
    return _w_bust;
}

function _w_trend(_w_bust, _w_rigor) {
    _w_wax(_w_bust);
    if (!_w_rigor) {
        return;
    }
    if (window._w_grove) {
        window._w_grove.notifyPushImage(_w_rigor);
    }
    let _w_gutter = _w_bough(_w_rigor);
    let _w_lasso = _w_lobby(window._w_fleck[_w_rigor].url);
    let _w_banter = function(item, _w_whimsy, _w_pulse) {
        if (_w_fabric(item)) {} else if (!_w_gutter[item]) {
            _w_gutter[item] = _w_whimsy;
            _w_gutter.push(item);
        } else {
            let _w_hatch = 0;
            if (_w_whimsy.title && _w_whimsy.title.length > 0 && _w_gutter[item].title != _w_whimsy.title) {
                _w_gutter[item].title = _w_whimsy.title;
                _w_hatch |= 1;
            }
            if (_w_whimsy.alt && _w_whimsy.alt.length > 0 && _w_gutter[item].alt != _w_whimsy.alt) {
                _w_gutter[item].alt = _w_whimsy.alt;
                _w_hatch |= 2;
            }
            if (_w_whimsy.referer && _w_whimsy.referer.length > 0 && _w_gutter[item].referer != _w_whimsy.referer) {
                let _w_gauge = _w_girth[_w_gutter[item].source];
                let _w_truce = _w_girth[_w_whimsy.source];
                if (!_w_gutter[item].referer || _w_truce > _w_gauge) {
                    _w_gutter[item].referer = _w_whimsy.referer;
                    _w_hatch |= 4;
                }
            }
            if (_w_whimsy.serial && _w_whimsy.serial < _w_gutter[item].serial && _w_gutter[item].serial != _w_whimsy.serial) {
                _w_gutter[item].serial = _w_whimsy.serial;
                _w_hatch |= 8;
            }
            if (_w_hatch > 0) _w_pulse[_w_gutter.indexOf(item)] = _w_hatch;
        }
    };
    let _w_pulse = {};
    for (let item in _w_bust) {
        try {
            let _w_whimsy = _w_bust[item];
            item = _w_oracle(item);
            _w_whimsy.referer = _w_oracle(_w_whimsy.referer);
            if (_w_lasso) item = _w_errand(item);
            try {
                let _w_equity = _w_hovel(item);
                for (let ridx in _w_equity) {
                    _w_banter(_w_equity[ridx], _w_whimsy, _w_pulse);
                }
            } catch (exception) {}
            _w_banter(item, _w_whimsy, _w_pulse);
        } catch (exception) {}
    }
    chrome.runtime.sendMessage(_w_coffer(), {
        type: "_w_vent",
        extractorHash: _w_helmet(_w_rigor)
    });
    if (Object.keys(_w_pulse).length > 0) {
        chrome.runtime.sendMessage(_w_coffer(), {
            type: "_w_augur",
            extractorHash: _w_helmet(_w_rigor),
            ItemIdxMap: _w_pulse
        });
    }
}

function _w_coda(_w_cougar, _w_rigor, _w_forte) {
    let _w_ivory = _w_scald(_w_rigor);
    for (let _w_leash in _w_cougar) {
        if (_w_leash.indexOf(_w_byline) == 0 || _w_leash.indexOf(_w_clog) == 0) {
            continue;
        }
        if (_w_ivory && (!_w_ivory[_w_leash] || _w_ivory[_w_leash].length == 0 || _w_forte)) {
            _w_ivory[_w_leash] = _w_cougar[_w_leash];
        }
    }
}

function _w_herd(_w_rigor, _w_quay, _w_siren) {
    function createCallback(_w_rigor, injectDetails, innerCallback) {
        return function() {
            chrome.tabs.executeScript(_w_rigor, injectDetails, innerCallback);
        };
    }
    while (_w_quay.length > 0) {
        _w_siren = createCallback(_w_rigor, _w_quay.pop(), _w_siren);
    }
    if (_w_siren !== null) {
        _w_siren();
    }
}

function _w_bulk(_w_rigor, _w_quay, _w_siren) {
    function createCallback(_w_rigor, _w_cub, _w_trait) {
        return function() {
            chrome.tabs.insertCSS(_w_rigor, _w_cub, _w_trait);
        };
    }
    while (_w_quay.length > 0) {
        _w_siren = createCallback(_w_rigor, _w_quay.pop(), _w_siren);
    }
    if (_w_siren !== null) {
        _w_siren();
    }
}

chrome.commands.onCommand.addListener((function(command) {
    if (command == "command_extract_images") {
        _w_cygnet(0);
    } else if (command == "command_multi_extract_images") {
        _w_advent();
    }
}));

function _w_linen() {
    let _w_sloven = {
        width: 10,
        height: 10
    };
    let _w_haunt = Number.parseInt(_w_mope("defaultFunnelWidth"));
    let _w_gloom = Number.parseInt(_w_mope("defaultFunnelHeight"));
    _w_haunt && _w_haunt > 0 && (_w_sloven.width = _w_haunt);
    _w_gloom && _w_gloom > 0 && (_w_sloven.height = _w_gloom);
    return _w_sloven;
}

function _w_dike(width, height) {
    let _w_haunt = Number.parseInt(width);
    let _w_gloom = Number.parseInt(height);
    _w_haunt && _w_acuity("defaultFunnelWidth", _w_haunt);
    _w_gloom && _w_acuity("defaultFunnelHeight", _w_gloom);
}

function _w_lust() {
    let _w_pauper;
    let _w_rancor = _w_mope("image_size");
    _w_rancor ? _w_pauper = _w_baton(_w_rancor.split(",")) : _w_pauper = _w_groom();
    return _w_pauper;
}

function _w_groom() {
    return _w_baton(_w_fort.slice(0));
}

function _w_tenor() {
    let _w_pauper = _w_groom();
    _w_acuity("image_size", _w_pauper);
}

const _w_donor = (() => {
    const default_config = {};
    _w_tare.forEach((suffix => default_config[suffix] = false));
    delete default_config["png"];
    return default_config;
})();

function _w_ballot(_w_repose) {
    if (!_w_repose) return false;
    _w_repose = _w_repose.replace(/\./gi, "");
    let _w_boast = _w_veil();
    if (_w_boast[_w_repose] == true) {
        return true;
    } else if (typeof _w_boast[_w_repose] == "undefined" && _w_boast["_"]) {
        return true;
    } else {
        return false;
    }
}

function _w_veil() {
    let _w_boast = {
        ..._w_donor
    };
    const _w_salve = localStorage["convert_format_when_downloading"];
    if (_w_salve) {
        try {
            Object.assign(_w_boast, JSON.parse(_w_salve));
        } catch (e) {}
    }
    return _w_boast;
}

function _w_yarn(_w_prose) {
    let _w_boast = {
        ..._w_donor
    };
    if (_w_prose) {
        Object.keys(_w_boast).forEach((key => {
            if (_w_prose[key]) {
                _w_boast[key] = true;
            } else {
                _w_boast[key] = false;
            }
        }));
    }
    localStorage["convert_format_when_downloading"] = JSON.stringify(_w_boast);
}

function _w_bonnet(width, height) {
    let _w_chef = Number.parseInt(width);
    let _w_vermin = Number.parseInt(height);
    let _w_beet = _w_chef && _w_vermin ? _w_chef + "x" + _w_vermin : null;
    let _w_pauper = _w_lust();
    if (!_w_pauper[_w_beet]) {
        _w_pauper.push(_w_beet);
        _w_pauper = _w_baton(_w_pauper);
        _w_pauper[_w_beet] = {
            width: _w_chef,
            height: _w_vermin
        };
        _w_acuity("image_size", _w_pauper);
    }
}

function _w_zest(width, height) {
    let _w_chef = Number.parseInt(width);
    let _w_vermin = Number.parseInt(height);
    let _w_claim = _w_chef && _w_vermin ? _w_chef + "x" + _w_vermin : null;
    let _w_pauper = _w_lust();
    if (_w_pauper[_w_claim]) {
        delete _w_pauper[_w_claim];
        let _w_tackle = _w_pauper.indexOf(_w_claim);
        _w_tackle > -1 && _w_pauper.splice(_w_tackle, 1);
        _w_acuity("image_size", _w_pauper);
    }
}

function _w_mania() {
    let _w_browse = 27;
    let _w_toupee = 31;
    let _w_nomad = Number.parseInt(_w_mope("menu_status"));
    if (_w_nomad >= 0) {
        _w_browse = _w_toupee & _w_nomad;
    }
    return _w_browse;
}

function _w_plight(status) {
    let _w_toupee = 31;
    let _w_turret = Number.parseInt(status);
    if (_w_turret >= 0) {
        _w_turret = _w_turret & _w_toupee;
        _w_acuity("menu_status", _w_turret);
    }
}

function _w_totem() {
    let _w_muck = _w_coffer();
    let _w_gavel = _w_mope(_w_muck);
    if (!_w_gavel || _w_gavel.length < 32) {
        _w_acuity(_w_muck, _w_jest(32));
        _w_gavel = _w_mope(_w_muck);
    }
    return _w_gavel;
}

function _w_fusion() {
    let _w_mulct = Number.parseInt(localStorage["dyLoadSize"]);
    if (!_w_mulct) {
        _w_mulct = 256;
        _w_dose(_w_mulct);
    }
    return _w_mulct;
}

function _w_dose(_w_hangar) {
    _w_hangar = Number.parseInt(_w_hangar);
    if (!_w_hangar) _w_hangar = 256; else if (_w_hangar < 64) _w_hangar = 64; else if (_w_hangar > 2048) _w_hangar = 2048;
    localStorage["dyLoadSize"] = _w_hangar;
}

function _w_strait() {
    let _w_coma = Number.parseInt(localStorage["extMaxLoad"]);
    if (!_w_coma) {
        _w_coma = 1024;
        _w_slab(_w_coma);
    }
    return _w_coma;
}

function _w_slab(_w_gash) {
    _w_gash = Number.parseInt(_w_gash);
    if (!_w_gash) _w_gash = 1024; else if (_w_gash < 1024) _w_gash = 1024; else if (_w_gash > 4096) _w_gash = 4096;
    localStorage["extMaxLoad"] = _w_gash;
}

function _w_sock() {
    let _w_rib = localStorage["extClickAct"];
    if (typeof _w_rib == "undefined") {
        _w_rib = false;
        _w_apron(_w_rib);
    }
    return _w_rib;
}

function _w_apron(_w_sloth) {
    if (_w_sloth) {
        _w_sloth = true;
    } else {
        _w_sloth = false;
    }
    localStorage["extClickAct"] = _w_sloth;
}

function _w_wile() {
    let _w_pivot = localStorage["regexpUrlRule"];
    if (!_w_pivot || _w_pivot.trim().length == 0) {
        _w_pivot = window._w_ewe;
        setTimeout((function() {
            _w_mentor(_w_pivot);
        }), 2e3);
    }
    return _w_pivot;
}

function _w_mentor(_w_hone) {
    localStorage["regexpUrlRule"] = _w_hone;
    return _w_veneer();
}

function _w_veneer() {
    let _w_brake = [];
    let _w_gallon = [];
    let _w_silt = localStorage["_pullywood_RegexpUrlRule"];
    if (!_w_silt) {
        _w_silt = "";
    }
    let _w_legend = _w_wile().concat("\n\r").concat(window._w_ewe).concat("\n\r").concat(_w_silt).split(/[\n\r]+/);
    window._w_fascia = _w_iota();
    for (let idx in _w_legend) {
        let _w_rebate = _w_legend[idx].trim();
        if (_w_rebate.length == 0 || _w_rebate.startsWith("//") || _w_rebate.split("{#^_^#}").length != 2) {
            continue;
        } else {
            if (window._w_fascia.has(_w_rebate)) continue;
            window._w_fascia.add(_w_rebate);
            let _w_rung = _w_rebate.split("{#^_^#}");
            let _w_credo = _w_rung[0];
            let _w_raffle = _w_rung[1];
            try {
                _w_credo = new RegExp(_w_credo);
                _w_brake.push({
                    urlRegexp: _w_credo,
                    urlReplace: _w_raffle,
                    urlRuleStr: _w_rebate
                });
            } catch (exception) {
                _w_gallon.push(_w_credo);
            }
        }
    }
    window._w_torque = _w_brake;
    return _w_gallon;
}

function _w_mope(_w_hybrid) {
    if (!_w_hybrid || _w_hybrid.length == 0) return;
    let _w_lathe = localStorage[_w_hybrid];
    chrome.storage.sync.get(_w_hybrid, (function(data) {
        let _w_fathom = data[_w_hybrid];
        if ((!_w_fathom || _w_fathom.length == 0) && _w_lathe && _w_lathe.length > 0) {
            _w_acuity(_w_hybrid, _w_lathe);
        } else if (_w_fathom && _w_lathe != _w_fathom && _w_fathom.length > 0) {
            localStorage[_w_hybrid] = _w_fathom;
        }
    }));
    return _w_lathe;
}

function _w_acuity(keyStr, valueStr) {
    valueStr = String(valueStr);
    if (!keyStr || keyStr.length == 0 || !valueStr || valueStr.length == 0) return;
    if (keyStr == _w_coffer()) {
        chrome.storage.sync.get(keyStr, (function(data) {
            let _w_fathom = data[keyStr];
            if ((!_w_fathom || _w_fathom.length != 32) && valueStr.length == 32) {
                let _w_bauble = {};
                _w_bauble[keyStr] = valueStr;
                chrome.storage.sync.set(_w_bauble, (function() {}));
                localStorage[keyStr] = valueStr;
            } else {
                localStorage[keyStr] = _w_fathom;
            }
        }));
        return;
    }
    let _w_bauble = {};
    _w_bauble[keyStr] = valueStr;
    chrome.storage.sync.set(_w_bauble, (function() {}));
    localStorage[keyStr] = valueStr;
}

chrome.storage.onChanged.addListener((function(changes, namespace) {
    for (let key in changes) {
        let _w_morale = changes[key];
        localStorage[key] = _w_morale.newValue;
    }
}));

$.ajax({
    method: "get",
    url: "http://www.pullywood.com/ImageAssistant/version.json?" + Math.random(),
    contentType: "application/json",
    mimeType: "application/json"
}).done((function(data) {
    let _w_bail = /Firefox/i.test(navigator.userAgent) ? "version_firefox" : /Edg/i.test(navigator.userAgent) ? "version_edge" : "version";
    data && data[_w_bail] && (localStorage["version"] = data[_w_bail]);
})).always((function() {
    if (localStorage["version"] && localStorage["version"] > chrome.runtime.getManifest().version) {
        chrome.browserAction.setBadgeText({
            text: "new"
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: "#FF3F3F"
        });
    } else {
        chrome.browserAction.setBadgeText({
            text: null
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: "#4285F4"
        });
    }
}));

function _w_stigma() {
    return window._w_acme++;
}

function _w_eulogy(_w_prey, _w_stem, tabId, _w_fallow, _w_farce) {
    _w_fallow();
    _w_prey["timeout"] = _w_viand;
    _w_prey["headers"]["Accept"] = "*/*; charset=UTF-8";
    _w_prey["headers"]["Cache-Control"] = "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0";
    _w_prey["headers"]["Pragma"] = "no-cache";
    _w_prey["headers"]["Expires"] = "0";
    $.ajax(_w_prey).always((function(data, status, xhr) {
        _w_farce();
        if (status == "success") {
            let _w_gale = {};
            if (xhr.getAllResponseHeaders) {
                let _w_choir = xhr.getAllResponseHeaders().split("\n");
                for (let idx in _w_choir) {
                    let _w_thatch = _w_choir[idx];
                    let _w_pistol = _w_thatch.indexOf(":");
                    let _w_marrow = _w_thatch.slice(0, _w_pistol).trim();
                    let _w_reel = _w_thatch.slice(_w_pistol + 1).trim();
                    if (_w_marrow.length == 0 || _w_reel.length == 0) {
                        continue;
                    } else if (!_w_gale[_w_marrow]) {
                        _w_gale[_w_marrow] = _w_reel;
                    } else if (typeof _w_gale[_w_marrow] == "string") {
                        let _w_muddle = [];
                        _w_muddle.push(_w_gale[_w_marrow]);
                        _w_muddle.push(_w_reel);
                        _w_gale[_w_marrow] = _w_muddle;
                    } else if (_w_gale[_w_marrow].push) {
                        _w_gale[_w_marrow].push(_w_reel);
                    }
                }
            }
            xhr["responseHeaders"] = _w_gale;
        }
        chrome.tabs.sendMessage(tabId, {
            type: "_w_scarf",
            data: data,
            status: status,
            xhr: xhr,
            requestHash: _w_stem
        });
    }));
}

chrome.contextMenus.create({
    title: _w_ordeal("_w_grind"),
    id: "_w_gum",
    contexts: [ "all" ]
}, (function() {
    chrome.contextMenus.create({
        title: _w_ordeal("_w_plank"),
        id: "_w_shuck",
        parentId: "_w_gum",
        contexts: [ "link" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_glitch"),
        id: "_w_bar",
        parentId: "_w_gum",
        contexts: [ "link" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_rung"),
        id: "_w_creek",
        parentId: "_w_gum",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_gull"),
        id: "_w_saga",
        parentId: "_w_gum",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_hyphen"),
        id: "_w_hike",
        parentId: "_w_gum",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_studio"),
        id: "_w_stitch",
        parentId: "_w_gum",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_snob"),
        id: "_w_mode",
        parentId: "_w_gum",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_choir"),
        id: "_w_venom",
        parentId: "_w_gum",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_clot"),
        id: "_w_flint",
        parentId: "_w_gum",
        contexts: [ "selection" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_logjam"),
        id: "_w_riffle",
        parentId: "_w_gum",
        contexts: [ "selection" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_loaf"),
        id: "_w_pulpit",
        parentId: "_w_gum",
        contexts: [ "selection" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_beam").trim(),
        id: "_w_attire",
        parentId: "_w_gum",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_pariah").trim(),
        id: "_w_idiom",
        parentId: "_w_gum",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_acme").trim(),
        id: "_w_smart",
        parentId: "_w_gum",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_dune").trim(),
        id: "_w_shroud",
        parentId: "_w_gum",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_ode"),
        id: "_w_sliver",
        parentId: "_w_gum",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_recall"),
        id: "_w_mote",
        parentId: "_w_gum",
        contexts: [ "link" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_menace"),
        id: "_w_dupe",
        parentId: "_w_gum",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ordeal("_w_tumult"),
        id: "_w_simile",
        parentId: "_w_gum",
        contexts: [ "image" ]
    }, (function() {}));
}));

chrome.contextMenus.onClicked.addListener((function(info, tab) {
    let _w_flora = null;
    if (info.menuItemId == "_w_dupe") {
        _w_flora = _w_dupe(info.srcUrl, info.pageUrl, tab.id);
    } else if (info.menuItemId == "_w_simile") {
        _w_flora = _w_simile(info.srcUrl, info.pageUrl, tab.id);
    } else if (info.menuItemId == "_w_creek") {
        _w_flora = _w_creek(info.srcUrl);
    } else if (info.menuItemId == "_w_saga") {
        _w_flora = _w_saga(info.srcUrl);
    } else if (info.menuItemId == "_w_hike") {
        _w_flora = _w_hike(info.srcUrl);
    } else if (info.menuItemId == "_w_stitch") {
        _w_flora = _w_stitch(info.srcUrl);
    } else if (info.menuItemId == "_w_mode") {
        _w_flora = _w_mode(info.srcUrl);
    } else if (info.menuItemId == "_w_flint") {
        _w_flora = _w_cell(info.selectionText);
    } else if (info.menuItemId == "_w_riffle") {
        _w_flora = _w_icing(info.selectionText);
    } else if (info.menuItemId == "_w_shuck") {
        _w_ensign(info.linkUrl, 0);
    } else if (info.menuItemId == "_w_bar") {
        _w_genre(info.linkUrl);
    } else if (info.menuItemId == "_w_attire") {
        _w_mint(tab.id, 0);
    } else if (info.menuItemId == "_w_idiom") {
        _w_mint(tab.id, 1);
    } else if (info.menuItemId == "_w_smart") {
        _w_mint(tab.id, 3);
    } else if (info.menuItemId == "_w_shroud") {
        _w_advent();
    } else if (info.menuItemId == "_w_pulpit") {
        _w_merit(tab.id, info.selectionText);
    } else if (info.menuItemId == "_w_venom") {
        _w_merit(tab.id, info.srcUrl);
    } else if (info.menuItemId == "_w_mote") {
        _w_merit(tab.id, info.linkUrl);
    } else if (info.menuItemId == "_w_sliver") {
        _w_merit(tab.id, info.pageUrl);
    } else {
        return;
    }
    if (_w_flora) {
        if (_w_lobby(info.pageUrl)) _w_flora.url = _w_errand(_w_flora.url);
        _w_deed(_w_flora.url, _w_flora.action, tab.id, _w_flora.createNewTab);
    }
}));

function _w_dupe(_w_leash, _w_plumb, _w_rigor) {
    if (!_w_leash) {
        return;
    } else if (!_w_leash.startsWith("data:image") && _w_lobby(_w_plumb)) {
        let _w_ivory = _w_scald(_w_rigor);
        if (_w_ivory[_w_leash]) {
            _w_plumb = _w_ivory[_w_leash];
        }
    }
    chrome.tabs.create({
        url: "imageEditor.html",
        active: true
    }, (function(tab) {
        _w_hoax(tab.id, (function(_w_tempo) {
            chrome.tabs.sendMessage(_w_tempo.id, {
                type: "_w_dupe",
                _w_jerk: _w_leash,
                _w_plumb: _w_plumb
            });
        }));
    }));
}

function _w_simile(_w_leash, _w_plumb, _w_rigor) {
    if (!_w_leash.startsWith("data:image") && _w_lobby(_w_plumb)) {
        let _w_ivory = _w_scald(_w_rigor);
        if (_w_ivory[_w_leash]) {
            _w_plumb = _w_ivory[_w_leash];
        }
    }
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_bane",
        _w_jerk: _w_leash,
        _w_plumb: _w_plumb
    });
}

function _w_merit(_w_rigor, _w_dainty) {
    if (!_w_rigor) return;
    chrome.tabs.get(_w_rigor, (function(tab) {
        let _w_score = new URL(tab.url);
        if (_w_rascal(_w_score.href)) {
            chrome.runtime.sendMessage(_w_coffer(), {
                type: "_w_hermit",
                text: _w_dainty
            });
        } else if (_w_score.protocol == "http:" || _w_score.protocol == "https:") {
            _w_herd(_w_rigor, [ {
                file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
                allFrames: false
            }, {
                file: "libs/qrcode/dist/qrcode.js",
                allFrames: false
            }, {
                file: "libs/bootstrap/3.4.1/js/bootstrap.min.js",
                allFrames: false
            }, {
                file: "scripts/function.js",
                allFrames: false
            }, {
                code: "_w_hermit(" + JSON.stringify(_w_dainty) + ", true);",
                allFrames: false
            } ]);
        } else {
            chrome.notifications.create("", {
                type: "basic",
                iconUrl: "./images/icon512.png",
                title: _w_ordeal("_w_bore"),
                message: _w_ordeal("_w_bauble")
            });
        }
    }));
}