/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

$((function() {
    document.title = _w_ordeal("_w_layman");
    $("#pop_main").append($("<ul />", {
        class: "nav nav-pills nav-stacked"
    }).append($("<li />").append($("<a />", {
        class: "extBtn",
        href: "#",
        "data-level": 0,
        text: _w_ordeal("_w_beam")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-flash"
    })))).append($("<li />").append($("<a />", {
        class: "extBtn",
        href: "#",
        "data-level": 1,
        text: _w_ordeal("_w_pariah")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-warning-sign"
    })))).append($("<li />").append($("<a />", {
        class: "extBtn",
        href: "#",
        "data-level": 2,
        text: _w_ordeal("_w_acme")
    }).prepend($("<span />", {
        class: "fa fa-bomb"
    })))).append($("<li />").append($("<a />", {
        id: "multiUrlExtractor",
        class: "multiExtBtn font-weight-bold info",
        target: "_blank",
        href: "./multiUrlExtractor.html",
        text: _w_ordeal("_w_comity")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-list-alt"
    })))).append($("<li />", {
        class: "divider"
    })).append($("<li />").append($("<a />", {
        id: "_imageAssistant_qrcode_",
        class: "optionBtn",
        href: "#",
        text: _w_ordeal("_w_scrub")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-qrcode"
    })))).append($("<li />").append($("<a />", {
        id: "_imageAssistant_editor_",
        class: "optionBtn",
        target: "_imageAssistant_editor_",
        href: "./imageEditor.html",
        text: _w_ordeal("_w_oath")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-edit"
    })))).append($("<li />", {
        class: "divider"
    })).append($("<li />").append($("<a />", {
        id: "_cxyz_fav_",
        class: "optionBtn",
        target: "_imageAssistant_favorite",
        href: "./favorite.html",
        text: _w_ordeal("_w_armada")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-folder-open"
    })))).append($("<li />", {
        class: "divider"
    })).append($("<li />").append($("<a />", {
        class: "optionBtn",
        target: "_imageAssistant_options",
        href: "./options.html",
        text: _w_ordeal("_w_brace")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-wrench"
    })))).append($("<li />").append($("<a />", {
        class: "optionBtn",
        target: "_imageAssistant_options",
        href: "./options.html?showMsg=about",
        text: _w_ordeal("_w_baton")
    }).append($("<span />", {
        id: "newVersion",
        text: "new"
    })).prepend($("<span />", {
        class: "glyphicon glyphicon-copyright-mark"
    })))));
    $(".extBtn").click((function() {
        let _w_limbo = $(this).attr("data-level");
        _w_roe()._w_cygnet(_w_limbo);
        window.close();
    }));
    if (localStorage["version"] && localStorage["version"] > chrome.runtime.getManifest().version) {
        $("#newVersion").show();
    }
    $.getJSON(_w_scurvy, (function(data) {
        let $_w_lever = $("#_cxyz_fav_");
        if (data.shortName) {
            let _w_issue = DOMPurify.sanitize(data.icon, {
                WHOLE_DOCUMENT: true
            });
            let $_w_rifle = $("<div />", {
                id: "popup_user_info"
            });
            let $_w_magpie = $("<img />", {
                src: _w_issue,
                id: "popup_avatar"
            });
            let $_w_cravat = $("<span />", {
                text: " " + data.shortName
            });
            $_w_rifle.append($_w_magpie);
            $_w_rifle.append($_w_cravat);
            $_w_lever.attr("href", _w_scurvy);
            $_w_lever.append($_w_rifle);
        } else {}
    }));
    $("#multiUrlExtractor").on("click", (function() {
        _w_roe()._w_advent();
        return false;
    }));
    $("#_imageAssistant_qrcode_").on("click", (function() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (function(_w_cavern) {
            if (!_w_cavern || _w_cavern.length === 0) return;
            let _w_reaper = _w_cavern[0];
            let _w_brink = _w_reaper.url;
            if (_w_brink.indexOf("#") > 0) {
                _w_brink = _w_brink.substring(0, _w_brink.indexOf("#"));
            }
            _w_hermit(_w_brink, false);
        }));
        return false;
    }));
}));