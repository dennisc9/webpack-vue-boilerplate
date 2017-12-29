module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'html'
  ],
  extends: 'eslint:recommended',
  rules: {
    //"off", "warn", or "error", or use 0 for off, 1 for warning, or 2 for error
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0, // disallow use of console 
    'no-unused-vars': 0,
  },
  globals: {
    module: true,
    require: true,
    __dirname: true,
    global:true,
    $:true,
    _:true
  }
}
