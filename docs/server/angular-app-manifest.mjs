
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio1"
  },
  {
    "renderMode": 2,
    "route": "/portfolio1/bio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio1/education"
  },
  {
    "renderMode": 2,
    "route": "/portfolio1/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio1/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio1/contact"
  },
  {
    "renderMode": 2,
    "route": "/portfolio1/Offerd Services"
  },
  {
    "renderMode": 2,
    "route": "/portfolio1/work-experience"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5463, hash: 'd707d6fe67d695b2998a7099e3633deb93d19c9bb6b62c1753336a685d983f0b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1069, hash: 'bf185fa591cbbce59196c9c64a58590294779f999a2b9d13848c9494a434111c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'bio/index.html': {size: 21088, hash: '7155c9fe9f2fe90eab0be20d0764e6e987f5bb339e17c293eef6f896554f0ae4', text: () => import('./assets-chunks/bio_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 21937, hash: 'b8a2e15355af24723548c5cf91b123fbc90c322f2c21ad4fc1a4c74659d76e37', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22699, hash: '0aae378c553277ce7aa4fb85eb3ec455e73ac366070602dcacb0999171834bc5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 22461, hash: 'bddd35522bcbbbe9c9150a9134824491c8dbdd3bdd5c5e2e6cbcc0401433705a', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22056, hash: '9a242a99dbf4a7a9bee25c4e187313d73237fb4ecbbc86990ec95122444c6307', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 23407, hash: '6952d3722d6e72c090569105d1d7355130a7f22d9de0dcf4aa85450eab1635dc', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'Offerd Services/index.html': {size: 23726, hash: '94462252dfe33766fbfc5b968e6de35e12dd4cb7d06df5c73c80a8f8dc68cc88', text: () => import('./assets-chunks/Offerd Services_index_html.mjs').then(m => m.default)},
    'work-experience/index.html': {size: 26835, hash: '44467f2ed4b8ccecb3219cc864007975af5410030f463ecb960422480daf6a38', text: () => import('./assets-chunks/work-experience_index_html.mjs').then(m => m.default)},
    'styles-QRFXRCCV.css': {size: 231850, hash: 'RuTJ7H65zbE', text: () => import('./assets-chunks/styles-QRFXRCCV_css.mjs').then(m => m.default)}
  },
};
