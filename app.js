const TAG='buildbin-20',amz=n=>'https://www.amazon.com/s?k='+encodeURIComponent(n.replace(/\s*\([^)]*\)/g,'').trim()||n).replace(/%20/g,'+')+'&tag='+TAG;
const toolLink=x=>{const n=typeof x=='string'?x:(x&&x.name)||'';return x&&typeof x=='object'&&x.url?`<a class="tool" href="${x.url}" target="_blank" rel="sponsored nofollow noopener">${n}</a>`:n},partLink=x=>{const n=typeof x=='string'?x:x.name,u=(typeof x=='object'&&x.url)||amz(n);return `<li><a href="${u}" target="_blank" rel="sponsored nofollow noopener">${n}</a></li>`};
const ICON={'home-automation':'🏠',robotics:'🤖','drones-fpv':'🛸','sensors-weather':'🌡️','led-lighting':'💡',audio:'🎧',wearables:'⌚',gaming:'🎮','3d-printing':'🖨️',meshtastic:'📡',kids:'🧸',halloween:'🎃'};
const $=s=>document.querySelector(s);let D;
fetch((window.ROOT||'')+'data/projects.json').then(r=>r.json()).then(d=>{D=d;
for(const[k,v]of Object.entries(d.boards))$('#board').add(new Option(v,k));
for(const[k,v]of Object.entries(d.categories))$('#cat').add(new Option(v,k));
if(window.PRESET_CAT)$('#cat').value=PRESET_CAT;
const h=location.hash.slice(1);if(d.categories[h])$('#cat').value=h;const pm=/^p-(\d+)$/.exec(h);if(pm&&d.projects[+pm[1]]){$('#cat').value='';}render();if(pm)openCard(h);});
function openCard(id){const el=document.getElementById(id);if(!el)return;const dt=el.querySelector('details');if(dt)dt.open=true;el.classList.add('hl-card');setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),50);}
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(/^p-\d+$/.test(h)){if(!document.getElementById(h)){$('#board').value=$('#cat').value=$('#lvl').value='';render();}openCard(h);}});
function render(){const b=$('#board').value,c=$('#cat').value,l=$('#lvl').value;
const r=D.projects.filter(p=>(!b||p.boards.includes(b))&&(!c||p.categories.includes(c))&&(!l||p.difficulty==l));
$('#count').textContent=r.length+' matching projects';
$('#results').innerHTML=r.map(p=>`<article class="card" id="p-${D.projects.indexOf(p)}">${p.thumb?`<img class="thumb" src="${(window.ROOT||'')+p.thumb}" alt="${p.title} project photo" width="640" height="400" loading="lazy" decoding="async" onerror="this.outerHTML='<div class=&quot;thumb ph&quot; aria-hidden=&quot;true&quot;>${ICON[p.categories[0]]||'🔧'}</div>'">`:`<div class="thumb ph" aria-hidden="true">${ICON[p.categories[0]]||'🔧'}</div>`}<h3>${p.title}</h3><p>${p.description}</p>
<div class="tags"><span class="t ${p.difficulty}">${p.difficulty}</span><span class="t">~$${p.est_cost_usd} (approx. estimate)</span><span class="t">⏱ ${p.time}</span></div>
<p class="small"><b>Boards:</b> ${p.boards.map(x=>D.boards[x]).join(', ')}</p>
<details><summary>Parts list & tools · 🛒 Buy parts</summary><ul>${p.parts.map(partLink).join('')}</ul><p class="aff">Part and tool links are Amazon searches. As an Amazon Associate, BuildBin earns from qualifying purchases.</p><p class="small"><b>Tools:</b> ${(p.tools||[]).map(toolLink).join(', ')}</p><p class="small"><b>Learn more:</b> ${p.reference_url?`<a href="${p.reference_url}" target="_blank" rel="noopener">Build guide: ${p.reference} ↗</a>`:p.reference}</p></details></article>`).join('');}
['#board','#cat','#lvl'].forEach(s=>document.addEventListener('change',e=>e.target.matches(s)&&render()));
document.querySelectorAll('.nl-form').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();
const m=f.querySelector('.nl-msg'),b=f.querySelector('button'),email=f.email.value.trim();
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){m.textContent='Please enter a valid email address.';return;}
b.disabled=true;m.textContent='Subscribing…';
try{const r=await fetch('/api/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,company:f.company.value})});
const j=await r.json().catch(()=>({}));if(r.ok){m.textContent="You're in! Check your inbox for a welcome note.";f.reset();}else m.textContent=j.error||'Something went wrong. Please try again.';}
catch(_){m.textContent='Network error. Please try again.';}finally{b.disabled=false;}}));
