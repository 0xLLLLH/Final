const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const gulp = require('gulp');
const gutil = require('gulp-util');
const yargv = require('yargs');
const runSequence = require('run-sequence');
const del = require('del');

const WEBPACK_SERVER_PORT = 2333;
const NODE_SERVER_PORT = 8081;
const destDir = 'build/';
const argv = yargv.alias('d', 'develop').argv;
const isDev = !!argv.develop;

gulp.task('default', done => runSequence('build', done));


gulp.task('build', (done) => {
    const taskSeq = ['webpack'];
    runSequence(...taskSeq, () => {
        gutil.log('Build success.');
        done();
    });
    // let taskSeq = ['clean', 'copy-resources', 'scan-webpack-entries'];
    // if (isDev) {
    //     taskSeq = taskSeq.concat(['compile-js', 'webpack', 'watch']);
    // } else {
    //     taskSeq = taskSeq.concat([['compile-js', 'webpack'], ['minify-js', 'build-css', 'build-view']]);
    // }
    // runSequence(...taskSeq, () => {
    //     gutil.log('JS and CSS files are built into ' + destDir);
    //     done();
    // });
});

gulp.task('clean', (done) => {
    del.sync([`${destDir}/**`], {force: true});
    done();
});

gulp.task('copy-resources', (done) => {
    gulp.src(['src/**/*', '!src/node_modules/**', '!src/node_modules'])
        .pipe(gulp.dest(destDir))
        .on('end', done);
});

gulp.task('webpack', (done) => {
    process.env.NODE_ENV = isDev ? 'development' : 'production';
    const webpackConfig = {
        entry: [
            'react-hot-loader/patch',
            // activate HMR for React

            `webpack-dev-server/client?http://localhost:${WEBPACK_SERVER_PORT}`,
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint

            'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates

            './src/index.js',
        ],
        devtool: 'eval',
        watch: isDev,
        output: {
            path: path.resolve(__dirname, `${destDir}`),
            filename: 'bundle.js',
            // publicPath: '/static/'
        },
        module: {
            // 加载器配置
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    include: path.join(__dirname, 'src'),
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }]
                },
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            // enable HMR globally

            new webpack.NamedModulesPlugin(),
            // prints more readable module names in the browser console on HMR updates
        ]
    };
    if (isDev) {
        const compiler = webpack(webpackConfig);
        const server = new WebpackDevServer(compiler, {
            hot: true,
            quiet: false,
            noInfo: true,
            // publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true
            },
            historyApiFallback: true,
            // watchOptions: {
            //     poll: true
            // }
            // proxy: {
            //     '/': {
            //         target: `http://localhost:${WEBPACK_SERVER_PORT}/${destDir}/`,
            //     },
            // },
        });
        server.listen(WEBPACK_SERVER_PORT, '0.0.0.0', () => gutil.log('[webpack]', 'webpack-dev-server started.'));
    }
});
