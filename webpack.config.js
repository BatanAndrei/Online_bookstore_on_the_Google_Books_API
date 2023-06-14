const path = require('path');  //библиотека для пути (js)
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // для плагина css, стили прописываются в отдельном файле, а не в тэге
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // минимизатор для scc
//const ESLintPlugin = require('eslint-webpack-plugin'); // для ESlint


module.exports = {
    entry: path.resolve(__dirname, 'index.js'),    //исходный файл
    output: {
        path: path.resolve(__dirname, 'bundle'), //output называем папку в которую собираем
        filename: 'main.js',                      // main.js называем файл в котором собираем
    },
    mode: 'production',   // переключение между Dev и Prod и будет ли собранный файл минифицирован (dev=norm, prod=minific...)
    plugins: [new MiniCssExtractPlugin()], //, new ESLintPlugin({fix: true}) // вместо (options) прописываем ({fix: true}) 
    module: {
        rules: [            // правила для сборщикак css
          { test: /\.scss$/i,       // regExp для пропуска определённых файлов
           use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }  // с начало преобразовывает css-loader, потом style-loader
        ]
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'bundle'), //webserver 
        },
      },
  
      optimization: {   //этим свойством мы переписываем дефолтные настройки, необходимо дописать в minimizer - '...'
        minimizer: [
          '...',        // это означает что мы дополняем конфиг, а не перезаписываем (например js минификацию)
          new CssMinimizerPlugin(),
        ],
      },

    
};
