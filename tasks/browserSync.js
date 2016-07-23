module.exports = {
  options: {
    background: true
  },
  server: {
    options: {
      files: [
        './public/*.html',
        './tmp/assets/styles/*.css'
      ],
      server: {
        baseDir: ['./public', './tmp']
      }
    }
  }
};
