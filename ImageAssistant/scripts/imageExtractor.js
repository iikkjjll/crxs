/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

window._w_rigor = parseInt(_w_grit("tabId"));

window._w_limbo = parseInt(_w_grit("fetchLevel"));

window._w_pauper = _w_roe()._w_lust();

window._w_sloven = _w_roe()._w_linen();

window._w_sack = 0;

window._w_mien = null;

window._w_lout = 0;

window._w_bust = [];

window._w_hush = {};

window._w_legacy = _w_roe()._w_blurb(_w_mien);

window._w_owl = {};

window._w_rue = {};

window._w_squall = false;

window._w_gnome = null;

window._w_filth = null;

window._w_grief = null;

window._w_flush = 0;

window._w_girdle = 8;

window._w_loft = _w_roe()._w_strait();

window._w_fiend = null;

window._w_mask = _w_anthem(8e3, 16);

window._w_hub = {};

window._w_rote = _w_poll(4);

window.Worker && (() => {
    const _w_despot = navigator && navigator.hardwareConcurrency && navigator.hardwareConcurrency > 4 ? 4 : 2;
    const _w_spurn = [];
    let _w_core = 0;
    for (let i = 0; i < _w_despot; ++i) {
        const _w_lore = new Worker("./scripts/pHashWorker.js");
        _w_lore.onmessage = _w_lug;
        _w_spurn.push(_w_lore);
    }
    let postMessage = _calc_data => {
        _w_spurn[_w_core++ % _w_spurn.length].postMessage(_calc_data);
    };
    window._w_lore = {
        postMessage: postMessage,
        concurrency: _w_spurn.length
    };
})();

chrome.tabs.get(_w_rigor, (function(tab) {
    if (!tab) return;
    window._w_filth = tab.title;
    window._w_grief = tab.url;
    let _w_plot = function() {
        return _w_filth + " - " + _w_filth;
    };
    setInterval((function() {
        document.title = "[" + _w_flush + "/" + _w_lout + "/" + _w_bust.length + "-retry:" + _w_rote.getProcessingNum() + "/" + _w_rote.getTaskNum() + "]/" + _w_plot();
    }), 100);
    window._w_mien = _w_roe()._w_helmet(_w_rigor);
}));

chrome.tabs.getCurrent((function(tab) {
    window._w_gnome = tab.id;
    $((function() {
        _w_cant(_w_rigor, _w_want);
    }));
}));

chrome.runtime.onMessage.addListener((function(message, sender, callback) {
    message && message.type == "_w_scar" && _w_mien && _w_mien.length > 0 && message.extractorHash.length && message.extractorHash == _w_mien && callback({
        tabId: _w_gnome
    });
    message && message.type == "_w_vent" && _w_mien && _w_mien.length > 0 && message.extractorHash.length && message.extractorHash == _w_mien && _w_curfew(_w_bust);
    message && message.type == "_w_augur" && _w_mien && _w_mien.length > 0 && message.extractorHash.length && message.extractorHash == _w_mien && _w_brook(message.ItemIdxMap);
}));

function _w_want(_w_unison) {
    if (!_w_rigor || _w_rigor.length == 0) {
        $("#ext_main").html(_w_ordeal("_w_ken"));
        return;
    } else if (_w_rigor == _w_gnome) {
        $("#ext_main").html(_w_ordeal("_w_canopy"));
        return;
    } else if (!_w_roe()._w_fleck[_w_rigor]) {
        $("#ext_main").html(_w_ordeal("_w_ken"));
        return;
    } else {
        try {
            let _w_crook = new URL(_w_unison.url);
            if (!_w_bale(_w_crook.href) && !_w_pine(_w_crook.href)) {
                $("#ext_main").html(_w_ordeal("_w_cinder"));
                return;
            }
        } catch (e) {
            console.log("parse url error." + _w_unison.url);
            return;
        }
    }
    window._w_mien = _w_roe()._w_helmet(_w_rigor);
    if (!_w_mien || _w_mien.length == 0) {
        $("#ext_main").html(_w_ordeal("_w_ken"));
        return;
    } else {
        let _w_furor = _w_roe()._w_furor;
        let _w_pulp = setInterval((function updateTabPosition() {
            if (!_w_furor[_w_rigor]) {
                clearInterval(_w_pulp);
            } else if (_w_furor[_w_rigor].extractorHash == _w_mien) {
                chrome.tabs.get(_w_rigor, (function(tab) {
                    chrome.tabs.getCurrent((function(currentTab) {
                        if (currentTab.windowId != tab.windowId || currentTab.index != tab.index + 1) {
                            let _w_sprout = tab.windowId;
                            let _w_peril = tab.index + 1;
                            if (_w_sprout == currentTab.windowId && currentTab.index < tab.index) _w_peril = tab.index;
                            try {
                                chrome.tabs.move(currentTab.id, {
                                    windowId: _w_sprout,
                                    index: _w_peril
                                }, (function() {}));
                            } catch (exception) {}
                        }
                    }));
                }));
            }
        }), 512);
    }
    let _w_crook = new URL(_w_roe()._w_fleck[_w_rigor].url);
    if (!_w_pine(_w_crook.href)) {
        _w_roe()._w_charm(_w_rigor, _w_limbo);
    }
    let _w_pledge = setTimeout((function() {
        _w_bust = _w_roe()._w_carat(_w_mien);
        _w_hush = _w_roe()._w_pariah(_w_mien);
        _w_legacy = _w_roe()._w_blurb(_w_mien);
        _w_curfew(_w_bust);
    }), 512);
    _w_roe()._w_scar(_w_mien, (function callback(data) {
        if (data && data.tabId && data.tabId != _w_gnome) {
            clearTimeout(_w_pledge);
            chrome.tabs.update(data.tabId, {
                active: true
            }, (function(tab) {
                chrome.windows.update(tab.windowId, {
                    focused: true,
                    drawAttention: true
                }, (function(window) {
                    _w_gleam(_w_gnome);
                }));
            }));
        }
    }));
}

function _w_blazon(_w_braid, _w_jade) {
    if (_w_jade && $("a[data-idx=" + _w_braid + "]").length == 0) return;
    let _w_lien = _w_bust[_w_braid];
    let _w_grind = _w_bust[_w_lien].referer;
    if (/^data:image\/svg.*?<svg[^>]+><\/svg>$/i.test(_w_lien)) return;
    _w_hub[_w_braid] = true;
    let _w_seam = null;
    let _w_crease = async function() {
        _w_flush--;
        _w_seam && _w_seam.loaded();
        delete _w_hub[_w_braid];
        this.onload = null;
        this.onabort = null;
        this.onerror = null;
        let _w_sleigh = this.src;
        let _w_whelp = _w_bust[_w_sleigh];
        let _w_grind = _w_whelp.referer;
        if (this.naturalWidth < _w_sloven.width || this.naturalHeight < _w_sloven.height) return;
        let _w_shred = null;
        let _w_cello = null;
        await async function() {
            let _w_pullet = null;
            if (/^data:image\/.*?;.*?/i.test(_w_sleigh)) {
                let match = _w_sleigh.match(/^data:(image\/.*?);/i);
                _w_pullet = match ? _w_toil[match[1].toLowerCase()] : null;
            } else if (/^https?:\/\/.*?/i.test(_w_sleigh)) {
                await Promise.race([ new Promise(((_, reject) => setTimeout((() => reject("timeout!")), 2e3))).catch((() => {})), fetch(_w_sleigh, {
                    method: "HEAD"
                }).then((resp => {
                    if (resp.headers) {
                        let _w_mast = resp.headers.get("content-disposition");
                        if (_w_mast) {
                            let match = _w_mast.match(/filename\=['"]?([^'"]+)['"]?;/i);
                            _w_cello = match ? decodeURIComponent(match[1]) : null;
                        }
                    }
                    return resp.blob();
                })).then((blob => {
                    let match = blob.type.match(/^(image\/.*?)$/i);
                    _w_pullet = match ? _w_toil[match[1].toLowerCase()] : null;
                })).catch((() => {})) ]);
            }
            _w_shred = _w_pullet;
        }();
        let _w_repose = null;
        if (_w_sleigh.match(/^data:(image\/.*?);/i)) {
            _w_repose = _w_shred;
            _w_cello = _w_jest(32);
        } else {
            if (!_w_cello) {
                let _w_hoof = new URL(_w_sleigh).pathname;
                _w_cello = _w_hoof.substring(_w_hoof.lastIndexOf("/") + 1);
            }
            _w_repose = _w_cello.lastIndexOf(".") > -1 ? _w_cello.substring(_w_cello.lastIndexOf(".") + 1).toLowerCase() : null;
            _w_cello.lastIndexOf(".") > -1 && (_w_cello = _w_cello.substring(0, _w_cello.lastIndexOf(".")));
            if (_w_shred && _w_repose) {
                if (_w_glitch[_w_shred] != _w_glitch[_w_repose]) {
                    _w_repose = _w_shred;
                }
            } else if (_w_shred) {
                _w_repose = _w_shred;
            } else if (_w_repose) {
                if (_w_mural[_w_repose]) {
                    _w_shred = _w_mural[_w_repose];
                }
            }
        }
        _w_shred = _w_mural[_w_shred] ? _w_mural[_w_shred] : "other";
        this.title = _w_ordeal("_w_talon") + this.naturalWidth + "x" + this.naturalHeight + " / " + _w_ordeal("_w_dose") + _w_shred.toUpperCase();
        _w_whelp.title && _w_whelp.title.length > 0 && (this.title += " / Title: " + _w_groan(_w_whelp.title));
        _w_whelp.alt && _w_whelp.alt.length > 0 && _w_whelp.title != _w_whelp.alt && (this.title += " / Alt: " + _w_groan(_w_whelp.alt));
        this.title = this.title;
        this.setAttribute("data-idx", _w_braid);
        let _w_screw = document.createElement("a");
        const _w_bait = (new Date).getTime() + _w_armada(4);
        _w_screw.setAttribute("class", "imageItem");
        _w_screw.setAttribute("data-width", this.naturalWidth);
        _w_screw.setAttribute("data-height", this.naturalHeight);
        _w_screw.setAttribute("data-size", this.naturalWidth * this.naturalHeight);
        _w_screw.setAttribute("data-resolution", this.naturalWidth + "x" + this.naturalHeight);
        _w_screw.setAttribute("data-id", _w_bait);
        _w_screw.setAttribute("data-serial", _w_whelp.serial);
        _w_screw.setAttribute("data-title", _w_whelp.title ? _w_whelp.title : "");
        _w_screw.setAttribute("data-alt", _w_whelp.alt ? _w_whelp.alt : "");
        _w_screw.setAttribute("data-idx", _w_braid);
        _w_screw.href = _w_sleigh;
        _w_screw.title = this.title;
        _w_screw.setAttribute("data-type", _w_shred.toLowerCase());
        _w_screw.setAttribute("data-filename", _w_cello);
        _w_screw.setAttribute("data-suffix", _w_repose ? "." + _w_repose : ".jpg");
        _w_screw.setAttribute("data-referer", _w_grind);
        this.setAttribute("data-referer", _w_grind);
        let _w_fender = _w_grind ? _w_grind.match(/([\d]+|[^\d]+)/g) : [];
        for (let arrIdx in _w_fender) if (!isNaN(_w_fender[arrIdx])) _w_fender[arrIdx] = _w_intent(_w_fender[arrIdx], 128);
        _w_owl[_w_braid] = _w_fender;
        _w_screw.setAttribute("data-maxRange", "other");
        for (let i in _w_pauper) {
            if (isNaN(i)) continue;
            let _w_usury = _w_pauper[i];
            let _w_patch = _w_pauper[_w_usury];
            this.naturalWidth - _w_patch.width >= 0 && this.naturalHeight - _w_patch.height >= 0 && _w_screw.setAttribute("data-maxRange", _w_usury);
        }
        this.setAttribute("data-src", _w_sleigh);
        _w_screw.setAttribute("data-src", _w_sleigh);
        _w_screw.appendChild(this);
        $(_w_screw).append($("<div />", {
            class: "imageItemResolution",
            text: this.naturalWidth + "x" + this.naturalHeight
        }));
        let _w_outset = false;
        let _w_mason = this.naturalWidth * this.naturalHeight;
        let _w_lurch = window._w_rue["serial_" + _w_whelp.serial];
        if (_w_lurch && _w_lurch > _w_mason) {
            return;
        } else if ($("a[data-serial=" + _w_whelp.serial + "][data-idx!=" + _w_braid + "]").length > 0) {
            let $_w_onset = $("a[data-serial=" + _w_whelp.serial + "][data-idx!=" + _w_braid + "]");
            if ($_w_onset.is(".selected")) _w_outset = true;
            $_w_onset.remove();
        }
        window._w_rue["serial_" + _w_whelp.serial] = _w_mason;
        {
            let $_w_con = $("a[data-idx=" + _w_braid + "]");
            if ($_w_con.length > 0) {
                if ($_w_con.is(".selected")) _w_outset = true;
                if (_w_outset) _w_screw.classList.add("selected");
                $_w_con.replaceWith(_w_screw);
            } else {
                $("#empty").remove();
                $("#ext_main").append(_w_screw);
            }
        }
        if (this.naturalWidth > this.naturalHeight) {
            this.style.width = this.naturalWidth + "px";
        } else {
            this.style.height = this.naturalHeight + "px";
        }
        this.style.maxWidth = this.getBoundingClientRect().width + "px";
        this.style.maxHeight = this.getBoundingClientRect().height + "px";
        _w_screw.style.lineHeight = this.getBoundingClientRect().height - 4 + "px";
        _w_screw.style.width = _w_screw.getBoundingClientRect().width + "px";
        _w_screw.style.height = _w_screw.getBoundingClientRect().height + "px";
        this.style.width = null;
        this.style.height = null;
        $(_w_screw).colorbox({
            rel: "imageItem",
            photo: true,
            maxWidth: "99%",
            maxHeight: function() {
                return localStorage["verticalViewMode"] != "fullView" ? "99%" : "";
            },
            top: function() {
                let $_w_saliva = $.colorbox.element();
                let _w_bile = window.innerHeight - (parseInt($_w_saliva.attr("data-height")) + 32);
                if (_w_bile > 0) {
                    return _w_bile / 2;
                } else {
                    return 0;
                }
            },
            slideshow: true,
            slideshowAuto: false,
            slideshowSpeed: 5e3,
            href: function() {
                let _w_loon = $(this).attr("href");
                let _w_ferret = $(this).children(":first-child").attr("data-src");
                return _w_bale(_w_ferret) ? _w_ferret : _w_loon;
            },
            onOpen: function() {
                let $_w_saliva = $.colorbox.element();
                if ($_w_saliva.hasClass("preview_ignore_configure")) {
                    $("#colorbox").show();
                } else if ("true" == _w_roe()._w_sock()) {
                    $_w_saliva.hasClass("selected") ? $_w_saliva.removeClass("selected") : $_w_saliva.addClass("selected");
                    _w_levee("#ext_main>.imageItem", true, false);
                    $.colorbox.close();
                    $("#colorbox").hide();
                } else {
                    $("#colorbox").show();
                }
                $_w_saliva.removeClass("preview_ignore_configure");
            },
            onCleanup: function() {},
            onComplete: function() {
                $("#cboxTitle").each((function() {
                    $("#cboxTitle").attr("style", "width:" + ($(this).parent().width() - 90) + "px; white-space:nowrap; overflow:hidden;");
                    $("#cboxContent").attr("title", _w_ordeal("_w_knave"));
                }));
                _w_wallow();
            }
        });
        let _w_tack = _w_roe()._w_mania() & 16;
        if (_w_tack) {
            const imgBitmap = await createImageBitmap(this);
            window._w_lore.postMessage({
                id: _w_bait,
                src: _w_sleigh,
                imgBitmap: typeof OffscreenCanvas == "undefined" ? null : imgBitmap
            });
        }
        if (!_w_filter(this) && $("#ext_main>.imageItem:visible").length > _w_roe()._w_fusion()) {
            this.src = _w_buoy;
        }
        _w_horn("#ext_main>.imageItem");
        $("#image_amount").html($(".imageItem").length);
    };
    {
        let _w_heed = {};
        _w_heed[_w_lien] = _w_grind;
        _w_roe()._w_coda(_w_heed, _w_gnome, true);
    }
    let _w_ferry = /^https?:/.test(_w_lien) ? 4 : 0;
    let _w_harrow = new Image;
    _w_harrow.onload = _w_crease;
    _w_harrow.onerror = function() {
        _w_flush--;
        if (!_w_seam.isTimeout() && _w_ferry-- > 0) {
            let _w_ferret = _w_harrow.src;
            let _w_midget = function() {
                setTimeout((function() {
                    _w_flush++;
                    _w_harrow.src = _w_ferret;
                }), 2e3);
            };
            _w_rote.addTask((function(_w_gust, _w_whit) {
                _w_gust();
                function clearReferer(_w_fosse) {
                    let _w_heed = {};
                    _w_heed[_w_fosse] = null;
                    _w_roe()._w_coda(_w_heed, _w_gnome, true);
                }
                $.ajax({
                    method: "get",
                    timeout: _w_viand,
                    headers: {
                        Accept: "*/*; charset=UTF-8",
                        "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0",
                        Pragma: "no-cache",
                        Expires: "0"
                    },
                    url: _w_ferret
                }).done((function(data, status, xhr) {
                    _w_seam && _w_seam.loaded();
                    _w_ferry = -1;
                    if (xhr.status == 200 && data.match && data.match(/(html|script|style|head|body)/i) != null) {
                        clearReferer(_w_ferret);
                    }
                    _w_midget();
                })).fail((function(xhr) {
                    _w_seam && _w_seam.loaded();
                    _w_ferry = -1;
                    if (xhr.status == 404) {
                        delete _w_hub[_w_braid];
                    } else if (xhr.status == 403) {
                        clearReferer(_w_ferret);
                        _w_midget();
                    } else {
                        _w_midget();
                    }
                })).always(_w_whit);
            }));
        }
    };
    _w_harrow.onabort = _w_harrow.onerror;
    if (_w_mask.bypassUrl(_w_lien)) {
        _w_flush++;
        _w_seam = _w_mask.directSetImgSrc(_w_harrow, _w_lien);
    } else {
        _w_flush++;
        _w_seam = _w_mask.setImgSrc(_w_harrow, _w_lien);
    }
}

function _w_ploy(url) {
    let _w_rent = url;
    let _w_acumen = _w_hush[url];
    if (_w_acumen && _w_acumen.title && _w_acumen.title.length > 0) {
        _w_rent = _w_acumen.title;
    }
    return _w_rent;
}

function _w_curfew(_w_bust) {
    for (;_w_lout < _w_bust.length; ) {
        if (_w_flush >= _w_girdle) {
            break;
        } else if ($("a.imageItem").length >= _w_loft - _w_flush) {
            break;
        } else {
            _w_blazon(_w_lout++, false);
        }
    }
}

setInterval((function() {
    _w_curfew(_w_bust);
}), 500);

function _w_brook(_w_ode) {
    for (let idx in _w_ode) {
        if (!_w_bust) continue;
        _w_blazon(idx, true);
    }
}

$((function() {
    document.title = _w_ordeal("_w_gleam");
    $.extend($.colorbox.settings, {
        current: _w_ordeal("_w_violet"),
        previous: _w_ordeal("_w_comic"),
        next: _w_ordeal("_w_herald"),
        close: _w_ordeal("_w_locale"),
        xhrError: _w_ordeal("_w_crest"),
        imgError: _w_ordeal("_w_legend"),
        slideshowStart: _w_ordeal("_w_sod"),
        slideshowStop: _w_ordeal("_w_nuance")
    });
}));

$((function() {
    $(window).bind("scroll resize", (function() {
        _w_levee("#ext_main>.imageItem", false, false);
    }));
}));

$((function() {}));

window.selectParam = {
    timeout: 128,
    lastExeTime: new Date,
    timer: null,
    updateStatics: true,
    delayAgain: false
};

$((function() {
    $("body").on("mousedown", (function dnFun(dnEvent) {
        if (dnEvent.button == 0) {
            let $_w_poncho = $(dnEvent.target);
            if (!$_w_poncho.is("#ext_main") && $_w_poncho.parents("#ext_main").length <= 0) {
                return;
            } else if ($(".modal-dialog").is(":visible") || $("#colorbox").is(":visible")) {
                return;
            }
            dnEvent.preventDefault();
            $(".selectorDiv").remove();
            $(this).off("mousemove");
            $(this).off("mouseup");
            let $_w_clamor = $("<div />", {
                class: "selectorDiv"
            });
            $(this).append($_w_clamor);
            let _w_pucker, mvFun, moveStep = 0;
            $(this).on("mousemove", mvFun = function(mvEvent) {
                let _w_tonic = {};
                _w_tonic.x1 = dnEvent.pageX <= mvEvent.pageX ? dnEvent.pageX : mvEvent.pageX;
                _w_tonic.y1 = dnEvent.pageY <= mvEvent.pageY ? dnEvent.pageY : mvEvent.pageY;
                _w_tonic.x2 = dnEvent.pageX >= mvEvent.pageX ? dnEvent.pageX : mvEvent.pageX;
                _w_tonic.y2 = dnEvent.pageY >= mvEvent.pageY ? dnEvent.pageY : mvEvent.pageY;
                if (++moveStep == 1 || _w_tonic.x2 - _w_tonic.x1 < 4 && _w_tonic.y2 - _w_tonic.y1 < 4) return true;
                _w_croak(selectParam, (function() {
                    $_w_clamor.css("z-index", "1020").css("border", "2px solid #3399ff").css("background-color", "rgba(51, 153, 255, 0.2)").css("position", "absolute").css("left", _w_tonic.x1 + "px").css("top", _w_tonic.y1 + "px").css("width", _w_tonic.x2 - _w_tonic.x1 + "px").css("height", _w_tonic.y2 - _w_tonic.y1 + "px");
                    $(".imageItem").each((function() {
                        let _w_melon = $(this).get(0);
                        let _w_urchin = {
                            x1: _w_melon.offsetLeft,
                            y1: _w_melon.offsetTop,
                            x2: _w_melon.offsetLeft + _w_melon.offsetWidth,
                            y2: _w_melon.offsetTop + _w_melon.offsetHeight
                        };
                        if (_w_urchin.y2 < _w_tonic.y1 || _w_urchin.x2 < _w_tonic.x1 || _w_urchin.y1 > _w_tonic.y2 || _w_urchin.x1 > _w_tonic.x2) {
                            $(this).removeClass("preSelect preUnSelect");
                        } else {
                            $(this).hasClass("selected") ? $(this).addClass("preUnSelect") : $(this).addClass("preSelect");
                        }
                    }));
                }), false);
            }).on("mouseup", _w_pucker = function(upEvent) {
                if (upEvent.button == 0) {
                    $(this).off("mousemove", mvFun);
                    $(this).off("mouseup", _w_pucker);
                    $_w_clamor.remove();
                    $(".imageItem").removeClass("preSelect preUnSelect");
                    let _w_tonic = {};
                    _w_tonic.x1 = dnEvent.pageX <= upEvent.pageX ? dnEvent.pageX : upEvent.pageX;
                    _w_tonic.y1 = dnEvent.pageY <= upEvent.pageY ? dnEvent.pageY : upEvent.pageY;
                    _w_tonic.x2 = dnEvent.pageX >= upEvent.pageX ? dnEvent.pageX : upEvent.pageX;
                    _w_tonic.y2 = dnEvent.pageY >= upEvent.pageY ? dnEvent.pageY : upEvent.pageY;
                    if (moveStep == 1 || _w_tonic.x2 - _w_tonic.x1 < 4 && _w_tonic.y2 - _w_tonic.y1 < 4) return true;
                    $(upEvent.target).one("click", (function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                    }));
                    _w_croak(selectParam, (function() {
                        $(".imageItem").each((function() {
                            let _w_melon = $(this).get(0);
                            let _w_urchin = {
                                x1: _w_melon.offsetLeft,
                                y1: _w_melon.offsetTop,
                                x2: _w_melon.offsetLeft + _w_melon.offsetWidth,
                                y2: _w_melon.offsetTop + _w_melon.offsetHeight
                            };
                            if (_w_urchin.y2 < _w_tonic.y1 || _w_urchin.x2 < _w_tonic.x1 || _w_urchin.y1 > _w_tonic.y2 || _w_urchin.x1 > _w_tonic.x2) {} else {
                                $(this).hasClass("selected") ? $(this).removeClass("selected") : $(this).addClass("selected");
                            }
                        }));
                        _w_levee("#ext_main>.imageItem", true, false);
                    }), false);
                }
            });
        }
    }));
}));

function _w_geyser() {
    $(".imageItem:visible").addClass("selected");
    _w_wallow();
    _w_levee("#ext_main>.imageItem", true, true);
}

function _w_quota() {
    $(".imageItem:visible").removeClass("selected");
    _w_wallow();
    _w_levee("#ext_main>.imageItem", true, true);
}

function _w_pitch() {
    let $_w_agenda = $(".imageItem:visible.selected");
    let $_w_molt = $(".imageItem:visible:not(.selected)");
    $_w_agenda.removeClass("selected");
    $_w_molt.addClass("selected");
    _w_wallow();
    _w_levee("#ext_main>.imageItem", true, true);
}

function _w_tint() {
    if ($("#cboxLoadedContent").length > 0) {
        let _w_drone = $("#cboxLoadedContent img").attr("src");
        $.colorbox.element().remove();
        $.colorbox.next();
        $(".imageItem:visible").length == 0 && $.colorbox.close();
    } else {
        $(".selected:visible").remove();
        _w_wallow();
    }
    _w_levee("#ext_main>.imageItem", true, true);
}

function _w_maize() {
    $(".imageItem:hidden").remove();
    _w_wallow();
    _w_levee("#ext_main>.imageItem", true, true);
}

function _w_trench() {
    if ($(".selected:visible").length > 0) {
        $(".imageItem:not(.selected):visible").remove();
        _w_wallow();
        _w_levee("#ext_main>.imageItem", true, true);
    }
}

function _w_bent() {
    $(".imageItem.selected:visible").remove();
    $(".imageItem:visible").addClass("selected");
    let _w_oak = new Array;
    $(".imageItem.selected:visible").each((function() {
        _w_oak.push({
            name: "",
            url: $(this).attr("href"),
            referer: $(this).attr("data-referer"),
            serial: $(this).attr("data-serial"),
            filename: $(this).attr("data-filename"),
            suffix: $(this).attr("data-suffix")
        });
    }));
    return _w_oak;
}

function _w_lark() {
    let _w_oak = new Array;
    if ($("#cboxLoadedContent").length > 0) {
        let $item = $.colorbox.element();
        _w_stupor($item.attr("data-src"), $item.attr("data-filename"), $item.attr("data-suffix"));
    } else {
        $(".selected:visible").each((function() {
            _w_oak.push({
                name: "",
                url: $(this).attr("href"),
                referer: $(this).attr("data-referer"),
                serial: $(this).attr("data-serial"),
                filename: $(this).attr("data-filename"),
                suffix: $(this).attr("data-suffix")
            });
        }));
    }
    _w_void(_w_oak, _w_filth, _w_bent);
}

function _w_hail() {
    let _w_oak = new Array;
    $(".imageItem:visible").each((function() {
        _w_oak.push({
            name: "",
            url: $(this).attr("href"),
            referer: $(this).attr("data-referer"),
            serial: $(this).attr("data-serial"),
            filename: $(this).attr("data-filename"),
            suffix: $(this).attr("data-suffix")
        });
    }));
    _w_void(_w_oak, _w_filth, _w_bent);
}

function _w_canon() {
    let _w_bump = function() {
        $("#pullywood_production").popover({
            title: "<span class='glyphicon glyphicon-info-sign'></span> " + _w_ordeal("_w_laity"),
            content: _w_ordeal("_w_strip"),
            placement: "auto",
            html: true
        }).popover("show").next().on("click", (function() {
            $(this).popover("destroy");
        })).prev().on("mouseover", (function() {
            $(this).popover("destroy");
        }));
    };
    $.ajax({
        method: "get",
        url: _w_scurvy,
        dataType: "json",
        contentType: "application/json",
        mimeType: "application/json"
    }).done((function(data) {
        if (data && data.version) {
            _w_twinge();
        } else if (data && !data.version) {
            alert(_w_ordeal("_w_canard"));
        } else {
            _w_bump();
        }
    })).fail((function() {
        _w_bump();
    }));
}

function _w_twinge() {
    let _w_oak = $(".imageItem.selected:visible").toArray();
    if (_w_oak.length <= 0) {
        alert(_w_ordeal("_w_heyday"));
        return;
    }
    let $_w_manure = $("<div />", {
        id: "add_favorite_dlg",
        class: "modal fade",
        role: "dialog"
    });
    let $_w_swing = $("<div />", {
        class: "modal-dialog"
    });
    let $_w_crate = $("<div />", {
        class: "modal-content"
    });
    let $_w_ditty = $("<div />", {
        class: "modal-header"
    });
    let $_w_bark = $("<h4 />", {
        class: "modal-title"
    });
    let $_w_cachet = $("<div />", {
        class: "modal-body"
    });
    let $_w_track = $("<div />", {
        class: "modal-footer"
    });
    $_w_ditty.append($_w_bark);
    $_w_crate.append($_w_ditty);
    $_w_crate.append($_w_cachet);
    $_w_crate.append($_w_track);
    $_w_swing.append($_w_crate);
    $_w_manure.append($_w_swing);
    $_w_bark.append($("<span />", {
        class: "glyphicon glyphicon-folder-open"
    })).append(_w_ordeal("_w_salve"));
    let $_w_foray = $("<div />", {
        class: "alert alert-info",
        html: _w_ordeal("_w_spire") + _w_oak.length
    });
    $_w_cachet.append($_w_foray);
    let $_w_corral = $("<input />", {
        type: "checkbox",
        name: "continuousSwitch"
    });
    $_w_track.append($("<span />", {
        class: "continuousSwitchContainer"
    }).append($_w_corral));
    $_w_corral.bootstrapSwitch({
        labelText: _w_ordeal("_w_fringe")
    });
    let $_w_latch = $("<button />", {
        class: "btn btn-primary",
        disabled: false,
        text: _w_ordeal("_w_credit")
    });
    $_w_latch.prepend($("<span />", {
        class: "glyphicon glyphicon-floppy-open"
    }));
    $_w_latch.on("click", (function() {
        $_w_latch.attr("disabled", true);
        let _w_arson = $_w_corral.is(":checked");
        let _w_caveat = _w_oak;
        _w_oak = new Array;
        let _w_scoop = [];
        _w_caveat.forEach((function(taskItem) {
            _w_scoop.push({
                src: $(taskItem).attr("data-src"),
                referer: $(taskItem).attr("data-referer"),
                description: typeof $(taskItem).attr("title") != "undefined" ? $(taskItem).attr("title").replace(/分辨率:\s\d+x\d+\s\/\s类型:\s[a-zA-Z0-9]+(\s\/\s)?/gi, "") : "",
                width: $(taskItem).attr("data-width"),
                height: $(taskItem).attr("data-height"),
                extHash: _w_mien,
                serial: $(taskItem).attr("data-serial")
            });
        }));
        $_w_foray.text(_w_ordeal("_w_fleece"));
        if (!$_w_manure.is(":visible")) {
            return;
        }
        $.ajax({
            method: "post",
            url: _w_sluice,
            data: JSON.stringify(_w_scoop),
            dataType: "json",
            contentType: "application/json",
            mimeType: "application/json"
        }).done((function(result) {
            $_w_foray.text(_w_ordeal("_w_cornet"));
        })).fail((function(a, b, c) {
            console.log("fialed", a, b, c);
            _w_oak = _w_caveat;
            let $_w_loaf = $_w_latch.children().first();
            $_w_latch.text(_w_ordeal("_w_curfew")).prepend($_w_loaf).attr("disabled", _w_arson ? true : false);
            $_w_foray.text(_w_ordeal("_w_blurb"));
        })).always((function() {
            if (_w_arson) {
                let _w_lancet = 500;
                if (_w_oak.length > 0) {
                    console.log(JSON.stringify(_w_oak));
                    $_w_foray.text(_w_ordeal("_w_errand"));
                } else {
                    $(".imageItem.selected:visible").remove();
                    $_w_foray.text(_w_ordeal("_w_succor"));
                }
                let _w_botany = setInterval((function continuousAdd() {
                    if (_w_oak.length == 0) {
                        _w_geyser();
                        _w_oak = $(".imageItem.selected:visible").toArray();
                    }
                    if (_w_oak && _w_oak.length > 0) {
                        clearInterval(_w_botany);
                        $_w_latch.click();
                    }
                }), _w_lancet);
            } else {
                $(this).remove();
            }
        }));
    }));
    $_w_track.append($_w_latch);
    let $_w_lull = $("<button />", {
        class: "btn btn-default",
        "data-dismiss": "modal",
        text: _w_ordeal("_w_quarry")
    });
    $_w_lull.prepend($("<span />", {
        class: "glyphicon glyphicon-remove"
    }));
    $_w_lull.on("click", (function() {}));
    $_w_track.append($_w_lull);
    $_w_manure.modal({
        backdrop: "static",
        keyboard: false
    }).on("hidden.bs.modal", (function() {
        $(this).remove();
    }));
}

function _w_maze() {
    if ($("#cboxLoadedContent").length > 0) {
        $("#colorbox").addClass("colorboxSelect");
        $(".imageItem:not(.selected):visible[href='" + $("#cboxLoadedContent img").attr("src") + "']").addClass("selected");
    }
}

function _w_amble() {
    if ($("#cboxLoadedContent").length > 0) {
        $("#colorbox").removeClass("colorboxSelect");
        $(".imageItem.selected:visible[href='" + $("#cboxLoadedContent img").attr("src") + "']").removeClass("selected");
    }
}

function _w_wallow() {
    if ($("#cboxLoadedContent").length > 0) {
        $("#colorbox").removeClass("colorboxSelect");
        $.colorbox.element().is(".selected:visible") && $("#colorbox").addClass("colorboxSelect");
    }
}

function _w_flange() {
    let _w_fluke = {
        0: 1,
        1: 3,
        3: 2,
        2: 0
    };
    let _w_scrap = _w_roe()._w_mania();
    let _w_turret = _w_fluke[_w_scrap];
    "undefined" == typeof _w_turret && (_w_turret = 3);
    _w_roe()._w_plight(_w_turret);
    _w_levee("#ext_main>.imageItem", true, false);
}

function _w_easel() {
    let _w_turret = _w_roe()._w_mania();
    if (_w_turret & 4) {
        _w_turret &= ~4;
    } else {
        _w_turret |= 4;
    }
    _w_roe()._w_plight(_w_turret);
    _w_horn("#ext_main>.imageItem");
    _w_levee("#ext_main>.imageItem", true, false);
}

function _w_resin() {
    let _w_turret = _w_roe()._w_mania();
    if (_w_turret & 8) {
        _w_turret &= ~8;
    } else {
        _w_turret |= 8;
    }
    _w_roe()._w_plight(_w_turret);
    _w_levee("#ext_main>.imageItem", true, false);
}

function _w_spruce() {
    let _w_turret = _w_roe()._w_mania();
    if (_w_turret & 16) {
        _w_turret &= ~16;
    } else {
        _w_turret |= 16;
        document.querySelectorAll("a.imageItem:not([data-phash])").forEach((item => {
            _w_blazon(item.dataset.idx, true);
        }));
    }
    _w_roe()._w_plight(_w_turret);
    _w_levee("#ext_main>.imageItem", true, false);
}

function _w_pastry() {
    if ($("#colorbox").is(":visible")) {
        if (localStorage["verticalViewMode"] != "fullView") {
            localStorage["verticalViewMode"] = "fullView";
        } else {
            localStorage["verticalViewMode"] = "";
        }
        $.colorbox.element().colorbox({
            open: true
        });
    }
}

function _w_troupe() {
    chrome.tabs.get(_w_rigor, (function(tab) {
        if (tab && _w_grief == tab.url) {
            chrome.tabs.remove(tab.id, (function() {
                window.close();
            }));
        } else {
            window.close();
        }
    }));
}

$((function() {
    let $_w_attic = $("<div>", {
        class: "btn-group btn-group-xs"
    });
    let $_w_hazard = $("<a />", {
        target: "_configure_",
        class: "btn btn-pwd",
        href: "options.html",
        text: _w_ordeal("_w_palate")
    });
    $_w_hazard.prepend($("<span />", {
        class: "glyphicon glyphicon-wrench"
    }));
    let $_w_entre = $("<a />", {
        target: "_configure_",
        class: "btn btn-home",
        href: "options.html?showMsg=about",
        text: _w_ordeal("_w_anvil")
    });
    $_w_entre.prepend($("<span />", {
        class: "glyphicon glyphicon-copyright-mark"
    }));
    let $_w_realm = $("<a />", {
        target: "_imageAssistant_favorite",
        id: "_cxyz_fav_",
        class: "btn btn-primary",
        href: "./favorite.html",
        text: _w_ordeal("_w_armada")
    });
    $_w_realm.prepend($("<span />", {
        class: "glyphicon glyphicon-folder-open"
    }));
    let $_w_hoist = $("<a />", {
        target: "_pullywood_production_",
        class: "btn btn-home",
        href: "http://www.pullywood.com",
        text: _w_ordeal("_w_bulge")
    });
    $_w_hoist.prepend($("<span />", {
        class: "glyphicon glyphicon-home"
    }));
    $_w_attic.append($_w_hazard).append($_w_entre).append($_w_realm).append($_w_hoist);
    $("#pullywood_production").append($_w_attic);
    let _w_scoop = [ {
        name: _w_ordeal("_w_colt"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-refresh",
        fun: function() {
            $("#ext_main .imageItem").remove();
            _w_lout = 0;
            _w_curfew(_w_bust);
        }
    }, {
        name: _w_ordeal("_w_barn"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-align-justify",
        fun: _w_geyser
    }, {
        name: "",
        showText: false,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-collapse-down",
        fun: function() {},
        subMenu: [ {
            name: _w_ordeal("_w_gloom"),
            showText: true,
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-list",
            fun: _w_quota
        }, {
            name: _w_ordeal("_w_cull"),
            showText: true,
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-retweet",
            fun: _w_pitch
        } ]
    }, {
        name: _w_ordeal("_w_ditch"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-trash",
        fun: _w_tint
    }, {
        name: "",
        showText: false,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-collapse-down",
        fun: function() {},
        subMenu: [ {
            name: _w_ordeal("_w_renown"),
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-remove",
            fun: _w_maize
        }, {
            name: _w_ordeal("_w_scoff"),
            showText: true,
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-log-in",
            fun: _w_trench
        } ]
    }, {
        name: _w_ordeal("_w_fender"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-cloud-download",
        fun: _w_lark
    }, {
        name: "",
        showText: false,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-collapse-down",
        fun: function() {},
        subMenu: [ {
            name: _w_ordeal("_w_resin"),
            showText: true,
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-download",
            fun: _w_hail
        } ]
    }, {
        name: _w_ordeal("_w_ramp"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-folder-open",
        fun: _w_sonata
    }, {
        name: _w_ordeal("_w_tempo"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-folder-open",
        fun: _w_canon
    } ];
    let $_w_fiat = $("#select_menu");
    $_w_fiat.addClass("container btn-group btn-group-sm");
    $_w_fiat.attr("role", "group");
    for (let i in _w_scoop) {
        if (isNaN(i)) continue;
        let _w_patch = _w_scoop[i];
        if (_w_patch.subMenu) {
            let $_w_woe = $("<div />", {
                class: "btn-group btn-group-sm",
                role: "group"
            });
            let $_w_bower = $("<button />", {
                type: "button",
                class: "btn btn-default dropdown-toggle",
                "data-toggle": "dropdown",
                "aria-expanded": "false"
            });
            $_w_bower.append($("<span />", {
                class: "caret"
            }));
            $_w_woe.append($_w_bower);
            $_w_fiat.append($_w_woe);
            let $_w_spawn = $("<ul />", {
                class: "dropdown-menu dropdown-menu-right",
                role: "menu"
            });
            for (let j in _w_patch.subMenu) {
                if (isNaN(j)) continue;
                let _w_genome = _w_patch.subMenu[j];
                let $_w_valor = $("<li />");
                let $_w_screw = $("<a />", {
                    href: "#"
                });
                $_w_screw.append($("<span />", {
                    class: _w_genome.iconClass,
                    "aria-hidden": true
                }));
                $_w_screw.append(" " + _w_genome.name);
                $_w_valor.append($_w_screw);
                $_w_spawn.append($_w_valor);
                $_w_screw.on("click", _w_genome.fun);
            }
            $_w_woe.append($_w_spawn);
            $_w_fiat.append($_w_woe);
        } else {
            let $_w_bower = $("<button />", {
                class: "btn btn-default"
            });
            $_w_bower.append($("<span />", {
                class: _w_patch.iconClass,
                "aria-hidden": true
            }));
            _w_patch.showText && $_w_bower.append(" " + _w_patch.name);
            $_w_fiat.append($_w_bower);
            $_w_bower.on("click", _w_patch.fun);
        }
    }
    $(document).on("keydown", (function(e) {
        if (_w_piazza(e)) return;
        if ($("#download_confirm_dlg").length > 0) return true;
        e.which == 88 && e.shiftKey && e.altKey && _w_troupe();
        e.which == 86 && e.ctrlKey == false && e.altKey == false && _w_pastry();
        e.which == 68 && e.ctrlKey && _w_lark() & e.preventDefault();
        e.which == 109 && !e.ctrlKey && _w_amble() & e.preventDefault();
        e.which == 107 && !e.ctrlKey && _w_maze() & e.preventDefault();
        (e.which == 46 || e.which == 110) && _w_tint() & e.preventDefault();
        if ($("#cboxOverlay, .modal-dialog").is(":visible")) return true;
        e.which == 65 && e.ctrlKey && _w_geyser() & e.preventDefault();
        e.which == 90 && e.ctrlKey && _w_quota() & e.preventDefault();
        e.which == 82 && e.ctrlKey && _w_pitch() & e.preventDefault();
        e.which == 83 && e.ctrlKey && _w_trench() & e.preventDefault();
        e.which == 70 && e.ctrlKey && _w_canon() & e.preventDefault();
        e.which == 77 && e.altKey && _w_flange() & e.preventDefault();
        e.which == 83 && e.altKey && _w_easel() & e.preventDefault();
        e.which == 84 && e.altKey && _w_resin() & e.preventDefault();
        e.which == 72 && e.altKey && _w_spruce() & e.preventDefault();
    }));
    let _w_vim = [ {
        name: _w_ordeal("_w_quaver"),
        showText: true,
        className: "imageContextMenuURLE",
        iconClass: "glyphicon glyphicon-picture",
        fun: function() {
            let _w_prig = $(this).attr("data-id");
            $(".imageItem[data-id='" + _w_prig + "']").addClass("preview_ignore_configure").trigger("click");
        }
    }, {
        name: _w_ordeal("_w_hazard"),
        showText: true,
        className: "imageContextMenuURLE",
        iconClass: "glyphicon glyphicon-download",
        fun: function() {
            let _w_drone = $(this).attr("data-src");
            _w_stupor(_w_drone, $(this).attr("data-filename"), $(this).attr("data-suffix"));
        }
    }, {
        name: _w_ordeal("_w_nectar"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "glyphicon glyphicon-qrcode",
        fun: function() {
            $(this).attr("data-src") && _w_hermit($(this).attr("data-src"), true);
        }
    }, {
        name: _w_ordeal("_w_menace"),
        showText: true,
        className: "imageContextMenuURLE",
        iconClass: "glyphicon glyphicon-edit",
        fun: function() {
            $(this).attr("data-src") && _w_roe()._w_dupe($(this).attr("data-src"), $(this).attr("data-referer"), -1);
        }
    }, {
        name: _w_ordeal("_w_tumult"),
        showText: true,
        className: "imageContextMenuURLE",
        iconClass: "glyphicon glyphicon-picture",
        fun: function() {
            $(this).attr("data-src") && _w_roe()._w_simile($(this).attr("data-src"), $(this).attr("data-referer"), -1);
        }
    }, {
        name: _w_ordeal("_w_rung"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "fab fa-google",
        fun: function() {
            $(this).attr("data-src") && _w_creek($(this).attr("data-src"));
        }
    }, {
        name: _w_ordeal("_w_gull"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "fab fa-google",
        fun: function() {
            $(this).attr("data-src") && _w_saga($(this).attr("data-src"));
        }
    }, {
        name: _w_ordeal("_w_hyphen"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "fab fa-google",
        fun: function() {
            $(this).attr("data-src") && _w_hike($(this).attr("data-src"));
        }
    }, {
        name: _w_ordeal("_w_studio"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "fa fa-paw",
        fun: function() {
            $(this).attr("data-src") && _w_stitch($(this).attr("data-src"));
        }
    }, {
        name: _w_ordeal("_w_snob"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "fa fa-paw",
        fun: function() {
            $(this).attr("data-src") && _w_mode($(this).attr("data-src"));
        }
    } ];
    _w_scoop = _w_scoop.slice(0, 0).concat(_w_vim).concat(_w_scoop.slice(0));
    let $_w_budget = $("<ul />", {
        class: "dropdown-menu",
        role: "menu",
        style: "z-index:9999;"
    });
    for (let i in _w_scoop) {
        if (isNaN(i)) continue;
        let _w_patch = _w_scoop[i];
        if (_w_patch.subMenu) {
            let _w_prime = _w_patch.subMenu;
            for (let j in _w_prime) {
                if (isNaN(j)) continue;
                let _w_genome = _w_prime[j];
                let $_w_list = $("<li />", {
                    role: "presentation"
                });
                let $_w_succor = $("<a />", {
                    role: "menuitem",
                    class: _w_genome.className,
                    tabIndex: "-1",
                    href: "#"
                });
                $_w_succor.append($("<span />", {
                    class: _w_genome.iconClass
                }));
                $_w_succor.append(" " + _w_genome.name);
                $_w_list.append($_w_succor);
                $_w_budget.append($_w_list);
                $_w_succor.on("click", _w_genome.fun);
            }
            continue;
        }
        let $_w_list = $("<li />", {
            role: "presentation"
        });
        let $_w_succor = $("<a />", {
            role: "menuitem",
            class: _w_patch.className,
            tabIndex: "-1",
            href: "#"
        });
        $_w_succor.append($("<span />", {
            class: _w_patch.iconClass
        }));
        $_w_succor.append(" " + _w_patch.name);
        $_w_list.append($_w_succor);
        $_w_succor.on("click", _w_patch.fun);
        $_w_budget.append($_w_list);
    }
    $_w_budget.on("mousedown mousemove mouseup click", (function(e) {}));
    $("body").append($_w_budget);
    $_w_budget.dropdown();
    $_w_budget.hide();
    $(document).on("keydown scroll", (function(e) {
        (e.which == 27 || e.type == "scroll") && $_w_budget.fadeOut("fast");
    }));
    $("html").on("click", (function(e) {
        $_w_budget.fadeOut("fast");
    }));
    $_w_budget.on("click", (function(e) {
        $_w_budget.fadeOut("fast");
    }));
    $(document).on("contextmenu", (function(e) {
        $(".context_menu").hide();
        $_w_budget.hide();
        if ($(".modal-dialog").is(":visible") || $("#colorbox").is(":visible")) {
            return true;
        }
        let $_w_spell = $(e.target.parentElement);
        if ($_w_spell && $_w_spell.hasClass("imageItem")) {
            $(".imageContextMenuURLE").attr("data-src", $_w_spell.attr("data-src")).attr("data-filename", $_w_spell.attr("data-filename")).attr("data-suffix", $_w_spell.attr("data-suffix")).attr("data-id", $_w_spell.attr("data-id")).attr("data-referer", $_w_spell.attr("data-referer")).show();
            if ($_w_spell.attr("data-src").indexOf("data:") != 0) {
                $(".imageContextMenuURL").attr("data-src", $_w_spell.attr("data-src")).attr("data-filename", $_w_spell.attr("data-filename")).attr("data-suffix", $_w_spell.attr("data-suffix")).attr("data-id", $_w_spell.attr("data-id")).attr("data-referer", $_w_spell.attr("data-referer")).show();
            } else {
                $(".imageContextMenuURL").attr("data-src", "").hide();
            }
            $(".mainMenuItem").hide();
        } else {
            $(".imageContextMenuURLE").attr("data-src", "").hide();
            $(".imageContextMenuURL").attr("data-src", "").hide();
            $(".mainMenuItem").show();
        }
        $_w_budget.css("left", e.pageX + "px").css("top", e.pageY + "px");
        $_w_budget.fadeIn("fast");
        $_w_budget.offset().left + $_w_budget.outerWidth() >= window.scrollX + window.innerWidth && $_w_budget.css("left", e.pageX - $_w_budget.outerWidth() + "px");
        $_w_budget.offset().top + $_w_budget.outerHeight() >= window.scrollY + window.innerHeight && $_w_budget.css("top", e.pageY - $_w_budget.outerHeight() + "px");
        return false;
    }));
    let $_w_volley = $("#image_summary");
    let $_w_school = $("<span />", {
        id: "image_amount",
        role: "presentation",
        class: "badge",
        text: "0"
    });
    let $_w_sentry = $("<label />", {
        class: "col-md-4 col-sm-4"
    });
    $_w_sentry.append(_w_ordeal("_w_enamel"));
    $_w_sentry.append($_w_school);
    $_w_volley.append($_w_sentry);
    let $_w_safe = $("<span />", {
        id: "visible_amount",
        role: "presentation",
        class: "badge",
        text: "0"
    });
    let $_w_gull = $("<label />", {
        class: "col-md-4 col-sm-4"
    });
    $_w_gull.append(_w_ordeal("_w_soot"));
    $_w_gull.append($_w_safe);
    $_w_volley.append($_w_gull);
    let $_w_tirade = $("<span />", {
        id: "select_amount",
        role: "presentation",
        class: "badge",
        text: "0"
    });
    let $_w_barge = $("<label />", {
        class: "col-md-4 col-sm-4"
    });
    $_w_barge.append(_w_ordeal("_w_sandal"));
    $_w_barge.append($_w_tirade);
    $_w_volley.append($_w_barge);
    let $_w_bridle = $("#menu_switch");
    let $_w_streak = $("<div />", {
        class: "btn-group btn-group-xs"
    });
    $_w_bridle.append($_w_streak);
    let $_w_oath = $("<div />", {
        class: "btn btn-default",
        id: "filter_switch",
        title: _w_ordeal("_w_hoe")
    });
    let $_w_hue = $("<span />", {
        class: "glyphicon glyphicon-filter"
    });
    $_w_oath.append($_w_hue);
    $_w_oath.on("click", (function() {
        let _w_turret = _w_roe()._w_mania();
        if ($(this).hasClass("active")) {
            _w_turret &= ~1;
        } else {
            _w_turret |= 1;
        }
        _w_roe()._w_plight(_w_turret);
        _w_levee("#ext_main>.imageItem", true, false);
    }));
    $_w_streak.append($_w_oath);
    let $_w_jockey = $("<div />", {
        class: "btn btn-default",
        id: "select_menu_switch",
        title: _w_ordeal("_w_fluke")
    });
    let $_w_gene = $("<span />", {
        class: "glyphicon glyphicon-tasks"
    });
    $_w_jockey.append($_w_gene);
    $_w_jockey.on("click", (function() {
        let _w_turret = _w_roe()._w_mania();
        if ($(this).hasClass("active")) {
            _w_turret &= ~2;
        } else {
            _w_turret |= 2;
        }
        _w_roe()._w_plight(_w_turret);
        _w_levee("#ext_main>.imageItem", true, false);
    }));
    $_w_streak.append($_w_jockey);
    let $_w_brunt = $("<div />", {
        class: "btn btn-default",
        id: "sort_switch",
        title: _w_ordeal("_w_wig")
    });
    let $_w_bud = $("<span />", {
        class: "glyphicon glyphicon-sort-by-order-alt"
    });
    $_w_brunt.append($_w_bud);
    $_w_brunt.on("click", _w_easel);
    $_w_streak.append($_w_brunt);
    let $_w_burial = $("<div />", {
        class: "btn btn-default",
        id: "resolutionTle_switch",
        title: _w_ordeal("_w_oak")
    });
    let $_w_vicar = $("<span />", {
        class: "glyphicon glyphicon-text-background"
    });
    $_w_burial.append($_w_vicar);
    $_w_burial.on("click", _w_resin);
    $_w_streak.append($_w_burial);
    let $_w_loam = $("<div />", {
        class: "btn btn-default",
        id: "imageDeduplication_switch",
        title: _w_ordeal("_w_infant")
    });
    let $_w_sandal = $("<span />", {
        class: "glyphicon glyphicon-compressed"
    });
    $_w_loam.append($_w_sandal);
    $_w_loam.on("click", _w_spruce);
    $_w_streak.append($_w_loam);
    let $_w_mold = $("<div />", {
        class: "btn btn-success",
        title: _w_ordeal("_w_spite")
    });
    $_w_mold.on("click", (function() {
        chrome.tabs.get(_w_rigor, (function(tab) {
            if (tab && _w_grief == tab.url) {
                chrome.tabs.update(tab.id, {
                    active: true
                }, (function() {}));
            }
        }));
    }));
    $_w_mold.append($("<span />", {
        class: "fa fa-exchange-alt"
    }));
    let $_w_lode = $("<div />", {
        class: "btn btn-primary",
        title: _w_ordeal("_w_argot")
    });
    $_w_lode.on("click", (function() {
        chrome.tabs.get(_w_rigor, (function(tab) {
            if (tab && _w_grief == tab.url) {
                chrome.tabs.update(tab.id, {
                    active: true
                }, (function(tab) {
                    _w_roe()._w_herd(tab.id, [ {
                        code: "_w_ennui(50, true);",
                        runAt: "document_end",
                        allFrames: true
                    } ]);
                }));
            }
        }));
    }));
    $_w_lode.append($("<span />", {
        class: "glyphicon glyphicon-save-file"
    }));
    let $_w_welter = $("<div />", {
        class: "btn btn-danger",
        title: _w_ordeal("_w_boast")
    });
    $_w_welter.on("click", _w_troupe);
    $_w_welter.append($("<span />", {
        class: "glyphicon glyphicon-remove"
    }));
    $_w_bridle.append($("<div />", {
        class: "btn-group btn-group-xs"
    }).append($_w_mold).append($_w_lode).append($_w_welter));
    let $_w_maple = $("#filter_menu_type");
    $_w_maple.append($("<label />", {
        text: _w_ordeal("_w_diva"),
        class: "col-md-2"
    }));
    let _w_poster = _w_peel.slice(0);
    _w_poster.unshift("all");
    _w_poster.push("other");
    let $_w_hawser = $("<div />", {
        class: "btn-toolbar",
        role: "toolbar"
    });
    for (let i in _w_poster) {
        if (isNaN(i)) continue;
        let $_w_plaque = $("<div />", {
            class: "btn btn-default btn-xs imageType btn-pwd active",
            value: _w_poster[i],
            text: _w_poster[i].toUpperCase()
        });
        let $_w_core = $("<span />", {
            id: "counter_" + _w_poster[i],
            role: "presentation",
            class: "badge",
            text: "0"
        });
        $_w_plaque.append($_w_core);
        if (_w_poster[i] != "all") $_w_plaque.hide();
        $_w_hawser.append($_w_plaque);
    }
    $_w_maple.append($_w_hawser);
    $("#filter_menu_type .imageType").click((function(e) {
        $(this).hasClass("active") ? $(this).removeClass("btn-pwd active") : $(this).addClass("btn-pwd active");
        if ($(this).attr("value") == "all") {
            $(this).hasClass("active") ? $(this).siblings().addClass("btn-pwd active") : $(this).siblings().removeClass("btn-pwd active");
        }
        $("#filter_menu_type .imageType[value!=all]:not(.active)").length > 0 ? $("#filter_menu_type .imageType[value=all]").removeClass("btn-pwd active") : $("#filter_menu_type .imageType[value=all]").addClass("btn-pwd active");
        _w_levee("#ext_main>.imageItem", true, false);
    }));
    let _w_nicest = [ {
        name: _w_ordeal("_w_podium"),
        value: "larger",
        active: true
    }, {
        name: _w_ordeal("_w_fealty"),
        value: "exact"
    } ];
    let _w_collar = [];
    for (let item in _w_pauper) {
        _w_collar[item] = _w_pauper[item];
    }
    _w_collar.unshift("all");
    _w_collar["all"] = {
        width: 0,
        height: 0
    };
    _w_collar.push("other");
    _w_collar["other"] = {
        width: 0,
        height: 0
    };
    let $_w_alkali = $("#filter_menu_size");
    $_w_alkali.append($("<label />", {
        text: _w_ordeal("_w_pastor"),
        class: "col-md-2 form-horizontal"
    }));
    let $_w_colony = $("<div />", {
        class: "col-md-offset-2"
    });
    let $_w_hoard = $("<div />", {
        class: "btn-toolbar",
        role: "toolbar"
    });
    for (let i in _w_nicest) {
        if (isNaN(i)) continue;
        let $_w_hull = $("<div />", {
            class: "btn btn-default btn-xs selectType",
            value: _w_nicest[i].value,
            text: _w_nicest[i].name
        });
        _w_nicest[i].active && $_w_hull.addClass("btn-pwd active");
        $_w_hoard.append($_w_hull);
    }
    let _w_accord = [];
    for (let item in _w_pauper) {
        _w_accord[item] = _w_pauper[item];
    }
    let _w_bench = _w_sloven.width + "x" + _w_sloven.height + _w_ordeal("_w_pinch");
    _w_accord.unshift(_w_bench);
    _w_accord[_w_bench] = {
        width: _w_sloven.width,
        height: _w_sloven.height
    };
    let _w_reed = document.createElement("select");
    _w_reed.setAttribute("id", "funnelOptionSelect");
    for (let i in _w_accord) {
        if (isNaN(i)) continue;
        let _w_craft = document.createElement("option");
        _w_craft.value = _w_accord[i];
        _w_craft.text = _w_accord[i];
        _w_reed.appendChild(_w_craft);
        i == 0 && (_w_craft.selected = true);
    }
    let $_w_dynamo = $("<span />", {
        class: "ext_page_input"
    });
    $_w_dynamo.append($("<b />", {
        text: _w_ordeal("_w_hunch")
    }));
    $_w_dynamo.append(_w_reed);
    $_w_hoard.append($_w_dynamo);
    $(_w_reed).on("change", (function() {
        let _w_trophy = _w_accord[_w_reed.selectedOptions[0].value];
        _w_sloven.width = _w_trophy.width;
        _w_sloven.height = _w_trophy.height;
        let _w_tangle = [];
        $("#ext_main .imageItem").each((function() {
            if ($(this).attr("data-width") - _w_trophy.width < 0 || $(this).attr("data-height") - _w_trophy.height < 0) {
                $(this).remove();
            }
        }));
        $(this).blur();
        _w_levee("#ext_main>.imageItem", true, false);
    }));
    let _w_regime = document.createElement("select");
    _w_regime.setAttribute("id", "diffThresholdOptionSelect");
    Array(7).fill().forEach(((_, idx) => {
        let _w_panic = document.createElement("option");
        _w_panic.value = idx;
        _w_panic.text = idx == 4 ? `${idx} ☻` : idx;
        _w_regime.appendChild(_w_panic);
        if (idx == window._w_sack) {
            _w_regime.selected = true;
        }
    }));
    let $_w_pygmy = $("<span />", {
        class: "ext_page_input"
    });
    $_w_pygmy.append($("<b />", {
        text: _w_ordeal("_w_plaza")
    }));
    $_w_pygmy.append(_w_regime);
    $_w_hoard.append($_w_pygmy);
    _w_regime.value = window._w_sack;
    $(_w_regime).on("change", (function() {
        window._w_sack = parseInt(_w_regime.selectedOptions[0].value);
        document.querySelectorAll("a.imageItem[data-phash]").forEach((item => {
            _w_lug({
                data: {
                    id: item.dataset.id,
                    hash: item.dataset.phash
                }
            });
        }));
        _w_levee("#ext_main>.imageItem", true, false);
    }));
    $_w_colony.append($_w_hoard);
    $_w_alkali.append($_w_colony);
    let $_w_medium = $("<div />", {
        class: "col-md-offset-2"
    });
    let $_w_sling = $("<div />", {
        class: "btn-toolbar",
        role: "toolbar"
    });
    for (let i in _w_collar) {
        if (isNaN(i)) continue;
        let $_w_slag = $("<div />", {
            class: "btn btn-default btn-xs selectOption btn-pwd active",
            value: _w_collar[i],
            text: _w_collar[i].toUpperCase()
        });
        if (_w_collar[i] != "all") $_w_slag.hide();
        $_w_sling.append($_w_slag);
    }
    $_w_medium.append($_w_sling);
    $_w_alkali.append($_w_medium);
    $("#filter_menu_size .selectType").click((function() {
        $(this).addClass("btn-pwd active").siblings().removeClass("btn-pwd active");
        $("#filter_menu_size .selectOption").addClass("btn-pwd active");
        _w_levee("#ext_main>.imageItem", true, false);
    }));
    $("#filter_menu_size .selectOption").click((function() {
        if ($("#filter_menu_size .selectType[value=larger]").hasClass("active")) {
            if ($(this).attr("value") == "all") {
                $(this).addClass("btn-pwd active").siblings().addClass("btn-pwd active");
            } else {
                $(this).addClass("btn-pwd active").siblings().removeClass("btn-pwd active");
            }
        } else if ($("#filter_menu_size .selectType[value=exact]").hasClass("active")) {
            $(this).hasClass("active") ? $(this).removeClass("btn-pwd active") : $(this).addClass("btn-pwd active");
            if ($(this).attr("value") == "all") {
                $(this).hasClass("active") ? $(this).siblings().addClass("btn-pwd active") : $(this).siblings().removeClass("btn-pwd active");
            } else {
                $("#filter_menu_size .selectOption[value!=all]:not(.active)").length > 0 ? $("#filter_menu_size .selectOption[value=all]").removeClass("btn-pwd active") : $("#filter_menu_size .selectOption[value=all]").addClass("btn-pwd active");
            }
        }
        _w_levee("#ext_main>.imageItem", true, false);
    }));
    let $_w_marvel = $("#filter_menu_regexp");
    $_w_marvel.append($("<label />", {
        text: _w_ordeal("_w_pulpit"),
        class: "col-md-2"
    }));
    let $_w_pluck = $("<div />", {
        class: "col-md-offset-2 btn-toolbar",
        role: "toolbar"
    });
    let $_w_gravel = $("<input />", {
        id: "urlRegexpFilter",
        class: "ext_page_input",
        size: 64,
        placeHolder: "Input Regexp Expression to part/full match URL address."
    });
    $_w_pluck.append($_w_gravel);
    $_w_marvel.append($_w_pluck);
    $_w_gravel.on("change input", (function() {
        _w_levee("#ext_main>.imageItem", true, false);
    })).on("keydown", (function(e) {
        if (e.which == 13 || e.which == 27) {
            $(this).blur();
        }
    }));
    _w_levee("#ext_main>.imageItem", true, true);
    $.getJSON(_w_scurvy, (function(data) {
        let $_w_lever = $("#_cxyz_fav_");
        if (data.shortName) {
            let _w_issue = data.icon;
            let $_w_rifle = $("<div />", {
                id: "popup_user_info"
            });
            let $_w_cravat = $("<span />", {
                text: " [ " + data.shortName + " ] "
            });
            $_w_rifle.append($_w_cravat);
            $_w_lever.attr("href", _w_scurvy);
            $_w_lever.append($_w_rifle);
        } else {}
    }));
}));

function _w_gentry() {
    let _w_quest = new Date;
    let _w_cello = "".concat(_w_quest.getFullYear()).concat(_w_quest.getDate()).concat(_w_quest.getMonth() + 1).concat(_w_quest.getHours()).concat(_w_quest.getMinutes()).concat(_w_quest.getSeconds()).concat(".js");
    let _w_slant = "let _w_lout = ".concat(_w_lout).concat(";\nlet _w_girdle = 0;\n").concat("let entityData = ").concat(JSON.stringify(Object.entries(_w_bust).filter((function(item) {
        if (isNaN(item[0])) {
            return item;
        }
    })))).concat(";\n");
    _w_nuance(_w_cello, _w_slant);
}

function _w_pony(_w_digit) {
    let _w_brood = [];
    _w_digit.forEach((function(item) {
        if (typeof item[0] != "number") {
            _w_brood.push(item[0]);
            _w_brood[item[0]] = item[1];
        }
    }));
    _w_bust = _w_brood;
}

function _w_chant(_w_temper) {
    if (!_w_hub) return;
    let _w_fault = Object.keys(_w_hub);
    let _w_feud = null;
    _w_feud = setInterval((function() {
        if (_w_flush >= _w_girdle || $("a.imageItem").length >= _w_loft - _w_flush) {
            return;
        } else {
            if (_w_fault.length <= 0) {
                clearInterval(_w_feud);
                return;
            }
            let _w_psalm = _w_fault.shift();
            if (_w_trawl(_w_temper) && _w_temper(_w_bust[_w_psalm])) {
                delete _w_hub[_w_psalm];
                return;
            }
            _w_blazon(_w_psalm, false);
        }
    }), 50);
}

