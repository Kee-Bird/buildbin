/* BuildBin Halloween theme: decorations + dismissable banner. Remove with the HALLOWEEN THEME block. */
(function(){
var R=window.ROOT||'',H=R+'index.html';
var web='<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1"><path d="M0 0L100 100M0 0L50 100M0 0L100 50M0 0L0 100M0 0L100 0"/><path d="M0 20Q14 14 20 0M0 40Q28 28 40 0M0 62Q43 43 62 0M0 84Q60 60 84 0"/></svg>';
var bat='<path d="M20 14c-3-5-9-6-14-3 3 0 5 2 5 4-3-1-6 0-8 2 4 0 7 1 9 3 2-2 5-3 8-2 3-1 6 0 8 2 2-2 5-3 9-3-2-2-5-3-8-2 0-2 2-4 5-4-5-3-11-2-14 3z" fill="currentColor"/>';
var hd=document.querySelector('header');
if(hd){hd.insertAdjacentHTML('afterbegin','<span class="hw-web l" aria-hidden="true">'+web+'</span><span class="hw-web r" aria-hidden="true">'+web+'</span><svg class="hw-bats" aria-hidden="true" viewBox="0 0 120 60"><g transform="translate(0,20)">'+bat+'</g><g transform="translate(60,0) scale(.7)">'+bat+'</g><g transform="translate(85,30) scale(.5)">'+bat+'</g></svg>');}
var K='bb-hw-2026-dismissed';
try{if(localStorage.getItem(K))return;}catch(e){}
var b=document.createElement('div');b.className='hw-banner';b.setAttribute('role','region');b.setAttribute('aria-label','Spooky season builds');
b.innerHTML='<span>🦇 <strong>Spooky season builds:</strong></span><a href="'+H+'#p-28">Glowing NeoPixel costume</a><span class="sep">·</span><a href="'+H+'#p-21">Infinity mirror</a><span class="sep">·</span><a href="'+H+'#p-3">WLED porch lights</a><span class="sep">·</span><a href="'+H+'#p-8">Otto robot</a><button type="button" aria-label="Dismiss Halloween banner">×</button>';
b.querySelector('button').onclick=function(){b.remove();try{localStorage.setItem(K,'1')}catch(e){}};
document.body.insertBefore(b,document.body.firstChild);
})();
(function(){
var A='class="hw-deco" aria-hidden="true" focusable="false"';
var skel='<svg '+A.replace('hw-deco','hw-deco hw-skel')+' viewBox="0 0 90 70"><g fill="#e5e7eb"><ellipse cx="38" cy="34" rx="20" ry="19"/><rect x="28" y="48" width="20" height="14" rx="4"/><rect x="20" y="62" width="36" height="8" rx="3"/></g><g fill="#1e1b3a"><ellipse cx="31" cy="32" rx="5" ry="6"/><ellipse cx="45" cy="32" rx="5" ry="6"/><path d="M38 39l-3 5h6z"/><path d="M30 50v8M34 50v8M38 50v8M42 50v8M46 50v8" stroke="#1e1b3a" stroke-width="1.2"/></g><circle cx="32" cy="31" r="1.4" fill="#fff"/><circle cx="46" cy="31" r="1.4" fill="#fff"/><g class="hw-wave" fill="none" stroke="#e5e7eb" stroke-width="3.5" stroke-linecap="round"><path d="M62 70V40"/><path d="M62 40l-6-10M62 40l-2-12M62 40l3-12M62 40l7-9M62 46l9-4"/></g></svg>';
function ghost(c){return '<svg '+A.replace('hw-deco','hw-deco hw-ghost '+c)+' viewBox="0 0 54 66"><path d="M27 2C13 2 4 13 4 27v35l8-6 7 6 8-6 8 6 7-6 8 6V27C50 13 41 2 27 2z" fill="#f8fafc" opacity=".92"/><circle cx="20" cy="26" r="3.5" fill="#1e1b3a"/><circle cx="34" cy="26" r="3.5" fill="#1e1b3a"/><ellipse cx="27" cy="37" rx="4" ry="3" fill="#1e1b3a"/><circle cx="15" cy="33" r="3" fill="#fda4af" opacity=".5"/><circle cx="39" cy="33" r="3" fill="#fda4af" opacity=".5"/></svg>';}
var cat='<svg '+A.replace('hw-deco','hw-deco hw-cat')+' viewBox="0 0 70 62"><path d="M58 60c10-2 12-14 6-20" fill="none" stroke="#050507" stroke-width="5" stroke-linecap="round"/><ellipse cx="38" cy="48" rx="20" ry="14" fill="#050507"/><path d="M14 30l2-16 8 9h10l8-9 2 16a16 15 0 1 1-30 0z" fill="#050507"/><ellipse cx="22" cy="31" rx="2.6" ry="3.4" fill="#facc15"/><ellipse cx="35" cy="31" rx="2.6" ry="3.4" fill="#facc15"/></svg>';
function jack(){return '<svg viewBox="0 0 40 40"><path d="M20 5c0-3 3-4 5-4" stroke="#4d7c0f" stroke-width="3" fill="none"/><ellipse cx="20" cy="23" rx="18" ry="15" fill="#ea580c"/><path d="M14 9q-6 14 0 28M26 9q6 14 0 28" stroke="#c2410c" stroke-width="1.4" fill="none"/><g class="flame" fill="#fde047"><path d="M10 20l5-4 3 5zM30 20l-5-4-3 5zM18 25l2-3 2 3zM9 28q11 8 22 0l-3 1-2 3-3-2-3 2-3-2-2 2z"/></g></svg>';}
function jacks(n){var s='';for(var i=0;i<n;i++)s+=jack();return '<div class="hw-deco hw-jacks" aria-hidden="true">'+s+'</div>';}
var hd=document.querySelector('header');
if(hd)hd.insertAdjacentHTML('beforeend',skel+ghost('g1')+ghost('g2')+cat+jacks(3));
var ft=document.querySelector('footer');
if(ft)ft.insertAdjacentHTML('beforeend',jacks(5));
var nw=document.querySelector('.news');
if(nw)nw.insertAdjacentHTML('afterbegin','<svg class="hw-peek" aria-hidden="true" viewBox="0 0 64 32"><path d="M8 32V14l6-12 8 9h20l8-9 6 12v18z" fill="#050507"/><ellipse cx="25" cy="20" rx="3" ry="4" fill="#facc15"/><ellipse cx="39" cy="20" rx="3" ry="4" fill="#facc15"/><path d="M2 30l14-2M2 25l14 1M62 30l-14-2M62 25l-14 1" stroke="#050507" stroke-width="1.2"/></svg>');
})();
