
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { IBuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildWebpackPlugins = (options: IBuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html
    }),
    new ProgressPlugin(),
	new MiniCssExtractPlugin({
		filename: 'css/[name].[contenthash:5].css',
		chunkFilename: 'css/[name].[contenthash:5].css'
	})
  ];
};
