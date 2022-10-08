module.exports = {
    entry: './main.msj',
    output: {
      filename: 'main.mjs',
      path: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                modules: false,
                useBuiltIns: true,
                targets: {
                  browsers: [
                    'Chrome >= 60',
                    'Safari >= 10.1',
                    'iOS >= 10.3',
                    'Firefox >= 54',
                    'Edge >= 15',
                  ],
                },
              }],
            ],
          },
        },
      }],
    },
  };