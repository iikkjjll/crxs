function aiparser(e){var r=0;function t(t){new ParsedPItem(t,r++,e,function(r){r.width>300&&chrome.runtime.sendMessage({cmd:"ADD_IMG",tabId:e.id,item:r})})}var a=document.querySelector("img.MMImage_preview");if(a){var i=document.querySelector('.serp-item[data-bem*="'+a.src+'"]'),s=JSON.parse(i.dataset.bem),n=[];var c=-1;var d=document.querySelectorAll(".MMRelatedImages-Tiles .MMTiledImages-Item img"),u=0;!function e(){if(!(u>=d.length)){var r,a,i,l=d[u];if(tid=(r=l.src,a=(a=r.match(/id=(.*?)($|&)/))?a[1]:""),tid){var m=function(e){for(var r=0;r<n.length;r++)if(n[r].tid==e)return n[r];return null}(tid);m?(m.bid?t({src:"https://im0-tub-ru.yandex.net/i?id="+m.bid+"&n=13&w="+m.btw+"&h="+m.bth}):t({src:m.s[m.s.length-1].iu}),u++,e()):(i=function(r){r&&e()},c>=n.length?i(null):-1==c?$.ajax({url:"https://yandex.ru/images-apphost/rim?docid="+s["serp-item"].rimId+"&lang=ru",dataType:"json",success:function(e){n=n.concat(e.rld),c++,i(e.rld)}}):$.ajax({url:"https://yandex.ru/images-apphost/rim?docid="+n[c].id+"&lang=ru",dataType:"json",success:function(e){n=n.concat(e.rld),c++,i(e.rld)}}))}else t({src:l.src}),u++,e()}}()}else{var l=[];document.querySelectorAll("img.serp-item__thumb").forEach(function(e){var r=e.closest(".serp-item"),t=JSON.parse(r.dataset.bem)["serp-item"].preview[0];l.push({src:t.url,smallUrl:e.src,width:t.w,height:t.h})});for(var m=0;m<l.length;m++)t(l[m])}}window.aiparser=aiparser;