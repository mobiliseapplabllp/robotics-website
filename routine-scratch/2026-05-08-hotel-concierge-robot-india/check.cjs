const fs = require('fs');
const path = 'src/content/blog/posts/hotel-concierge-robot-india.md';
const t = fs.readFileSync(path, 'utf8');
const body = t.replace(/^---[\s\S]*?---/, '').trim();
const words = body.split(/\s+/).length;
console.log('Body word count:', words);
console.log('Reading time @ 220 wpm:', Math.round(words / 220), 'min');

const banned = [
  'delve', 'delving', 'tapestry', 'navigate the complexities',
  "in today's fast-paced world", 'unlock the potential', 'revolutionary',
  'revolutionise', 'game-changer', 'game-changing', 'cutting-edge',
  'seamless', 'seamlessly', 'empower', 'empowering', 'holistic',
  'leverage', 'synergy', 'synergies', 'robust', 'best-in-class',
  'world-class', 'paradigm shift', 'at the end of the day',
  'moving forward', 'going forward', "it's worth noting that",
  'in conclusion', 'stand out from the crowd', 'take your',
  'to the next level',
];
const offlimits = ['world-first', "india's first", 'only', 'best', 'leading'];
const all = banned.concat(offlimits);
const tl = t.toLowerCase();
const hits = [];
for (const p of all) {
  const escaped = p.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('\\b' + escaped + '\\b', 'g');
  let cnt = 0;
  let m;
  while ((m = re.exec(tl))) cnt++;
  if (cnt) hits.push({ phrase: p, count: cnt });
}
console.log('Banned/off-limits matches:');
console.log(JSON.stringify(hits, null, 2));

const sentences = body.replace(/```[\s\S]*?```/g, '')
  .split(/(?<=[.!?])\s+/)
  .filter(s => s.trim().split(/\s+/).length >= 3);
const lens = sentences.map(s => s.trim().split(/\s+/).length);
const avg = lens.reduce((a, b) => a + b, 0) / lens.length;
console.log('Sentences:', lens.length, 'avg words/sentence:', avg.toFixed(1));
