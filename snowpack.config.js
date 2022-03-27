
/** @type {import('snowpack').SnowpackUserConfig } */
module.exports = {
    workspaceRoot: '../..',
    mount: {
        src: '/',
    },
    plugins: [
    //   '@snowpack/plugin-postcss',
    //   '@snowpack/plugin-react-refresh',
    ],
    devOptions: {
        port: 8090,
        open: 'none',
    },
    buildOptions: {
        baseUrl: '/',
        metaUrlPath: 'snowpack',
    },
};
