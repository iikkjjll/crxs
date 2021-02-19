"use strict";var e={g:function(n,t){return"vimiumContent|"+n+(t?"|"+t:"")},Yt:function(t,e){var o=chrome.contentSettings;return o?o[t]&&!/^[A-Z]/.test(t)&&o[t].get?!(!e.startsWith("read:")&&r.D.test(e)&&!e.startsWith(v))&&(a.Yt(n("changeItsCS")),true):(a.nr(n("unknownCS",[t])),true):(a.nr("This version of Vimium C has no permissions to set CSs"),true)},m:function(t,e){var o,i,c,u,l,s,_,g,d,m;if(t.startsWith("file:"))return(o=f>=56?1:e>1?2:0)?(a.Yt(1===o?n("setFileCS",[56]):n("setFolderCS")),[]):[t.split(/[?#]/,1)[0]];if(t.startsWith("ftp:"))return a.Yt(n("setFTPCS")),[];if(i=t.match(/^([^:]+:\/\/)([^\/]+)/),c=r.A.exec(i[2]),u=[(t=i[1])+(l=c[3]+(c[4]||""))+"/*"],e<2||r.W(c[3],0))return u;for(c=null,_=(s=r.oe(l))[0],g=s[1],d=Math.min(_.length-g,e-1),m=0;m<d;m++)l=l.slice(_[m].length+1),u.push(t+l+"/*");return u.push(t+"*."+l+"/*"),d===_.length-g&&"http://"===t&&u.push("https://*."+l+"/*"),u},v:function(n){var t,e,r=n.length;do{e=new URL(n[--r].s.u).host,t||(t=e)}while(1<r&&e===t);return e!==t},k:function(n,t){var o=chrome.contentSettings,i=o&&o[n];i&&i.clear&&(null==t?(i.clear({scope:"regular"}),i.clear({scope:"incognito_session_only"},r.x),localStorage.removeItem(e.g(n))):i.clear({scope:t?"incognito_session_only":"regular"}))},Lt:function(t,r){var o=""+t.type;if(!e.Yt(o,"http://a.cc/"))return e.k(o,r?r.s.a:2===m.ft),a.nr(n("csCleared",[n(o)||o]))},Wt:function(n,t,r){var o=""+n.type,i=r[0];return n.incognito?e.er(t,o,i):e.rr(o,t,i,"reopen"===n.action)},rr:function(n,t,o,i){var c=r.te(o.url);e.Yt(n,c)||chrome.contentSettings[n].get({primaryUrl:c,incognito:o.incognito},function(u){e.or(n,c,t,{scope:o.incognito?"incognito_session_only":"regular",setting:u&&"allow"===u.setting?"block":"allow"},function(t){var c,u,l;if(!t)return o.incognito||(c=e.g(n),"1"!==localStorage.getItem(c)&&localStorage.setItem(c,"1")),l=f>=70&&(u=a.gn(o.id))&&u.length>2&&e.v(u),o.incognito||i?(++o.index,a.zt(o)):o.index>0?a.zt(o,l?0:2):void chrome.windows.getCurrent({populate:true},function(n){return n&&"normal"===n.type?a.zt(o,l?0:n.tabs.length>1?2:1):chrome.tabs.reload(r.x),r.x()})})})},er:function(n,t,o){if(l.C.qn)return a.Yt("setIncogCS");var i=r.te(o.url);e.Yt(t,i)||chrome.contentSettings[t].get({primaryUrl:i,incognito:true},function(c){return r.x()?(chrome.contentSettings[t].get({primaryUrl:i},function(r){r&&"allow"===r.setting||chrome.windows.create({type:"normal",incognito:true,focused:false,url:"about:blank"},function(r){var c=r.tabs[0].id;return e.ir(n,t,o,i,r.id,true,function(){chrome.tabs.remove(c)})})}),r.x()):c&&"allow"===c.setting&&o.incognito?e.cr(o):void chrome.windows.getAll(function(r){if((r=r.filter(function(n){return n.incognito&&"normal"===n.type})).length){if(c&&"allow"===c.setting)return e.cr(o,r[r.length-1].id);var a=o.windowId,u=o.incognito&&r.some(function(n){return n.id===a});return e.ir(n,t,o,i,u?void 0:r[r.length-1].id)}console.log("%cContentSettings.ensure","color:red","get incognito content settings",c," but can not find an incognito window.")})})},ir:function(n,t,r,o,i,c,a){var u=e.ar.bind(null,r,i,a);return e.or(t,o,n,{scope:"incognito_session_only",setting:"allow"},c&&i!==r.windowId?function(n){if(n)return u(n);chrome.windows.get(r.windowId,u)}:u)},or:function(n,t,o,i,c){var a,u,l,s,_=false,f=chrome.contentSettings[n],g=function(){var n=r.x();return n&&console.log("[%o]",Date.now(),n),_||(--m,((_=!!n)||0===m)&&setTimeout(c,0,_)),n},d=e.m(t,0|o),m=d.length;if(m<=0)return c(true);for(r.T(i),a=0,u=d;a<u.length;a++)l=u[a],(s=r.r(r.L(),i)).primaryPattern=l,f.set(s,g)},ar:function(n,t,r,o){true!==o&&e.cr(n,t),r&&r(),true!==o&&t&&chrome.windows.update(t,{focused:true,state:o?o.state:void 0})},cr:function(n,t){n.active=true,"number"!=typeof t||n.windowId===t?++n.index:(n.index=void 0,n.windowId=t),a.zt(n)}},j={ce:localStorage,ur:null,sn:function(n,t,e){var r,o,c,a=n.l,u=n.n,l=n.u,s=n.s;a&&0===s[0]&&0===s[1]&&(2===s.length?(r=l.indexOf("#"))>0&&r<l.length-1&&s.push(l.slice(r)):(s[2]||"").length<2&&s.pop()),o=j.lr(u,a?l:""),c=JSON.stringify(a?s:{tabId:e,url:l,scroll:s}),t?(j.ur||(i.sr(),j.ur=new Map)).set(o,c):j.ce.setItem(o,c)},_r:function(n,t){n.postMessage({N:10,H:null,c:4,n:1,a:t})},Qt:function(n,t){var e=t.s.t;n.s?j.sn(n,t.s.a,e):(t=a.gn(e,0)||t)&&t.postMessage({N:11,n:n.n})},Gt:function(t,e){var o,i,c,u,l,s,_,f=t.l,g=t.n,d=j.lr(g,f?t.u:""),m=e.s.a&&j.ur&&j.ur.get(d)||j.ce.getItem(d);return f&&((o=m?JSON.parse(m):null)||(c=void 0,u=void 0,(i=t.o)&&(c=+i.x)>=0&&(u=+i.y)>=0&&(t.s=o=[c,u,i.h])),o)?j._r(e,{n:g,s:o,l:2}):m?(s=+(l=JSON.parse(m)).tabId,(_={u:l.url,s:l.scroll,t:l.tabId,n:g,p:true}).p=false!==t.p&&0===_.s[1]&&0===_.s[0]&&!!r.Te(_.u),s>=0&&a.gn(s)?void chrome.tabs.get(s,j.fr.bind(0,_)):a.ot[19](_)):a.nr(n("noMark",[n(f?"Local_":"Global_"),g]))},fr:function(n,t){var e=(t.url||t.pendingUrl).split("#",1)[0];return e===n.u||n.p&&n.u.startsWith(e)?(a.ot[5]({s:t.id}),j.Ct(n,t)):a.ot[19](n)},lr:function(n,t){return t?"vimiumMark|"+r.Le(t.split("#",1)[0])+(t.length>1?"|"+n:""):"vimiumGlobalMark|"+n},Ct:function(n,t){var e=t.id,r=a.gn(e,0);if(r&&j._r(r,{n:n.n,s:n.s,l:0}),n.t!==e&&n.n)return j.sn(n,2===m.ft,e)},Kt:function(t){var e,r,o,i,c,u,l,s=j.lr("",t),_=[],f=j.ce;for(e=0,r=f.length;e<r;e++)(o=f.key(e)).startsWith(s)&&_.push(o);for(i=0,c=_;i<c.length;i++)f.removeItem(o=c[i]);return u=_.length,(l=j.ur)&&l.forEach(function(n,t){t.startsWith(s)&&(u++,l.delete(t))}),a.nr(n("markRemoved",[u,n(t?"#"===t?"allLocal":"41":"39"),n(1!==u?"have":"has")]))}},h={oo:"findModeRawQueryList",gr:null,dr:null,mr:0,vr:function(){var n=l.on(h.oo);h.gr=n?n.split("\n"):[],h.vr=null},Tt:function(n,t,e){var o,c,a=h;return a.vr&&a.vr(),o=n?a.dr||(i.sr(),a.dr=a.gr.slice(0)):a.gr,t?(t=t.replace(/\n/g," "),n?a.hr(t,o,true):((c=a.hr(t=r.S(t,0,99),o))&&l.sn(a.oo,c),a.dr?a.hr(t,a.dr,true):void 0)):o[o.length-(e||1)]||""},hr:function(n,t,e){var r=t.lastIndexOf(n);if(r>=0){if(r===t.length-1)return;t.splice(r,1)}else t.length>=50&&t.shift();if(t.push(n),!e)return t.join("\n")},qt:function(n){n?h.dr&&(h.dr=[]):(h.vr=null,h.gr=[],l.sn(h.oo,""))}},i={Br:false,mr:0,sr:function(){i.Br||(chrome.windows.onRemoved.addListener(i.kr),i.Br=true)},kr:function(){i.Br&&(i.mr=i.mr||setTimeout(i.pr,34))},pr:function(){var n,t,e;if(i.mr=0,f>=52){for(e in n=false,t=a.gn())if(t[+e][0].s.a){n=true;break}if(n)return}chrome.windows.getAll(function(n){n.some(function(n){return n.incognito})||i.Cr()})},Cr:function(){h.dr=null,j.ur=null,chrome.windows.onRemoved.removeListener(i.kr),i.Br=false}},k={Sr:[f>=74?2:0,f>=76?2:0],Ur:0,on:function(n){var t=k.Sr[n];return"object"==typeof t?t.matches:null},br:function(n,t){var e,r=k,o=r.Sr,i=o[n],c=n?"prefers-color-scheme":"prefers-reduced-motion";1===i&&t&&(o[n]=i=matchMedia("("+c+")").matches?2:0),t&&2===i?((e=matchMedia("("+c+": "+(n?"dark":"reduce")+")")).onchange=r.wr,o[n]=e,r.Ur||f<1e3&&(r.Ur=setInterval(k.yr,6e4)),r.Ir(n,0)):t||"object"!=typeof i||(i.onchange=null,o[n]=2,r.Ur>0&&(o.some(function(n){return"object"==typeof n})||(clearInterval(r.Ur),r.Ur=0)),r.Ir(n,0))},Ir:function(n,t){var e,r,o,i,c,u,s=k.Sr[n];r=(e=l).Xe,o=n?"dark":"less-motion",u=e.un(c=n?"d":"m",i=!!("object"==typeof s)&&s.matches),r[c]!==u&&(r[c]=u,t||e.hn({N:6,d:[c]})),a.ot[25]({t:o,e:i||(" "+e.ce.vomnibarOptions.styles+" ").includes(" "+o+" "),b:!t})},yr:function(){var n,t;for(t=(n=k.Sr).length;0<=--t;)"object"==typeof n[t]&&k.Ir(t)},wr:function(){k.Ur>0&&clearInterval(k.Ur),k.Ur=-1;var n=k.Sr.indexOf(this);n>=0&&k.Ir(n)}},m={Ft:new Map,gt:chrome.tabs.TAB_ID_NONE||-1,ut:chrome.windows.WINDOW_ID_NONE||-1,wt:-1,ft:1,Ot:null};r.Ae(120,function(){function n(n){var t=performance.now();t-f>666&&(u.set(m.gt,{i:++_,t:1===l.Xe.o?Date.now():t}),_>=2047&&(u.forEach(function(n,t){n.i<1025?u.delete(t):n.i-=1024}),_=1024)),m.gt=n.tabId,f=t}function t(t){if(!t||!t[0])return r.x();var e=t[0],o=e.windowId,i=m.ut;return o!==i&&(m.ut=o,m.wt=i),m.ft=e.incognito?2:1,d.Mr(),n({tabId:e.id})}var o,i,c,a,u=m.Ft,s=m.ut,_=1,f=0;for(chrome.tabs.onActivated.addListener(n),chrome.windows.onFocusChanged.addListener(function(n){n!==s&&chrome.tabs.query({windowId:n,active:true},t)}),chrome.tabs.query({currentWindow:true,active:true},function(n){f=performance.now();var t=n&&n[0];if(!t)return r.x();m.gt=t.id,m.ut=t.windowId,m.ft=t.incognito?2:1}),m.Ot=function(n,t){return u.get(t.id).i-u.get(n.id).i},(o=l).mn.autoDarkMode=o.mn.autoReduceMotion=function(n,t){k.br(t.length>12?0:1,n)},o.pn("autoDarkMode"),o.pn("autoReduceMotion"),o.bn=k.Ir,o.wn=k.yr,i=0,c=["images","plugins","javascript","cookies"];i<c.length;i++)a=c[i],null!=localStorage.getItem(e.g(a))&&setTimeout(e.k,100,a)}),l.De.Qe=function(){var t,e,r;for(l.De.Qe=null,t=l.nn=[],e=["$1","$2","$3","$4"],r=0;r<118;r++)t.push(n(""+r,e))},l.De.Ve|=2,a.Bn(),chrome.extension.isAllowedIncognitoAccess(function(n){l.C.qn=false===n});