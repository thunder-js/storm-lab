const path = require('path');
const metroBundler = require('metro-bundler');

const config = {
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    react: path.resolve(__dirname, 'node_modules/react'),
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, '../storm-step-form'),
    ];
  },
  getBlacklistRE() {
    return metroBundler.createBlacklist([
      /\/Users\/rafaelribeirocorreia\/dev\/thunder-js\/storm-step-form\/node_modules\/react-native\/.*/,
    ]);
  },
}
//

module.exports = config;
