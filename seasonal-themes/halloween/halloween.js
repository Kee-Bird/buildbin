/* BuildBin Halloween theme: decorations + dismissable banner. Remove with the HALLOWEEN THEME block. */
(function(){
var R=window.ROOT||'',H=R+'index.html';
var web='<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1"><path d="M0 0L100 100M0 0L50 100M0 0L100 50M0 0L0 100M0 0L100 0"/><path d="M0 20Q14 14 20 0M0 40Q28 28 40 0M0 62Q43 43 62 0M0 84Q60 60 84 0"/></svg>';
var bat='<path d="M20 14c-3-5-9-6-14-3 3 0 5 2 5 4-3-1-6 0-8 2 4 0 7 1 9 3 2-2 5-3 8-2 3-1 6 0 8 2 2-2 5-3 9-3-2-2-5-3-8-2 0-2 2-4 5-4-5-3-11-2-14 3z" fill="currentColor"/>';
var hd=document.querySelector('header');
if(hd){hd.insertAdjacentHTML('afterbegin','<span class="hw-web l" aria-hidden="true">'+web+'</span><span class="hw-web r" aria-hidden="true">'+web+'</span><svg class="hw-bats" aria-hidden="true" viewBox="0 0 120 60"><g transform="translate(0,20)">'+bat+'</g><g transform="translate(60,0) scale(.7)">'+bat+'</g><g transform="translate(85,30) scale(.5)">'+bat+'</g></svg>');}
var K='bb-hw-2026b-dismissed';
try{if(localStorage.getItem(K))return;}catch(e){}
var b=document.createElement('div');b.className='hw-banner';b.setAttribute('role','region');b.setAttribute('aria-label','Spooky season builds');
b.innerHTML='<span>🦇 <strong>Spooky season builds:</strong></span><a href="'+H+'#p-59">Flickering jack-o\'-lantern</a><span class="sep">·</span><a href="'+H+'#p-61">Milk-jug ghost lanterns</a><span class="sep">·</span><a href="'+H+'#p-60">Talking candy bowl</a><span class="sep">·</span><a href="'+H+'#p-28">Glowing NeoPixel costume</a><a class="hw-all" href="'+R+'category/halloween.html">All Halloween builds →</a><button type="button" aria-label="Dismiss Halloween banner">×</button>';
b.querySelector('button').onclick=function(){b.remove();try{localStorage.setItem(K,'1')}catch(e){}};
document.body.insertBefore(b,document.body.firstChild);
})();
(function(){
var A='class="hw-deco" aria-hidden="true" focusable="false"';
var skel='<svg '+A.replace('hw-deco','hw-deco hw-skel')+' viewBox="0 0 90 70"><g fill="#e5e7eb"><ellipse cx="38" cy="34" rx="20" ry="19"/><rect x="28" y="48" width="20" height="14" rx="4"/><rect x="20" y="62" width="36" height="8" rx="3"/></g><g fill="#1e1b3a"><ellipse cx="31" cy="32" rx="5" ry="6"/><ellipse cx="45" cy="32" rx="5" ry="6"/><path d="M38 39l-3 5h6z"/><path d="M30 50v8M34 50v8M38 50v8M42 50v8M46 50v8" stroke="#1e1b3a" stroke-width="1.2"/></g><circle cx="32" cy="31" r="1.4" fill="#fff"/><circle cx="46" cy="31" r="1.4" fill="#fff"/><g class="hw-wave" fill="none" stroke="#e5e7eb" stroke-width="3.5" stroke-linecap="round"><path d="M62 70V40"/><path d="M62 40l-6-10M62 40l-2-12M62 40l3-12M62 40l7-9M62 46l9-4"/></g></svg>';
function ghost(c){return '<svg '+A.replace('hw-deco','hw-deco hw-ghost '+c)+' viewBox="0 0 54 66"><path d="M27 2C13 2 4 13 4 27v35l8-6 7 6 8-6 8 6 7-6 8 6V27C50 13 41 2 27 2z" fill="#f8fafc" opacity=".92"/><circle cx="20" cy="26" r="3.5" fill="#1e1b3a"/><circle cx="34" cy="26" r="3.5" fill="#1e1b3a"/><ellipse cx="27" cy="37" rx="4" ry="3" fill="#1e1b3a"/><circle cx="15" cy="33" r="3" fill="#fda4af" opacity=".5"/><circle cx="39" cy="33" r="3" fill="#fda4af" opacity=".5"/></svg>';}
var catEyes=function(id,x1,x2,y,rx,ry){return '<defs><filter id="'+id+'" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2.2"/></filter></defs><g filter="url(#'+id+')" fill="#f97316"><ellipse cx="'+x1+'" cy="'+y+'" rx="'+(rx+2.5)+'" ry="'+(ry+2.5)+'"/><ellipse cx="'+x2+'" cy="'+y+'" rx="'+(rx+2.5)+'" ry="'+(ry+2.5)+'"/></g><g class="hw-eyes"><ellipse cx="'+x1+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="#fbbf24"/><ellipse cx="'+x2+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="#fbbf24"/><ellipse cx="'+x1+'" cy="'+y+'" rx=".9" ry="'+(ry-.6)+'" fill="#1c0a02"/><ellipse cx="'+x2+'" cy="'+y+'" rx=".9" ry="'+(ry-.6)+'" fill="#1c0a02"/></g>';};
var RIM='stroke="#e2e8f0" stroke-opacity=".22" stroke-width="1" stroke-linejoin="round"';
var cat='<svg '+A.replace('hw-deco','hw-deco hw-cat')+' viewBox="0 0 74 66"><path class="hw-tail" d="M60 62c11-2 13-15 6-22" fill="none" stroke="#e2e8f0" stroke-opacity=".22" stroke-width="6.4" stroke-linecap="round"/><path class="hw-tail" d="M60 62c11-2 13-15 6-22" fill="none" stroke="#050507" stroke-width="4.4" stroke-linecap="round"/><path d="M16 32l2-16 8 9h10l8-9 2 16a16 15 0 0 1-1 6c8 2 15 9 15 15 0 7-8 12-21 12S18 61 18 54c0-4 1-7 3-9a16 15 0 0 1-5-13z" fill="#050507" '+RIM+'/>'+catEyes('hwce1',24,37,33,2.8,3.6)+'<path d="M12 37l9 1M12 41l9-1M50 37l-9 1M50 41l-9-1" stroke="#e2e8f0" stroke-width=".8" opacity=".75"/><path d="M29 38l1.5 1.5L32 38" fill="none" stroke="#94a3b8" stroke-width=".9"/></svg>';
function jack(){return '<svg viewBox="0 0 40 40"><path d="M20 5c0-3 3-4 5-4" stroke="#4d7c0f" stroke-width="3" fill="none"/><ellipse cx="20" cy="23" rx="18" ry="15" fill="#ea580c"/><path d="M14 9q-6 14 0 28M26 9q6 14 0 28" stroke="#c2410c" stroke-width="1.4" fill="none"/><g class="flame" fill="#fde047"><path d="M10 20l5-4 3 5zM30 20l-5-4-3 5zM18 25l2-3 2 3zM9 28q11 8 22 0l-3 1-2 3-3-2-3 2-3-2-2 2z"/></g></svg>';}
function jacks(n){var s='';for(var i=0;i<n;i++)s+=jack();return '<div class="hw-deco hw-jacks" aria-hidden="true">'+s+'</div>';}
var hd=document.querySelector('header');
if(hd)hd.insertAdjacentHTML('beforeend',skel+ghost('g1')+ghost('g2')+cat+jacks(3));
var ft=document.querySelector('footer');
if(ft)ft.insertAdjacentHTML('beforeend',jacks(5));
var nw=document.querySelector('.news');
if(nw)nw.insertAdjacentHTML('afterbegin','<svg class="hw-peek" aria-hidden="true" viewBox="0 0 64 32"><path d="M8 33V14l6-12 8 9h20l8-9 6 12v19z" fill="#050507" '+RIM+'/>'+catEyes('hwce2',25,39,20,3,4)+'<path d="M2 30l14-2M2 25l14 1M62 30l-14-2M62 25l-14 1" stroke="#475569" stroke-width="1.2"/></svg>');
/* tombstones */
function stone(shape,t1,t2,t3){var body=shape==1?'<path d="M7 72V28a23 23 0 0 1 46 0v44z"/>':'<path d="M8 72V20l10-12h24l10 12v52z"/>';
 var tx='<text x="30" y="'+(t3?33:37)+'" font-size="13" font-weight="800" letter-spacing="1">'+t1+'</text><text x="30" y="'+(t3?45:51)+'" font-size="7.2" font-weight="700">'+t2+'</text>'+(t3?'<text x="30" y="54" font-size="7.2" font-weight="700">'+t3+'</text>':'');
 return '<svg viewBox="0 0 60 76"><g fill="#64748b" stroke="#cbd5e1" stroke-width="1.6">'+body+'</g><path d="M14 66l4-6M44 30l3 5" stroke="#475569" stroke-width="1"/><g fill="#1e293b" text-anchor="middle" font-family="system-ui,sans-serif">'+tx+'</g><path d="M0 76c3-6 4-6 6-1 2-6 4-6 6 0 2-5 5-5 6 0h24c1-5 4-5 6 0 2-6 4-6 6 0 2-5 3-5 6 1z" fill="#166534"/></svg>';}
if(hd)hd.insertAdjacentHTML('beforeend','<div class="hw-deco hw-stones" aria-hidden="true">'+stone(1,'RIP','DEAD','BATTERIES')+stone(2,'RIP','MAGIC','SMOKE')+stone(1,'RIP','COLD','JOINT')+'</div>');
/* dangling spiders */
function spider(c){return '<svg '+A.replace('hw-deco','hw-deco hw-spider '+c)+' viewBox="0 0 40 170"><line x1="20" y1="-40" x2="20" y2="140" stroke="#e2e8f0" stroke-width="1" opacity=".7"/><g transform="translate(20,150)"><g fill="none" stroke="#c4b5fd" stroke-width="1.6" stroke-linecap="round"><path d="M-5-3l-8-7-4 4M-5 0l-10-3-5 5M-5 3l-9 3-4 7M-4 6l-6 7-1 6M5-3l8-7 4 4M5 0l10-3 5 5M5 3l9 3 4 7M4 6l6 7 1 6"/></g><ellipse cy="5" rx="7" ry="8.5" fill="#0b0a1a" stroke="#c4b5fd" stroke-width="1.3"/><circle cy="-6" r="5" fill="#0b0a1a" stroke="#c4b5fd" stroke-width="1.3"/><circle cx="-2" cy="-6.5" r="1.3" fill="#f97316"/><circle cx="2" cy="-6.5" r="1.3" fill="#f97316"/><path d="M-3 3h6l-3 5z" fill="#dc2626" opacity=".85"/></g></svg>';}
/* flying bats */
/* flying bats: realistic silhouette, wings hinge at the shoulders */
var WING='<path d="M55 25.5L39 18.5Q24 12 6 11Q15 21 3 30Q16 30.5 13 42Q23 38.5 27 47.5Q38 37 53.5 35.5Z" fill="#2a2220" fill-opacity=".96"/><path d="M55 25.5L39 18.5L6 11M39 18.5L3 30M39 18.5L13 42M39 18.5L27 47.5" fill="none" stroke="#3b312d" stroke-width=".75" stroke-linecap="round"/><path d="M55 25.5L39 18.5" stroke="#3a302c" stroke-width="2.2" stroke-linecap="round"/><path d="M39 18.5l-2.6-3.4" stroke="#3a302c" stroke-width="1.3" stroke-linecap="round"/>';
var fbat='<g class="hw-wl">'+WING+'</g><g class="hw-wr"><g transform="matrix(-1 0 0 1 120 0)">'+WING+'</g></g>'+
 '<path d="M55.5 37Q60 47 64.5 37Z" fill="#2a2220" fill-opacity=".9"/><path d="M56.5 39.5l-1.5 3.5M63.5 39.5l1.5 3.5" stroke="#3a302c" stroke-width="1" stroke-linecap="round"/>'+
 '<ellipse cx="60" cy="29" rx="5.6" ry="9.2" fill="#2d2421"/><path d="M55.4 26q-1 3 .3 6M64.6 26q1 3-.3 6M57 35.5l-.7 1.6M63 35.5l.7 1.6M60 37.5v1.5" stroke="#3d322e" stroke-width=".8" fill="none"/>'+
 '<path d="M56.3 18.5L55.4 10.6L58.6 16.2ZM63.7 18.5L64.6 10.6L61.4 16.2Z" fill="#2d2421"/><ellipse cx="60" cy="19" rx="4.4" ry="4" fill="#2d2421"/><path d="M58.8 21.4l1.2 1.4 1.2-1.4" fill="#1f1816"/>'+
 '<circle cx="58.3" cy="18.6" r=".55" fill="#9ca3af" fill-opacity=".55"/><circle cx="61.7" cy="18.6" r=".55" fill="#9ca3af" fill-opacity=".55"/>';
function flyer(c){return '<span class="hw-deco hw-flyer '+c+'" aria-hidden="true"><span class="hw-flut"><svg class="hw-batsvg" viewBox="0 0 120 52" focusable="false"><g class="hw-bob">'+fbat+'</g></svg></span></span>';}
if(hd)hd.insertAdjacentHTML('beforeend',spider('s1')+spider('s2')+flyer('f1')+flyer('f2'));
})();
/* grim reaper (v4): friendly hooded reaper with a scythe, peeking out from behind the left edge of the banner */
(function(){
var hd=document.querySelector('header');if(!hd)return;
var RIM='stroke="#e2e8f0" stroke-opacity=".22" stroke-width="1" stroke-linejoin="round"';
hd.insertAdjacentHTML('beforeend','<svg class="hw-deco hw-reaper" aria-hidden="true" focusable="false" viewBox="0 0 100 160">'+
 '<defs><linearGradient id="hwrb" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e2e8f0"/><stop offset="1" stop-color="#94a3b8"/></linearGradient><filter id="hwrg" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2"/></filter></defs>'+
 '<path d="M80 16L71 158" stroke="#5b3a24" stroke-width="3.4" stroke-linecap="round"/>'+
 '<path d="M80 18C62 3 31 3 8 23c22-8 47-7 70 7z" fill="url(#hwrb)" stroke="#f1f5f9" stroke-opacity=".6" stroke-width=".8" stroke-linejoin="round"/>'+
 '<path d="M76 24c-14-8-34-9-54-3" fill="none" stroke="#64748b" stroke-width=".8" opacity=".7"/>'+
 '<path d="M40 30C24 30 17 46 20 64L10 150q7-6 14 2 8-8 16 0 8-8 16 0 7-7 14-1L62 68c3-20-5-38-22-38z" fill="#050507" '+RIM+'/>'+
 '<path d="M57 78q9 3 16 9l-1 8q-9-4-18-6z" fill="#050507" '+RIM+'/>'+
 '<g fill="#e5e7eb"><rect x="69" y="85" width="9" height="3" rx="1.5"/><rect x="68.6" y="89" width="9" height="3" rx="1.5"/><rect x="68.2" y="93" width="8" height="2.6" rx="1.3"/></g>'+
 '<ellipse cx="40" cy="55" rx="11" ry="13" fill="#000"/>'+
 '<g filter="url(#hwrg)" fill="#a78bfa"><circle cx="35.5" cy="54" r="3.6"/><circle cx="44.5" cy="54" r="3.6"/></g>'+
 '<g class="hw-reye" fill="#ede9fe"><circle cx="35.5" cy="54" r="1.9"/><circle cx="44.5" cy="54" r="1.9"/></g>'+
 '</svg>');
})();
