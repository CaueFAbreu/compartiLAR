// Desenha o diagrama de casos de uso do compartiLAR em SVG com layout controlado (UML: atores, associações,
// generalizações, <<include>> e <<extend>>). Os relacionamentos vêm do .puml, para o desenho ser fiel ao modelo.
import { readFileSync, writeFileSync } from "node:fs";

const [pumlPath, outSvg] = process.argv.slice(2);
const puml = readFileSync(pumlPath, "utf8").replace(/\r\n/g, "\n");

// ---------- modelo ----------
const ucLabel = Object.fromEntries([...puml.matchAll(/^\s*usecase "(.+)" as (\w+)$/gm)].map((m) => [m[2], m[1].replace(/<\/?i>/g, "").split("\\n")]));
const abstractUC = new Set([...puml.matchAll(/^\s*usecase "<i>.+<\/i>" as (\w+)$/gm)].map((m) => m[1]));
const actorLabel = Object.fromEntries([...puml.matchAll(/^actor "(.+)" as (\w+)$/gm)].map((m) => [m[2], m[1].replace(/<\/?i>/g, "").replace("<<sistema>>", "«sistema»").split("\\n")]));
const abstractActor = new Set([...puml.matchAll(/^actor "<i>.+<\/i>" as (\w+)$/gm)].map((m) => m[1]));
const assoc = [...puml.matchAll(/^(\w+) --> (\w+)$/gm)].map((m) => [m[1], m[2]]);
const actorGen = [...puml.matchAll(/^(\w+) <\|-- (\w+)$/gm)].map((m) => [m[2], m[1]]); // filho, pai
const ucGen = [...puml.matchAll(/^(\w+) --\|> (\w+)$/gm)].map((m) => [m[1], m[2]]);
const deps = [...puml.matchAll(/^(\w+) \.\.> (\w+) : <<(include|extend)>>$/gm)].map((m) => [m[1], m[2], m[3]]);

// ---------- layout ----------
const W = 1660, H = 1780;
const XA = 660, XB = 1130, RX = 128, RY = 34;
const A = { UC01: 150, UC02: 262, UC08: 374, UC10: 486, UC12: 598, UC14: 710, UC15: 822, UC04: 934, UC13: 1046,
  UC05: 1158, UC06: 1270, UC11: 1382, UC16: 1494, UC17: 1606 };
const B = { CAD: 206, UC07: 318, UC09: 654, UC03: 1550 };
const ACT = { Visitante: [100, 206], Usuario: [100, 1550], Estudante: [300, 940], Proprietario: [300, 1330],
  Moderador: [300, 1690], Mapas: [1560, 700], Email: [1560, 1200] };
const SYS = { x: 470, y: 70, w: 880, h: 1640 };

const node = {};
for (const [k, y] of Object.entries(A)) node[k] = { kind: "uc", x: XA, y };
for (const [k, y] of Object.entries(B)) node[k] = { kind: "uc", x: XB, y };
for (const [k, [x, y]] of Object.entries(ACT)) node[k] = { kind: "actor", x, y };
for (const k of [...Object.keys(ucLabel), ...Object.keys(actorLabel)]) if (!node[k]) throw new Error(`sem posição: ${k}`);

// rotas manuais: Visitante passa pelos vãos da coluna esquerda; e-mail usa trilhas ortogonais fora do sistema
const VIA = {
  "Visitante>UC07": [[505, 318]],
  "Visitante>UC09": [[505, 654]],
};
const emailTop = ["UC01", "UC02", "UC10", "UC13"];          // chegam ao ator por cima
const emailBottom = ["UC11", "UC03", "UC17"];               // chegam por baixo
emailTop.forEach((k, i) => {
  const lane = 1470 - i * 22, entry = 1170 + i * 10;
  VIA[`${k}>Email`] = [[lane, A[k] ?? B[k]], [lane, entry]];
});
emailBottom.forEach((k, i) => {
  const lane = 1404 + i * 22, entry = 1214 + i * 10;
  VIA[`${k}>Email`] = [[lane, A[k] ?? B[k]], [lane, entry]];
});

// ---------- geometria ----------
function ellipsePoint(n, ang) { return [n.x + RX * Math.cos(ang), n.y + RY * Math.sin(ang)]; }
function endpoint(n, other, toward) {
  if (n.kind === "uc") {
    if (other.kind === "actor" && other.x < XA - RX) {          // ator à esquerda: chega pelo lado esquerdo
      const s = Math.max(-0.75, Math.min(0.75, (toward[1] - n.y) / 300));
      return ellipsePoint(n, Math.PI - Math.asin(s));
    }
    if (other.kind === "actor" || toward[0] > n.x + RX) {        // ator à direita ou trilha: sai pelo lado direito
      const s = Math.max(-0.5, Math.min(0.5, (toward[1] - n.y) / 300));
      return ellipsePoint(n, Math.asin(s));
    }
    const dx = toward[0] - n.x, dy = toward[1] - n.y;
    const k = 1 / Math.sqrt((dx * dx) / (RX * RX) + (dy * dy) / (RY * RY));
    return [n.x + dx * k, n.y + dy * k];
  }
  const bx = 30, top = n.y - 46, bottom = n.y + 62;
  const dx = toward[0] - n.x, dy = toward[1] - n.y;
  if (Math.abs(dx) * 40 > Math.abs(dy) * bx) return [n.x + Math.sign(dx) * bx, n.y + Math.max(-40, Math.min(30, (dy * bx) / Math.abs(dx || 1)))];
  return [n.x + (dx * 40) / Math.abs(dy), dy > 0 ? bottom : top];
}
function route(a, b) {
  const na = node[a], nb = node[b];
  const via = VIA[`${a}>${b}`] ?? [];
  const first = via[0] ?? [nb.x, nb.y], last = via[via.length - 1] ?? [na.x, na.y];
  let p0 = endpoint(na, nb, first), p1 = endpoint(nb, na, last);
  if (via.length && na.kind === "uc" && first[0] > na.x) p0 = [na.x + RX, first[1]];
  if (b === "Email" && via.length) p1 = [nb.x - 30, last[1]];
  return [p0, ...via, p1];
}

// ---------- verificação: nenhuma linha atravessa um caso de uso que não é seu extremo ----------
const problems = [];
function crossesEllipse(p, q, n) {
  for (let t = 0.02; t < 0.98; t += 0.01) {
    const x = p[0] + (q[0] - p[0]) * t, y = p[1] + (q[1] - p[1]) * t;
    if (((x - n.x) / (RX + 4)) ** 2 + ((y - n.y) / (RY + 4)) ** 2 < 1) return true;
  }
  return false;
}
function check(a, b, pts) {
  for (let i = 0; i < pts.length - 1; i++)
    for (const [k, n] of Object.entries(node))
      if (n.kind === "uc" && k !== a && k !== b && crossesEllipse(pts[i], pts[i + 1], n)) problems.push(`${a}→${b} atravessa ${k}`);
}

// ---------- desenho ----------
const parts = [];
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const poly = (pts, o = {}) => parts.push(`<polyline points="${pts.map((p) => p.map((v) => v.toFixed(1)).join(",")).join(" ")}" fill="none" stroke="#222" stroke-width="${o.w ?? 1.5}"${o.dash ? ' stroke-dasharray="7 5"' : ""}${o.end ? ` marker-end="url(#${o.end})"` : ""}/>`);

parts.push(`<rect x="${SYS.x}" y="${SYS.y}" width="${SYS.w}" height="${SYS.h}" fill="#fff" stroke="#222" stroke-width="1.6"/>`);
parts.push(`<text x="${SYS.x + SYS.w / 2}" y="${SYS.y + 28}" text-anchor="middle" font-weight="bold" font-size="19">compartiLAR</text>`);

for (const [a, b] of assoc) { const r = route(a, b); check(a, b, r); poly(r); }
for (const [c, p] of [...actorGen, ...ucGen]) { const r = route(c, p); check(c, p, r); poly(r, { end: "gen" }); }
const labels = [];
for (const [a, b, t] of deps) {
  const r = route(a, b);
  check(a, b, r);
  poly(r, { dash: true, end: "open" });
  const [p, q] = r;
  labels.push({ x: p[0] + (q[0] - p[0]) * 0.3, y: p[1] + (q[1] - p[1]) * 0.3, t });
}
for (const [k, n] of Object.entries(node)) {
  if (n.kind === "uc") {
    parts.push(`<ellipse cx="${n.x}" cy="${n.y}" rx="${RX}" ry="${RY}" fill="#fff" stroke="#222" stroke-width="1.6"/>`);
    const ls = ucLabel[k];
    ls.forEach((l, i) => parts.push(`<text x="${n.x}" y="${n.y + (i - (ls.length - 1) / 2) * 19 + 6}" text-anchor="middle" font-size="16"${abstractUC.has(k) ? ' font-style="italic"' : ""}>${esc(l)}</text>`));
  } else {
    const { x, y } = n;
    parts.push(`<g fill="none" stroke="#222" stroke-width="1.8"><circle cx="${x}" cy="${y - 34}" r="11" fill="#fff"/><line x1="${x}" y1="${y - 23}" x2="${x}" y2="${y + 6}"/><line x1="${x - 17}" y1="${y - 12}" x2="${x + 17}" y2="${y - 12}"/><line x1="${x}" y1="${y + 6}" x2="${x - 13}" y2="${y + 28}"/><line x1="${x}" y1="${y + 6}" x2="${x + 13}" y2="${y + 28}"/></g>`);
    actorLabel[k].forEach((l, i) => parts.push(`<text x="${x}" y="${y + 50 + i * 18}" text-anchor="middle" font-size="16"${abstractActor.has(k) ? ' font-style="italic"' : ""}>${esc(l)}</text>`));
  }
}
for (const l of labels) parts.push(`<rect x="${l.x - 30}" y="${l.y - 10}" width="60" height="17" fill="#fff"/><text x="${l.x}" y="${l.y + 3}" text-anchor="middle" font-size="12.5">«${l.t}»</text>`);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Arial, Helvetica, sans-serif">
<defs>
<marker id="open" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="12" markerHeight="12" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M1,1 L11,6 L1,11" fill="none" stroke="#222" stroke-width="1.6"/></marker>
<marker id="gen" viewBox="0 0 20 20" refX="19" refY="10" markerWidth="20" markerHeight="20" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M1,1 L19,10 L1,19 Z" fill="#fff" stroke="#222" stroke-width="1.6"/></marker>
</defs>
<rect width="100%" height="100%" fill="#fff"/>
<text x="${W / 2}" y="38" text-anchor="middle" font-weight="bold" font-size="21">compartiLAR – Diagrama de Casos de Uso</text>
${parts.join("\n")}
</svg>`;
writeFileSync(outSvg, svg);
console.log(`ok: ${assoc.length} associações, ${actorGen.length + ucGen.length} generalizações, ${deps.length} dependências`);
console.log(problems.length ? `ATRAVESSAM:\n${problems.join("\n")}` : "nenhuma linha atravessa um caso de uso");
