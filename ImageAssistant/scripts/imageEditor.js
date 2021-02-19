/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

window._w_pawn = null;

window._w_levity = "";

window._w_abuse = null;

window._w_sway = null;

window._w_dummy = null;

window._w_clown = [];

window._w_gnome = null;

window._w_chunk = null;

window._w_valve = null;

window._w_mallet = null;

window._w_bulge = null;

chrome.tabs.getCurrent((function(tab) {
    window._w_gnome = tab.id;
    $(initEditor);
}));

window._w_facade = {
    timeout: 512,
    lastExeTime: new Date,
    timer: null,
    updateStatics: false,
    delayAgain: true
};

window._w_idyll = {
    timeout: 2048,
    lastExeTime: new Date,
    timer: null,
    updateStatics: false,
    delayAgain: true
};

function _w_staple(_w_planet, _w_mogul) {
    let _w_cello = "";
    if (!_w_planet.startsWith("data:image")) {
        let _w_heed = {};
        _w_heed[_w_planet] = _w_mogul;
        _w_roe()._w_coda(_w_heed, _w_gnome, true);
        _w_cello = _w_planet.substring(_w_planet.lastIndexOf("/") + 1);
    } else {
        _w_cello = "ia_" + _w_jest(16) + ".png";
    }
    _w_prune(_w_planet, _w_cello, false, false);
}

function _w_smirch(_w_planet, _w_mogul) {
    if (!_w_planet.startsWith("data:image")) {
        let _w_heed = {};
        _w_heed[_w_planet] = _w_mogul;
        _w_roe()._w_coda(_w_heed, _w_gnome, true);
        $("#watermarkImageUrl").prop("value", _w_planet).attr("data-referer", _w_mogul);
    }
    chrome.tabs.update(_w_gnome, {
        active: true
    }, (function(tab) {
        chrome.windows.update(tab.windowId, {
            focused: true,
            drawAttention: false
        }, (function(window) {}));
    }));
    _w_caper(_w_planet, false);
}

function _w_prune(_w_planet, _w_cello, _w_hawk, _w_closet) {
    if (!_w_pawn) _w_pawn = new Image;
    if (_w_hawk) {
        _w_mutton(_w_pawn, _w_cello, _w_closet);
    } else {
        _w_pawn.onload = function() {
            if (!_w_hawk) {
                $("#scaleRate").prop("value", 1);
                $("#scWidth").prop("value", _w_pawn.width);
                $("#scWidth").attr("max", _w_pawn.width);
                $("#scHeight").prop("value", _w_pawn.height);
                $("#scHeight").attr("max", _w_pawn.height);
                window._w_levity = _w_cello;
            }
            _w_mutton(this, _w_cello, _w_closet);
        };
        _w_pawn.src = _w_planet;
    }
}

function _w_caper(_w_phial, _w_hawk) {
    if (!_w_mallet) _w_mallet = new Image;
    if (_w_hawk) {
        _w_frolic();
    } else {
        _w_mallet.onload = function() {
            if (!_w_hawk) {
                $("#wmImageCutUp").prop("value", null);
                $("#wmImageCutRight").prop("value", null);
                $("#wmImageCutDown").prop("value", null);
                $("#wmImageCutLeft").prop("value", null);
                $("#watermarkScaleRate").prop("value", 1);
                $("#wmScWidth").attr("max", _w_mallet.width).prop("value", _w_mallet.width);
                $("#wmScHeight").attr("max", _w_mallet.height).prop("value", _w_mallet.height);
                $("#brToAlpha").prop("checked", false);
                $("#brToAlphaReverse").prop("checked", false).prop("disabled", true);
                $("#pixelAlphaRateRange").prop("value", 1).prop("disabled", true);
                if (_w_phial == window._w_chunk.watermarkImageUrl) {
                    $("#wmImageCutUp").prop("value", window._w_chunk.imageCutUp);
                    $("#wmImageCutRight").prop("value", window._w_chunk.imageCutRight);
                    $("#wmImageCutDown").prop("value", window._w_chunk.imageCutDown);
                    $("#wmImageCutLeft").prop("value", window._w_chunk.imageCutLeft);
                    $("#watermarkScaleRate").prop("value", window._w_chunk.watermarkImageWidth / _w_mallet.watermarkImageHeight);
                    $("#wmScWidth").prop("value", window._w_chunk.watermarkImageWidth);
                    $("#wmScHeight").prop("value", window._w_chunk.watermarkImageHeight);
                    $("#brToAlpha").prop("checked", window._w_chunk.brToAlpha);
                    $("#brToAlphaReverse").prop("checked", window._w_chunk.brToAlphaReverse).prop("disabled", window._w_chunk.brToAlpha ? false : true);
                    $("#pixelAlphaRateRange").prop("value", window._w_chunk.pixelAlphaRateRange).prop("disabled", window._w_chunk.brToAlpha ? false : true);
                }
            }
            _w_frolic();
        };
        _w_mallet.src = _w_phial;
    }
}

function _w_gusto() {
    let _w_parley = $("#qrCodeFgColor").prop("value");
    let _w_crater = $("#qrCodeBgColor").prop("value");
    let _w_medal = _w_fillet(_w_crater);
    let _w_husk = parseInt($("#qrCodeAlpha").prop("value")) / 100;
    _w_crater = "RGBA(" + _w_medal.r + ", " + _w_medal.g + ", " + _w_medal.b + ", " + _w_husk + ")";
    let _w_fold = $("#qrCodeSize").prop("value");
    let _w_squash = $("#qrCodeText").prop("value");
    window._w_bulge = _w_defile(_w_squash, _w_fold, _w_parley, _w_crater);
    setTimeout(_w_frolic, 256);
}

function _w_miser() {
    if (!window._w_chunk) window._w_chunk = {};
    let _w_novice = window._w_chunk;
    _w_novice.textWatermark = $(".typeMenuItem.textWatermark").is(".active");
    _w_novice.imageWatermark = $(".typeMenuItem.imageWatermark").is(".active");
    _w_novice.qrCodeWatermark = $(".typeMenuItem.qrCodeWatermark").is(".active");
    _w_novice.font = $("select#fontSelecter option:selected").prop("value");
    _w_novice.fontSize = parseInt($("#fontSize").prop("value"));
    _w_novice.fontColor = $("#fontColor").prop("value");
    _w_novice.fontAlpha = parseInt($("#fontAlpha").prop("value"));
    _w_novice.borderFont = $("#borderFont:checkbox").is(":checked");
    _w_novice.text = $("#watermarkText").prop("value");
    _w_novice.imageAlpha = parseInt($("#imageAlpha").prop("value"));
    if (_w_mallet && _w_bale(_w_mallet.src)) {
        _w_novice.watermarkImageUrl = $("#watermarkImageUrl").prop("value");
        _w_novice.watermarkImageReferer = $("#watermarkImageReferer").attr("data-referer");
        _w_novice.imageCutUp = $("#wmImageCutUp").prop("value");
        _w_novice.imageCutRight = $("#wmImageCutRight").prop("value");
        _w_novice.imageCutDown = $("#wmImageCutDown").prop("value");
        _w_novice.imageCutLeft = $("#wmImageCutLeft").prop("value");
        _w_novice.watermarkImageWidth = $("#wmScWidth").prop("value");
        _w_novice.watermarkImageHeight = $("#wmScHeight").prop("value");
        _w_novice.brToAlpha = $("#brToAlpha").prop("checked");
        _w_novice.brToAlphaReverse = $("#brToAlphaReverse").prop("checked");
        _w_novice.pixelAlphaRateRange = $("#pixelAlphaRateRange").prop("value");
    }
    _w_novice.qrCodeFgolor = $("#qrCodeFgColor").prop("value");
    _w_novice.qrCodeBgolor = $("#qrCodeBgColor").prop("value");
    _w_novice.qrCodeSize = $("#qrCodeSize").prop("value");
    _w_novice.qrCodeAlpha = parseInt($("#qrCodeAlpha").prop("value"));
    _w_novice.qrCodeBorder = parseInt($("#qrCodeBorder").prop("value"));
    _w_novice.qrCodeText = $("#qrCodeText").prop("value");
    _w_novice.tileWatermark = $(".presentationMenuItem.tileWatermark").is(".active");
    _w_novice.locationWatermark = $(".presentationMenuItem.locationWatermark").is(".active");
    _w_novice.offsetX = parseInt($("#offsetX").prop("value"));
    _w_novice.offsetY = parseInt($("#offsetY").prop("value"));
    _w_novice.marginX = parseInt($("#marginX").prop("value"));
    _w_novice.marginY = parseInt($("#marginY").prop("value"));
    _w_novice.rotate = parseInt($("#rotation").prop("value"));
    _w_novice.alignX = parseInt($("#alignX").prop("value"));
    _w_novice.alignY = parseInt($("#alignY").prop("value"));
    _w_novice.middleAlignX = $("#middleAlignX").is(":checked");
    _w_novice.middleAlignY = $("#middleAlignY").is(":checked");
    localStorage["watermarkConfigure"] = JSON.stringify(_w_novice);
    window._w_chunk = _w_novice;
}

function _w_ledger() {
    let _w_novice = localStorage["watermarkConfigure"];
    if (_w_novice && _w_novice.length > 0) {
        _w_novice = JSON.parse(_w_novice);
        $("select#fontSelecter option[value='" + _w_novice.font + "']").attr("selected", true);
        $("#fontSizeRange,#fontSize").prop("value", _w_novice.fontSize);
        $("#fontColor").prop("value", _w_novice.fontColor);
        $("#fontAlphaRange,#fontAlpha").prop("value", _w_novice.fontAlpha);
        $("#borderFont:checkbox").prop("checked", _w_novice.borderFont);
        $("#middleAlignX").prop("checked", _w_novice.middleAlignX);
        $("#middleAlignY").prop("checked", _w_novice.middleAlignY);
        $("#watermarkText").prop("value", _w_novice.text);
        $("#imageAlphaRange,#imageAlpha").prop("value", _w_novice.imageAlpha);
        if (_w_novice.watermarkImageUrl && _w_bale(_w_novice.watermarkImageUrl)) {
            $("#watermarkImageUrl").prop("value", _w_novice.watermarkImageUrl);
            $("#watermarkImageReferer").attr("data-referer", _w_novice.watermarkImageReferer);
            $("#wmImageCutUp").prop("value", _w_novice.imageCutUp);
            $("#wmImageCutRight").prop("value", _w_novice.imageCutRight);
            $("#wmImageCutDown").prop("value", _w_novice.imageCutDown);
            $("#wmImageCutLeft").prop("value", _w_novice.imageCutLeft);
            $("#wmScWidth").prop("value", _w_novice.watermarkImageWidth);
            $("#wmScHeight").prop("value", _w_novice.watermarkImageHeight);
            $("#brToAlpha").prop("checked", _w_novice.brToAlpha);
            $("#brToAlphaReverse").prop("checked", _w_novice.brToAlphaReverse).prop("disabled", _w_novice.brToAlpha ? false : true);
            $("#pixelAlphaRateRange").prop("value", _w_novice.pixelAlphaRateRange).prop("disabled", _w_novice.brToAlpha ? false : true);
        }
        $("#qrCodeFgColor").prop("value", _w_novice.qrCodeFgolor);
        $("#qrCodeBgColor").prop("value", _w_novice.qrCodeBgolor);
        $("#qrCodeSizeRange,#qrCodeSize").prop("value", _w_novice.qrCodeSize);
        $("#qrCodeAlphaRange,#qrCodeAlpha").prop("value", _w_novice.qrCodeAlpha);
        $("#qrCodeBorderRange,#qrCodeBorder").prop("value", _w_novice.qrCodeBorder);
        $("#qrCodeText").prop("value", _w_novice.qrCodeText);
        $("#offsetXRange,#offsetX").prop("value", _w_novice.offsetX);
        $("#offsetYRange,#offsetY").prop("value", _w_novice.offsetY);
        $("#marginXRange,#marginX").prop("value", _w_novice.marginX);
        $("#marginYRange,#marginY").prop("value", _w_novice.marginY);
        $("#rotationRange,#rotation").prop("value", _w_novice.rotate);
        $("#alignXRange,#alignX").prop("value", _w_novice.alignX);
        $("#alignYRange,#alignY").prop("value", _w_novice.alignY);
        if (_w_novice.watermarkImageUrl && _w_novice.watermarkImageUrl.length > 0) {
            if (!_w_novice.watermarkImageUrl.startsWith("data:image")) {
                let _w_heed = {};
                _w_heed[_w_novice.watermarkImageUrl] = _w_novice.watermarkImageReferer;
                _w_roe()._w_coda(_w_heed, _w_gnome, true);
            }
            _w_caper(_w_novice.watermarkImageUrl, false);
        }
        if (_w_novice.textWatermark) {
            $(".typeMenuItem.textWatermark").trigger("click");
        } else if (_w_novice.imageWatermark) {
            $(".typeMenuItem.imageWatermark").trigger("click");
        } else if (_w_novice.qrCodeWatermark) {
            $(".typeMenuItem.qrCodeWatermark").trigger("click");
        }
        if (_w_novice.tileWatermark) {
            $(".presentationMenuItem.tileWatermark").trigger("click");
        } else if (_w_novice.locationWatermark) {
            $(".presentationMenuItem.locationWatermark").trigger("click");
        }
        window._w_chunk = _w_novice;
    } else {
        _w_draft();
    }
}

function _w_draft() {
    let _w_novice = {
        textWatermark: true,
        imageWatermark: false,
        qrCodeWatermark: false,
        font: "微软雅黑",
        fontSize: 32,
        fontColor: "#000000",
        fontAlpha: 50,
        borderFont: false,
        text: _w_ordeal("_w_cereal"),
        imageAlpha: 50,
        watermarkImageUrl: "http://www.pullywood.com/ImageAssistant/images/logo.png",
        watermarkImageReferer: "http://www.pullywood.com/",
        imageCutUp: null,
        imageCutRight: null,
        imageCutDown: null,
        imageCutLeft: null,
        watermarkImageWidth: 128,
        watermarkImageHeight: 128,
        brToAlpha: true,
        brToAlphaReverse: false,
        pixelAlphaRateRange: 1,
        qrCodeFgolor: "#008000",
        qrCodeBgolor: "#ffffff",
        qrCodeSize: 128,
        qrCodeAlpha: 32,
        qrCodeBorder: 10,
        qrCodeText: "https://www.pullywood.com/ImageAssistant/",
        tileWatermark: true,
        locationWatermark: false,
        offsetX: 0,
        offsetY: 0,
        marginX: 32,
        marginY: 32,
        rotate: -30,
        alignX: -20,
        alignY: -20,
        middleAlignX: false,
        middleAlignY: false
    };
    localStorage["watermarkConfigure"] = JSON.stringify(_w_novice);
    _w_ledger();
}

function _w_frolic() {
    if (!_w_pawn) return;
    _w_croak(window._w_facade, (function() {
        _w_prune(_w_pawn.src, _w_levity, true, false);
    }), false);
    _w_miser();
}

function _w_canker() {
    if (!_w_mallet || !_w_pawn) return;
    _w_croak(window._w_facade, (function() {
        _w_caper(_w_pawn.src, true);
    }), false);
    _w_miser();
}

chrome.runtime.onMessage.addListener((function(message, sender, callback) {
    message && message.type == "_w_dupe" && _w_staple(message._w_jerk, message._w_plumb);
    message && message.type == "_w_bane" && _w_smirch(message._w_jerk, message._w_plumb);
}));

function initEditor() {
    $("#header_link_container").append($("<a />", {
        class: "navbar-brand",
        text: _w_ordeal("_w_grind")
    }).prepend($("<img />", {
        src: "./images/icon128.png",
        id: "brand_text"
    })));
    $("#navbar").append($("<ul />", {
        class: "nav navbar-nav navbar-right"
    }).append($("<li />").append($("<a />", {
        target: "_pullywood_",
        href: "http://www.pullywood.com/",
        text: _w_ordeal("_w_spin")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-home"
    })))).append($("<li />").append($("<a />", {
        id: "_cxyz_fav_",
        target: "_imageAssistant_favorite",
        href: "./favorite.html",
        text: _w_ordeal("_w_armada")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-folder-open"
    })))));
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
    $("#imageLoader,#multipleImageInput").attr("accept", "image/" + "*");
    document.onpaste = function(event) {
        let _w_comity = event.clipboardData.items[0].getAsFile();
        if (!_w_comity.type || !_w_comity.type.startsWith("image")) return;
        let _w_abuse = new FileReader;
        _w_abuse.onload = function(event) {
            _w_prune(event.target.result, _w_gusher(16), false, false);
        };
        _w_abuse.readAsDataURL(_w_comity);
    };
    chrome.fontSettings && chrome.fontSettings.getFontList((function populateFontList(fontArr) {
        fontArr.sort().reverse();
        for (let key in fontArr) {
            let _w_solace = fontArr[key].displayName;
            _w_solace = _w_solace.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            if (_w_solace.match(/[_\-\s]Italic$/) || _w_solace.match(/[_\-\s](Demi)?[Bb]old$/) || _w_solace.match(/[_\-\s]Medium$/) || _w_solace.match(/[_\-\s](Ultra)?[Ll]ight$/) || _w_solace.match(/[_\-\s]Condensed$/)) _w_clown.push(_w_solace); else {
                _w_clown.push(_w_solace);
            }
        }
        let $_w_rave = $("#fontSelecter");
        for (let i = 0; i < _w_clown.length; ++i) {
            let _w_solace = _w_clown[i];
            $_w_rave.append($("<option />", {
                value: _w_solace,
                text: _w_solace,
                style: "font-family:" + _w_solace + ";",
                selected: window._w_chunk && window._w_chunk.font && window._w_chunk.font == _w_solace
            }));
        }
    }));
    $(window).on("resize", _w_frolic);
    $("#imageLoader").on("change", (function(funEvent) {
        let _w_vagary = $(this).get(0).files;
        if (_w_vagary.length == 0) return;
        let _w_buckle = _w_vagary[0];
        let $_w_cast = $(this);
        if (!_w_abuse) _w_abuse = new FileReader;
        _w_abuse.onload = function(event) {
            _w_prune(event.target.result, _w_buckle.name, false, false);
        };
        _w_abuse.readAsDataURL(_w_buckle);
    }));
    $("#scaleRate,#scWidth,#scHeight").on("change", (function() {
        let _w_apex = parseFloat($("#scaleRate").prop("value"));
        let _w_votary = parseInt($("#scWidth").prop("value"));
        let _w_furrow = parseInt($("#scHeight").prop("value"));
        let _w_kin = parseInt($("#scWidth").prop("max"));
        let _w_pun = parseInt($("#scHeight").prop("max"));
        if ($(this).is("#scaleRate")) {
            _w_votary = Math.round(_w_kin * _w_apex);
            _w_furrow = Math.round(_w_pun * _w_apex);
        } else if ($(this).is("#scWidth")) {
            _w_apex = _w_votary / _w_kin;
            _w_furrow = Math.round(_w_pun * _w_apex);
        } else if ($(this).is("#scHeight")) {
            _w_apex = _w_furrow / _w_pun;
            _w_votary = Math.round(_w_kin * _w_apex);
        } else {
            return;
        }
        $("#scaleRate").prop("value", _w_apex);
        $("#scWidth").prop("value", _w_votary);
        $("#scHeight").prop("value", _w_furrow);
        _w_frolic();
    }));
    $(".typeMenuItem").on("click", (function() {
        $(".typeMenuItem").removeClass("active");
        $(this).addClass("active");
        $(".typeMenuTab").hide();
        if ($(this).is(".textWatermark")) {
            $(".typeMenuTab.textWatermark").show();
            _w_frolic();
        } else if ($(this).is(".imageWatermark")) {
            $(".typeMenuTab.imageWatermark").show();
            _w_canker();
        } else if ($(this).is(".qrCodeWatermark")) {
            $(".typeMenuTab.qrCodeWatermark").show();
            _w_gusto();
        }
    }));
    $("#fontSelecter").on("change", (function() {
        _w_frolic();
    }));
    $("#fontSizeRange,#fontSize").on("change", (function() {
        if ($(this).is("#fontSizeRange")) {
            $("#fontSize").prop("value", $(this).prop("value"));
        } else if ($(this).is("#fontSize")) {
            $("#fontSizeRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_frolic();
    }));
    $("#fontColor").on("input", (function() {
        _w_frolic();
    }));
    $("#fontAlphaRange,#fontAlpha").on("change", (function() {
        if ($(this).is("#fontAlphaRange")) {
            $("#fontAlpha").prop("value", $(this).prop("value"));
        } else if ($(this).is("#fontAlpha")) {
            $("#fontAlphaRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_frolic();
    }));
    $("#borderFont").on("change", (function() {
        _w_frolic();
    }));
    $("#watermarkText").on("change", (function() {
        _w_frolic();
    }));
    $("#watermarkImage").on("change", (function(funEvent) {
        let _w_vagary = $(this).get(0).files;
        if (_w_vagary.length == 0) return;
        let _w_buckle = _w_vagary[0];
        let $_w_cast = $(this);
        if (!_w_valve) _w_valve = new FileReader;
        _w_valve.onload = function(event) {
            _w_caper(event.target.result, false);
        };
        _w_valve.readAsDataURL(_w_buckle);
    }));
    $("#wmImageCutUp,#wmImageCutRight,#wmImageCutDown,#wmImageCutLeft").on("change", (function() {
        if (_w_mallet == null) return;
        let _w_prank = parseInt($("#wmImageCutUp").prop("value"));
        _w_prank = _w_prank ? _w_prank : 0;
        let _w_halo = parseInt($("#wmImageCutRight").prop("value"));
        _w_halo = _w_halo ? _w_halo : 0;
        let _w_layman = parseInt($("#wmImageCutDown").prop("value"));
        _w_layman = _w_layman ? _w_layman : 0;
        let _w_inroad = parseInt($("#wmImageCutLeft").prop("value"));
        _w_inroad = _w_inroad ? _w_inroad : 0;
        let _w_kin = _w_mallet.width - _w_inroad - _w_halo;
        let _w_pun = _w_mallet.height - _w_prank - _w_layman;
        $("#wmScWidth").prop("max", _w_kin);
        $("#wmScHeight").prop("max", _w_pun);
        $("#watermarkScaleRate").trigger("change");
        _w_frolic();
    }));
    $("#watermarkScaleRate,#wmScWidth,#wmScHeight").on("change", (function() {
        if (_w_mallet == null) return;
        let _w_spool = parseFloat($("#watermarkScaleRate").prop("value"));
        let _w_miff = parseInt($("#wmScWidth").prop("value"));
        let _w_cocoon = parseInt($("#wmScHeight").prop("value"));
        let _w_kin = parseInt($("#wmScWidth").prop("max"));
        let _w_pun = parseInt($("#wmScHeight").prop("max"));
        if ($(this).is("#watermarkScaleRate")) {
            _w_miff = Math.round(_w_kin * _w_spool);
            _w_cocoon = Math.round(_w_pun * _w_spool);
        } else if ($(this).is("#wmScWidth")) {
            _w_spool = _w_miff / _w_kin;
            _w_cocoon = Math.round(_w_pun * _w_spool);
        } else if ($(this).is("#wmScHeight")) {
            _w_spool = _w_cocoon / _w_pun;
            _w_miff = Math.round(_w_kin * _w_spool);
        } else {
            return;
        }
        $("#watermarkScaleRate").prop("value", _w_spool);
        $("#wmScWidth").prop("value", _w_miff);
        $("#wmScHeight").prop("value", _w_cocoon);
        _w_canker();
    }));
    $("#brToAlpha,#brToAlphaReverse").on("change", (function() {
        if ($("#brToAlpha").is(":checked")) {
            $("#brToAlphaReverse,#pixelAlphaRateRange").attr("disabled", false);
        } else {
            $("#brToAlphaReverse,#pixelAlphaRateRange").attr("disabled", true);
        }
        _w_frolic();
    }));
    $("#pixelAlphaRateRange").on("change", (function() {
        _w_frolic();
    }));
    $("#imageAlphaRange,#imageAlpha").on("change", (function() {
        if ($(this).is("#imageAlphaRange")) {
            $("#imageAlpha").prop("value", $(this).prop("value"));
        } else if ($(this).is("#imageAlpha")) {
            $("#imageAlphaRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_canker();
    }));
    $("#qrCodeFgColor").on("input", (function() {
        _w_gusto();
    }));
    $("#qrCodeBgColor").on("input", (function() {
        _w_gusto();
    }));
    $("#qrCodeSizeRange,#qrCodeSize").on("change", (function() {
        if ($(this).is("#qrCodeSizeRange")) {
            $("#qrCodeSize").prop("value", $(this).prop("value"));
        } else if ($(this).is("#qrCodeSize")) {
            $("#qrCodeSizeRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_gusto();
    }));
    $("#qrCodeAlphaRange,#qrCodeAlpha").on("change", (function() {
        if ($(this).is("#qrCodeAlphaRange")) {
            $("#qrCodeAlpha").prop("value", $(this).prop("value"));
        } else if ($(this).is("#qrCodeAlpha")) {
            $("#qrCodeAlphaRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_gusto();
    }));
    $("#qrCodeBorderRange,#qrCodeBorder").on("change", (function() {
        if ($(this).is("#qrCodeBorderRange")) {
            $("#qrCodeBorder").prop("value", $(this).prop("value"));
        } else if ($(this).is("#qrCodeBorder")) {
            $("#qrCodeBorderRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_gusto();
    }));
    $("#qrCodeText").on("input", (function() {
        _w_gusto();
    }));
    $(".presentationMenuItem").on("click", (function() {
        $(".presentationMenuItem").removeClass("active");
        $(this).addClass("active");
        $(".presentationMenuTab").hide();
        if ($(this).is(".tileWatermark")) {
            $(".presentationMenuTab.tileWatermark").show();
        } else if ($(this).is(".locationWatermark")) {
            $(".presentationMenuTab.locationWatermark").show();
        }
        _w_frolic();
    }));
    $("#offsetXRange,#offsetX").on("change", (function() {
        if ($(this).is("#offsetXRange")) {
            $("#offsetX").prop("value", $(this).prop("value"));
        } else if ($(this).is("#offsetX")) {
            $("#offsetXRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_frolic();
    }));
    $("#offsetYRange,#offsetY").on("change", (function() {
        if ($(this).is("#offsetYRange")) {
            $("#offsetY").prop("value", $(this).prop("value"));
        } else if ($(this).is("#offsetY")) {
            $("#offsetYRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_frolic();
    }));
    $("#marginXRange,#marginX").on("change", (function() {
        if ($(this).is("#marginXRange")) {
            $("#marginX").prop("value", $(this).prop("value"));
        } else if ($(this).is("#marginX")) {
            $("#marginXRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_frolic();
    }));
    $("#marginYRange,#marginY").on("change", (function() {
        if ($(this).is("#marginYRange")) {
            $("#marginY").prop("value", $(this).prop("value"));
        } else if ($(this).is("#marginY")) {
            $("#marginYRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_frolic();
    }));
    $("#rotationRange,#rotation").on("change", (function() {
        if ($(this).is("#rotationRange")) {
            $("#rotation").prop("value", $(this).prop("value"));
        } else if ($(this).is("#rotation")) {
            $("#rotationRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_frolic();
    }));
    $("#alignXRange,#alignX").on("change", (function() {
        if ($(this).is("#alignXRange")) {
            $("#alignX").prop("value", $(this).prop("value"));
        } else if ($(this).is("#alignX")) {
            $("#alignXRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_frolic();
    }));
    $("#alignYRange,#alignY").on("change", (function() {
        if ($(this).is("#alignYRange")) {
            $("#alignY").prop("value", $(this).prop("value"));
        } else if ($(this).is("#alignY")) {
            $("#alignYRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_frolic();
    }));
    $("#middleAlignX").on("change", (function() {
        if ($(this).is(":checked")) {
            $("#alignXRange,#alignX").attr("disabled", true);
        } else {
            $("#alignXRange,#alignX").attr("disabled", false);
        }
        _w_frolic();
    }));
    $("#middleAlignY").on("change", (function() {
        if ($(this).is(":checked")) {
            $("#alignYRange,#alignY").attr("disabled", true);
        } else {
            $("#alignYRange,#alignY").attr("disabled", false);
        }
        _w_frolic();
    }));
    $("#downloadCanvasImage").on("click", (function() {
        _w_prune(_w_pawn.src, _w_levity, false, true);
    }));
    $("#batchImage").on("click", (function() {
        $("#multipleImageInput").get(0).click();
    }));
    $("#openDownloadFolderBtn").on("click", _w_sonata);
    $("#multipleImageInput").on("change", (function() {
        let _w_vagary = $(this).get(0).files;
        let $_w_cast = $(this);
        let _w_huddle = Object.keys(_w_vagary);
        let _w_sham = _w_huddle.length;
        $(window).off("resize", _w_frolic);
        let _w_hubbub = document.title;
        (function makeWM() {
            if (_w_huddle.length == 0) {
                document.title = _w_ordeal("_w_reaper") + _w_ordeal("_w_tipple");
                setTimeout((function() {
                    document.title = _w_hubbub;
                }), 2e3);
                $(window).on("resize", _w_frolic);
                _w_frolic();
            } else {
                document.title = _w_ordeal("_w_reaper") + (_w_sham - _w_huddle.length) + "/" + _w_sham;
                let _w_buckle = _w_vagary[_w_huddle.shift()];
                if (!_w_abuse) _w_abuse = new FileReader;
                _w_abuse.onload = function(event) {
                    let _w_mitten = (new Date).getTime();
                    _w_prune(event.target.result, _w_buckle.name, false, true);
                    let _w_anemia = (new Date).getTime();
                    let _w_buck = _w_anemia - _w_mitten;
                    let _w_gnat = _w_buck > 256 ? _w_buck * 2 : 256;
                    (function ctAction() {
                        chrome.downloads.search({
                            urlRegex: "^data:image/.*$",
                            state: "in_progress"
                        }, (function(data) {
                            if (data.length > 2) {
                                setTimeout(ctAction, _w_gnat);
                            } else {
                                makeWM();
                            }
                        }));
                    })();
                };
                _w_abuse.readAsDataURL(_w_buckle);
            }
        })();
    }));
    $("#resetConfigure").on("click", (function() {
        _w_draft();
        _w_frolic();
    }));
    document.title = _w_ordeal("_w_azure");
    $("#editor_i18n_1001").html(_w_ordeal("_w_dwarf"));
    $("#editor_i18n_1002").html(_w_ordeal("_w_spoor"));
    $("#editor_i18n_1003").html(_w_ordeal("_w_ogle"));
    $("#editor_i18n_1004").html(_w_ordeal("_w_twinge"));
    $("#editor_i18n_1005").html(_w_ordeal("_w_fret"));
    $("#editor_i18n_1006").html(_w_ordeal("_w_cape"));
    $("#editor_i18n_1007").html(_w_ordeal("_w_core"));
    $("#editor_i18n_1008").html(_w_ordeal("_w_scorn"));
    $("#editor_i18n_1009").html(_w_ordeal("_w_brooch"));
    $("#editor_i18n_1010").html(_w_ordeal("_w_idyll"));
    $("#editor_i18n_1011").html(_w_ordeal("_w_norm"));
    $("#editor_i18n_1012").html(_w_ordeal("_w_hoax"));
    $("#editor_i18n_1013").html(_w_ordeal("_w_scad"));
    $("#editor_i18n_1014").html(_w_ordeal("_w_balm"));
    $("#editor_i18n_1015").html(_w_ordeal("_w_pulp"));
    $("#wmImageCutUp").attr("placeHolder", _w_ordeal("_w_arson"));
    $("#wmImageCutRight").attr("placeHolder", _w_ordeal("_w_kernel"));
    $("#wmImageCutDown").attr("placeHolder", _w_ordeal("_w_jade"));
    $("#wmImageCutLeft").attr("placeHolder", _w_ordeal("_w_rue"));
    $("#editor_i18n_1020").html(_w_ordeal("_w_musket"));
    $("#editor_i18n_1021").html(_w_ordeal("_w_maze"));
    $("#editor_i18n_1022").html(_w_ordeal("_w_query"));
    $("#editor_i18n_1023").html(_w_ordeal("_w_stance"));
    $("#editor_i18n_1024").html(_w_ordeal("_w_gibe"));
    $("#editor_i18n_1025").html(_w_ordeal("_w_haft"));
    $("#editor_i18n_1026").html(_w_ordeal("_w_escort"));
    $("#editor_i18n_1027").html(_w_ordeal("_w_maroon"));
    $("#editor_i18n_1028").html(_w_ordeal("_w_mast"));
    $("#editor_i18n_1029").html(_w_ordeal("_w_moron"));
    $("#editor_i18n_1030").html(_w_ordeal("_w_slosh"));
    $("#editor_i18n_1031").html(_w_ordeal("_w_ravine"));
    $("#editor_i18n_1032").html(_w_ordeal("_w_acumen"));
    $("#editor_i18n_1033").html(_w_ordeal("_w_array"));
    $("#editor_i18n_1034").html(_w_ordeal("_w_miser"));
    $("#editor_i18n_1035").html(_w_ordeal("_w_shawl"));
    $("#editor_i18n_1036").html(_w_ordeal("_w_minnow"));
    $("#editor_i18n_1037").html(_w_ordeal("_w_butt"));
    $("#editor_i18n_1038").html(_w_ordeal("_w_gem"));
    $("#editor_i18n_1039").html(_w_ordeal("_w_dearth"));
    $("#editor_i18n_1040").html(_w_ordeal("_w_slab"));
    $("#editor_i18n_1041").html(_w_ordeal("_w_robe"));
    $("#editor_i18n_1042").html(_w_ordeal("_w_foyer"));
    $("#editor_i18n_1043").html(_w_ordeal("_w_faucet"));
    $("#editor_i18n_1044").html(_w_ordeal("_w_jockey"));
    $("#editor_i18n_1045").html(_w_ordeal("_w_drawl"));
    $("#editor_i18n_1046").html(_w_ordeal("_w_stanza"));
    $("#editor_i18n_1047").html(_w_ordeal("_w_quay"));
    _w_ledger();
}

function _w_mutton(_w_harrow, _w_cello, _w_closet) {
    if (!_w_sway) _w_sway = $("#canvas").get(0);
    let $_w_tripod = $(_w_sway).parent();
    _w_sway.width = $("#scWidth").prop("value");
    _w_sway.height = $("#scHeight").prop("value");
    let _w_kin = _w_sway.parentElement.offsetWidth;
    if (_w_sway.width <= _w_kin) {
        _w_sway.style.width = _w_sway.width + "px";
        _w_sway.style.height = _w_sway.height + "px";
        $("#displayRate").html(_w_ordeal("_w_grease") + "100%");
    } else {
        _w_sway.style.width = _w_kin + "px";
        _w_sway.style.height = _w_kin / _w_sway.width * _w_sway.height + "px";
        $("#displayRate").html(_w_ordeal("_w_grease") + (_w_kin / _w_sway.width * 100).toFixed(1) + "%");
    }
    if (!_w_dummy) _w_dummy = _w_sway.getContext("2d");
    _w_dummy.drawImage(_w_harrow, 0, 0, _w_sway.width, _w_sway.height);
    let _w_glut = function(_w_imp) {
        let _w_moan = $("#watermarkText").prop("value");
        if (_w_moan.length == 0) return;
        let _w_flaw = parseInt($("#fontSize").prop("value"));
        let _w_pundit = _w_fillet($("#fontColor").prop("value"));
        let _w_luxury = parseInt($("#fontAlpha").prop("value")) / 100;
        let _w_ravine = "rgba(" + _w_pundit.r + ", " + _w_pundit.g + ", " + _w_pundit.b + ", " + _w_luxury + ")";
        _w_dummy.font = _w_flaw + "px " + $("select#fontSelecter option:selected").prop("value");
        _w_dummy.strokeStyle = _w_ravine;
        _w_dummy.fillStyle = _w_ravine;
        let _w_lot = {};
        _w_lot.width = _w_dummy.measureText(_w_moan).width;
        _w_lot.height = _w_flaw;
        _w_imp(_w_lot, (function(x, y) {
            if ($("#borderFont:checkbox").is(":checked")) {
                _w_dummy.strokeText(_w_moan, x, y + _w_lot.height);
            } else {
                _w_dummy.fillText(_w_moan, x, y + _w_lot.height);
            }
        }));
    };
    let _w_drill = null;
    let _w_flux = function(_w_imp) {
        if (_w_mallet == null) return;
        if (_w_drill == null) {
            let _w_prank = parseInt($("#wmImageCutUp").prop("value"));
            _w_prank = _w_prank ? _w_prank : 0;
            let _w_halo = parseInt($("#wmImageCutRight").prop("value"));
            _w_halo = _w_halo ? _w_halo : 0;
            let _w_layman = parseInt($("#wmImageCutDown").prop("value"));
            _w_layman = _w_layman ? _w_layman : 0;
            let _w_inroad = parseInt($("#wmImageCutLeft").prop("value"));
            _w_inroad = _w_inroad ? _w_inroad : 0;
            let _w_wick = _w_mallet.width - _w_inroad - _w_halo;
            let _w_slosh = _w_mallet.height - _w_prank - _w_layman;
            let _w_wit = document.createElement("canvas");
            _w_wit.width = _w_wick;
            _w_wit.height = _w_slosh;
            let _w_snare = _w_wit.getContext("2d");
            _w_snare.drawImage(_w_mallet, _w_inroad, _w_prank, _w_wick, _w_slosh, 0, 0, _w_wick, _w_slosh);
            if ($("#brToAlpha").is(":checked")) {
                let _w_blur = $("#brToAlphaReverse").is(":checked");
                let _w_noose = parseFloat($("#pixelAlphaRateRange").prop("value"));
                let _w_waffle = _w_snare.getImageData(0, 0, _w_wit.width, _w_wit.height);
                let _w_minion = _w_waffle.data.length;
                for (let i = 0; i < _w_minion; i += 4) {
                    let _w_vex = .299 * _w_waffle.data[i] + .587 * _w_waffle.data[i + 1] + .114 * _w_waffle.data[i + 2];
                    let _w_solo = _w_vex;
                    if (_w_blur) {
                        _w_solo = 255 - _w_solo;
                    }
                    _w_solo = _w_solo * _w_noose;
                    if (_w_waffle.data[i + 3] > 0) _w_waffle.data[i + 3] = _w_solo;
                }
                _w_snare.putImageData(_w_waffle, 0, 0);
            }
            _w_drill = _w_wit;
        }
        let _w_eaglet = parseInt($("#wmScWidth").prop("value"));
        let _w_ulcer = parseInt($("#wmScHeight").prop("value"));
        let _w_sprig = parseInt($("#imageAlpha").prop("value")) / 100;
        let _w_lot = {};
        _w_lot.width = _w_eaglet;
        _w_lot.height = _w_ulcer;
        _w_imp(_w_lot, (function(x, y) {
            _w_dummy.save();
            _w_dummy.globalAlpha = _w_sprig;
            _w_dummy.drawImage(_w_drill, 0, 0, _w_drill.width, _w_drill.height, x, y, _w_eaglet, _w_ulcer);
            _w_dummy.restore();
        }));
    };
    let _w_heyday = function(_w_imp) {
        if (window._w_bulge == null) return;
        let _w_eaglet = window._w_bulge.width;
        let _w_ulcer = window._w_bulge.height;
        let _w_crater = $("#qrCodeBgColor").prop("value");
        let _w_medal = _w_fillet(_w_crater);
        let _w_husk = parseInt($("#qrCodeAlpha").prop("value")) / 100;
        _w_crater = "RGBA(" + _w_medal.r + ", " + _w_medal.g + ", " + _w_medal.b + ", " + _w_husk + ")";
        let _w_carp = parseInt($("#qrCodeBorderRange").prop("value"));
        let _w_lot = {};
        _w_lot.width = _w_eaglet + 2 * _w_carp;
        _w_lot.height = _w_ulcer + 2 * _w_carp;
        _w_imp(_w_lot, (function(x, y) {
            let _w_canopy = _w_dummy.fillStyle;
            _w_dummy.fillStyle = _w_crater;
            _w_dummy.fillRect(x, y, _w_eaglet + 2 * _w_carp, _w_ulcer + 2 * _w_carp);
            _w_dummy.fillStyle = _w_canopy;
            _w_dummy.drawImage(window._w_bulge, 0, 0, window._w_bulge.width, window._w_bulge.height, x + _w_carp, y + _w_carp, _w_eaglet, _w_ulcer);
        }));
    };
    let _w_import = function(_w_imp) {
        if ($(".typeMenuItem.textWatermark").is(".active")) {
            _w_glut(_w_imp);
        } else if ($(".typeMenuItem.imageWatermark").is(".active")) {
            _w_flux(_w_imp);
        } else if ($(".typeMenuItem.qrCodeWatermark").is(".active")) {
            _w_heyday(_w_imp);
        }
    };
    let _w_brace = function() {
        let _w_nymph = {};
        _w_nymph.width = parseInt($("#marginX").prop("value"));
        _w_nymph.height = parseInt($("#marginY").prop("value"));
        let _w_assay = parseInt($("#rotation").prop("value"));
        let _w_scare = {};
        _w_scare.x = parseInt($("#offsetX").prop("value"));
        _w_scare.y = parseInt($("#offsetY").prop("value"));
        let _w_parka = Math.sqrt(Math.pow(_w_sway.width + Math.abs(_w_scare.x), 2) + Math.pow(_w_sway.height + Math.abs(_w_scare.y), 2));
        let _w_imp = function(_w_lot, _w_lope) {
            _w_lot.width += _w_nymph.width;
            _w_lot.height += _w_nymph.height;
            _w_dummy.rotate(_w_assay * Math.PI / 180);
            for (let x = 0; x < _w_parka; x += _w_lot.width) {
                for (let y = 0; y < _w_parka; y += _w_lot.height) {
                    _w_lope(x + _w_nymph.width + _w_scare.x, y + _w_scare.y);
                }
            }
            for (let x = 0; x < _w_parka; x += _w_lot.width) {
                for (let y = -_w_lot.height; y > -_w_parka; y -= _w_lot.height) {
                    _w_lope(x + _w_nymph.width + _w_scare.x, y + _w_scare.y);
                }
            }
            for (let x = -_w_lot.width; x > -_w_parka; x -= _w_lot.width) {
                for (let y = -_w_lot.height; y > -_w_parka; y -= _w_lot.height) {
                    _w_lope(x + _w_nymph.width + _w_scare.x, y + _w_scare.y);
                }
            }
            for (let x = -_w_lot.width; x > -_w_parka; x -= _w_lot.width) {
                for (let y = 0; y < _w_parka; y += _w_lot.height) {
                    _w_lope(x + _w_nymph.width + _w_scare.x, y + _w_scare.y);
                }
            }
        };
        _w_import(_w_imp);
    };
    let _w_lure = function() {
        let _w_barb = parseInt($("#alignX").prop("value"));
        let _w_tact = parseInt($("#alignY").prop("value"));
        let _w_canard = $("#middleAlignX").is(":checked");
        let _w_whiff = $("#middleAlignY").is(":checked");
        let _w_imp = function(_w_lot, _w_lope) {
            let _w_enamel = {
                x: 0,
                y: 0
            };
            if (_w_canard) {
                _w_enamel.x = Math.round(_w_sway.width / 2 - _w_lot.width / 2);
            } else if (_w_barb > 0) {
                _w_enamel.x = _w_barb;
            } else if (_w_barb < 0) {
                _w_enamel.x = _w_sway.width - _w_lot.width + _w_barb + 1;
            }
            if (_w_whiff) {
                _w_enamel.y = Math.round(_w_sway.height / 2 - _w_lot.height / 2);
            } else if (_w_tact > 0) {
                _w_enamel.y = _w_tact;
            } else if (_w_tact < 0) {
                _w_enamel.y = _w_sway.height - _w_lot.height + _w_tact + 1;
            }
            _w_lope(_w_enamel.x, _w_enamel.y);
        };
        _w_import(_w_imp);
    };
    if ($(".presentationMenuItem.tileWatermark").is(".active")) {
        _w_brace();
    } else if ($(".presentationMenuItem.locationWatermark").is(".active")) {
        _w_lure();
    }
    _w_cello = "watermark_" + _w_cello;
    _w_cello = _w_cello.replace(/^(.*?)(\.[\w]{3,4})?$/, "$1.png");
    let _w_pest = function() {
        blobUtil.canvasToBlob(_w_sway).then((function(blob) {
            chrome.downloads.download({
                url: blobUtil.createObjectURL(blob),
                filename: _w_mimic(_w_ordeal("manifest_ext_name") + "/" + _w_ordeal("_w_fell") + "/" + _w_cello),
                saveAs: false,
                conflictAction: "uniquify"
            });
        }));
    };
    if (_w_closet) {
        _w_pest();
    }
    let _w_posse = parseInt(_w_sway.style.width.replace("px", ""));
    let _w_mystic = parseInt(_w_sway.style.height.replace("px", ""));
    $(_w_sway).parent().off("mouseover mouseout mousemove");
    if (_w_posse < _w_sway.width) {
        let _w_agony = function(event) {
            let _w_tripod = $(_w_sway).parent().get(0);
            let _w_finale = _w_tripod.offsetTop;
            let _w_cone = _w_tripod.offsetLeft;
            let _w_studio = event.pageX - _w_cone;
            let _w_whim = event.pageY - _w_finale;
            let _w_goggle = -(_w_sway.width - _w_posse) * _w_studio / _w_posse;
            let _w_ridge = -(_w_sway.height - _w_mystic) * _w_whim / _w_mystic;
            $(_w_sway).css("margin-top", _w_ridge);
            $(_w_sway).css("margin-left", _w_goggle);
        };
        $(_w_sway).parent().on("mouseover", (function(event) {
            $(_w_sway).css("width", _w_sway.width);
            $(_w_sway).css("height", _w_sway.height);
            $(this).off("mousemove").on("mousemove", _w_agony);
        })).on("mouseout", (function() {
            $(_w_sway).css("width", _w_posse);
            $(_w_sway).css("height", _w_mystic);
            $(_w_sway).css("margin", "0px auto");
            $(this).off("mousemove", _w_agony);
        }));
    }
}