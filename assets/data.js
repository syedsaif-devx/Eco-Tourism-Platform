/* ============================================
   EcoTourDB — Shared data
   Destinations catalogue + Guides pool
   Used by reservation.html, guides.html, invoices.html
   ============================================ */

const DESTINATIONS = [
  { key: 'hunza',         label: 'Hunza Valley Trek (Gilgit-Baltistan)',        price: 8000 },
  { key: 'fairy-meadows', label: 'Fairy Meadows & Nanga Parbat Base Camp',      price: 15000 },
  { key: 'deosai',        label: 'Deosai Plains Safari (Skardu)',               price: 12000 },
  { key: 'swat',          label: 'Malam Jabba & Swat Valley Hike',              price: 7000 },
  { key: 'kaghan',        label: 'Naran Kaghan & Saif-ul-Malook Trek',          price: 9000 },
  { key: 'neelum',        label: 'Neelum Valley Trail (Azad Kashmir)',          price: 8500 }
];

const GUIDES = [
  { name: 'Karim Baig',       expertise: 'Hunza & Karakoram Trekking Specialist',       contact: 'karim.baig@ecoguides.pk',    fee: 2500, covers: ['hunza'] },
  { name: 'Aslam Sherpani',   expertise: 'Multi-region Northern Areas Guide',           contact: 'aslam.sherpani@ecoguides.pk', fee: 2800, covers: ['hunza', 'fairy-meadows'] },
  { name: 'Rehmat Ali',       expertise: 'Nanga Parbat & High-Altitude Trekking',       contact: 'rehmat.ali@ecoguides.pk',    fee: 3500, covers: ['fairy-meadows'] },
  { name: 'Zainab Bano',      expertise: 'Wildlife & Deosai Plains Ecology',            contact: 'zainab.bano@ecoguides.pk',   fee: 3000, covers: ['deosai'] },
  { name: 'Shabbir Hussain',  expertise: 'Swat Valley Hiking & Local Culture',          contact: 'shabbir.hussain@ecoguides.pk', fee: 2000, covers: ['swat'] },
  { name: 'Wali Muhammad',    expertise: 'Kaghan Valley & Alpine Lake Trails',          contact: 'wali.muhammad@ecoguides.pk', fee: 2200, covers: ['kaghan'] },
  { name: 'Nazia Parveen',    expertise: 'Kashmir Valleys & River Trail Guiding',       contact: 'nazia.parveen@ecoguides.pk', fee: 2400, covers: ['neelum'] }
];

function findDestination(key) {
  return DESTINATIONS.find(d => d.key === key) || null;
}

function findGuidesFor(key) {
  return GUIDES.filter(g => g.covers.includes(key));
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
