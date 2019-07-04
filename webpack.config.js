const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/flexgrid.css',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'flexgrid.css',
            chunkFilename: '[id].css',
        }),
        new StyleLintPlugin({
          configFile: '.stylelintrc',
          context: 'src',
          files: '**/*.css',
          failOnError: false,
          quiet: false,
          emitErrors: true // by default this is to true to check the CSS lint errors
        })
    ]
}

