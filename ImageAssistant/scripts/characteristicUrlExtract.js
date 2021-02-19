/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

function _w_bedlam(_w_diver) {
    let _w_haft = [];
    for (let idx in _w_diver) {
        let _w_score = _w_diver[idx];
        if ("string" != typeof _w_score || !_w_score.startsWith("http")) continue;
        let _w_axle = _w_score.split(/([0-9]+)/);
        _w_haft.push(_w_axle);
    }
    return _w_haft;
}

function _w_cornet(_w_diver) {
    let _w_haft = [];
    for (let idx in _w_diver) {
        let _w_score = _w_diver[idx];
        if ("string" != typeof _w_score || !_w_score.startsWith("http")) continue;
        let _w_axle = _w_score.split(/([^0-9a-zA-Z%]+|\d+(?=[\/_\?#]))/);
        let _w_mirth = _w_score.split(/([^0-9a-zA-Z%\-_]+)/);
        _w_haft.push(_w_axle);
        if (JSON.stringify(_w_axle) != JSON.stringify(_w_mirth)) {
            _w_haft.push(_w_mirth);
        }
    }
    return _w_haft;
}

function _w_marble(_w_awning, _w_snarl, _w_stock) {
    let _w_pirate = document.links;
    let _w_diver = [];
    let _w_shrub = {};
    let _w_gong = window.location.href;
    if (_w_gong.indexOf("#") > 0) _w_gong = _w_gong.substring(0, _w_gong.indexOf("#"));
    for (let idx in _w_pirate) {
        let _w_screw = _w_pirate[idx];
        if (_w_screw.protocol && (_w_screw.protocol == "http:" || _w_screw.protocol == "https:")) {
            let _w_odium = _w_screw.href.trim();
            if (_w_odium.indexOf("#") > 0) _w_odium = _w_odium.substring(0, _w_odium.indexOf("#"));
            if (_w_diver.indexOf(_w_odium) < 0) {
                _w_diver.push(_w_odium);
                _w_shrub[_w_odium] = _w_screw;
            } else if (_w_screw.text.trim().length > _w_shrub[_w_odium].text.trim().length) {
                _w_shrub[_w_odium] = _w_screw;
            }
        }
    }
    if (_w_diver.indexOf(_w_gong) < 0) {
        _w_diver.push(_w_gong);
    }
    _w_shrub[_w_gong] = $("<a />", {
        href: _w_gong,
        title: document.title,
        text: document.title
    })[0];
    let _w_haft = _w_awning(_w_diver);
    let _w_trowel = {};
    for (let i = 0; i < _w_haft.length; ++i) {
        for (let j = i + 1; j < _w_haft.length; ++j) {
            let _w_cuff = _w_haft[i];
            let _w_rabble = _w_haft[j];
            if (_w_cuff.length != _w_rabble.length) continue;
            let _w_uproar = 0;
            let _w_pilot = _w_cuff.length;
            let _w_taboo = "";
            let _w_eddy = "";
            let _w_amity = "";
            let _w_bulb = 0;
            let _w_malice = [];
            for (let cnt = 0; cnt < _w_pilot; ++cnt) {
                if (_w_cuff[cnt] != _w_rabble[cnt]) {
                    if (_w_uproar != 0) {
                        _w_uproar = Number.MAX_SAFE_INTEGER;
                        break;
                    }
                    _w_eddy = _w_taboo;
                    _w_taboo = "";
                    _w_bulb = cnt;
                    _w_malice.push(_w_cuff[cnt]);
                    _w_malice.push(_w_rabble[cnt]);
                    _w_uproar++;
                } else {
                    _w_taboo += _w_cuff[cnt];
                }
            }
            _w_amity = _w_taboo;
            _w_taboo = _w_eddy + "*" + _w_amity;
            if (_w_uproar != 1) {
                continue;
            }
            let _w_carafe = function(a, b) {
                return a + b;
            };
            let _w_tedium = [ _w_cuff.reduce(_w_carafe), _w_rabble.reduce(_w_carafe) ];
            let _w_dowry = _w_trowel[_w_taboo];
            if (_w_dowry == null) {
                _w_dowry = {};
                _w_dowry["joinedStrBeforeDiff"] = _w_eddy;
                _w_dowry["joinedStrAfterDiff"] = _w_amity;
                _w_dowry["joinedStrPattern"] = _w_taboo;
                _w_dowry["diffIndex"] = _w_bulb;
                _w_dowry["diffIsNumeric"] = true;
                _w_dowry["diffBreakCount"] = 0;
                _w_dowry["diffList"] = _w_malice;
                _w_dowry["urlList"] = _w_tedium;
                _w_dowry["containCurrentPageUrl"] = false;
                _w_dowry["currentPageUrl"] = _w_gong;
                _w_trowel[_w_taboo] = _w_dowry;
            } else {
                for (let idx in _w_malice) {
                    if (_w_dowry["diffList"].indexOf(_w_malice[idx]) < 0) {
                        _w_dowry["diffList"].push(_w_malice[idx]);
                    }
                }
                for (let idx in _w_tedium) {
                    if (_w_dowry["urlList"].indexOf(_w_tedium[idx]) < 0) {
                        _w_dowry["urlList"].push(_w_tedium[idx]);
                    }
                }
            }
            if (_w_gong == _w_tedium[0] || _w_gong == _w_tedium[1]) {
                _w_dowry["containCurrentPageUrl"] = true;
            }
        }
    }
    let _w_motif = [];
    for (let pattern in _w_trowel) {
        _w_motif.push(_w_trowel[pattern]);
    }
    for (let idx in _w_motif) {
        let _w_tusk = _w_motif[idx];
        _w_tusk["diffList"].sort((function(a, b) {
            if (jQuery.isNumeric(a) && jQuery.isNumeric(b)) {
                return parseInt(a) - parseInt(b);
            } else {
                return a - b;
            }
        }));
        let _w_caste = 0;
        let _w_mammal = 5;
        let _w_malice = _w_tusk["diffList"];
        for (let idx = 0; idx < _w_malice.length - 1; ++idx) {
            if (idx == 0 && _w_malice[idx] == "") {
                continue;
            } else if (!jQuery.isNumeric(_w_malice[idx]) || !jQuery.isNumeric(_w_malice[idx + 1])) {
                _w_caste = Number.MAX_VALUE;
                _w_tusk["diffIsNumeric"] = false;
            } else if (_w_malice[idx + 1] - _w_malice[idx] > 1) {
                _w_caste += 1;
            }
        }
        _w_tusk["diffBreakCount"] = _w_caste;
        if (_w_caste > _w_mammal) {
            _w_tusk["fillList"] = _w_tusk["diffList"];
        } else if (_w_malice[_w_malice.length - 1] - _w_malice.length > 1024) {
            _w_tusk["fillList"] = _w_tusk["diffList"];
        } else {
            let _w_ranger = _w_malice[0].toString()[0] == "0" && _w_malice[0].toString().length > 1 ? _w_malice[0].toString().length : 1;
            _w_tusk["fillList"] = [];
            for (let i = 0; i <= _w_malice[_w_malice.length - 1]; ++i) {
                _w_tusk["fillList"].push(_w_intent(i, _w_ranger));
            }
        }
        let _w_eddy = _w_tusk["joinedStrBeforeDiff"];
        let _w_amity = _w_tusk["joinedStrAfterDiff"];
        _w_tusk["urlList"] = [];
        _w_tusk["urlText"] = {};
        _w_malice = _w_tusk["diffList"];
        for (let itemIdx in _w_malice) {
            let _w_shack = _w_malice[itemIdx];
            let _w_score = _w_eddy + _w_shack + _w_amity;
            let _w_scheme = _w_shrub[_w_score] ? _w_shrub[_w_score].text : "无文字链接[" + _w_shack + "]";
            _w_scheme = _w_scheme.trim().length > 0 ? _w_scheme.trim() : _w_score;
            _w_tusk["urlList"].push(_w_score);
            _w_tusk["urlText"][_w_score] = _w_scheme;
        }
        _w_tusk["fillUrlList"] = [];
        _w_tusk["fillUrlText"] = {};
        let _w_vault = _w_tusk["fillList"];
        let _w_climax = false;
        for (let itemIdx in _w_vault) {
            let _w_billow = _w_vault[itemIdx];
            let _w_score = _w_eddy + _w_billow + _w_amity;
            let _w_scheme = _w_shrub[_w_score] ? _w_shrub[_w_score].text : "智能填充链接[" + _w_billow + "]";
            _w_scheme = _w_scheme.trim().length > 0 ? _w_scheme.trim() : _w_score;
            let _w_bucket = _w_eddy.substr(-1);
            if (!_w_climax && (_w_bucket == "-" || _w_bucket == "_" || _w_bucket == "/") && (_w_amity.length == 0 || _w_amity[0] == ".") && (_w_billow == 0 || _w_billow == 1)) {
                let _w_burrow;
                if (_w_bucket == "/") {
                    _w_burrow = _w_eddy;
                } else {
                    _w_burrow = _w_eddy.slice(0, -1) + _w_amity;
                }
                let _w_pelt = _w_shrub[_w_burrow] ? _w_shrub[_w_burrow].text : "智能填充链接[ ]";
                _w_tusk["fillUrlList"].push(_w_burrow);
                _w_tusk["fillUrlText"][_w_burrow] = _w_pelt;
                _w_climax = true;
                if (_w_tusk["currentPageUrl"] == _w_burrow) {
                    _w_tusk["containCurrentPageUrl"] = true;
                    _w_tusk["urlList"].push(_w_burrow);
                    _w_tusk["urlText"][_w_burrow] = _w_pelt;
                }
            }
            _w_tusk["fillUrlList"].push(_w_score);
            _w_tusk["fillUrlText"][_w_score] = _w_scheme;
        }
    }
    _w_motif.sort((function(a, b) {
        let _w_boast = 0;
        if (a["containCurrentPageUrl"] && !b["containCurrentPageUrl"]) {
            _w_boast = -1;
        } else if (!a["containCurrentPageUrl"] && b["containCurrentPageUrl"]) {
            _w_boast = 1;
        }
        if (_w_boast == 0) {
            if (a["diffIsNumeric"] && !b["diffIsNumeric"]) {
                _w_boast = -1;
            } else if (!a["diffIsNumeric"] && b["diffIsNumeric"]) {
                _w_boast = 1;
            }
        }
        if (_w_boast == 0) {
            _w_boast = a["diffBreakCount"] - b["diffBreakCount"];
        }
        if (_w_boast == 0) {
            if (a["diffList"] && b["diffList"]) {
                _w_boast = b["diffList"].length - a["diffList"].length;
            } else {
                _w_boast = a - b;
            }
        }
        if (_w_boast == 0 && a.diffIndex != null && b.diffIndex != null) {
            _w_boast = a.diffIndex - b.diffIndex;
        }
        return _w_boast;
    }));
    let _w_auger = {};
    Object.entries(_w_shrub).forEach((arr => {
        _w_auger[arr[0]] = arr[1].text;
    }));
    let _w_shanty = function() {
        chrome.runtime.sendMessage(chrome.runtime.id, {
            type: "_w_slate",
            collections: _w_motif,
            links: _w_auger,
            currentPageUrl: _w_gong,
            currentPageTitle: document.title,
            channel: _w_snarl
        });
    };
    setTimeout((() => {
        _w_shanty();
        _w_stock && _w_sow();
    }), 500);
}

