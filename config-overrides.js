const { addBabelPlugins, override } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(['formatjs', { idInterpolationPattern: '[sha512:contenthash:base64:6]' }]),
);
