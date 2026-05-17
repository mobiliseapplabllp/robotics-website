const fs = require('fs');
const p = 'src/content/blog/posts/hotel-concierge-robot-india.md';
const t = fs.readFileSync(p, 'utf8');
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
for (const phrase of all) {
  const escaped = phrase.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('\\b' + escaped + '\\b', 'g');
  let cnt = 0;
  while (re.exec(tl)) cnt++;
  if (cnt) hits.push({ phrase, count: cnt });
}
console.log('Banned/off-limits matches:');
console.log(JSON.stringify(hits, null, 2));

const sentences = body.replace(/```[\s\S]*?```/g, '')
  .split(/(?<=[.!?])\s+/)
  .filter(s => s.trim().split(/\s+/).length >= 3);
const lens = sentences.map(s => s.trim().split(/\s+/).length);
const avg = lens.reduce((a, b) => a + b, 0) / lens.length;
console.log('Sentences:', lens.length, 'avg words/sentence:', avg.toFixed(1));
console.log('Sentences >25 words:', lens.filter(l => l > 25).length);

// Approximate Flesch Reading Ease
function syllables(w) {
  w = w.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  w = w.replace(/^y/, '');
  const m = w.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}
const totalWords = body.split(/\s+/).filter(Boolean);
const totalSyllables = totalWords.reduce((s, w) => s + syllables(w), 0);
const flesch = 206.835 - 1.015 * (totalWords.length / sentences.length) - 84.6 * (totalSyllables / totalWords.length);
console.log('Approx Flesch Reading Ease:', flesch.toFixed(1), '(target >= 55)');

// KEENON capitalisation spot-check
const lower = (t.match(/\bkeenon\b/g) || []).length;
const upper = (t.match(/\bKEENON\b/g) || []).length;
const mixed = (t.match(/\bKeenon\b/g) || []).length;
console.log('KEENON: upper=' + upper + ' mixed-case=' + mixed + ' lower=' + lower);
