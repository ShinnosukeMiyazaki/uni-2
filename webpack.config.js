module.exports = {
    entry:"./src/index.jsx",
    output:{
        path:`${__dirname}/public`,
        filename:"bundle.js",
    },
    mode: "development",
    module:{
        rules:[
            {
                test:/\.jsx$/,
                exclude:/node_modules/ ,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    {
                        loader:"css-loader"
                    }
                ]
            }
        ]
    },
    resolve:{
        extensions:[".ts", ".tsx", "jsx", ".js", ".json"]
    }
}