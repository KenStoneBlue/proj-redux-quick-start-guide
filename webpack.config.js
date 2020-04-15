const path =require("path")
module.exports ={
 mode: "development",
 entry: "./src/app/app.js",
 output: {
   //path: path.resolve("dist"),
   path: path.resolve(__dirname, "dist"),
   filename: "main.js"
 },
 module: {
   rules: [
     {
       test: /\.jsx?$/,
       use: {
         loader: "babel-loader"
       },
       exclude: /node_modules/
     }
   ]
 },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: './dist' 
  },
};


