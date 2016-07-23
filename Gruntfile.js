const path = require('path');
const time = require('time-grunt');
const load = require('load-grunt-config');

module.exports = (grunt) => {
  const tasks = path.join(process.cwd(), 'tasks');

  time(grunt);

  load(grunt, {
    configPath: tasks
  });
};
