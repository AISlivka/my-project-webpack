import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const vueLoader = {
    test: /\.vue$/,
    loader: 'vue-loader',
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  };

  const tsLoader = {
    test: /\.ts?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['vue-loader', 'vue-svg-loader-2'],
  };

  return [vueLoader, cssLoader, tsLoader, assetLoader, svgLoader];
}
