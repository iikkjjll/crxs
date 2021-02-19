/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

!window._w_podium && (window._w_podium = 0);

!window.prefetchForImage && (window.prefetchForImage = false);

!window.prefetchForDomImage && (window.prefetchForDomImage = false);

!window.extractorHash && (window.extractorHash = "");

!window._w_prick && (window._w_prick = {});

!window._w_spark && (window._w_spark = _w_poll(8));

function _w_limb(_w_plumb) {
    if (_w_plumb) {
        return _w_lyric(_w_plumb);
    } else {
        return _w_lyric(window.location.href);
    }
}

function _w_kidney(_w_barn) {
    let $_w_patch;
    if (_w_barn instanceof jQuery) {
        $_w_patch = _w_barn;
    } else {
        $_w_patch = $(_w_barn);
    }
    return $_w_patch.attr("data-referer");
}

function _w_wraith() {
    let _w_gaiety = function() {
        let _w_bust = {};
        let _w_harrow = $(this).get(0);
        let _w_plumb = _w_kidney(_w_harrow) ? _w_kidney(_w_harrow) : _w_limb();
        _w_bust[_w_harrow.src] = {
            source: "_w_dart",
            title: _w_harrow.title,
            alt: _w_harrow.alt,
            serial: window._w_podium++,
            referer: _w_plumb
        };
        _w_hawker(_w_bust);
    };
    $("img").on("load", _w_gaiety);
    let _w_ford = function(_w_wallop) {
        _w_wallop.map((function(_w_fungi) {
            switch (_w_fungi.type) {
              case "attributes":
                let _w_felony = _w_fungi.target.closest("svg");
                if (_w_felony) {
                    let _w_bust = {};
                    let _w_plumb = _w_limb();
                    _w_bust[_w_gamut(_w_felony.outerHTML)] = {
                        source: "_w_flight",
                        title: _w_felony.title,
                        alt: _w_felony.alt,
                        serial: window._w_podium++,
                        referer: _w_plumb
                    };
                    _w_hawker(_w_bust);
                }
                break;

              case "childList":
              case "subtree":
                {
                    let _w_bust = {};
                    _w_fungi.addedNodes.forEach((_w_purse => {
                        if (!_w_purse.querySelector) return;
                        let _w_din = _w_purse.querySelectorAll("svg");
                        let _w_flare = 0;
                        window._w_podium = (_w_flare = window._w_podium) + _w_din.length;
                        _w_din.forEach((_w_felony => {
                            let _w_plumb = _w_limb();
                            _w_bust[_w_gamut(_w_felony.outerHTML)] = {
                                source: "_w_hoe",
                                title: _w_felony.title,
                                alt: _w_felony.alt,
                                serial: _w_flare++,
                                referer: _w_plumb
                            };
                        }));
                        let _w_pirate = $(_w_purse).find("a").toArray();
                        $(_w_purse).is("A") && _w_pirate.push(_w_purse);
                        _w_pirate.forEach((_w_screw => {
                            let _w_grace = _w_ore(_w_screw, _w_limb());
                            for (let imgUrl in _w_grace) {
                                _w_bust[imgUrl] = _w_grace[imgUrl];
                            }
                            _w_nectar(_w_screw, _w_limb());
                        }));
                        let _w_scythe = $(_w_purse).find("img").toArray();
                        $(_w_purse).is("IMG") && _w_scythe.push(_w_purse);
                        let _w_pack = 0;
                        window._w_podium = (_w_pack = window._w_podium) + _w_scythe.length;
                        $(_w_scythe).on("load", _w_gaiety);
                        _w_scythe.forEach((_w_harrow => {
                            let _w_plumb = null;
                            if (_w_harrow.src) {
                                _w_plumb = _w_kidney(_w_harrow) ? _w_kidney(_w_harrow) : _w_limb();
                                _w_bust[_w_harrow.src] = {
                                    source: "_w_mesa",
                                    title: _w_harrow.title,
                                    alt: _w_harrow.alt,
                                    serial: _w_pack++,
                                    referer: _w_plumb
                                };
                            }
                            _w_nectar(_w_harrow, _w_plumb);
                        }));
                        let _w_clasp = $(_w_purse).find("*").toArray();
                        _w_clasp.push(_w_purse);
                        let _w_drawl = 0;
                        window._w_podium = (_w_drawl = window._w_podium) + _w_clasp.length;
                        _w_clasp.forEach((_w_barn => {
                            let _w_fosse = _w_cereal(_w_barn);
                            if (_w_fosse && _w_fosse.length > 0) {
                                _w_bust[_w_fosse] = {
                                    source: "_w_recall",
                                    title: "",
                                    alt: "",
                                    serial: _w_drawl++,
                                    referer: _w_limb()
                                };
                            }
                        }));
                        $(_w_clasp).trigger("mouseover");
                        for (let j = 0; j < _w_pirate.length; ++j) {
                            let _w_screw = _w_pirate[j];
                            _w_helve(_w_screw);
                        }
                    }));
                    _w_hawker(_w_bust);
                }
            }
        }));
    };
    let _w_gamble = new MutationObserver(_w_ford);
    let _w_splint = document.body;
    let _w_puddle = {
        childList: true,
        subtree: true,
        attributes: true
    };
    _w_gamble.observe(_w_splint, _w_puddle);
    try {
        $("*").trigger("mouseover");
    } catch (e) {
        console.log(e);
    }
}

function _w_cereal(_w_candor) {
    let _w_hurdle = [];
    try {
        let _w_alert = $(_w_candor).css("background-image");
        if (_w_alert && _w_alert.match(/url\((['"]?)(.*?)\1\)/gi)) {
            let _w_addict = _w_alert.match(/url\((['"]?)(.*?)\1\)/gi);
            for (let idx in _w_addict) {
                let _w_hack = /url\((['"]?)(.*?)\1\)/gi.exec(_w_addict[idx]);
                _w_hurdle.push(_w_hack[2]);
            }
        }
    } catch (exception) {}
    return _w_hurdle;
}

function _w_ore(_w_screw, _w_plumb) {
    let _w_bust = {};
    if (!_w_screw || !_w_screw.href) {
        return _w_bust;
    }
    let _w_loon = _w_peep(_w_plumb, _w_screw.getAttribute("href"));
    let _w_pique = _w_kidney(_w_screw) ? _w_kidney(_w_screw) : _w_plumb;
    if (_w_prop.indexOf(_w_screw.pathname.substring(_w_screw.pathname.lastIndexOf(".") + 1).toLowerCase()) != -1) {
        _w_bust[_w_loon] = {
            source: "_w_crag",
            title: _w_screw.title,
            alt: "",
            serial: window._w_podium++,
            referer: _w_pique
        };
    }
    let _w_armory = _w_kidney(_w_screw) ? _w_kidney(_w_screw) : _w_loon;
    let _w_guffaw = _w_sting(_w_screw.search);
    if (_w_guffaw && _w_guffaw.length > 0) {
        let _w_relic = 0;
        window._w_podium = (_w_relic = window._w_podium) + _w_guffaw.length;
        let _w_thorn = function(_w_gouge) {
            let _w_arroyo = {};
            for (let idx in _w_guffaw) {
                let _w_drone = _w_guffaw[idx];
                if (_w_bust[_w_drone]) continue;
                _w_arroyo[_w_drone] = {
                    source: "_w_thread",
                    title: "",
                    alt: "",
                    serial: _w_relic++,
                    referer: _w_gouge
                };
            }
            _w_hawker(_w_arroyo);
        };
        let _w_marsh = function(_w_scoop, _w_nomad, _w_den) {
            if (_w_nomad == "success") {
                let _w_iodine = _w_den.getResponseHeader("Content-Type");
                if (_w_iodine && _w_iodine.indexOf("html") < 0) {
                    _w_thorn(_w_plumb);
                } else {
                    let _w_consul = document.implementation.createHTMLDocument("parseHTMLDocument");
                    let _w_glade = _w_consul.createElement("html");
                    _w_glade.innerHTML = DOMPurify.sanitize(_w_scoop, {
                        WHOLE_DOCUMENT: true
                    });
                    let $_w_lesion = $(_w_glade);
                    _w_moat(_w_armory, $_w_lesion);
                    if ($_w_lesion.find("a").length > 0 || $_w_lesion.find("img").length > 0) {
                        _w_thorn(_w_armory);
                    } else {
                        _w_thorn(_w_plumb);
                    }
                }
            } else {
                _w_thorn(_w_plumb);
            }
        };
        let _w_siege = {
            method: "get",
            url: _w_armory,
            headers: {
                Accept: "*/*; charset=UTF-8",
                "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0",
                Pragma: "no-cache",
                Expires: "0",
                "IA-Tag": window.extractorHash
            }
        };
        _w_nil(_w_siege, _w_marsh);
    }
    return _w_bust;
}

function _w_sting(_w_rudder) {
    let _w_larva = [];
    if (_w_rudder && _w_rudder.length > 4) {
        let _w_fawn = _w_rudder.substring(1).split("&");
        for (let j = 0; j < _w_fawn.length; ++j) {
            if (_w_fawn[j].length > 0 && _w_fawn[j].split("=").length == 2) {
                let _w_elite = _w_fawn[j].split("=")[1];
                _w_elite = _w_infant(_w_elite);
                if (_w_bale(_w_elite)) {
                    let _w_reign = new URL(_w_elite);
                    if (_w_prop.indexOf(_w_reign.pathname.substring(_w_reign.pathname.lastIndexOf(".") + 1).toLowerCase()) != -1) {
                        if (_w_larva.indexOf(_w_reign.href) < 0) _w_larva.push(_w_reign.href);
                    }
                }
            }
        }
    }
    return _w_larva;
}

function _w_glee(_w_limbo, _w_lament) {
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_shoot"
    }, (function callback(_w_reward) {
        window._w_podium = _w_reward * 1e8;
        _w_stamp(_w_limbo, _w_lament);
    }));
}

function _w_moat(_w_score, $_w_soil) {
    let _w_fig = {};
    _w_fig["url"] = _w_score;
    _w_fig["title"] = $_w_soil.find("title").text();
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_balm",
        extractorHash: extractorHash,
        pageInfo: _w_fig
    });
}

function _w_laity() {
    let _w_crux = () => {
        let $_w_soil = $("html");
        _w_moat(window.location.href, $_w_soil);
    };
    setInterval(_w_crux, 2e3);
    _w_crux();
}

function _w_stamp(_w_limbo, _w_lament) {
    if (window._w_stream) return;
    window._w_stream = (new Date).getTime();
    _w_lament = _w_lament.substr(0, 32);
    if ((_w_limbo & 1) > 0) {
        window.prefetchForImage = true;
    }
    if ((_w_limbo & 2) > 0) {
        window.prefetchForDomImage = true;
    }
    (!window.extractorHash || window.extractorHash.length == 0) && (window.extractorHash = _w_lament);
    _w_laity();
    _w_wraith();
    let _w_bust = {};
    let _w_din = document.querySelectorAll("svg");
    let _w_flare = 0;
    window._w_podium = (_w_flare = window._w_podium) + _w_din.length;
    for (let i = 0; i < _w_din.length; ++i) {
        let _w_felony = _w_din[i];
        let _w_plumb = _w_limb();
        _w_bust[_w_gamut(_w_felony.outerHTML)] = {
            source: "_w_canyon",
            title: _w_felony.title,
            alt: _w_felony.alt,
            serial: _w_flare++,
            referer: _w_plumb
        };
    }
    let _w_scythe = document.images;
    let _w_amulet = 0;
    window._w_podium = (_w_amulet = window._w_podium) + _w_scythe.length;
    for (let i = 0; i < _w_scythe.length; ++i) {
        let _w_harrow = _w_scythe[i];
        if (_w_harrow.src) {
            let _w_plumb = _w_kidney(_w_harrow) ? _w_kidney(_w_harrow) : _w_limb();
            _w_bust[_w_harrow.src] = {
                source: "_w_virago",
                title: _w_harrow.title,
                alt: _w_harrow.alt,
                serial: _w_amulet++,
                referer: _w_plumb
            };
        }
        _w_nectar(_w_harrow, _w_limb());
    }
    let _w_clasp = [];
    try {
        _w_clasp = $("*");
    } catch (e) {
        console.log(e);
    }
    let _w_dent = 0;
    window._w_podium = (_w_dent = window._w_podium) + _w_clasp.length;
    for (let i = 0; i < _w_clasp.length; ++i) {
        let _w_hurdle = _w_cereal(_w_clasp[i]);
        for (let idx in _w_hurdle) {
            let _w_fosse = _w_hurdle[idx];
            if (_w_fosse && _w_fosse.length > 0) {
                _w_bust[_w_fosse] = {
                    source: "_w_spoke",
                    title: "",
                    alt: "",
                    serial: _w_dent++,
                    referer: _w_limb()
                };
            }
        }
    }
    let _w_vendor = new Array;
    let _w_pirate = document.links;
    for (let i = 0; i < _w_pirate.length; ++i) {
        let _w_screw = _w_pirate[i];
        if (_w_screw && _w_screw.href && _w_vendor.indexOf(_w_screw.href) == -1) {
            _w_vendor.push(_w_screw);
        }
    }
    for (let i = 0; i < _w_vendor.length; ++i) {
        let _w_screw = _w_vendor[i];
        let _w_grace = _w_ore(_w_screw, _w_limb());
        for (let imgUrl in _w_grace) {
            _w_bust[imgUrl] = _w_grace[imgUrl];
        }
        _w_nectar(_w_screw, _w_limb());
    }
    _w_hawker(_w_bust);
    for (let i = 0; i < _w_vendor.length; ++i) {
        let _w_screw = _w_vendor[i];
        _w_helve(_w_screw);
    }
}

function _w_helve(_w_screw) {
    let _w_score;
    try {
        _w_score = new URL(_w_screw);
    } catch (exception) {
        return;
    }
    let _w_plumb = _w_kidney(_w_screw) ? _w_kidney(_w_screw) : _w_limb();
    if (_w_score.protocol != "http:" && _w_score.protocol != "https:") return;
    if (_w_lobby(window.location.href)) {
        return;
    }
    let _w_harrow = new Image;
    let _w_omelet = _w_score.href;
    let _w_curb = function() {
        let _w_bust = {};
        _w_bust[this.src] = {
            source: "_w_lumen",
            title: "",
            alt: "",
            serial: window._w_podium++,
            referer: _w_limb()
        };
        _w_hawker(_w_bust);
    };
    let _w_chisel = function() {
        let _w_marsh = function(_w_scoop, _w_nomad, _w_den) {
            if (_w_nomad != "success") return;
            let _w_consul = document.implementation.createHTMLDocument("parseHTMLDocument");
            let _w_glade = _w_consul.createElement("html");
            _w_glade.innerHTML = DOMPurify.sanitize(_w_scoop, {
                WHOLE_DOCUMENT: true
            });
            let $_w_bit = $(_w_glade);
            _w_moat(_w_omelet, $_w_bit);
            let $_w_scythe = $_w_bit.find("img");
            let $_w_pirate = $_w_bit.find("a");
            if (_w_lobby(_w_omelet)) {
                $_w_scythe.each((function() {
                    if ($(this).attr("data-src")) $(this).attr("src", $(this).attr("data-src"));
                }));
                $_w_pirate.each((function() {
                    if ($(this).attr("data-src")) $(this).attr("href", $(this).attr("data-src"));
                }));
            }
            let _w_bust = {};
            let _w_aplomb = 0;
            window._w_podium = (_w_aplomb = window._w_podium) + $_w_scythe.length;
            for (let i = 0; i < $_w_scythe.length; ++i) {
                let _w_harrow = $_w_scythe[i];
                let _w_fosse = _w_harrow.getAttribute("src");
                if (_w_fosse) {
                    _w_fosse = _w_peep(_w_omelet, _w_fosse);
                    _w_bust[_w_fosse] = {
                        source: "_w_ream",
                        title: _w_harrow.title,
                        alt: _w_harrow.alt,
                        serial: _w_aplomb++,
                        referer: _w_limb(_w_omelet)
                    };
                }
                _w_nectar(_w_harrow, _w_omelet);
            }
            for (let j = 0; j < $_w_pirate.length; ++j) {
                let _w_screw = $_w_pirate[j];
                let _w_grace = _w_ore(_w_screw, _w_omelet);
                for (let imgUrl in _w_grace) {
                    _w_bust[imgUrl] = _w_grace[imgUrl];
                }
                _w_nectar(_w_screw, _w_omelet);
            }
            _w_hawker(_w_bust);
        };
        let _w_siege = {
            method: "get",
            url: _w_omelet,
            headers: {
                Accept: "*/*; charset=UTF-8",
                "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0",
                Pragma: "no-cache",
                Expires: "0",
                "IA-Tag": window.extractorHash
            }
        };
        _w_nil(_w_siege, _w_marsh);
        _w_trawl(window._w_warp) && window._w_warp(_w_screw);
    };
    if (prefetchForImage) {
        _w_harrow.onload = _w_curb;
        if (prefetchForDomImage) {
            _w_harrow.onerror = _w_chisel;
            _w_harrow.onabort = _w_harrow.onerror;
        }
        _w_harrow.src = _w_omelet;
    } else if (prefetchForDomImage) {
        _w_chisel();
    }
}

function _w_hawker(_w_bust) {
    if (!_w_bust || Object.keys(_w_bust).length == 0) return;
    for (let imgSrc in _w_bust) {
        if (_w_lobby(window.location.href)) {
            break;
        } else if (imgSrc.startsWith("data:")) {
            break;
        }
        try {
            let _w_score = new URL(imgSrc);
            let _w_hoof = decodeURIComponent(_w_score.pathname);
            if (_w_hoof.indexOf("http://") >= 0 || _w_hoof.indexOf("https://") >= 0) {
                let _w_sanity = /https?:\/\/.*/.exec(_w_hoof);
                if (_w_sanity && _w_sanity.length > 0 && !_w_bust[_w_sanity[0]]) {
                    let _w_clout = {};
                    let _w_canary = _w_bust[imgSrc];
                    let _w_slight = Object.keys(_w_canary);
                    for (let oIdx in _w_slight) {
                        let _w_ditch = _w_slight[oIdx];
                        if (typeof _w_ditch != "undefined" && _w_ditch != null) {
                            _w_clout[_w_ditch] = _w_canary[_w_ditch];
                        }
                    }
                    _w_clout["source"] = "_w_cult";
                    _w_bust[_w_sanity[0]] = _w_clout;
                }
            }
            let _w_guffaw = _w_sting(_w_score.search);
            let _w_scoff = 0;
            window._w_podium = (_w_scoff = window._w_podium) + _w_guffaw.length;
            for (let idx in _w_guffaw) {
                let _w_drone = _w_guffaw[idx];
                if (!_w_bust[_w_drone]) {
                    let _w_clout = {};
                    let _w_canary = _w_bust[imgSrc];
                    let _w_slight = Object.keys(_w_canary);
                    for (let oIdx in _w_slight) {
                        let _w_ditch = _w_slight[oIdx];
                        if (typeof _w_ditch != "undefined" && _w_ditch != null) {
                            _w_clout[_w_ditch] = _w_canary[_w_ditch];
                        }
                    }
                    _w_clout["source"] = "_w_jumble";
                    _w_bust[_w_drone] = _w_clout;
                }
            }
        } catch (exception) {}
    }
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_trend",
        extractorHash: extractorHash,
        images: _w_bust
    });
}

function _w_nectar(_w_barn, _w_boor) {
    if (_w_lobby(window.location.href) || _w_lobby(_w_boor)) {
        return;
    }
    let _w_plumb = _w_kidney(_w_barn) ? _w_kidney(_w_barn) : _w_limb(_w_boor);
    let _w_broker = _w_barn.attributes;
    let _w_jazz = _w_broker.length;
    for (let idx = 0; idx < _w_jazz; ++idx) {
        let _w_lumber = _w_broker[idx];
        if (_w_lumber.specified && _w_lumber.name != "href" && _w_lumber.name != "src") {
            let _w_debut = /^[^'"\s]+?\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp)(\?.+)?$/i;
            let _w_polish = /^https?:\/\/[^'"\s]+\/[^'"\s]+$/i;
            let _w_quiver = /(https?:\/\/[^'"\s]+\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp))(\?[^'"\s]+)?/gi;
            if (_w_debut.test(_w_lumber.value) || _w_polish.test(_w_lumber.value)) {
                let _w_timber = _w_peep(_w_boor, _w_lumber.value);
                if (_w_prick[_w_timber]) {
                    continue;
                } else {
                    _w_prick[_w_timber] = true;
                }
                _w_spark.addTask((function(_w_gust, _w_whit) {
                    let _w_riddle = function() {
                        let _w_bust = {};
                        _w_bust[_w_timber] = {
                            source: "_w_orchid",
                            title: _w_barn.title,
                            alt: _w_barn.alt,
                            serial: window._w_podium++,
                            referer: _w_plumb
                        };
                        _w_hawker(_w_bust);
                    };
                    let _w_harrow = new Image;
                    _w_harrow.onerror = _w_whit;
                    _w_harrow.onabort = _w_harrow.onerror;
                    _w_harrow.onload = function() {
                        _w_whit();
                        _w_riddle();
                    };
                    _w_gust();
                    _w_harrow.src = _w_timber;
                }));
            } else {
                let _w_bust = {};
                let _w_rite = _w_lumber.value.match(_w_quiver);
                _w_rite && _w_rite.forEach((function(_w_timber) {
                    _w_bust[_w_timber] = {
                        source: "_w_orchid",
                        title: _w_barn.title,
                        alt: _w_barn.alt,
                        serial: window._w_podium++,
                        referer: _w_plumb
                    };
                }));
                if (Object.keys(_w_bust).length > 0) {
                    _w_hawker(_w_bust);
                }
            }
        }
    }
}

!window._w_rivet && (window._w_rivet = function() {
    let _w_feat = [];
    let _w_comic = {};
    let _w_chip = function(_w_dagger) {
        if (_w_dagger && _w_dagger.length && _w_dagger.length > 0) {
            _w_dagger.forEach((function(_w_sage) {
                if (!_w_comic[_w_sage]) {
                    _w_comic[_w_sage] = true;
                    _w_feat.push(_w_sage);
                }
            }));
        }
    };
    setInterval((function() {
        if (!window._w_stream) return;
        try {
            let _w_domain = "_w_elixir";
            let _w_verve = document.getElementById(_w_domain);
            if (_w_verve) {
                if (_w_verve.value && _w_verve.value.length > 0 && _w_verve.value != _w_domain) {
                    let _w_dagger = JSON.parse(_w_verve.value);
                    _w_chip(_w_dagger);
                }
                _w_verve.value = _w_domain;
            }
        } catch (ex) {}
        while (_w_feat.length > 0) {
            let _w_timber = _w_feat.pop();
            _w_spark.addTask((function(_w_gust, _w_whit) {
                let _w_harrow = new Image;
                _w_harrow.onerror = _w_whit;
                _w_harrow.onabort = _w_harrow.onerror;
                _w_harrow.onload = _w_whit;
                _w_gust();
                _w_harrow.src = _w_timber;
            }));
        }
    }), 512);
    try {
        let _w_heir = document.documentElement.innerHTML.replace(/[<>]/gi, '"').match(_w_gem);
        _w_chip(_w_dogma(_w_heir));
    } catch (e) {
        console.log(e);
    }
    return {
        _w_hut: function() {
            return _w_feat.length;
        }
    };
}());