const fs = require("fs");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "./src"),
};

const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
  const configObj = {
    moduleIds: "deterministic",
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    configObj.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return configObj;
};

const plugins = () => {
  const basePlugins = [
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/cards/cards.pug`,
      filename: "./cards.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/colors-type/colors-type.pug`,
      filename: "./colors-type.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/form-elements/form-elements.pug`,
      filename: "./form-elements.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/headers-footers/headers-footers.pug`,
      filename: "./headers-footers.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/landing/landing.pug`,
      filename: "./landing.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/room/room.pug`,
      filename: "./room.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/search-room/search-room.pug`,
      filename: "./search-room.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/sign-in-page/sign-in-page.pug`,
      filename: "./sign-in.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/sign-up-page/sign-up-page.pug`,
      filename: "./sign-up.html",
      inject: true,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename("css")}`,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "app"),
        },
      ],
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];

  if (isProd) {
    basePlugins.push(
      new ImageminPlugin({
        bail: false,
        cache: true,
        imageminOptions: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
              "svgo",
              {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            ],
          ],
        },
      })
    );
  }

  return basePlugins;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./js/main.js",
  output: {
    filename: `./js/${filename("js")}`,
    path: path.resolve(__dirname, "app"),
    publicPath: "",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "app"),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
    openPage: "landing.html",
  },
  optimization: optimization(),
  plugins: plugins(),
  devtool: isProd ? false : "source-map",
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
          root: path.resolve(__dirname, "src"),
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `./img/${filename("[ext]")}`,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `./fonts/${filename("[ext]")}`,
            },
          },
        ],
      },
    ],
  },
};
