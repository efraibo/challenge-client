const proxy = [
    {
      context: '/api',
      target: 'https://challenge.cfapps.io/',
      // pathRewrite: {'^/api' : ''},
      secure: false,
      logLevel: 'debug'
    }
  ];
  module.exports = proxy;