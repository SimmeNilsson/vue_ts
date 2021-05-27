const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
// const CompilerSfc = require('@vue/compiler-sfc')
// const parse = CompilerSfc.parse
// CompilerSfc.parse = (source, options) => {
//   return parse(source, Object.assign({ pad: true }, options))
// }

module.exports = (env = {}) => ({
    mode: "development",
    devtool: "source-map",
    entry: "./main.ts",
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                    options: { appendTsSuffixTo: [/\.vue$/] }
                }
            },
            {
                test: /\.css$/,
                use: ["css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".vue"]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
});
