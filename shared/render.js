// 공통 렌더러 — window.INDUSTRY_DATA 를 기반으로 레이어·섹터·회사 카드 주입
(function () {
  const data = window.INDUSTRY_DATA;
  if (!data) return;

  const root = document.getElementById("layers");
  if (!root) return;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

  function coCard(c) {
    const cls = ["co"];
    if (c.highlight) cls.push("highlight");
    if (c.dim) cls.push("dim");
    const code = c.code ? `<span class="co-code">${esc(c.code)}</span>` : "";
    const tag = c.tag ? `<span class="co-tag">${esc(c.tag)}</span>` : "";
    const role = c.role ? `<div class="co-role">${esc(c.role)}</div>` : "";

    const fields = [];
    if (c.moat) fields.push(`<div class="co-field"><span class="co-label">해자</span><span class="co-val">${esc(c.moat)}</span></div>`);
    if (c.thesis) fields.push(`<div class="co-field"><span class="co-label">테제</span><span class="co-val">${esc(c.thesis)}</span></div>`);
    if (c.risk) fields.push(`<div class="co-field"><span class="co-label">리스크</span><span class="co-val">${esc(c.risk)}</span></div>`);

    return `
      <div class="${cls.join(" ")}">
        <div class="co-top">
          <div>
            <div class="co-name">${esc(c.name)}</div>
            ${role}
          </div>
          ${code}
        </div>
        ${tag}
        ${fields.join("")}
      </div>`;
  }

  function sectorBlock(s) {
    const badge = s.badge ? `<span class="sector-badge">${esc(s.badge)}</span>` : "";
    return `
      <div class="sector">
        <div class="sector-head">
          <div class="sector-title">
            <span class="sector-id">${esc(s.id)}</span>
            <span class="sector-name">${esc(s.name)}</span>
            ${badge}
          </div>
          <div class="sector-desc">${esc(s.desc || "")}</div>
        </div>
        <div class="co-grid">
          ${(s.companies || []).map(coCard).join("")}
        </div>
      </div>`;
  }

  function layerBlock(L) {
    return `
      <section class="layer" id="${esc(L.id)}">
        <header class="layer-head">
          <span class="layer-id">${esc(L.id)}</span>
          <div class="layer-title">
            <div class="layer-subtitle">${esc(L.subtitle || "")}</div>
            <h3>${esc(L.title)}</h3>
            <p class="layer-note">${esc(L.note || "")}</p>
          </div>
        </header>
        ${(L.sectors || []).map(sectorBlock).join("")}
      </section>`;
  }

  root.innerHTML = (data.layers || []).map(layerBlock).join("");

  // Stages (반도체)
  const stageRoot = document.getElementById("stages");
  if (stageRoot && data.stages) {
    stageRoot.innerHTML = data.stages.map((s) => `
      <div class="stage">
        <div class="stage-num">${s.id}</div>
        <div class="stage-name">${esc(s.name)}</div>
        <div class="stage-desc">${esc(s.desc)}</div>
        <div class="stage-status">${esc(s.status)}</div>
      </div>`).join("");
  }

  // Paths (반도체)
  const pathRoot = document.getElementById("paths");
  if (pathRoot && data.paths) {
    pathRoot.innerHTML = data.paths.map((p) => `
      <div class="path">
        <div class="path-name">${esc(p.name)}</div>
        <div class="path-flow">
          <div class="path-node">${esc(p.from)}</div>
          <div class="path-arrow">→</div>
          <div class="path-node to">${esc(p.to)}</div>
        </div>
        <p class="path-desc">${esc(p.desc)}</p>
      </div>`).join("");
  }

  // Thesis (방산)
  const thesisRoot = document.getElementById("thesis");
  if (thesisRoot && data.thesis) {
    thesisRoot.innerHTML = data.thesis.map((t) => `
      <div class="thesis">
        <div class="thesis-id">${esc(t.id)}</div>
        <div class="thesis-title">${esc(t.title)}</div>
        <p class="thesis-desc">${esc(t.desc)}</p>
        <div class="thesis-weight">${esc(t.weight)}</div>
      </div>`).join("");
  }

  // Ladder (방산)
  const ladderRoot = document.getElementById("ladder");
  if (ladderRoot && data.ladder) {
    const cls = ["current", "growth", "alpha"];
    ladderRoot.innerHTML = data.ladder.map((l, i) => `
      <div class="ladder-step ${cls[i] || ""}">
        <div class="ladder-phase">${esc(l.phase)}</div>
        <div class="ladder-weapon">${esc(l.weapon)}</div>
        <div class="ladder-market">${esc(l.market)}</div>
        <div class="ladder-status">${esc(l.status)}</div>
      </div>`).join("");
  }
})();
