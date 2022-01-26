module.exports = (config) => {
  config;
  return {
    ...config,
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.css$|\.scss$|\.sass$|\.less$|\.styl$/,
          use: [
            {
              loader: 'postcss-loader',
            },
          ],
        },
      ],
    },
  };
};
