
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Opadaibra/portfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Opadaibra/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1885, hash: '52e0fbd555f4aa1486a829820c86642713f65a9bab62a6807929724fde44c137', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1186, hash: '41e0858b9e7d1731f4e8f6047b309f65ac73a5f7a81e5aafcb50802aa6753ad3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30203, hash: 'e98798cec45c16e5ae7d1364b338f79a544d2865543794d74aa2c00e33a01e51', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KGICTBXH.css': {size: 100545, hash: 'E5HFLvhE3tY', text: () => import('./assets-chunks/styles-KGICTBXH_css.mjs').then(m => m.default)}
  },
};
