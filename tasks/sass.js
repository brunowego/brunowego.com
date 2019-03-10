const sass = require('node-sass');

module.exports = {
  options: {
    implementation: sass,
    includePaths: ['./node_modules']
  },
  dist: {
    expand: true,
    cwd: './src/styles',
    src: '*.scss',
    dest: './public/assets/styles',
    ext: '.css'
  },
  server: {
    expand: true,
    cwd: './src/styles',
    src: '*.scss',
    dest: './tmp/assets/styles',
    ext: '.css'
  }
}
