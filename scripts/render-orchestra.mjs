import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
const root = new URL('../', import.meta.url);
const score = JSON.parse(readFileSync(new URL('assets/orchestra-score.json', root), 'utf8'));
let svg = readFileSync(new URL('scripts/orchestra-template.svg', root), 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const duration = score.length * 3;
const animation = score.map((step, i) => {
  // One clock: every signal waits, travels its edge, then disappears.
  const start = i / score.length;
  const end = (i + 1) / score.length;
  const times = [...new Set([0, start, end, 1])];
  const opacity = times.map(t => t >= start && t < end ? 1 : 0);
  const points = times.map(t => t <= start ? 0 : 1);
  return `<g class="stage" opacity="0"><animate attributeName="opacity" values="${opacity.join(';')}" keyTimes="${times.join(';')}" calcMode="discrete" dur="${duration}s" repeatCount="indefinite"/>
    <circle r="5" fill="${step.color}" filter="url(#glow)"><animateMotion dur="${duration}s" repeatCount="indefinite" keyTimes="${times.join(';')}" keyPoints="${points.join(';')}" calcMode="linear"><mpath href="#${step.path}"/></animateMotion></circle>
    <text x="38" y="447" font-family="Consolas,monospace" font-size="11" fill="${step.color}">${escape(step.label)} · ${escape(step.detail)}</text></g>`;
}).join('\n');
svg = svg.replace('<!-- SCORE -->', animation);
writeFileSync(new URL('assets/polycentric-orchestra.svg', root), svg);
console.log(`Rendered orchestra: ${score.length} stages, ${duration}s shared clock.`);
const sync = process.argv.indexOf('--sync-site');
if (sync !== -1) {
  if (!process.argv[sync + 1]) throw new Error('Supply a tomfoolery checkout after --sync-site');
  const assets = resolve(process.argv[sync + 1], 'assets');
  mkdirSync(assets, { recursive: true });
  writeFileSync(resolve(assets, 'polycentric-orchestra.svg'), svg);
  writeFileSync(resolve(assets, 'orchestra-map.svg'), readFileSync(new URL('scripts/orchestra-template.svg', root), 'utf8').replace(/^[ \t]*<!-- SCORE -->\r?\n/m, ''));
  console.log(`Synced illustration and interactive map to ${assets}`);
}
