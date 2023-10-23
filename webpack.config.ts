

import path from 'path'


import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IBuildOptions } from './config/build/types/config';





export default (env: IBuildEnv) => {

  

const options: IBuildOptions = {
  mode: env.mode || 'development',
  paths:  {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  },
  port: env.port || 3000
}

return buildWebpackConfig(options)
}

