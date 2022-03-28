
/** @type {import('snowpack').SnowpackUserConfig } */
module.exports = {
    mount: {
        src: '/',
    },
    devOptions: {
        port: 8090,
        open: 'none',
    },
    buildOptions: {
        baseUrl: '/',
        metaUrlPath: 'snowpack',
    },
};
