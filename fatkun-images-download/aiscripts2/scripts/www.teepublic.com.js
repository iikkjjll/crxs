function aiparser(e){if(top==window){var t,a,r=0,i=document.querySelectorAll(".jsDesignContainer");if(!(i.length>0))return-1;i.forEach(i=>{t=i.querySelector(".m-tiles__preview img").dataset.src.replace(/t_Preview\/b_rgb:.*c_limit,f_auto,h_\d+,q_90,w_\d+/,"l_text:helvetica_16_bold:134de18e2ab48975a040d1a7b6fd7b0f19ccead7,o_0/c_fit,f_png,h_500,q_90,w_500").replace(/\.jpg$|$/,".png"),a=i.dataset.gtmDesignTitle,new ParsedPItem({src:t.replace("http:",location.protocol).replace("/640?","/0?"),alt:a},r++,e,function(t){chrome.runtime.sendMessage({cmd:"ADD_IMG",tabId:e.id,item:t})})})}}window.aiparser=aiparser;