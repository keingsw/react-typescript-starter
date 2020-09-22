import { merge } from 'webpack-merge';
import common from './webpack.common';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}',
            },
        }),
    ],
    devServer: {
        contentBase: './dist',
    },
});

export default config;
