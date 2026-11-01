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
 h+=pk.replace('%c','pl')+pk.replace('%c','pr');hd.insertAdjacentHTML('afterbegin',h);}
var K='bb-tg-2026-dismissed';
try{if(localStorage.getItem(K))return;}catch(e){}
var b=document.createElement('div');b.className='tg-banner';b.setAttribute('role','region');b.setAttribute('aria-label','Happy Thanksgiving');
b.innerHTML='<span>🍂 <strong>Happy Thanksgiving from BuildBin.</strong> Long weekend? Find a build for the whole family:</span><a href="'+R+'category/kids.html">Kids projects</a><a href="'+R+'category/led-lighting.html">LED &amp; lighting</a><button type="button" aria-label="Dismiss Thanksgiving banner">×</button>';
b.querySelector('button').onclick=function(){b.remove();try{localStorage.setItem(K,'1')}catch(e){}};
document.body.insertBefore(b,document.body.firstChild);
})();
