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

// Cute derpy hopping turkeys (original BuildBin drawing): googly eyes, floppy wattle, messy tail; decorative only.
var O='#3a1c0c';
var TP={1:{tilt:0,e1:[-2.2,-2],e2:[1.6,1.7],tongue:1,stray:[[-104,9],[20,19]]},
        2:{tilt:-13,e1:[2.9,1],e2:[-1.9,1],tongue:0,stray:[[95,10]]},
        3:{tilt:11,e1:[.8,-2.9],e2:[1.4,-2],tongue:2,stray:[[-96,8],[-30,19]]}};
function feather(c,ang,ry,rx){rx=rx||6.5;return '<g transform="rotate('+ang+' 22 31)"><ellipse cx="22" cy="'+(31-ry)+'" rx="'+rx+'" ry="'+ry+'" fill="'+c+'" stroke="'+O+'" stroke-width="1.2"/><path d="M22 '+(31-ry*1.75)+'V29" stroke="#fff" stroke-opacity=".28" stroke-width="1.4" stroke-linecap="round"/></g>';}
function leg(x,c){var k=x-1.6;return '<path d="M'+x+' 45L'+k+' 51.5L'+x+' 56.5m0 0l5 1.3m-5-1.3l2.6 3.4m-2.6-3.4l-3.4 1.6" stroke="'+O+'" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'+
 '<path d="M'+x+' 45L'+k+' 51.5L'+x+' 56.5m0 0l5 1.3m-5-1.3l2.6 3.4m-2.6-3.4l-3.4 1.6" stroke="'+c+'" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'+
 '<circle cx="'+k+'" cy="51.5" r="2" fill="'+c+'" stroke="'+O+'" stroke-width="1"/>';}
function eye(cx,cy,r,d,pr,k){return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" stroke="'+O+'" stroke-width="1.1"/>'+
 '<g class="tg-pup p'+k+'"><circle cx="'+(cx+d[0])+'" cy="'+(cy+d[1])+'" r="'+pr+'" fill="#1f0d02"/><circle cx="'+(cx+d[0]-pr*.35)+'" cy="'+(cy+d[1]-pr*.4)+'" r="'+(pr*.32)+'" fill="#fff"/></g>';}
function turkey(n){var P=TP[n],g='tgb'+n,h='tgh'+n;
 var tail=[['#9f1239',-72,13],['#c2410c',-44,16.5],['#f2b544',-14,18],['#ea8a1e',12,16],['#b45309',40,17],['#9f1239',68,12.5]];
 return '<div class="tg-deco tg-turkey t'+n+'"><span class="tg-hop"><svg class="tg-tk" '+A+' viewBox="0 0 64 60">'+
 '<defs><radialGradient id="'+g+'" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#b97b3f"/><stop offset="1" stop-color="#6e3d16"/></radialGradient>'+
 '<radialGradient id="'+h+'" cx=".4" cy=".3" r=".8"><stop offset="0" stop-color="#c58a4c"/><stop offset="1" stop-color="#93582a"/></radialGradient></defs>'+
 '<g class="tg-tail">'+P.stray.map(function(f){return feather('#d97706',f[0],f[1],2.4);}).join('')+tail.map(function(f){return feather(f[0],f[1],f[2]);}).join('')+
 '<circle cx="22" cy="31" r="9" fill="#7c2d12" stroke="'+O+'" stroke-width="1.2"/></g>'+
 '<g class="tg-leg a">'+leg(25,'#ea8a1e')+'</g><g class="tg-leg b">'+leg(33,'#d97706')+'</g>'+
 '<path d="M38 32Q40 25 43 20" stroke="'+O+'" stroke-width="10.4" stroke-linecap="round" fill="none"/>'+
 '<circle cx="29" cy="37" r="15" fill="url(#'+g+')" stroke="'+O+'" stroke-width="1.3"/>'+
 '<ellipse cx="24" cy="30.5" rx="6.5" ry="3.6" fill="#fff" opacity=".2" transform="rotate(-25 24 30.5)"/>'+
 '<path d="M18.5 36.5q7 10 16.5 2.5q-6-5-16.5-2.5z" fill="#5f3412" stroke="'+O+'" stroke-width="1"/>'+
 '<path d="M38 32Q40 25 43 20" stroke="#9a5f2c" stroke-width="8" stroke-linecap="round" fill="none"/>'+
 '<g transform="rotate('+P.tilt+' 41 22)">'+
 '<path d="M43.5 7c-1.5-3.5 1-6.5 4.5-5.5c-2.6.6-3.3 2.6-1.4 4.4" stroke="'+O+'" stroke-width="3.2" stroke-linecap="round" fill="none"/><path d="M43.5 7c-1.5-3.5 1-6.5 4.5-5.5c-2.6.6-3.3 2.6-1.4 4.4" stroke="#b45309" stroke-width="1.5" stroke-linecap="round" fill="none"/>'+
 '<circle cx="44" cy="16.5" r="11.2" fill="url(#'+h+')" stroke="'+O+'" stroke-width="1.3"/>'+
 '<ellipse cx="40.5" cy="11.5" rx="3.4" ry="1.8" fill="#fff" opacity=".28" transform="rotate(-30 40.5 11.5)"/>'+
 '<g class="tg-wat"><path d="M51.6 20c3.2 2 4.4 7.2 3.4 11.6c-.6 3.2-4.8 3.2-5.3 0c-.6-4.2-.3-8.4 1.9-11.6z" fill="#dc2626" stroke="'+O+'" stroke-width="1.1"/><ellipse cx="52.2" cy="25.5" rx=".9" ry="2.4" fill="#fff" opacity=".3"/></g>'+
 '<path d="M53.4 18.6l6.6-1.2l-.8 3.6z" fill="#5b0f1a" stroke="'+O+'" stroke-width="1" stroke-linejoin="round"/>'+
 (P.tongue?'<path d="M55 20.6c3 .2 4.6 2.2 4.4 4.6c-.2 1.6-2.2 1.9-2.9.4c-.6-1.4-1.1-2.8-2.4-3.6z" fill="#f472b6" stroke="'+O+'" stroke-width=".9" stroke-linejoin="round" transform="rotate('+(P.tongue==1?0:-18)+' 55 21)"/>':'')+
 '<path d="M53.4 19.6l6.2 1.8l-6.4 1.2z" fill="#e8a33a" stroke="'+O+'" stroke-width="1" stroke-linejoin="round"/>'+
 '<path d="M53.2 13.8l8.4 3.1l-8.2 2.1z" fill="#f2b544" stroke="'+O+'" stroke-width="1.1" stroke-linejoin="round"/>'+
 '<circle cx="40.4" cy="20.6" r="2" fill="#f472b6" opacity=".55"/>'+
 eye(41.4,12.2,6.1,P.e1,2.4,1)+eye(50,11,4.2,P.e2,1.7,2)+
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
