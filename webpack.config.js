let path = require('path');  //библиотека для пути

module.exports = {
    entry: path.resolve(__dirname, "index.js"),    //исходный файл
    output: {
        path: path.resolve(__dirname, 'output'), //output называем папку в которую собираем
        filename: "all.js",                      // all.js называем файл в котором собираем
    },
    mode: "development",    // переключение между Dev и Prod и будет собранный файл минифицирован (dev=norm, prod=minific...)
}