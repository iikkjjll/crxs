/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: 睡虫子(Joey)
 * Copyright (C) 2013-2021 普利坞(Pullywood.com)
**/
"use strict";

function _w_rout() {
    chrome.runtime.sendMessage(_w_coffer(), {
        type: "_w_mint",
        fetchLevel: 0
    });
}

function _w_ritual(_w_sonnet) {
    if (!_w_sonnet) return;
    let _w_feud = window.setInterval((function() {
        for (let idx in _w_sonnet) {
            let $_w_onset = $(_w_sonnet[idx]);
            if ($_w_onset.length > 0) {
                window.clearInterval(_w_feud);
                let _w_grill = $_w_onset.get(0).href;
                chrome.runtime.sendMessage(_w_coffer(), {
                    type: "_w_deed",
                    url: _w_grill,
                    action: "_w_rout",
                    createNewTab: false
                });
            }
        }
    }), 256);
}

function _w_knave() {
    _w_ritual([ "a[href*='search']:contains('全部尺寸')", "a[href*='search']:contains('所有大小')", "a[href*='search']:contains('All sizes')" ]);
}

function _w_delta() {
    _w_ritual([ "a[href*='search']:contains('外观类似的图片')", "a[href*='search']:contains('看起來相似的圖片')", "a[href*='search']:contains('Visually similar images')" ]);
}

