module.exports = {
  options: {
    font: 'icons',
    hashes: false,
    types: ['woff', 'woff2'],
    template: 'tasks/misc/webfont/bem.scss',
    templateOptions: {
      baseClass: 'i',
      classPrefix: 'i--',
      mixinPrefix: 'i--',
    },
    stylesheet: 'scss',
    relativeFontPath: '/assets/fonts',
    htmlDemo: false,
  },
  icons: {
    src: './src/icons/*.svg',
    dest: './assets/fonts',
    destCss: './src/styles',
    options: {
      fontFilename: 'icons',
      fontFamilyName: 'Bycons',
    },
  },
};
