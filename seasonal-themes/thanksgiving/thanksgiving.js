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

// Cute derpy hopping turkeys (original BuildBin drawing): simple flat cartoon with googly eyes, goofy grin and a floppy wattle; decorative only.
// Every shape sits inside the viewBox (with room for the tail-fan and leg animations), so nothing relies on SVG overflow and no browser can clip the tail.
var O='#3a1c0c';
var TP={1:{tilt:0,e1:[-2,-2],e2:[1.8,1.6],tongue:1},
        2:{tilt:-12,e1:[2.6,1],e2:[-1.8,1],tongue:0},
        3:{tilt:10,e1:[.6,-2.6],e2:[1.2,-2],tongue:2}};
function feather(c,ang,len,w){return '<ellipse cx="44" cy="'+(56-len/2)+'" rx="'+w+'" ry="'+(len/2)+'" fill="'+c+'" stroke="'+O+'" stroke-width="2" transform="rotate('+ang+' 44 56)"/>';}
function leg(x){return '<path d="M'+x+' 76V85m0 0l-4 2.5m4-2.5l4 2.5m-4-2.5v3" stroke="#ea8a1e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';}
function eye(cx,cy,r,d,pr,k){return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" stroke="'+O+'" stroke-width="1.8"/>'+
 '<circle class="tg-pup p'+k+'" cx="'+(cx+d[0])+'" cy="'+(cy+d[1])+'" r="'+pr+'" fill="#1f0d02"/>';}
function turkey(n){var P=TP[n];
 var back=[['#9f1239',-58],['#c2410c',-29],['#f2b544',0],['#c2410c',29],['#9f1239',58]].map(function(f){return feather(f[0],f[1],40,9);}).join('');
 var front=[['#ea8a1e',-44],['#f2b544',-15],['#ea8a1e',15],['#f2b544',44]].map(function(f){return feather(f[0],f[1],30,7);}).join('');
 return '<div class="tg-deco tg-turkey t'+n+'"><span class="tg-hop"><svg class="tg-tk" '+A+' viewBox="0 8 96 83">'+
 '<g class="tg-tail">'+back+front+'</g>'+
 '<g class="tg-leg a">'+leg(43)+'</g><g class="tg-leg b">'+leg(54)+'</g>'+
 '<path d="M56 58Q62 50 64 40" stroke="'+O+'" stroke-width="13" stroke-linecap="round" fill="none"/>'+
 '<circle cx="48" cy="60" r="18" fill="#8b5a2b" stroke="'+O+'" stroke-width="2"/>'+
 '<path d="M56 58Q62 50 64 40" stroke="#a8703a" stroke-width="9" stroke-linecap="round" fill="none"/>'+
 '<path d="M36 60q8 11 20 2q-9-6-20-2z" fill="#6b4220" stroke="'+O+'" stroke-width="1.6" stroke-linejoin="round"/>'+
 '<g transform="rotate('+P.tilt+' 64 36)">'+
 '<path d="M63 22q-2-6 3-7" stroke="'+O+'" stroke-width="3.2" stroke-linecap="round" fill="none"/>'+
 '<circle cx="65" cy="34" r="13" fill="#a8703a" stroke="'+O+'" stroke-width="2"/>'+
 '<g class="tg-wat"><path d="M75 39q4 4 3 11q-1 4-4.5 2q-2-6 1.5-13z" fill="#dc2626" stroke="'+O+'" stroke-width="1.6" stroke-linejoin="round"/></g>'+
 (P.tongue?'<path d="M77 38q6 0 6.5 4.5q-.5 3-3 1.5q-1.5-3-3.5-4z" fill="#f472b6" stroke="'+O+'" stroke-width="1.4" stroke-linejoin="round" transform="rotate('+(P.tongue==1?0:-15)+' 77 38)"/>':'')+
 '<path d="M76 31l11 4.5l-11 2.5z" fill="#f2b544" stroke="'+O+'" stroke-width="1.6" stroke-linejoin="round"/>'+
  '<path d="M62 41q5 3 11-.5" stroke="'+O+'" stroke-width="1.8" stroke-linecap="round" fill="none"/>'+
 '<circle cx="60" cy="38" r="2.6" fill="#f472b6" opacity=".6"/>'+
 eye(62,29,7,P.e1,2.8,1)+eye(72,28,5,P.e2,2.1,2)+
 '</g></svg></span></div>';}
 h+=turkey(1)+turkey(2)+turkey(3);
 h+=pk.replace('%c','pl')+pk.replace('%c','pr');hd.insertAdjacentHTML('afterbegin',h);}
var K='bb-tg-2026-dismissed';
try{if(localStorage.getItem(K))return;}catch(e){}
var b=document.createElement('div');b.className='tg-banner';b.setAttribute('role','region');b.setAttribute('aria-label','Happy Thanksgiving');
b.innerHTML='<span>🍂 <strong>Happy Thanksgiving from BuildBin.</strong> Long weekend? Find a build for the whole family:</span><a href="'+R+'category/kids.html">Kids projects</a><a href="'+R+'category/led-lighting.html">LED &amp; lighting</a><button type="button" aria-label="Dismiss Thanksgiving banner">×</button>';
b.querySelector('button').onclick=function(){b.remove();try{localStorage.setItem(K,'1')}catch(e){}};
document.body.insertBefore(b,document.body.firstChild);
})();
