function aiparser(t){var r=0;function a(t,r){return(Array(r).join(0)+t).slice(-r)}function c(a){new ParsedPItem({src:a.src.match("^http")?a.src:location.protocol+a.src,alt:a.alt,group:a.group,groupIndex:a.groupIndex},r++,t,function(r){chrome.runtime.sendMessage({cmd:"ADD_IMG",tabId:t.id,item:r})})}var e=location.href.match("\\bid=(\\d+)")[1];fetch(`https://ec.snssdk.com/product/fxgajaxstaticitem?b_type_new=0&device_id=0&is_outside=1&id=${e}&preview=0`).then(t=>t.json()).then(t=>{t.data.img_list.forEach((t,r)=>c({src:t,alt:`主图-${a(r+1,2)}`,group:"主图",groupIndex:0}));var o=t.data.spec_info[0].list;fetch(`https://ec.snssdk.com/product/getstock?id=${e}`).then(t=>t.json()).then(t=>{var r=t.data.pic_map;o.forEach((t,e)=>{c({src:`https://sf1-ttcdn-tos.pstatp.com/obj/${r[t.id]}`,alt:"SKU-"+a(e+1,2)+"-"+t.name,group:"SKU",groupIndex:1})})}),t.data.description.match(/src="(.*?)"/g).map(t=>t.match('"(.*)"')[1]).forEach(t=>{c({src:t,alt:`详情-${a(r+1,2)}`,group:"详情",groupIndex:2})})})}window.aiparser=aiparser;