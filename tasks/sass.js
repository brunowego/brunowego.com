module.exports = {
  options: {
    includePaths: ['./node_modules']
  },
  server: {
    expand: true,
    cwd: './src/styles',
    src: '*.scss',
    dest: './tmp/assets/styles',
    ext: '.css'
  }
}
