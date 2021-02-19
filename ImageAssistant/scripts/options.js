/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

$((function() {
    document.title = _w_ordeal("_w_cachet");
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
    $("#sideNavbar").append($("<ul />", {
        class: "nav nav-sidebar"
    }).append($("<li />").append($("<a />", {
        class: "sidbarItem",
        href: "#",
        contentId: "extOption",
        text: _w_ordeal("_w_onset")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-wrench"
    })))).append($("<li />").append($("<a />", {
        class: "sidbarItem",
        href: "#",
        contentId: "aboutExt",
        text: _w_ordeal("_w_stigma")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-copyright-mark"
    })))));
    $("#defSizeOptTle").append(_w_ordeal("_w_trio"));
    $("#defSizeOptAlert").append(_w_ordeal("_w_thread"));
    $("#sizeOptionTle").append(_w_ordeal("_w_grouch"));
    $("#defautlOperation").append($("<div />", {
        class: "btn btn-primary",
        id: "selectAllButton",
        text: _w_ordeal("_w_quirk")
    })).append($("<div />", {
        class: "btn btn-primary",
        id: "selectNoneButton",
        text: _w_ordeal("_w_influx")
    }));
    $("#customSizeOption").append(_w_ordeal("_w_harrow"));
    $("#newItemWidth").attr("placeHolder", _w_ordeal("_w_flora"));
    $("#newItemHeight").attr("placeHolder", _w_ordeal("_w_felon"));
    $("#newItemButton").append(_w_ordeal("_w_glee"));
    $("#aboutExTle").append(_w_ordeal("_w_tyrant"));
    $("#aboutExtCnt").append($("<h4 />", {
        class: "media-heading",
        text: _w_ordeal("_w_viand")
    })).append($("<p />", {
        text: _w_ordeal("_w_lint")
    })).append($("<p />", {
        html: _w_ordeal("_w_lucre")
    })).append($("<div />", {
        class: "pwd-callout pwd-callout-info"
    }).append($("<h4 />", {
        class: "page-header",
        text: _w_ordeal("_w_cue")
    })).append($("<p />").append(_w_ordeal("_w_needle")).append($("<a />", {
        target: "_pullywood_",
        href: "http://www.pullywood.com/ImageAssistant/#docs-download",
        text: chrome.runtime.getManifest().version
    }).append($("<span />", {
        id: "newVersion",
        text: "Latest: " + localStorage["version"]
    })))).append($("<p />").append(_w_ordeal("_w_slit")).append($("<a />", {
        target: "_chromeAppStore_",
        href: "https://chrome.google.com/webstore/detail/dbjbempljhcmhlfpfacalomonjpalpko",
        text: "https://chrome.google.com/webstore/detail/dbjbempljhcmhlfpfacalomonjpalpko"
    }))).append($("<p />").append(_w_ordeal("_w_lapse")).append($("<a />", {
        target: "_edgeAppStore_",
        href: "https://microsoftedge.microsoft.com/addons/detail/odphnbhiddhdpoccbialllejaajemdio",
        text: "https://microsoftedge.microsoft.com/addons/detail/odphnbhiddhdpoccbialllejaajemdio"
    }))).append($("<p />").append(_w_ordeal("_w_guile")).append($("<a />", {
        target: "_firefoxAppStore_",
        href: "https://addons.mozilla.org/zh-CN/firefox/addon/ia-batch-image-downloader/",
        text: "https://addons.mozilla.org/zh-CN/firefox/addon/ia-batch-image-downloader/"
    }))).append($("<p />").append(_w_ordeal("_w_albino")).append($("<a />", {
        target: "_source_list_",
        href: "http://www.pullywood.com/publish/imageassistant-resource-list",
        text: "http://www.pullywood.com/publish/imageassistant-resource-list"
    }))).append($("<p />").append(_w_ordeal("_w_stroke")).append($("<a />", {
        target: "_pullywood_",
        href: "https://www.pullywood.com/ImageAssistant/",
        text: _w_ordeal("_w_pastel")
    }))).append($("<p />").append(_w_ordeal("_w_gander")).append($("<a />", {
        target: "_pullywood_",
        href: "https://www.pullywood.com/publish/",
        text: _w_ordeal("_w_mantle")
    }))).append($("<p />").append("Twitter: ").append($("<a />", {
        target: "_twitter_",
        href: "https://twitter.com/pullywood",
        text: "https://twitter.com/pullywood"
    }))).append($("<p />").append($("<img />", {
        height: 128,
        src: "./images/wechat_offical.jpg"
    })).append($("<img />", {
        height: 128,
        src: "./images/wechat.jpg"
    })))).append($("<p />").append(_w_ordeal("_w_spell")).append(" &copy; 2013 - 2021 ").append($("<a />", {
        target: "_pullywood_",
        href: "http://www.pullywood.com/",
        text: _w_ordeal("_w_whimsy")
    })).append($("<span> | </span>").append($("<a />", {
        target: "_privacy_",
        href: _w_ordeal("_w_loom"),
        text: _w_ordeal("_w_idiom")
    }))));
    $("#extClickAct").bootstrapSwitch({
        labelText: _w_ordeal("_w_vault"),
        onText: _w_ordeal("_w_mogul"),
        offText: _w_ordeal("_w_girder"),
        labelWidth: 100,
        state: "true" == _w_roe()._w_sock(),
        onSwitchChange: function(event, state) {
            _w_roe()._w_apron(state);
        }
    });
    $("#dyLoadSize").prop("value", _w_roe()._w_fusion()).on("change", (function() {
        let _w_mulct = $(this).prop("value");
        _w_roe()._w_dose(_w_mulct);
        $(this).prop("value", _w_roe()._w_fusion());
    }));
    $("#extMaxLoad").prop("value", _w_roe()._w_strait()).on("change", (function() {
        let _w_coma = $(this).prop("value");
        _w_roe()._w_slab(_w_coma);
        $(this).prop("value", _w_roe()._w_strait());
    }));
    let _w_decree = _w_roe()._w_veil();
    let $_w_bore = $("#extFormatChangeWhenDownOptContainer");
    let $_w_screed = $("<div />", {
        class: "btn-toolbar",
        role: "toolbar"
    });
    for (let key in _w_decree) {
        let $_w_tactic = $("<div />", {
            class: "btn btn-default btn-md formatOption " + (_w_decree[key] ? "btn-pwd active" : ""),
            value: key,
            text: key == "_" ? _w_ordeal("_w_carol") : "*." + key
        });
        $_w_screed.append($_w_tactic);
    }
    $_w_bore.append($_w_screed);
    $(".formatOption").on("click", (function() {
        const _w_ewer = $(this).attr("value");
        let _w_turret = false;
        if ($(this).is(".active")) {
            _w_turret = false;
            $(this).removeClass("btn-pwd active");
        } else {
            _w_turret = true;
            $(this).addClass("btn-pwd active");
        }
        _w_decree = _w_roe()._w_veil();
        _w_decree[_w_ewer] = _w_turret;
        _w_roe()._w_yarn(_w_decree);
        console.log(_w_decree);
    }));
    $("#regexpUrlRule").html(_w_roe()._w_wile()).on("blur", (function() {
        let _w_pivot = $(this).text();
        let _w_schism = _w_roe()._w_mentor(_w_pivot);
        let _w_cabal = _w_roe()._w_wile();
        for (let idx in _w_schism) {
            _w_cabal = _w_cabal.replace(_w_schism[idx], "<crule>" + _w_schism[idx] + "</crule>");
        }
        $(this).html(_w_cabal);
    })).trigger("blur");
    $("#resetRegexpUrlRule").on("click", (function() {
        $("#regexpUrlRule").html("").trigger("blur");
    }));
    $("#regexpUrlTestInput").on("blur", (function() {
        let $_w_clip = $("#regexpUrlTestOutput");
        $_w_clip.html("");
        $("#regexpUrlRule").trigger("blur");
        let _w_churl = $(this).prop("value");
        if (!_w_churl || _w_churl.trim("").length == 0) {
            $_w_clip.html("");
            return;
        } else if (!_w_churl.startsWith("http://") && !_w_churl.startsWith("https://")) {
            $_w_clip.html(_w_ordeal("_w_soil"));
            return;
        }
        let _w_needle = _w_roe()._w_fray(_w_churl);
        if (!Array.isArray(_w_needle) || _w_needle.length == 0) {
            $_w_clip.html(_w_ordeal("_w_clip"));
            return;
        } else {
            _w_needle.forEach((function(matchedRule) {
                $("#regexpUrlRule").html($("#regexpUrlRule").html().replace(matchedRule, "<mrule>" + matchedRule + "</mrule>"));
            }));
        }
        let _w_shrine = _w_roe()._w_hovel(_w_churl, 1);
        $_w_clip.append(_w_ordeal("_w_spoke") + _w_churl + "\n");
        let $_w_ripple = $("<span />", {
            text: _w_ordeal("_w_barb")
        });
        $_w_clip.append($_w_ripple).append("\n");
        let _w_skewer = new Image;
        _w_skewer.onload = function() {
            $_w_ripple.append(this.width + " x " + this.height);
        };
        _w_skewer.onerror = function() {
            _w_skewer.onerror = null;
            $_w_ripple.append("N/A");
        };
        _w_skewer.src = _w_churl;
        _w_shrine.forEach((function(matchedUrl) {
            console.log(matchedUrl);
            $_w_clip.append("<hr />" + _w_ordeal("_w_mull") + matchedUrl + "\n");
            let $_w_jigsaw = $("<span />", {
                text: _w_ordeal("_w_caste")
            });
            $_w_clip.append($_w_jigsaw).append("\n");
            let _w_stench = new Image;
            _w_stench.onload = function() {
                $_w_jigsaw.append(this.width + " x " + this.height);
            };
            _w_stench.onerror = function() {
                _w_stench.onerror = null;
                $_w_jigsaw.append("N/A");
            };
            _w_stench.src = matchedUrl;
        }));
    }));
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
    if (localStorage["version"] && localStorage["version"] > chrome.runtime.getManifest().version) {
        $("#newVersion").show();
    }
    let _w_fringe = _w_grit("showMsg");
    if (_w_fringe != null && _w_fringe == "about") {
        $("#aboutExt").slideDown().siblings().slideUp();
        let $_w_patch = $(".sidbarItem[contentId=aboutExt]").parent();
        $_w_patch.addClass("btn-pwd active");
    } else {
        $("#extOption").slideDown().siblings().slideUp();
        let $_w_patch = $(".sidbarItem[contentId=extOption]").parent();
        $_w_patch.addClass("btn-pwd active");
    }
    let _w_sloven = _w_roe()._w_linen();
    $("#defaultFunnelWidth").val(_w_sloven.width);
    $("#defaultFunnelHeight").val(_w_sloven.height);
    $(".defaultFunnelSize").on("input", (function() {
        _w_sloven.width = $("#defaultFunnelWidth").val();
        _w_sloven.height = $("#defaultFunnelHeight").val();
        _w_roe()._w_dike(_w_sloven.width, _w_sloven.height);
    }));
    let _w_pauper = _w_roe()._w_lust();
    let _w_fort = _w_roe()._w_groom();
    _w_relish(_w_pauper, _w_fort);
    $("#extClickActOptTle").html(_w_ordeal("_w_colon"));
    $("#extClickActOptDesc").html(_w_ordeal("_w_aplomb"));
    $("#dyLoadSizeOptTle").html(_w_ordeal("_w_medium"));
    $("#i18n_dynamic_load_desc").html(_w_ordeal("_w_plight"));
    $("#i18n_dynamic_load_desc_1").html(_w_ordeal("_w_cell"));
    $("#extMaxLoadOptTle").html(_w_ordeal("_w_burrow"));
    $("#i18n_selector_page_max_load_image_desc").html(_w_ordeal("_w_cargo"));
    $("#regexpUrlRuleOptTle").html(_w_ordeal("_w_thatch"));
    $("#i18n_image_url_regexp_replace_expression_desc").html(_w_ordeal("_w_jigsaw"));
    $("#i18n_btn_default_rule").html(_w_ordeal("_w_clay"));
    $("#i18n_test_url").html(_w_ordeal("_w_draft"));
    $("#extFormatChangeWhenDownOptTle").html(_w_ordeal("_w_pun"));
    $("#i18n_selector_ext_format_change_when_down").html(_w_ordeal("_w_rein"));
}));

function _w_relish(_w_pauper, _w_fort) {
    let _w_breach = [];
    let _w_sap = [];
    function preDealContainer(_w_pauper, _w_sap, _w_breach) {
        for (let i = 0; i < _w_pauper.length; ++i) {
            let _w_dismay = _w_pauper[i];
            let _w_mirage = _w_pauper[_w_dismay];
            let _w_die = _w_mirage.width - _w_mirage.height > 0 ? _w_mirage.width : _w_mirage.height;
            let _w_minuet = _w_mirage.width - _w_mirage.height < 0 ? _w_mirage.width : _w_mirage.height;
            let _w_forger = _w_die + "x" + _w_minuet;
            _w_die && _w_minuet && _w_breach.indexOf(_w_forger) == -1 && _w_sap.indexOf(_w_forger) == -1 && _w_sap.push(_w_forger);
        }
    }
    preDealContainer(_w_fort, _w_breach, _w_breach);
    preDealContainer(_w_pauper, _w_sap, _w_breach);
    _w_breach = _w_baton(_w_breach);
    _w_sap = _w_baton(_w_sap);
    function htmlContainerFill(_w_pauper, _w_nib, $_w_throng) {
        for (let i = 0; i < _w_nib.length; ++i) {
            let $_w_bather = $("<div />", {
                class: "btn-group btn-group-sm"
            });
            let _w_dismay = _w_nib[_w_nib[i]];
            let _w_grease = _w_dismay.width + "x" + _w_dismay.height;
            let $_w_enmity = $("<div />", {
                class: "btn btn-default sizeItemOption",
                value: _w_grease,
                text: _w_grease
            });
            _w_pauper.indexOf(_w_grease) > -1 && $_w_enmity.addClass("btn-pwd active");
            let _w_frisk = _w_dismay.height + "x" + _w_dismay.width;
            let $_w_quack = $("<div />", {
                class: "btn btn-default sizeItemOption",
                value: _w_frisk,
                text: _w_frisk
            });
            _w_pauper.indexOf(_w_frisk) > -1 && $_w_quack.addClass("btn-pwd active");
            $_w_bather.append($_w_enmity);
            _w_dismay.width - _w_dismay.height != 0 && $_w_bather.append($_w_quack);
            $_w_throng.append($_w_bather);
        }
    }
    let $_w_dowry = $("#sizeConfigure");
    let $_w_facet = $("#sizeConfigurExt");
    htmlContainerFill(_w_pauper, _w_breach, $_w_dowry);
    htmlContainerFill(_w_pauper, _w_sap, $_w_facet);
    $("#selectAllButton").on("click", (function() {
        $("#sizeConfigure .sizeItemOption").each((function() {
            let _w_annex = $(this).attr("value").split("x");
            _w_annex[0] = parseInt(_w_annex[0]);
            _w_annex[1] = parseInt(_w_annex[1]);
            $(this).addClass("btn-pwd active");
            let _w_patch = _w_pauper[$(this).attr("value")];
            _w_roe()._w_bonnet(_w_annex[0], _w_annex[1]);
        }));
    }));
    $("#selectNoneButton").on("click", (function() {
        $("#sizeConfigure .sizeItemOption").each((function() {
            let _w_annex = $(this).attr("value").split("x");
            _w_annex[0] = parseInt(_w_annex[0]);
            _w_annex[1] = parseInt(_w_annex[1]);
            $(this).removeClass("btn-pwd active");
            _w_roe()._w_zest(_w_annex[0], _w_annex[1]);
        }));
    }));
    $(".sizeItemOption").on("click", (function() {
        let _w_annex = $(this).attr("value").split("x");
        _w_annex[0] = parseInt(_w_annex[0]);
        _w_annex[1] = parseInt(_w_annex[1]);
        if ($(this).is(".active")) {
            $(this).removeClass("btn-pwd active");
            _w_roe()._w_zest(_w_annex[0], _w_annex[1]);
        } else {
            $(this).addClass("btn-pwd active");
            let _w_patch = _w_pauper[$(this).attr("value")];
            _w_roe()._w_bonnet(_w_annex[0], _w_annex[1]);
        }
    }));
    $("#newItemButton").on("click", (function() {
        let _w_pastel = parseInt($("#newItemWidth").prop("value"));
        let _w_boon = parseInt($("#newItemHeight").prop("value"));
        _w_pastel && _w_boon && _w_pastel > 0 && _w_boon > 0 && _w_roe()._w_bonnet(_w_pastel, _w_boon);
        window.location.reload();
    }));
    $(".sidbarItem").on("click", (function() {
        $(this).parent().addClass("btn-pwd active").siblings().removeClass("btn-pwd active");
        $("#" + $(this).attr("contentId")).slideDown().siblings().slideUp();
    }));
}