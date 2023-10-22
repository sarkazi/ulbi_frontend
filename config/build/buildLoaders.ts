import { RuleSetRule } from 'webpack';
import {loader} from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config';

export const buildWebpackLoaders = (options: IBuildOptions): RuleSetRule[] => {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
	{
        test: /\.s[ac]ss$/i,
        use: [
          
         options.mode === 'development' ? 'style-loader':  loader,

		 {
			loader: 'css-loader',
			options: {
				modules: {
auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
				localIdentName: options.mode === 'development' ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
				},
				
			}
		 },
          "sass-loader",
        ],
      },
  ];
};
