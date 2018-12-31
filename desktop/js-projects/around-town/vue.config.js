
module.exports = {
    chainWebpack: config => {
        const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Source Sans Pro" }
                ]
            })
        ]
       
    }
}
