/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

function _w_canto($_w_scythe) {
    let _w_ivory = {};
    $_w_scythe.each((function() {
        let _w_cull = $(this).attr("data-src");
        let _w_renown = $(this).attr("data-referer");
        if (_w_cull) {
            _w_ivory[_w_cull] = _w_renown;
            $(this).attr("data-src", _w_cull);
            _w_ivory[_w_cull] = _w_renown;
        }
    }));
    if (Object.keys(_w_ivory).length > 0) {
        chrome.runtime.sendMessage(chrome.runtime.id, {
            type: "_w_yacht",
            refererMap: _w_ivory
        }, (function callback(data) {
            $_w_scythe.each((function() {
                $(this).on("error", (function() {
                    let _w_ferret = $(this).attr("data-src");
                    let $_w_tire = $(this);
                    $.ajax({
                        method: "get",
                        timeout: _w_viand,
                        url: _w_ferret
                    }).fail((function(xhr) {
                        if (xhr.status === 404) {
                            _w_ferret = _w_errand(_w_ferret);
                            $_w_tire.attr("data-src", _w_ferret);
                        }
                    })).always((function() {
                        setTimeout((function() {
                            $_w_tire.removeAttr("src").attr("src", _w_ferret);
                        }), 2e3);
                    }));
                }));
                if ($(this).attr("src").indexOf("/static/gallery/favorite/image/loading.gif") >= 0 || $(this).attr("src").indexOf("/static/gallery/favorite/image/folder_02.png") >= 0) {
                    $(this).attr("src", $(this).attr("data-src"));
                } else {
                    (new Image).src = $(this).attr("data-src");
                }
            }));
        }));
    }
}

(function() {
    _w_canto($("img[data-src]"));
    let _w_gamble = new MutationObserver((function(_w_goblet) {
        _w_goblet.map((function(record) {
            if (record.addedNodes) {
                let _w_bust = {};
                for (let i = 0; i < record.addedNodes.length; ++i) {
                    let _w_purse = record.addedNodes.item(i);
                    let _w_scythe = $(_w_purse).find("img").toArray();
                    $(_w_purse).is("IMG") && _w_scythe.push(_w_purse);
                    _w_canto($(_w_scythe));
                }
            }
        }));
    }));
    let _w_splint = document.body;
    let _w_puddle = {
        childList: true,
        subtree: true
    };
    _w_gamble.observe(_w_splint, _w_puddle);
    if ($(".cxyz_btn_edit_folder").length > 0) {
        let $_w_axiom = $(".callout_btn_menu");
        let $_w_spire = $("<button />", {
            class: "btn btn-success",
            title: " 标记收藏到此文件夹"
        }).prepend($("<span />", {
            class: "glyphicon glyphicon-map-marker"
        }));
        $_w_axiom.append($_w_spire);
        $_w_spire.on("click", (function() {
            let _w_psyche = {};
            _w_psyche.markTime = parseInt((new Date).getTime() / 1e3);
            _w_psyche.categoryId = parseInt($(".cxyz_btn_edit_folder").attr("data-categoryId"));
            _w_psyche.folderId = parseInt($(".cxyz_btn_edit_folder").attr("value"));
            chrome.runtime.sendMessage(chrome.runtime.id, {
                type: "_w_sod",
                folderMark: JSON.stringify(_w_psyche)
            });
            let $_w_asset = $("<span>(标记成功！)</span>");
            $(this).append($_w_asset);
            setTimeout((function() {
                $_w_asset.remove();
            }), 2e3);
        }));
    }
    if ($("#rs_lt_list").length > 0 || $("#rs_eq_list").length > 0) {
        chrome.runtime.sendMessage(chrome.runtime.id, {
            type: "_w_lust"
        }, (function(_w_pauper) {
            let $_w_palate = $("#rs_lt_list");
            let $_w_gaffe = $("#rs_eq_list");
            if (_w_pauper.length > 0) {
                if ($_w_palate) $_w_palate.append($("<li />", {
                    class: "divider",
                    role: "separator"
                }));
                if ($_w_gaffe) $_w_gaffe.append($("<li />", {
                    class: "divider",
                    role: "separator"
                }));
            }
            for (let i = 0; i < _w_pauper.length; ++i) {
                let _w_usury = _w_pauper[i];
                let _w_grotto = _w_usury.split("x");
                let _w_pastel = parseInt(_w_grotto[0]);
                let _w_boon = parseInt(_w_grotto[1]);
                if ($_w_palate) {
                    let $_w_chasm = $("<a />", {
                        class: "rs_lt_item",
                        text: _w_usury,
                        "data-width": _w_pastel,
                        "data-height": _w_boon
                    });
                    $_w_palate.append($("<li />").append($_w_chasm));
                }
                if ($_w_gaffe) {
                    let $_w_jargon = $("<a />", {
                        class: "rs_eq_item",
                        text: _w_usury,
                        "data-width": _w_pastel,
                        "data-height": _w_boon
                    });
                    $_w_gaffe.append($("<li />").append($_w_jargon));
                }
            }
        }));
    }
})();