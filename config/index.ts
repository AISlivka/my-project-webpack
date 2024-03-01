import { BuildMode, BuildOptions } from "./types/types"
import { buildDevServer } from "./options/buildDevServer"
import { buildLoaders } from "./options/buildLoaders"
import { buildPlugins } from "./options/buildPlugins"
import { buildResolvers } from "./options/buildResolvers"
import { buildOptimization } from "./options/buildOptimization"
import { buildPaths } from "./options/buildPaths"

export function buildWebpack(options: BuildOptions) {
  const { mode } = options
  const isDev = mode === BuildMode.DEV
  return {
    mode: mode ?? BuildMode.DEV,
    entry: buildPaths.entry,
    output: {
      path: buildPaths.output,
      filename: "./[name].[contenthash].js",
      clean: true,
      sourceMapFilename: "./[file].[chunkhash].map",
    },
    plugins: buildPlugins(options),
    module: {
      noParse: /^(vue|vue-router)$/,
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: buildOptimization(options),
  }
}
