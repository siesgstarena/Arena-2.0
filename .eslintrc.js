module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-react'],
    },
  },

  plugins: ['react', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': [2],
    'react/forbid-prop-types': [2, { forbid: [] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-did-update-set-state': 'off',
    'react/require-default-props': [0, { forbidDefaultForRequired: false }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'import/no-extraneous-dependencies': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    document: false,
  },
};
