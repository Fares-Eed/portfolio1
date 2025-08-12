
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
    'index.csr.html': {size: 5463, hash: 'a9277b1b7554428920e2be2d0bf00d5848793690bd28dc5db651950ce12f969c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1069, hash: '9a99da4fa38ced41c8cf8fbe35688f1f432b55495d3e63a05369d1187768b069', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'education/index.html': {size: 20999, hash: '3ad1ba2b6dce097e56118d117f1dfe9539d429315b80b7743d20e774f63b73d4', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'bio/index.html': {size: 21088, hash: 'ef9fee3e23314e10d5b430b5640f2633098ec4a4243947e6f7974e62550fe5b9', text: () => import('./assets-chunks/bio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22699, hash: 'e4d9954fa6f615893eb8046236dbb73ebaca01601c73ee04902e504d1d7aa194', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 23407, hash: '85196ac39bb854776139fdd62fa6874f322367026a70ad52ad09ef8ad92801b4', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'Offerd Services/index.html': {size: 23726, hash: 'b8026d1a3af7edd3a62fd078963228f472fa3562bcf66cbfc643eceef4d35005', text: () => import('./assets-chunks/Offerd Services_index_html.mjs').then(m => m.default)},
    'work-experience/index.html': {size: 26835, hash: '1f287ae2a9f5c64958214808ab1acf9b7b2dd92215526542b7d4bb8e91184335', text: () => import('./assets-chunks/work-experience_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 22138, hash: '1003166f4a55efc53469adb6f02f8148ab28582d8f44ddf7df4f8c4b5a33b034', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21020, hash: '9cc27e3a2c0860b38def6247679290d91d0b03ca98a5e496e6a750fb234ddb95', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-QRFXRCCV.css': {size: 231850, hash: 'RuTJ7H65zbE', text: () => import('./assets-chunks/styles-QRFXRCCV_css.mjs').then(m => m.default)}
  },
};
