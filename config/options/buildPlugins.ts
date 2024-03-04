import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { VueLoaderPlugin } from "vue-loader"
// import VueI18nPlugin from "@intlify/unplugin-vue-i18n/webpack"
import { EsbuildPlugin } from "esbuild-loader"
import webpack, { Configuration } from "webpack"
import { BuildMode, BuildOptions } from "../types/types"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import ESLintWebpackPlugin from "eslint-webpack-plugin"
import StylelintPlugin from "stylelint-webpack-plugin"
// import { dirname, resolve } from "path"
// import { fileURLToPath } from "url"

export function buildPlugins({
  mode,
  buildPaths,
  analyzer,
}: BuildOptions): Configuration["plugins"] {
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      inject: true,
      template: buildPaths.html,
      title: "Webpack config",
    }),
    new VueLoaderPlugin(),
    // VueI18nPlugin({
    //   include: [
    //     resolve(dirname(fileURLToPath(import.meta.url)), "@/assets/locales/**"),
    //   ],
    // }),
    new EsbuildPlugin({
      define: {
        "process.env.NODE_ENV": JSON.stringify(mode),
      },
      treeShaking: true,
    }),
  ]

  if (mode === BuildMode.DEV) {
    plugins.push(new webpack.ProgressPlugin())
    plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ESLintWebpackPlugin())
    plugins.push(new StylelintPlugin())
  }

  if (mode === BuildMode.PROD) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
    )
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
