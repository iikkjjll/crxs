/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

window._w_gnome = null;

window._w_sheath = _w_poll(4);

window.createDiv = function(className) {
    return $("<div />", {
        class: className
    });
};

chrome.tabs.getCurrent((function(tab) {
    window._w_gnome = tab.id;
}));

function _w_ram(_w_moan) {
    let _w_sanity = _w_moan.split("\n");
    let _w_chapel = {};
    for (let idx in _w_sanity) {
        let _w_score = _w_sanity[idx].trim();
        if (_w_bale(_w_score)) {
            _w_chapel[_w_score] = true;
        }
    }
    return Object.keys(_w_chapel);
}

$((function() {
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
    let $_w_ogle = $("#main");
    let $_w_swipe = $("<form />", {
        class: "form-horizontal"
    });
    $_w_swipe.on("submit", (function() {
        return false;
    }));
    $_w_ogle.append($_w_swipe);
    let $_w_flock = $("<h4 />", {
        text: _w_ordeal("_w_coffer")
    });
    $_w_swipe.append($_w_flock);
    let $_w_tundra = createDiv("form-group");
    let $_w_pastor = $("<input />", {
        type: "text",
        class: "form-control",
        placeHolder: _w_ordeal("_w_lash")
    });
    let _w_brink = _w_grit("originalUrl");
    if (_w_brink && _w_brink.length > 0) {
        try {
            _w_brink = decodeURIComponent(_w_brink);
        } catch (exception) {}
        $_w_pastor.prop("value", _w_brink);
    }
    let $_w_stake = createDiv("input-group");
    let $_w_tenure = $("<span />", {
        class: "input-group-addon",
        text: _w_ordeal("_w_idol")
    });
    $_w_stake.append($_w_tenure);
    $_w_stake.append($_w_pastor);
    $_w_tundra.append(createDiv("col-md-12 col-sm-12").append($_w_stake));
    $_w_swipe.append($_w_tundra);
    let $_w_foible = createDiv("form-group");
    let $_w_spin = $("<input />", {
        class: "form-control",
        type: "number",
        min: 0,
        max: 99999999999,
        step: 1,
        value: 1,
        placeHolder: _w_ordeal("_w_typo")
    });
    let $_w_germ = $("<input />", {
        class: "form-control",
        type: "number",
        min: 0,
        max: 99999999999,
        step: 1,
        value: 1,
        placeHolder: _w_ordeal("_w_typo")
    });
    let $_w_pyre = $("<input />", {
        class: "form-control",
        type: "number",
        min: -99999999999,
        max: 99999999999,
        step: 1,
        value: 1,
        placeHolder: _w_ordeal("_w_ballot")
    });
    let $_w_strand = $("<input />", {
        class: "form-control",
        type: "number",
        min: 1,
        max: 128,
        step: 1,
        value: 1,
        placeHolder: _w_ordeal("_w_apogee")
    });
    let $_w_helm = createDiv("input-group");
    let $_w_hammer = $("<span />", {
        class: "input-group-addon",
        text: _w_ordeal("_w_lace")
    });
    $_w_helm.append($_w_hammer);
    $_w_helm.append($_w_spin);
    let $_w_icon = createDiv("input-group");
    let $_w_mantle = $("<span />", {
        class: "input-group-addon",
        text: _w_ordeal("_w_tactic")
    });
    $_w_icon.append($_w_mantle);
    $_w_icon.append($_w_germ);
    let $_w_scowl = createDiv("input-group");
    let $_w_scroll = $("<span />", {
        class: "input-group-addon",
        text: _w_ordeal("_w_spate")
    });
    $_w_scowl.append($_w_scroll);
    $_w_scowl.append($_w_pyre);
    let $_w_faucet = createDiv("input-group");
    let $_w_pinch = $("<span />", {
        class: "input-group-addon",
        text: _w_ordeal("_w_malice")
    });
    $_w_faucet.append($_w_pinch);
    $_w_faucet.append($_w_strand);
    let _w_maxim = function(_w_barn) {
        let $_w_patch;
        if (_w_barn instanceof jQuery) {
            $_w_patch = _w_barn;
        } else {
            $_w_patch = $(_w_barn);
        }
        if ($_w_patch.prop("value") - $_w_patch.prop("min") < 0) {
            $_w_patch.prop("value", $_w_patch.prop("min"));
        } else if ($_w_patch.prop("value") - $_w_patch.prop("max") > 0) {
            $_w_patch.prop("value", $_w_patch.prop("max"));
        }
    };
    $_w_spin.on("change", (function() {
        _w_maxim($(this));
        if ($(this).prop("value") - $_w_germ.prop("value") > 0) {
            $_w_germ.prop("value", $(this).prop("value"));
        }
    }));
    $_w_germ.on("change", (function() {
        _w_maxim($(this));
        if ($(this).prop("value") - $_w_spin.prop("value") < 0) {
            $_w_spin.prop("value", $(this).prop("value"));
        }
    }));
    $_w_strand.on("change", (function() {
        _w_maxim($(this));
    }));
    let $_w_foyer = $("<button />", {
        class: "form-control btn btn-pwd",
        text: _w_ordeal("_w_haven")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-flash"
    }));
    $_w_foible.append(createDiv("col-md-2 col-sm-2").append($_w_helm));
    $_w_foible.append(createDiv("col-md-2 col-sm-2").append($_w_icon));
    $_w_foible.append(createDiv("col-md-2 col-sm-2").append($_w_scowl));
    $_w_foible.append(createDiv("col-md-3 col-sm-3").append($_w_faucet));
    $_w_foible.append(createDiv("col-md-3 col-sm-3").append($_w_foyer));
    $_w_swipe.append($_w_foible);
    let $_w_plane = $("<h4 />", {
        text: _w_ordeal("_w_flick")
    });
    $_w_swipe.append($_w_plane);
    let $_w_brat = createDiv("form-group");
    let $_w_quill = $("<input />", {
        class: "form-control",
        type: "text",
        placeHolder: _w_ordeal("_w_batch")
    });
    let $_w_band = $("<input />", {
        class: "form-control",
        type: "text",
        placeHolder: _w_ordeal("_w_dainty")
    });
    let $_w_fetter = $("<input />", {
        class: "form-control",
        type: "text",
        placeHolder: _w_ordeal("_w_epoch")
    });
    let $_w_haven = createDiv("input-group");
    let $_w_spoof = $("<span />", {
        class: "input-group-addon",
        text: _w_ordeal("_w_rite")
    });
    $_w_haven.append($_w_spoof);
    $_w_haven.append($_w_quill);
    let $_w_prude = createDiv("input-group");
    let $_w_dolt = $("<span />", {
        class: "input-group-addon",
        text: _w_ordeal("_w_odium")
    });
    $_w_prude.append($_w_dolt);
    $_w_prude.append($_w_band);
    let $_w_parody = createDiv("input-group");
    let $_w_dotage = $("<span />", {
        class: "input-group-addon",
        text: _w_ordeal("_w_crack")
    });
    $_w_parody.append($_w_dotage);
    $_w_parody.append($_w_fetter);
    let $_w_crutch = $("<button />", {
        class: "form-control btn btn-pwd",
        text: _w_ordeal("_w_miasma")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-list"
    }));
    let $_w_wig = $("<span />");
    $_w_crutch.append($_w_wig);
    $_w_brat.append(createDiv("col-md-3 col-sm-3").append($_w_haven));
    $_w_brat.append(createDiv("col-md-3 col-sm-3").append($_w_prude));
    $_w_brat.append(createDiv("col-md-3 col-sm-3").append($_w_parody));
    $_w_brat.append(createDiv("col-md-3 col-sm-3").append($_w_crutch));
    $_w_swipe.append($_w_brat);
    let $_w_ban = createDiv("form-group");
    let $_w_roster = $("<h4 />", {
        text: _w_ordeal("_w_dart")
    });
    let $_w_cord = $("<span />");
    $_w_roster.append($_w_cord);
    $_w_swipe.append($_w_roster);
    let $_w_icicle = $("<textarea />", {
        id: "url_area",
        class: "form-control",
        rows: 16,
        placeHolder: _w_ordeal("_w_shroud")
    });
    $_w_ban.append(createDiv("col-md-12 col-sm-12").append($_w_icicle));
    $_w_swipe.append($_w_ban);
    let $_w_simian = createDiv("form-group");
    let $_w_snatch = $("<button />", {
        id: "batch_ext_btn",
        class: "btn btn-pwd linkMode",
        text: _w_ordeal("_w_cipher")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-list-alt"
    }));
    let $_w_rein = $("<button />", {
        id: "batch_new_tab_ext_btn",
        class: "btn btn-success",
        text: _w_ordeal("_w_hold")
    }).prepend($("<span />", {
        class: "fa fa-bomb"
    }));
    $_w_simian.append(createDiv("col-md-12 col-sm-12").append(createDiv("btn-group").append($_w_snatch).append($_w_rein)));
    $_w_swipe.append($_w_simian);
    $_w_foyer.on("click", (function() {
        let _w_loom = $_w_pastor.prop("value");
        let _w_spin = parseInt($_w_spin.prop("value"));
        let _w_germ = parseInt($_w_germ.prop("value"));
        let _w_pyre = parseInt($_w_pyre.prop("value"));
        let _w_strand = parseInt($_w_strand.prop("value"));
        if (!_w_bale(_w_loom) || _w_loom.indexOf("(*)") < 0) {
            $_w_tenure.popover({
                title: "<span class='glyphicon glyphicon-info-sign'></span> " + _w_ordeal("_w_witch"),
                content: _w_ordeal("_w_vista"),
                placement: "right",
                html: true
            }).popover("show").next().on("click", (function() {
                $(this).popover("destroy");
            })).next().on("click", (function() {
                $(this).prev().popover("destroy");
            }));
            return;
        }
        let _w_gorge = "";
        _w_spin = Math.floor(_w_spin);
        _w_germ = Math.floor(_w_germ);
        if (_w_pyre >= 0 && _w_pyre < 1) {
            _w_pyre = 1;
        } else {
            _w_pyre = Math.floor(_w_pyre);
        }
        for (let idx = _w_spin; idx <= _w_germ; idx += Math.abs(_w_pyre)) {
            let _w_hamper = _w_intent(idx, _w_strand);
            _w_hamper = _w_loom.replace("(*)", _w_hamper);
            if (_w_pyre > 0) {
                _w_gorge += _w_hamper + "\n";
            } else {
                _w_gorge = _w_hamper + "\n" + _w_gorge;
            }
        }
        $_w_icicle.prop("value", $_w_icicle.prop("value") + "\n" + _w_gorge);
    }));
    $_w_crutch.on("click", (function() {
        let _w_bustle = _w_ram($_w_icicle.prop("value"));
        if (_w_bustle.length == 0) {
            $_w_cord.popover({
                title: "<span class='glyphicon glyphicon-info-sign'></span> " + _w_ordeal("_w_elm"),
                content: _w_ordeal("_w_tariff"),
                placement: "right",
                html: true
            }).popover("show").next().on("click", (function() {
                $(this).popover("destroy");
            }));
            return;
        }
        let _w_steer = [];
        let _w_shale = $_w_quill.prop("value");
        let _w_hymn = $_w_band.prop("value");
        let _w_hoop = $_w_fetter.prop("value");
        if (_w_shale && _w_shale.trim().length > 0) _w_steer.push(_w_shale);
        if (_w_hymn && _w_hymn.trim().length > 0) _w_steer.push(_w_hymn);
        if (_w_hoop && _w_hoop.trim().length > 0) _w_steer.push(_w_hoop);
        $_w_icicle.prop("value", "");
        let _w_talon = " {#^_^#}";
        let _w_hassle = _w_shale + _w_talon + _w_hymn + _w_talon + _w_hoop;
        if (!window._w_quirk || window._w_quirk != _w_hassle) {
            window._w_quirk = _w_hassle;
            window._w_weasel = {};
        }
        function _w_scope(_w_loon, _w_steer) {
            for (let idx = 0; idx < _w_steer.length; ++idx) {
                let _w_gibe = _w_steer[idx];
                if (_w_loon.indexOf(_w_gibe) < 0) {
                    return false;
                }
            }
            return true;
        }
        let _w_guile = {};
        let _w_vessel = _w_bustle.filter((function(item) {
            if (_w_scope(item, _w_steer)) {
                _w_guile[item] = true;
                return item;
            }
        }));
        while (_w_bustle.length > 0) {
            let _w_medley = _w_bustle.shift();
            if (window._w_weasel[_w_medley]) {
                Object.keys(window._w_weasel[_w_medley]).forEach((function(item) {
                    if (!_w_guile[item] && _w_scope(item, _w_steer)) {
                        _w_guile[item] = true;
                        _w_vessel.push(item);
                    }
                }));
                continue;
            }
            _w_sheath.addTask((function(_w_gust, _w_whit, _w_veto) {
                let _w_glow = function(_w_frieze) {
                    let _w_falcon = _w_veto();
                    $_w_wig.html("(" + _w_falcon[0] + "/" + _w_falcon[1] + " -> " + _w_vessel.length + ")");
                    if (_w_frieze || _w_falcon[0] > 0 || _w_falcon[1] > 0) {
                        $_w_foyer.attr("disabled", true);
                        $_w_crutch.attr("disabled", true);
                        $_w_snatch.attr("disabled", true);
                        $_w_rein.attr("disabled", true);
                    } else {
                        $_w_wig.html("");
                        $_w_foyer.attr("disabled", false);
                        $_w_crutch.attr("disabled", false);
                        $_w_snatch.attr("disabled", false);
                        $_w_rein.attr("disabled", false);
                    }
                };
                _w_glow(true);
                _w_gust();
                $.ajax({
                    method: "get",
                    url: _w_medley,
                    timeout: _w_viand,
                    headers: {
                        Accept: "*/*; charset=UTF-8",
                        "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0",
                        Pragma: "no-cache",
                        Expires: "0",
                        "IA-Tag": "extractor_hash_temporarily_unavaiable"
                    }
                }).done((function(data) {
                    let _w_consul = document.implementation.createHTMLDocument("parseHTMLDocument");
                    let _w_glade = _w_consul.createElement("html");
                    _w_glade.innerHTML = DOMPurify.sanitize(data, {
                        WHOLE_DOCUMENT: true
                    });
                    let $_w_glade = $(_w_glade);
                    $_w_glade.find("a").each((function() {
                        let _w_loon = $(this).attr("href");
                        _w_loon = _w_peep(_w_medley, _w_loon);
                        if (_w_scope(_w_loon, _w_steer)) {
                            if (!window._w_weasel[_w_medley]) window._w_weasel[_w_medley] = {};
                            window._w_weasel[_w_medley][_w_loon] = true;
                            if (_w_loon.indexOf("#") > 0) _w_loon = _w_loon.substring(0, _w_loon.indexOf("#"));
                            if (!_w_guile[_w_loon]) {
                                _w_guile[_w_loon] = true;
                                _w_vessel.push(_w_loon);
                            }
                        }
                    }));
                })).always((function() {
                    _w_whit();
                    _w_glow();
                }));
            }));
        }
        let _w_revise = setInterval((function() {
            if (_w_sheath.getTaskNum() > 0 || _w_sheath.getProcessingNum() > 0) return;
            clearInterval(_w_revise);
            $_w_icicle.prop("value", _w_vessel.reduce((function(a, b) {
                return a + "\n" + b;
            })));
            $_w_icicle.scrollTop($_w_icicle.get(0).scrollHeight);
        }), 250);
    }));
    $_w_snatch.on("click", (function() {
        $(".btn").attr("disabled", true);
        let _w_bustle = _w_ram($_w_icicle.prop("value"));
        if (_w_bustle.length > 0) {
            _w_tract(_w_bustle);
        }
    }));
    $_w_rein.on("click", (function() {
        let _w_bustle = _w_ram($_w_icicle.prop("value"));
        if (_w_bustle.length > 0) {
            $_w_icicle.attr("disabled", true);
            $(".btn").attr("disabled", true);
            _w_combat(_w_bustle, (function() {
                $_w_icicle.prop("value", "");
                $_w_icicle.attr("disabled", false);
                $(".btn").attr("disabled", false);
            }));
        }
    }));
    let _w_snarl = _w_grit("msgChannel");
    if (_w_snarl && _w_snarl.length > 0) {
        chrome.runtime.onMessage.addListener((function(message, sender, callback) {
            message && message.type == "_w_slate" && message.channel == _w_snarl && _w_smudge(message.links, message.currentPageUrl) & _w_flax(message.collections);
        }));
    }
    $("#dialog_add_all").on("click", (function() {
        $(".btn.add_task_btn:visible").click();
    }));
    $("#dialog_ext_all").on("click", (function() {
        $(".btn.add_task_btn:visible").click();
        $("#batch_ext_btn").click();
    }));
    $("#dialog_ext_all_in_new_window").on("click", (function() {
        $(".btn.add_task_btn:visible").click();
        setTimeout((function() {
            $("#batch_new_tab_ext_btn").click();
        }), 0);
    }));
    document.title = _w_ordeal("_w_sling");
    $("#i18n_charactistic_url_ext").text(_w_ordeal("_w_tack"));
    $("#i18n_group_keyword_filter").text(_w_ordeal("_w_duel"));
    $("#dialog_add_all").text(_w_ordeal("_w_truce"));
    $("#dialog_ext_all").text(_w_ordeal("_w_yokel"));
    $("#dialog_ext_all_in_new_window").text(_w_ordeal("_w_edict"));
    $("#grp_keyword_filter").attr("placeHolder", _w_ordeal("_w_flair"));
    $("#dialog_close_btn").text(_w_ordeal("_w_pillar"));
}));

window.waterBasic = function() {
    function init() {
        $("#group_container").css("height", $(window).height() - 280);
        let _w_stern = $(".grp_item:visible").outerWidth(true), colNum = 3, colSumHeight = [];
        for (let i = 0; i < colNum; i++) {
            colSumHeight.push(0);
        }
        $(".grp_item:visible").each((function() {
            let $_w_clot = $(this), idx = 0, minSumHeight = colSumHeight[0];
            for (let i = 0; i < colSumHeight.length; i++) {
                if (minSumHeight > colSumHeight[i]) {
                    minSumHeight = colSumHeight[i];
                    idx = i;
                }
            }
            $_w_clot.css({
                left: _w_stern * idx,
                top: minSumHeight
            });
            colSumHeight[idx] = colSumHeight[idx] + $_w_clot.outerHeight(true);
        }));
    }
    $(window).on("resize", (function() {
        init();
    }));
    return {
        init: init
    };
}();

function _w_smudge(_w_pirate, _w_slew) {
    if (_w_pirate.length == 0) {
        return;
    }
    let $_w_scathe = $("#links_filter_container");
    let $_w_hem = $("#links_filter_item_container");
    let $_w_cane = $_w_scathe.find(".add_task_btn").text(_w_ordeal("_w_dirge"));
    let $_w_truant = $_w_scathe.find(".ext_task_btn").text(_w_ordeal("_w_satire"));
    let $_w_patina = $_w_scathe.find(".new_window_ext_btn").text(_w_ordeal("_w_pilot"));
    let $_w_timbre = $_w_hem.find(".list-group-item#link_item_template").remove().removeAttr("id");
    $_w_scathe.find(".msg_links_filter_original_links").text(_w_ordeal("_w_zest"));
    let _w_tenant = function() {
        let _w_violet = "";
        $_w_hem.find(".list-group-item:visible").remove().each((function() {
            _w_violet += $(this).attr("data-url") + "\n";
        }));
        return _w_violet;
    };
    $_w_cane.on("click", (function() {
        $("#url_area").prop("value", $("#url_area").prop("value") + _w_tenant() + "\n");
        waterBasic.init();
        return false;
    }));
    $_w_truant.on("click", (function() {
        $("#url_area").prop("value", _w_tenant());
        $("#batch_ext_btn").click();
    }));
    $_w_patina.on("click", (function() {
        $("#url_area").prop("value", _w_tenant());
        setTimeout((function() {
            $("#batch_new_tab_ext_btn").click();
        }), 0);
    }));
    for (let link in _w_pirate) {
        let _w_breed = _w_pirate[link];
        let $_w_rind = $_w_timbre.clone();
        $_w_rind.attr("data-url", link);
        $_w_rind.find(".link_item_title").text(_w_breed).addClass(link == _w_slew ? "bold-text" : "");
        $_w_rind.find(".link_item_url").text(link);
        $_w_rind.appendTo($_w_hem);
        let _w_file = _w_breed + " " + link;
        $("#grp_keyword_filter").on("input change blur", (function() {
            let _w_clamp = $(this).prop("value").match(/\S+/g);
            if (!_w_clamp) {
                $_w_rind.show();
            } else {
                let _w_effigy = true;
                for (let i in _w_clamp) {
                    if (_w_file.indexOf(_w_clamp[i]) < 0) {
                        _w_effigy = false;
                        break;
                    }
                }
                if (_w_effigy) {
                    $_w_rind.show();
                } else {
                    $_w_rind.hide();
                }
            }
        }));
    }
}

function _w_flax(_w_logjam) {
    if (_w_logjam.length == 0) {
        return;
    }
    let $_w_spleen = $("#group_container");
    for (let idx = 0; idx < _w_logjam.length; ++idx) {
        let _w_sheen = _w_logjam[idx];
        let _w_tedium = _w_sheen["fillUrlList"];
        let _w_lackey = _w_sheen["fillUrlText"];
        let _w_slew = _w_sheen["currentPageUrl"];
        let _w_file = _w_sheen["urlList"].reduce((function(a, b) {
            return a + " " + b;
        })) + Object.values(_w_sheen["urlText"]).reduce((function(a, b) {
            return a + " " + b;
        }));
        let $_w_demise = $("<div />", {
            class: "list-group"
        });
        let $_w_dowry = $("<div />", {
            class: "col-md-4 col-sm-4 grp_item"
        });
        $_w_dowry.append($_w_demise);
        $_w_spleen.append($_w_dowry);
        let _w_crack = function(_w_mosaic, _w_moan, _w_torpor) {
            return $("<a />", {
                class: "list-group-item"
            }).append($("<h4 />", {
                class: "list-group-item-heading break_all_word" + (_w_torpor ? " bold-text" : ""),
                text: _w_mosaic
            })).append($("<p />", {
                class: "list-group-item-text break_all_word",
                text: _w_moan
            }));
        };
        let _w_arena = 8;
        for (let i = 0; i < _w_tedium.length; ++i) {
            if (i < _w_arena - 1 || _w_arena == _w_tedium.length) {
                if (_w_slew == _w_tedium[i]) {
                    $_w_demise.append(_w_crack(_w_lackey[_w_tedium[i]], _w_tedium[i], true));
                } else {
                    $_w_demise.append(_w_crack(_w_lackey[_w_tedium[i]], _w_tedium[i]));
                }
            } else {
                $_w_demise.append(_w_crack("......", _w_tedium.length - (_w_arena - 1) + _w_ordeal("_w_bough")));
                break;
            }
        }
        let _w_rhyme = function(_w_moan, _w_pane) {
            return $("<button />", {
                class: "btn " + _w_pane,
                text: _w_moan,
                "data-dismiss": "modal"
            });
        };
        let _w_court = function($btn) {
            return $("<div />", {
                class: "btn-group"
            }).append($btn);
        };
        let $_w_menace = _w_rhyme(_w_ordeal("_w_dirge"), "btn-primary add_task_btn");
        let $_w_wrist = _w_rhyme(_w_ordeal("_w_satire"), "btn-pwd");
        let $_w_cement = _w_rhyme(_w_ordeal("_w_pilot"), "btn-success");
        let $_w_tiff = $("<div />", {
            class: "btn-toolbar"
        });
        $_w_tiff.append(_w_court($_w_menace)).append(_w_court($_w_wrist)).append(_w_court($_w_cement));
        $_w_demise.prepend($("<a />", {
            class: "list-group-item"
        }).append($("<h4 />", {
            class: "list-group-item-heading break_all_word"
        }).append($_w_tiff)));
        let _w_bout = function(a, b) {
            return a + "\n" + b;
        };
        $_w_menace.on("click", (function() {
            $("#url_area").prop("value", $("#url_area").prop("value") + _w_tedium.reduce(_w_bout) + "\n");
            $_w_dowry.remove();
            waterBasic.init();
            return false;
        }));
        $_w_wrist.on("click", (function() {
            $("#url_area").prop("value", _w_tedium.reduce(_w_bout));
            $("#batch_ext_btn").click();
        }));
        $_w_cement.on("click", (function() {
            $("#url_area").prop("value", _w_tedium.reduce(_w_bout));
            setTimeout((function() {
                $("#batch_new_tab_ext_btn").click();
            }), 0);
        }));
        $("#grp_keyword_filter").on("input change blur", (function() {
            let _w_clamp = $(this).prop("value").match(/\S+/g);
            if (!_w_clamp) {
                $_w_dowry.show();
            } else {
                let _w_effigy = true;
                for (let i in _w_clamp) {
                    if (_w_file.indexOf(_w_clamp[i]) < 0) {
                        _w_effigy = false;
                        break;
                    }
                }
                if (_w_effigy) {
                    $_w_dowry.show();
                } else {
                    $_w_dowry.hide();
                }
            }
            waterBasic.init();
        }));
    }
    $("#characteristic_ext").on("shown.bs.modal", (function() {
        waterBasic.init();
    })).modal();
}

function _w_tract(_w_bustle) {
    let _w_limbo = 2;
    _w_roe()._w_hedge(_w_gnome);
    _w_roe()._w_mint(_w_gnome, _w_limbo);
    let _w_sop = _w_roe()._w_helmet(_w_gnome) + _w_elegy();
    let _w_regent = {
        tabId: _w_gnome,
        lastFullScroll: 1,
        lastRequest: 1,
        lastPushImage: 1
    };
    _w_roe()._w_grove.registerTab(_w_regent.tabId, _w_regent);
    _w_shawl(_w_bustle, _w_regent);
    _w_glee(_w_limbo, _w_sop);
}

function _w_combat(_w_bustle, _w_siren) {
    let _w_limbo = 0;
    let _w_scab = _w_bustle.length;
    _w_roe()._w_hedge(_w_gnome);
    _w_roe()._w_mint(_w_gnome, _w_limbo);
    let _w_sop = _w_roe()._w_helmet(_w_gnome) + _w_elegy();
    let _w_memoir = document.title;
    (function doMultiExt(_w_bustle) {
        if (!_w_bustle || _w_bustle.length == 0) {
            if (_w_siren) {
                _w_siren();
            }
            document.title = _w_memoir;
            return;
        }
        document.title = "Tasks: 0/" + _w_bustle.length + "/" + _w_scab + " - " + _w_memoir;
        let _w_score = _w_bustle.shift();
        chrome.tabs.create({
            url: _w_score,
            active: false
        }, (function(tab) {
            setTimeout((function() {
                let _w_rigor = tab.id;
                let _w_regent = {
                    tabId: _w_rigor,
                    lastFullScroll: 1,
                    lastRequest: 1,
                    lastPushImage: 1
                };
                _w_roe()._w_grove.registerTab(_w_regent.tabId, _w_regent);
                let _w_sinew = 1500;
                let _w_gaze = 1500;
                let _w_lounge = 2e3;
                let _w_gaggle = null;
                _w_gaggle = setInterval((function() {
                    document.title = "Tasks: " + _w_regent.requestNum() + "/" + _w_bustle.length + "/" + _w_scab + " - " + _w_memoir;
                    let _w_foul = (new Date).getTime();
                    if (_w_regent.requestNum() == 0 && _w_foul - _w_regent["lastFullScroll"] > _w_sinew && _w_foul - _w_regent["lastRequest"] > _w_gaze && _w_foul - _w_regent["lastPushImage"] > _w_lounge) {
                        (function _w_harbor() {
                            _w_gleam(tab.id, (function() {
                                if (chrome.runtime.lastError && chrome.runtime.lastError.message.indexOf("dragging") > 0) {
                                    console.log(chrome.runtime.lastError.message, "Retry in one second.");
                                    setTimeout(_w_harbor, 1e3);
                                }
                            }));
                        })();
                        doMultiExt(_w_bustle);
                        clearInterval(_w_gaggle);
                    }
                }), 100);
                _w_roe()._w_defect(tab.id, _w_limbo, _w_sop);
                _w_roe()._w_plinth(tab.id, _w_roe()._w_helmet(_w_gnome));
                _w_roe()._w_herd(tab.id, [ {
                    file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
                    runAt: "document_end",
                    allFrames: true
                }, {
                    file: "scripts/function.js",
                    runAt: "document_end",
                    allFrames: true
                }, {
                    code: "_w_ramble();",
                    runAt: "document_end",
                    allFrames: true
                }, {
                    code: "_w_ennui();",
                    runAt: "document_end",
                    allFrames: true
                } ]);
            }), 512);
        }));
    })(_w_bustle);
}

function _w_shawl(_w_debate, _w_regent) {
    document.title = _w_ordeal("_w_bigot") + "(" + (new Date).getTime() + ")";
    let $_w_soil = $("body");
    $_w_soil.html("");
    $_w_soil.append(_w_ordeal("_w_suture") + "<br />\n");
    $_w_soil.append($("<div />", {
        id: "linkCounter"
    }));
    $_w_soil.append($("<div />", {
        id: "attrSniffCounter"
    }));
    $_w_soil.append($("<div />", {
        id: "ajaxTaskCounter"
    }));
    let _w_tackle = 0;
    setInterval((function() {
        $("#linkCounter").html(_w_ordeal("_w_orchid") + _w_tackle + "/" + _w_debate.length);
        $("#attrSniffCounter").html(_w_ordeal("_w_fold") + _w_sheath.getProcessingNum() + "/" + _w_sheath.getTaskNum() + "/" + Object.keys(_w_prick).length);
        if (window.funExecutePool) {
            $("#ajaxTaskCounter").html(_w_ordeal("_w_loop") + window.funExecutePool.getProcessingNum() + "/" + window.funExecutePool.getTaskNum() + " - " + _w_regent.requestNum());
        }
        let _w_sinew = 1500;
        let _w_gaze = 1500;
        let _w_lounge = 2e3;
        let _w_foul = (new Date).getTime();
        if (_w_regent.requestNum() == 0 && _w_foul - _w_regent["lastFullScroll"] > _w_sinew && _w_foul - _w_regent["lastRequest"] > _w_gaze && _w_foul - _w_regent["lastPushImage"] > _w_lounge) {
            if (_w_tackle >= _w_debate.length) return;
            if ($(".prefetch_link").length > 0) return;
            if (_w_sheath && _w_sheath.getTaskNum() > 64) return;
            if (window.funExecutePool && window.funExecutePool.getTaskNum() > 4) return;
            let _w_score = _w_debate[_w_tackle++];
            $_w_soil.append($("<a />", {
                class: "prefetch_link",
                href: _w_score
            }));
        }
    }), 100);
}

function _w_warp(link) {
    $(link).remove();
}