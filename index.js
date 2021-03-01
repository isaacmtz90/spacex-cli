#!/usr/bin/env node
const spacex = require('./lib/spacex');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('SpaceX CLI', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const resource = await spacex.queryResources();
  console.log(resource);
};
run();