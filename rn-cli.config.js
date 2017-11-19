const path = require('path');
const metroBundler = require('metro-bundler');

const config = {
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    react: path.resolve(__dirname, 'node_modules/react'),
    'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    'react-native-linear-gradient': path.resolve(__dirname, 'node_modules/react-native-linear-gradient'),
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, '../storm-step-form'),
      path.resolve(__dirname, '../storm-widgets'),
      path.resolve(__dirname, '../storm-common'),
    ];
  },
  // getBlacklistRE() {
  //   return metroBundler.createBlacklist([
  //     /\/Users\/rafaelribeirocorreia\/dev\/thunder-js\/storm-step-form\/node_modules\/react-native\/.*/,
  //   ]);
  // },
}
//

module.exports = config;
