const path = require('path');
const metroBundler = require('metro-bundler');

const config = {
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    react: path.resolve(__dirname, 'node_modules/react'),
    'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    'react-native-linear-gradient': path.resolve(__dirname, 'node_modules/react-native-linear-gradient'),
    'react-native-image-picker': path.resolve(__dirname, 'node_modules/react-native-image-picker'),
    'react-native-fetch-blob': path.resolve(__dirname, 'node_modules/react-native-fetch-blob'),
    'react-native-google-places': path.resolve(__dirname, 'node_modules/react-native-google-places'),
    graphql: path.resolve(__dirname, 'node_modules/graphql'),
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, '../storm-step-form'),
      path.resolve(__dirname, '../storm-widgets'),
      path.resolve(__dirname, '../storm-common'),
      path.resolve(__dirname, '../storm-system-components'),
      path.resolve(__dirname, '../common-data'),
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
