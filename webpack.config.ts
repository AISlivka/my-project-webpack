import { buildWebpack } from './config';
import { BuildMode } from './config/types/types';
import { buildPaths } from './config/options/buildPaths';

interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
}

export default (env: EnvVariables) => {
  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? BuildMode.DEV,
    buildPaths,
    analyzer: env.analyzer,
  });
};
