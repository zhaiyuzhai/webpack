var webpack=require("webpack");
var html=require("html-webpack-plugin");
module.exports={
    entry:__dirname+"/app/main.js",
    output:{
        path:__dirname+"/public",
        filename:"index.js",
    },
    module:{
        rules:[
            {
                test:/\.json$/,
                use:["json-loader"]
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader",{loader:"postcss-loader",options:
                    {
                    plugins: function() {
                        return [
                            require('autoprefixer')
                        ];
                    }
                    }}
                ]
            }
        ]
    },
    plugins:
        [
        new webpack.BannerPlugin("测试插件专用"),
        new html({
        template:__dirname+"/app/index.html"
                })
        ],
    devServer:{
        contentBase:__dirname+"/public",
        // color:true,
        port:8081,
        inline:true,
        hot:true
        // progress: true
    }
}