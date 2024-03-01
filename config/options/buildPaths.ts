import { BuildPaths } from '../types/types';
import path from 'node:path';

const absoluteDirName = process.cwd();
export const buildPaths: BuildPaths = {
  output: path.resolve(absoluteDirName, './dist'),
  entry: path.resolve(absoluteDirName, './src/index.ts'),
  html: path.resolve(absoluteDirName, './public/index.html'),
  public: path.resolve(absoluteDirName, './public'),
  src: path.resolve(absoluteDirName, './src'),
};
