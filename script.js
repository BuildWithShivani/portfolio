const P = PORTFOLIO;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pad = (n) => String(n).padStart(2, "0");

// ---------- theme ----------
const root = document.documentElement;
function setTheme(t) {
  root.dataset.theme = t;
  $("themeBtn").textContent = t === "dark" ? "☀" : "☾";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || "light");
$("themeBtn").onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

// ---------- small-screen menu ----------
const menu = $("menu");
const closeMenu = () => { menu.open = false; };
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("click", (e) => { if (menu.open && !menu.contains(e.target)) closeMenu(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.open) { closeMenu(); menu.querySelector("summary").focus(); }
});

// ---------- hero ----------
const [first, ...rest] = P.name.split(" ");
$("heroName").innerHTML = `${esc(first)}<br><em>${esc(rest.join(" "))}.</em>`;
$("heroHeadline").textContent = P.headline;
$("heroRole").textContent = P.role;
if (P.resume) { $("heroResume").href = P.resume; $("heroResume").hidden = false; }
$("photo").src = P.photo;
$("photoNote").textContent = P.photoNote;
$("heroNotes").innerHTML = P.heroNotes.map((n, i) =>
  `<div class="note note-${i} ${esc(n.color)}"><small>${esc(n.label)}</small>${esc(n.text)}</div>`).join("");
$("year").textContent = new Date().getFullYear();

function tick() {
  $("clock").textContent = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });
}
tick(); setInterval(tick, 30000);

// ---------- about ----------
$("aboutText").textContent = P.about;
$("aboutText2").textContent = P.about2;
$("nowCards").innerHTML = P.now.map((n) =>
  `<div class="now-card ${esc(n.color)}"><small>${esc(n.label)}</small><b>${esc(n.text)}</b></div>`).join("");
$("stats").innerHTML = P.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
$("principles").innerHTML = P.principles.map((x, i) =>
  `<div class="principle"><span>${pad(i + 1)}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>`).join("");

// ---------- skills ----------
$("skillGrid").innerHTML = P.skills.map((g) => `
  <div class="skillset"><h3>${esc(g.group)}</h3>
    <div class="chips">${g.items.map(([n, lvl]) => `<span class="chip">${lvl ? `<small>${esc(lvl)}</small>` : ""}${esc(n)}</span>`).join("")}</div>
  </div>`).join("");

// ---------- projects ----------
$("projectList").innerHTML = P.projects.map((p, i) => `
  <article class="card proj">
    <span class="no">${pad(i + 1)} / ${pad(P.projects.length)}</span>
    <h3>${esc(p.name)}</h3>
    <span class="kind">${esc([p.kind, ...(p.tech || [])].filter(Boolean).join(" · "))}</span>
    <p>${esc(p.desc)}</p>
    ${p.github || p.live
      ? `<div class="links">${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">code →</a>` : ""}${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">live →</a>` : ""}</div>`
      : `<span class="soon">code coming to GitHub soon</span>`}
  </article>`).join("");

// ---------- experience & education ----------
$("expList").innerHTML = P.experience.map((e) => `
  <li><span class="meta">${esc(e.period)}</span><h3>${esc(e.role)}</h3><div class="org">${esc(e.org)}</div>
    <ul>${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul></li>`).join("");
$("eduList").innerHTML = P.education.map((e) => `
  <li><span class="meta">${esc(e.period)}</span><h3>${esc(e.title)}</h3><div class="org">${esc(e.org)}</div></li>`).join("");
$("achList").innerHTML = P.achievements.map((a) => {
  const inner = `✦ ${esc(a.title)} <span>${esc([a.by, a.year].filter(Boolean).join(" · "))}</span>`;
  return a.link ? `<a class="cert" href="${esc(a.link)}" target="_blank" rel="noopener">${inner} ↗</a>` : `<span class="cert">${inner}</span>`;
}).join("");

// ---------- photography ----------
$("lensText").textContent = P.photography.text;
$("gallery").innerHTML = P.photography.photos.length
  ? P.photography.photos.map((ph) => `<figure><img src="${esc(ph.src)}" alt="${esc(ph.caption || "Photo by Shivani")}" loading="lazy" />${ph.caption ? `<figcaption>${esc(ph.caption)}</figcaption>` : ""}</figure>`).join("")
  : `<div class="empty-note sun">gallery coming soon —<br>still picking my favourites :)</div>`;

// ---------- github ----------
const gh = P.githubUser;
$("ghLink").href = `https://github.com/${gh}`;
$("ghLink").textContent = `@${gh} on GitHub ↗`;
$("ghChart").src = `https://ghchart.rshah.org/d9480f/${gh}`;
$("ghChart").onerror = () => $("ghChart").remove();
fetch(`https://api.github.com/users/${gh}/repos?sort=updated&per_page=30`)
  .then((r) => (r.ok ? r.json() : Promise.reject()))
  .then((repos) => {
    const list = repos.filter((r) => !r.fork && r.name.toLowerCase() !== gh.toLowerCase()).slice(0, 6);
    $("repoList").innerHTML = list.length
      ? list.map((r) => `
        <a class="card repo" href="${esc(r.html_url)}" target="_blank" rel="noopener">
          <h3>${esc(r.name)}</h3>
          <p>${esc(r.description || "No description yet.")}</p>
          <div class="meta">${r.language ? `<span>● ${esc(r.language)}</span>` : ""}<span>★ ${r.stargazers_count}</span></div>
        </a>`).join("")
      : `<div class="empty-note mint">first repos are on the way —<br>they'll show up here automatically.</div>`;
  })
  .catch(() => { $("repoList").innerHTML = ""; });

// ---------- contact ----------
const c = P.contact;
$("socials").innerHTML = [
  c.email && ["@", "Email", c.email, "mailto:" + c.email, "peach"],
  c.linkedin && ["in", "LinkedIn", c.linkedinHandle || "LinkedIn", c.linkedin, "lilac"],
  c.github && ["gh", "GitHub", "@" + gh, c.github, "mint"],
  c.instagram && ["ig", "Instagram", "photos", c.instagram, "sun"],
].filter(Boolean).map(([ic, t, sub, href, col]) => `
  <a class="social" href="${esc(href)}" target="_blank" rel="noopener">
    <span class="ic ${col}">${ic}</span><span><b>${t}</b><small>${esc(sub)}</small></span><span>↗</span>
  </a>`).join("");

$("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `Portfolio message from ${f.get("name")}`;
  const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:${c.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  $("formNote").textContent = "Your email app should open now — just hit send. Thank you!";
});

// ---------- reveal ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) en.target.classList.add("in"); });
}, { threshold: 0.1 });
document.querySelectorAll(".rv").forEach((el) => io.observe(el));

// ---------- road: boards, walker, active nav ----------
const sections = [...document.querySelectorAll(".cp")];
$("boards").innerHTML = sections.map((s, i) => `
  <button class="board" data-target="${s.id}" style="top:${((i + 1) / (sections.length + 1)) * 100}%" tabindex="-1">
    <span class="plate"><span class="no">${pad(i + 1)}</span><span class="nm">${esc(s.dataset.cp)}</span></span>
  </button>`).join("");
const boards = [...document.querySelectorAll(".board")];
boards.forEach((b) => b.addEventListener("click", () => document.getElementById(b.dataset.target).scrollIntoView({ behavior: "smooth" })));

const rail = $("rail");
const navLinks = [...document.querySelectorAll("#navLinks a, .menu-list a")];
let stopTimer;
function onScroll(moving = true) {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? h.scrollTop / max : 0;
  // walker travels from above the first board down to the last one
  const start = 0.6 / (sections.length + 1), end = sections.length / (sections.length + 1);
  // keep the whole figure (96px tall, drawn above its anchor) inside the rail
  const railH = rail.clientHeight;
  $("walker").style.top = Math.max(100, (start + pct * (end - start)) * railH) + "px";

  let current = -1;
  sections.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * 0.45) current = i; });
  boards.forEach((b, i) => b.classList.toggle("on", i <= current));
  const id = current >= 0 ? sections[current].id : "";
  navLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + id));

  rail.classList.toggle("done", pct > 0.98);
  if (!moving) return;
  rail.classList.add("walking");
  clearTimeout(stopTimer);
  stopTimer = setTimeout(() => rail.classList.remove("walking"), 160);
}
addEventListener("scroll", () => onScroll(true), { passive: true });
onScroll(false);
