import { IBuildOptions } from "./types/config"
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server'

export const buildDevServer = (options: IBuildOptions): WebpackDevServerConfiguration => {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true
	}
}