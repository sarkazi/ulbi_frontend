export type buildMode = 'development' | 'production';

export interface IBuildPaths  {
entry: string
build: string
html: string
src: string

};

export interface IBuildEnv {
	mode: buildMode,
	port: number
}

export interface IBuildOptions {
  mode: buildMode;
  paths: IBuildPaths,
  port: number
}
