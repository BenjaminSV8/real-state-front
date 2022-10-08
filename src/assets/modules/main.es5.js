module.exports = {
    entry: './assets/modules/main.mjs',
    output: {
      filename: 'main.es5.js',
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
                    '> 1%',
                    'last 2 versions',
                    'Firefox ESR',
                  ],
                },
              }],
            ],
          },
        },
      }],
    },
  };