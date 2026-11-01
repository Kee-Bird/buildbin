/* BuildBin Thanksgiving theme: autumn decorations + dismissable banner. Remove with the THANKSGIVING THEME snippets. */
(function(){
var R=window.ROOT||'';
var A='aria-hidden="true" focusable="false"';
var C=['#ea8a1e','#b45309','#f2b544','#9f1239','#c2410c','#d97706'];
function leaf(cls,c){return '<svg class="tg-deco tg-leaf '+cls+'" '+A+' viewBox="0 0 40 40"><path fill="'+c+'" d="M20 2l3 7 6-3-1 7 7 1-4 5 5 4-7 2 2 7-6-3-3 6-2-6-6 3 1-7-7-2 5-4-4-5 7-1-1-7 6 3z"/><path d="M20 12v26" stroke="#5b2a0a" stroke-width="1.4" fill="none"/></svg>';}
function pumpkin(x,s,c){return '<g transform="translate('+x+','+(58-30*s)+') scale('+s+')"><ellipse cx="22" cy="17" rx="21" ry="14" fill="'+c+'"/><ellipse cx="22" cy="17" rx="9" ry="14" fill="#000" opacity=".12"/><path d="M8 17q0-12 14-12M36 17q0-12-14-12" stroke="#000" stroke-opacity=".15" fill="none"/><path d="M21 4q0-4 4-5" stroke="#3f6212" stroke-width="3" fill="none" stroke-linecap="round"/></g>';}
var pk='<svg class="tg-deco tg-pumpkins %c" '+A+' viewBox="0 0 120 58">'+pumpkin(4,1,'#ea8a1e')+pumpkin(52,.75,'#c2410c')+pumpkin(86,.55,'#f2b544')+'</svg>';
var hd=document.querySelector('header');
if(hd){var h='';['l1','l2','l3','l4','l5','l6'].forEach(function(k,i){h+=leaf(k,C[i]);});

// Cute walking turkeys (original BuildBin drawing): waddle along the bottom of the header, decorative only.
function turkey(n){return '<div class="tg-deco tg-turkey t'+n+'"><svg class="tg-tk" '+A+' viewBox="0 0 64 60">'+
 '<g class="tg-tail">'+[['#9f1239',-62],['#c2410c',-32],['#f2b544',0],['#ea8a1e',32],['#b45309',62]].map(function(f){return '<ellipse cx="22" cy="16" rx="7" ry="15" fill="'+f[0]+'" transform="rotate('+f[1]+' 22 32)"/>';}).join('')+
 '<circle cx="22" cy="31" r="10" fill="#7c2d12"/></g>'+
 '<g class="tg-leg a"><path d="M24 46v9m0 0l-3 2m3-2l1 3m-1-3l4 1" stroke="#ea8a1e" stroke-width="2.4" stroke-linecap="round" fill="none"/></g>'+
 '<g class="tg-leg b"><path d="M32 46v9m0 0l-3 2m3-2l1 3m-1-3l4 1" stroke="#d97706" stroke-width="2.4" stroke-linecap="round" fill="none"/></g>'+
 '<ellipse cx="28" cy="36" rx="15" ry="12.5" fill="#8a5525"/>'+
 '<path d="M17 35q7 9 17 3" stroke="#6b3d16" stroke-width="2.2" fill="none" stroke-linecap="round"/>'+
 '<path d="M37 31q2-8 5-13" stroke="#8a5525" stroke-width="7" stroke-linecap="round" fill="none"/>'+
 '<circle cx="44" cy="16" r="7.5" fill="#a86b33"/>'+
 '<circle cx="46" cy="14" r="2.3" fill="#fff"/><circle cx="46.7" cy="14" r="1.25" fill="#1f0d02"/>'+
 '<circle cx="42.5" cy="18.6" r="1.6" fill="#f472b6" opacity=".55"/>'+
 '<path d="M50.5 15.5l5 2-5 2z" fill="#f2b544"/>'+
 '<path d="M50 19.5q2 5-1 7q-2-3 1-7z" fill="#dc2626"/></svg></div>';}
 h+=turkey(1)+turkey(2)+turkey(3);
 h+=pk.replace('%c','pl')+pk.replace('%c','pr');hd.insertAdjacentHTML('afterbegin',h);}
var K='bb-tg-2026-dismissed';
try{if(localStorage.getItem(K))return;}catch(e){}
var b=document.createElement('div');b.className='tg-banner';b.setAttribute('role','region');b.setAttribute('aria-label','Happy Thanksgiving');
b.innerHTML='<span>🍂 <strong>Happy Thanksgiving from BuildBin.</strong> Long weekend? Find a build for the whole family:</span><a href="'+R+'category/kids.html">Kids projects</a><a href="'+R+'category/led-lighting.html">LED &amp; lighting</a><button type="button" aria-label="Dismiss Thanksgiving banner">×</button>';
b.querySelector('button').onclick=function(){b.remove();try{localStorage.setItem(K,'1')}catch(e){}};
document.body.insertBefore(b,document.body.firstChild);
})();
