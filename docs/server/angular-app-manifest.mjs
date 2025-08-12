
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/bio"
  },
  {
    "renderMode": 2,
    "route": "/education"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/Offerd Services"
  },
  {
    "renderMode": 2,
    "route": "/work-experience"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5453, hash: '8dd194ab4a8827555f041b796ac2abc4bafd3a6ade37ade4cf046f4a23e6ece1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1059, hash: 'f7034fe9a9ee674ccb82b352a0033d9a3159ae8badecaff38e790829702dd148', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'bio/index.html': {size: 20988, hash: 'cb9931672935df5a33d67a67bc0519e8d74c04c4246697a918afaf94494cc616', text: () => import('./assets-chunks/bio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22579, hash: '93fba11e208272bc5b3bcd43eecd07ec6a3b24378cb51d89307eb5d65aa4ade1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 20899, hash: '3a272f0a310cd33085a2a6b7beb78328fda8d4f103d35974ff961d7199466be4', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 22038, hash: 'ca6ec5bf89314003a053aeb14533ce193aa3e028ec7a676b0b007a8d1dd4627b', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 20920, hash: '15930477b4da1ec344cf949034fd7efa4bdb00ec9d11f6c972d3b92982e6cfc0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 23307, hash: '1f207d5f40b06c8e76dc04f8b1f8c875387ec25227a06ebeaac118ab2c4793d7', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'work-experience/index.html': {size: 26735, hash: 'dbe918d100105b408bf7253aab10670bee550a48c54ff1b5b850a5c6c5c96424', text: () => import('./assets-chunks/work-experience_index_html.mjs').then(m => m.default)},
    'Offerd Services/index.html': {size: 23626, hash: '810ac355c06673e97728d9a67b5fe14cab1160d8c4de5c862331315755425224', text: () => import('./assets-chunks/Offerd Services_index_html.mjs').then(m => m.default)},
    'styles-QRFXRCCV.css': {size: 231850, hash: 'RuTJ7H65zbE', text: () => import('./assets-chunks/styles-QRFXRCCV_css.mjs').then(m => m.default)}
  },
};
