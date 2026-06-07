// ===== Chandru T - Terminal Portfolio =====
const bootEl = document.getElementById('boot');
const banner = document.getElementById('banner');

const bootLines = [
  { t: '[BOOT] Initializing SOC Terminal v3.1.4...', c: 'info' },
  { t: '[ OK ] Mounting /dev/secure ... done', c: 'ok' },
  { t: '[ OK ] Loading kernel modules: netfilter, ids, siem', c: 'ok' },
  { t: '[WARN] Detecting active session... user=guest', c: 'warn' },
  { t: '[ OK ] Establishing encrypted channel (TLS 1.3)', c: 'ok' },
  { t: '[INFO] Authenticating operator: CHANDRU_T', c: 'info' },
  { t: '[ OK ] Clearance verified — Cyber Security Analyst', c: 'ok' },
  { t: '[ OK ] Loading portfolio manifest...', c: 'ok' },
  { t: '[INFO] Ready. Launching interactive shell...', c: 'info' },
];

let bi = 0;
function typeBoot(){
  if(bi >= bootLines.length){
    setTimeout(() => {
      bootEl.style.display = 'none';
      banner.hidden = false;
    }, 400);
    return;
  }
  const l = bootLines[bi];
  const span = document.createElement('span');
  span.className = l.c;
  span.textContent = l.t + '\n';
  bootEl.appendChild(span);
  bi++;
  setTimeout(typeBoot, 220);
}
typeBoot();

// ===== Menu navigation =====
const panels = ['projects','skills','resume','certs','internships','contact','about'];
const menuItems = document.querySelectorAll('.menu-item');
const screen = document.getElementById('screen');

function show(target){
  banner.hidden = true;
  panels.forEach(p => {
    const el = document.getElementById('panel-' + p);
    el.hidden = (p !== target);
  });
  screen.scrollTop = 0;
  window.scrollTo({top:0, behavior:'smooth'});
}
function showMenu(){
  panels.forEach(p => { document.getElementById('panel-' + p).hidden = true; });
  banner.hidden = false;
  window.scrollTo({top:0, behavior:'smooth'});
}

menuItems.forEach(btn => btn.addEventListener('click', () => show(btn.dataset.target)));
document.querySelectorAll('.back').forEach(b => b.addEventListener('click', showMenu));

document.addEventListener('keydown', (e) => {
  const map = {'1':'about','2':'projects','3':'skills','4':'resume','5':'internships','6':'certs','7':'contact'};
  if(map[e.key]) show(map[e.key]);
  else if(e.key === '0' || e.key === 'Escape') showMenu();
});

// ===== Clock =====
function tick(){
  const d = new Date();
  const pad = n => String(n).padStart(2,'0');
  document.getElementById('clock').textContent =
    pad(d.getHours())+':'+pad(d.getMinutes())+':'+pad(d.getSeconds())+' UTC'+(d.getTimezoneOffset()<=0?'+':'-')+Math.abs(d.getTimezoneOffset()/60);
}
setInterval(tick,1000); tick();
document.getElementById('yr').textContent = new Date().getFullYear();
