const root=document.documentElement;
const toggle=document.querySelector('.theme-toggle');
const saved=localStorage.getItem('novae-theme');
if(saved==='dark'||saved==='light')root.dataset.theme=saved;
function updateTheme(){const dark=root.dataset.theme==='dark';toggle.textContent=dark?'☀':'☾';toggle.setAttribute('aria-label',dark?'Passer au thème clair':'Passer au thème sombre');document.querySelector('meta[name="theme-color"]').setAttribute('content',dark?'#111312':'#f2ebe2');}
updateTheme();
toggle.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('novae-theme',root.dataset.theme);updateTheme();});
const links=[...document.querySelectorAll('nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>observer.observe(section));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
