
export default {
  basePath: 'https://github.com/Opadaibra/portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
