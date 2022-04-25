/* config-overrides.js */
module.exports = {
  webpack: function(config, env) {
    let loaders = config.module.rules[1].oneOf
    loaders.splice(loaders.length - 1, 0, {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    })
    loaders.splice(loaders.length - 1, 0, {
      test: /\.(ts|tsx)?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    })
    return config
  },
}