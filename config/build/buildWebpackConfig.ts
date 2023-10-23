import { IBuildOptions } from "./types/config";


import { buildWebpackPlugins } from './buildPlugins';
import { buildWebpackLoaders } from './buildLoaders';
import { buildWebpackResolvers } from './buildResolvers';
import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: IBuildOptions): Configuration => {
return {
  mode: options.mode,
  entry: options.paths.entry,
  devtool: options.mode === 'development' ? 'inline-source-map' : undefined,
  module: {
    rules: buildWebpackLoaders(options),
  },
  resolve: buildWebpackResolvers(options),
  output: {
    path: options.paths.build,
    filename: '[name].[contenthash].js',
    clean: true
  },
  plugins: buildWebpackPlugins(options),
  devServer: options.mode === 'development' ? buildDevServer(options) : undefined
};
}