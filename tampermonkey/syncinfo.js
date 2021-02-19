'use strict';Registry.require(["promise","helper","cloud","tools"],()=>{const v=Registry.log,k=Registry.get("promise"),I=Registry.get("helper"),K=Registry.get("cloud"),L=Registry.get("tools");let p=0;const u={ePASTEBIN:1,eCHROMESYNC:2,eSYNCFS:3,eGDRIVE:4,eDROPBOX:5,eWEBDAV:6,eYANDEX:7,eONEDRIVE:8};let E=[],G=!1;const q=(()=>{var m=F=>{const y=F.type,J=F.id;let n;const H=(e,g)=>{if(g==p){var h=e.name;g=/.user.js$/;v.log("si: cloud file changed",h,e);(h.match(/.meta.json$/)||h.match(g))&&E.forEach(l=>
{l(h)})}};let w={},D;return{init:function(e){n=K[y](I.assign(e,{path:"sync"}));return k.Pledge().then(()=>{if(!n.credentials&&!e.basic_auth)return n.list()}).then(()=>{D||(D=n.changes.listen(),D.progress(g=>{H(g,J)}));return!0})},list:e=>n.list(e).then(g=>{w={};const h={},l={};let b,f;const c=Date.now();g.forEach(a=>{w[a.name]=a;var d=/.meta.json$/;const r=/.user.js$/;if(a.modified>c)v.log("si: ignore future list item",c,a);else if((b=a.name.match(d))||(f=a.name.match(r)))b?(a.uuid=d=a.name.replace(d,
""),a.lastModified=a.modified,a.precision=a.precision,h[d]=a):f&&(d=a.name.replace(r,""),l[d]=a)});return Object.keys(h).map(a=>{let d;if(d=h[a])return d.source=l[a],d.options=d.options||{},d}).filter(a=>a)}),setSource:(e,g)=>{const h=e+".user.js",l=w[h];let b;return k.Pledge(!1).then(()=>{if(l&&n.compare)return n.compare(l,g)}).then(f=>{if(f)return v.log("si: remote source data matches, skip upload of",h),k.Pledge();b=new Blob([g],{type:"text/plain"});return n.put(l||h,b)})},getSource:(e,g)=>{const h=
e+".user.js",l=w[h];if(l)return k.Pledge(!1).then(()=>{if(g&&n.compare)return n.compare(l,g)}).then(b=>b?(v.log("si: remote source data matches, skip download of",h),k.Pledge(g)):n.get(l).then(L.readAsText));v.warn("si: list cache does not contain this UUID",e);return k.Breach()},getMeta:e=>{let g;return(g=w[e+".meta.json"])?n.get(g).then(L.readAsText).then(h=>{let l;{let b=null;try{b=JSON.parse(h)}catch(f){}b&&b.uuid?h=b:(v.log("si: unable to parse extended info of undefined"),h=null)}if((l=h)&&
(l.uuid=e))return l.lastModified=g.modified||l.lastModified,l.precision=g.precision,l.options=l.options||{},l}):k.Breach()},setMeta:(e,g)=>{const h=new Blob([JSON.stringify(e)],{type:"text/plain"});e=e.uuid+".meta.json";return n.put(w[e]||e,h,g)},remove:e=>{e.options.removed=!0;const g=new Blob([JSON.stringify(e)],{type:"text/plain"});return n.put(e.uuid+".meta.json",g).then(()=>{let h;if(h=w[e.uuid+".user.js"])return n.delete(h)})},reset:()=>n.list(!0).then(e=>e=e.filter(g=>{const h=/.user.js$/;
return g.name.match(/.meta.json$/)||g.name.match(h)})).then(e=>{const g=[];e.forEach(h=>{g.push((()=>{const l=k();n.delete(h).always(()=>{l.resolve()});return l.promise()})())});return k.when(g).always(()=>{w={}})}),getRemoteUrl:function(e){if(n.getRemoteUrl)return n.getRemoteUrl(e.uuid+".user.js")},getRemoteDomains:function(){if(n.getRemoteDomains)return n.getRemoteDomains()}}};const x=m({type:"drive",id:u.eGDRIVE}),t=m({type:"dropbox",id:u.eDROPBOX}),z=m({type:"onedrive",id:u.eONEDRIVE}),A=m({type:"webdav",
id:u.eWEBDAV});m=m({type:"yandex",id:u.eYANDEX});const O=(()=>{let F=!1,y;const J=(b,f)=>{p==u.eCHROMESYNC&&"sync"==f&&k.Pledge().then(()=>{const c=new RegExp(y+"$");b&&Object.keys(b).forEach(a=>{const d=b[a];v.log('si: storage key "%s" in namespace "%s" changed. Old value was "%s", new value is "%s".',a,f,d.oldValue,d.newValue);if(-1!=a.search(c))for(let r=0;r<E.length;r++)if(!g[a]){const B=w(d.newValue,a);if(B)E[r](a,B)}})})},n=b=>{const f=k();let c=[];b?H().done(a=>{c=I.select(a,d=>d.item&&d.item.uuis==
b);f.resolve(c)}).fail(a=>{f.reject(a)}):f.resolve(c);return f.promise()};var H=()=>M(()=>{const b=k(),f=new RegExp(y+"$");rea.storage.sync.get(null,c=>{const a=[];c&&Object.keys(c).forEach(d=>{-1!=d.search(f)&&a.push({key:d,item:w(c[d],d)})});b.resolve(a)});return b.promise()}),w=(b,f)=>{let c=null;try{c=JSON.parse(b)}catch(a){}return c&&(c.url||c.options)?c:(v.log("si: unable to parse extended info of "+f),null)};const D=b=>b.then(f=>{const c={};f=I.select(f,(a,d)=>{if(!c[a.key])return c[a.key]=
!0});if(1<f.length){const a=k(),d=[],r=f.pop();f.forEach(B=>{d.push(h(B.key))});k.when(d).done(()=>{a.resolve(r)});return a.promise()}return k.Pledge(f[0])});let e=null;var g={},h=(b,f)=>{const c=k();rea.storage.sync.remove(b,a=>{(a=rea.runtime.lastError)?c.reject(a):c.resolve()});return c.promise()},l=b=>{const f=k();rea.storage.sync.set(g,c=>{(c=rea.runtime.lastError)?f.reject(c):(g={},f.resolve())});return f.promise()};return{init:function(){let b=!0;if(!F)try{rea.storage.onChanged.addListener(J),
F=!0}catch(f){v.warn("si: error registering sync callback: "+f.message),b=!1}y="@v2";return k.Pledge(b)},list:()=>k.Pledge().then(()=>H()).then(b=>{const f=new RegExp(y+"$"),c=[];b.forEach(a=>{var d=a.key,r=a.item;a=d.replace(f,"");if(d=g[d]?w(g[d],d):r){r=d.options||{};var B=!!r.removed;c.push({id:a,uuid:B?a:d.uuid,lastModified:B?r.removed:d.lastModified,url:d.url,options:r})}});return k.Pledge(c)}),setMeta:(b,f)=>{const c=k();D(n(b.uuid)).done(a=>{let d;a?(d=a.key,a=a.item):(d=b.uuid+y,a={});a.url=
b.url;a.options=b.options||{};a.uuid=b.uuid;f.lastModified&&(a.lastModified=f.lastModified);g[d]=JSON.stringify(a);e&&window.clearTimeout(e);e=window.setTimeout(l,3E3);c.resolve()});return c.promise()},remove:b=>{const f=k();D(n(b.uuid)).done(c=>{let a;c?(a=c.key,c=c.item):(a=b.uuid+y,c={});c.options=c.options||{};c.options.removed=!0;g[a]=JSON.stringify(c);e&&window.clearTimeout(e);e=window.setTimeout(l,3E3);f.resolve()});return f.promise()},reset:()=>M(()=>{const b=k();rea.storage.sync.clear(()=>
{g={};b.resolve()});return b.promise()})}})(),C={};rea.storage.sync.supported&&(C[u.eCHROMESYNC]=O);C[u.eGDRIVE]=x;C[u.eDROPBOX]=t;C[u.eONEDRIVE]=z;C[u.eWEBDAV]=A;C[u.eYANDEX]=m;return C})();var M=(m,x)=>{const t=k();void 0===x&&(x=3);const z=()=>{if(G)window.setTimeout(z,500);else{G=!0;try{m().always(()=>{G=!1}).done(function(){t.resolve.apply(this,arguments)}).fail(()=>{0<--x?(v.log("si: some retries left, wait for",6E4,"ms"),window.setTimeout(z,6E4)):(v.warn("si: no retries left, skipping this sync request!"),
t.reject("no retries left"))})}catch(A){v.warn(A),G=!1,t.reject(A)}}};z();return t.promise()};const N={init:(m,x)=>{E=[];p=m;return q[p]?q[p].init(x).done(t=>{}):k.Breach()},debug:function(m){},addChangeListener:function(m){E.push(m)},getRemoteUrl:function(m){if(q[p]&&q[p].getRemoteUrl)return q[p].getRemoteUrl(m)},getRemoteDomains:function(){if(q[p]&&q[p].getRemoteDomains)return q[p].getRemoteDomains()},caps:(()=>{const m={};Object.defineProperties(m,{specialMeta:{get:function(){return q[p]&&!!q[p].getMeta},
enumerable:!0},syncsSource:{get:function(){return q[p]&&!!q[p].getSource},enumerable:!0}});return m})(),types:u};"list setMeta getMeta setSource getSource reset remove".split(" ").forEach(m=>{N[m]=function(){return q[p]&&q[p][m]?q[p][m].apply(this,arguments):k.Pledge()}});Registry.register("syncinfo","e1582c36",m=>{K.init(x=>{let t=k();const z=m.openAndWatch({url:x.url},A=>{A?t&&t.notify(A):t&&(t.resolve("tab closed"),t=null)});return{promise:t.promise(),close:function(){z.cancel()}}});return N})});