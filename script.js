const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const pageContent = $("#page-content");
const subjects = {
  OS: {title:"Operačné systémy", short:"OS", description:"UNIX/Linux, súbory, adresáre, prístupové práva, terminál a procesy."},
  USaA: {title:"USaA", short:"USaA", description:"Študijné materiály predmetu USaA."}
};
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function link(page,title,desc,tag="MATERIÁL",num="") { return `<a class="lesson-card material-card" href="#${page}" data-page="${page}"><div class="card-top"><span class="lesson-number">${num||"↗"}</span><span class="card-arrow">↗</span></div><div class="card-tag">${tag}</div><h3>${title}</h3><p>${desc}</p><div class="card-footer"><span>Otvoriť materiál</span><span>→</span></div></a>`; }
function heading(kicker,title,intro="") { return `<div class="section-heading"><div><span class="section-kicker">${kicker}</span><h2>${title}</h2></div></div>${intro?`<p class="intro">${intro}</p>`:""}`; }
function home() { return heading("ŠTUDIJNÁ KNIŽNICA","Vyber si predmet","Materiály sú usporiadané podľa predmetov. Otvor predmet a vyber si konkrétny dokument.")+`<div class="lesson-grid subject-grid">${link("OS","Operačné systémy","6 materiálov · UNIX/Linux, systémové volania a procesy.","PREDMET","OS")}${link("USaA","USaA","Materiály predmetu.","PREDMET","UA")}</div>`; }
function subjectPage(code) {
 const s=subjects[code];
 if(code==="USaA") return heading("PREDMET · USaA",s.title,"")+`<div class="subject-empty"><div class="empty-icon">📚</div><h3>${s.title}</h3><p>Vyber tento predmet a jeho materiály sa zobrazia v tomto prehľade.</p><a href="#home" data-page="home">← Všetky predmety</a></div>`;
 const cards=materials.map(m=>link(m.id,m.title,m.description,"MATERIÁL",m.number)).join("");
 return heading("PREDMET · OS",s.title,"Šesť materiálov o základoch UNIX/Linux. Vyber si dokument alebo vyhľadaj tému podľa názvu či obsahu.")+`<div class="material-toolbar"><label class="search-box"><span>⌕</span><input id="material-search" type="search" placeholder="Hľadať v materiáloch OS…" aria-label="Hľadať v materiáloch OS"></label><span class="result-count" id="result-count">6 materiálov</span></div><div class="lesson-grid material-grid" id="material-grid">${cards}</div><p class="search-note" id="search-note" hidden>Nenašiel sa žiadny materiál zodpovedajúci vyhľadávaniu.</p><div class="os-bottom-nav"><a href="#home" data-page="home">← Všetky predmety</a><span>6 dokumentov</span></div>`;
}
function renderMaterial(m) {
 return heading(`OS · MATERIÁL ${m.number}`,m.title,m.description)+`<div class="reading-meta"><span><b>${m.pages}</b> strán v pôvodnom PDF</span><span>Text a ukážky kódu</span></div><article class="reading-card lesson-body">${m.body}</article><div class="os-bottom-nav"><a href="#OS" data-page="OS">← Všetky materiály OS</a><a href="#home" data-page="home">Prehľad predmetov</a></div>`;
}
function setHeader(title,subtitle,crumb){$("#page-title").textContent=title;$("#page-subtitle").textContent=subtitle;$("#crumb-current").textContent=crumb;}
function render(page) {
 $$(".nav-link").forEach(a=>a.classList.toggle("active",a.dataset.page===page || (page.startsWith("OS-") && a.dataset.page==="OS")));
 $("#sidebar").classList.remove("open");
 const material=materials.find(m=>m.id===page);
 if(material){setHeader(material.title,"Študijný materiál · Operačné systémy",`OS / ${material.number}`);pageContent.innerHTML=renderMaterial(material);}
 else if(page==="home"){setHeader("Učebné materiály","Vyber si predmet a otvor jeho materiály.","Prehľad");pageContent.innerHTML=home();}
 else if(subjects[page]){setHeader(subjects[page].title,"Materiály predmetu",subjects[page].short);pageContent.innerHTML=subjectPage(page);}
 else {render("home");return;}
 bindNav();
 const search=$("#material-search");
 if(search){search.addEventListener("input",()=>{
   const q=search.value.trim().toLocaleLowerCase("sk");let count=0;
   $$("#material-grid .material-card").forEach((card,i)=>{const m=materials[i];const match=!q || (m.title+" "+m.description+" "+m.body.replace(/<[^>]*>/g," ")).toLocaleLowerCase("sk").includes(q);card.hidden=!match;if(match)count++;});
   $("#result-count").textContent=`${count} ${count===1?"materiál":count<5?"materiály":"materiálov"}`;$("#search-note").hidden=count!==0;
 });}
}
function bindNav() { $$('[data-page]').forEach(a=>a.onclick=(e)=>{e.preventDefault();const page=a.dataset.page;history.pushState({page},"", "#"+page);render(page);window.scrollTo(0,0);}); }
$("#theme-button").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("os-text-theme",document.body.classList.contains("dark")?"dark":"light");});
$("#menu-button").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
window.addEventListener("popstate",()=>render(location.hash.slice(1)||"home"));
if(localStorage.getItem("os-text-theme")==="dark")document.body.classList.add("dark");
render(location.hash.slice(1)||"home");
