const $=s=>document.querySelector(s);let D;
fetch((window.ROOT||'')+'data/projects.json').then(r=>r.json()).then(d=>{D=d;
for(const[k,v]of Object.entries(d.boards))$('#board').add(new Option(v,k));
for(const[k,v]of Object.entries(d.categories))$('#cat').add(new Option(v,k));
if(window.PRESET_CAT)$('#cat').value=PRESET_CAT;
const h=location.hash.slice(1);if(d.categories[h])$('#cat').value=h;render();});
function render(){const b=$('#board').value,c=$('#cat').value,l=$('#lvl').value;
const r=D.projects.filter(p=>(!b||p.boards.includes(b))&&(!c||p.categories.includes(c))&&(!l||p.difficulty==l));
$('#count').textContent=r.length+' matching projects';
$('#results').innerHTML=r.map(p=>`<article class="card"><h3>${p.title}</h3><p>${p.description}</p>
<div class="tags"><span class="t ${p.difficulty}">${p.difficulty}</span><span class="t">~$${p.est_cost_usd} (approx. estimate)</span><span class="t">⏱ ${p.time}</span></div>
<p class="small"><b>Boards:</b> ${p.boards.map(x=>D.boards[x]).join(', ')}</p>
<details><summary>Parts list & tools</summary><ul>${p.parts.map(x=>`<li>${x}</li>`).join('')}</ul><p class="small"><b>Tools:</b> ${p.tools.join(', ')}</p><p class="small"><b>Learn more:</b> ${p.reference}</p></details></article>`).join('');}
['#board','#cat','#lvl'].forEach(s=>document.addEventListener('change',e=>e.target.matches(s)&&render()));
document.querySelectorAll('.nl-form').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();
const m=f.querySelector('.nl-msg'),b=f.querySelector('button'),email=f.email.value.trim();
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){m.textContent='Please enter a valid email address.';return;}
b.disabled=true;m.textContent='Subscribing…';
try{const r=await fetch('/api/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,company:f.company.value})});
const j=await r.json().catch(()=>({}));if(r.ok){m.textContent="You're in! Check your inbox for a welcome note.";f.reset();}else m.textContent=j.error||'Something went wrong. Please try again.';}
catch(_){m.textContent='Network error. Please try again.';}finally{b.disabled=false;}}));
