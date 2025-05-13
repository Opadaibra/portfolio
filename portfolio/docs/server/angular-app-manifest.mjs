
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1858, hash: '979d263ae21072ec3de419877229bc0074e3fe6ffd5a476ba366045cf6d311f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1159, hash: '3b4653e29232a0aadc84e5e17f7df7cb714f0ef436f63e6e92977afbf3a20f4f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30176, hash: '3094a74da143edd41faa15000bbb40090824f4eb0c92c0214359116ddf0bcc9d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KGICTBXH.css': {size: 100545, hash: 'E5HFLvhE3tY', text: () => import('./assets-chunks/styles-KGICTBXH_css.mjs').then(m => m.default)}
  },
};
