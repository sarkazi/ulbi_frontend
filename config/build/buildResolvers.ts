import { ResolveOptions } from 'webpack';

export const buildWebpackResolvers = (): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js']
  };
};
