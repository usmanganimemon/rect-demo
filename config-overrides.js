/* config-overrides.js */
module.exports = {
  webpack: function(config, env) {
    let loaders = config.module.rules[1].oneOf
    loaders.splice(loaders.length - 1, 0, {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    })
    loaders.splice(loaders.length - 1, 0, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    })
    return config
  },
}