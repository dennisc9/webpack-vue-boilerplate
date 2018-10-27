module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    jquery: true
  },
  globals: {
    "process": true,
    "expect": true,
    "global": true,
    "$": true,
    "_": true
  },
  plugins: [
    'vue'
  ],
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  rules: {
    //"off", "warn", or "error", or use 0 for off, 1 for warning, or 2 for error
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
    'quotes': 'off',
    'no-useless-escape': 'off',
    
    // Just warn
    'no-unused-vars': 'warn',
    'curly': 'off',

    // VUE
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order' : 'warn'

  }
}
