import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const vueLoader = {
    test: /\.vue$/,
    loader: 'vue-loader',
  };

  const esbuildLoader = {
    test: /\.[jt]sx?$/,
    loader: 'esbuild-loader',
    options: {
      /**
       * It's necessary to tell esbuild to use the 'js' loader
       * because esbuild cannot auto-detect which loader to use
       * based on the .vue extension.
       */
      loader: 'js',
      target: 'es2015',
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['vue-loader', 'vue-svg-loader-2'],
  };

  return [vueLoader, esbuildLoader, cssLoader, assetLoader, svgLoader];
}
