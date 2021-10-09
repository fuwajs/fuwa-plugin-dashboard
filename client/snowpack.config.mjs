/** @type {import("snowpack").SnowpackUserConfig } */
const config = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
        components: { url: '/components' },
        styles: { url: '/styles' },
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        [
            '@snowpack/plugin-typescript',
            {
                /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
                ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
            },
        ],
        [
            '@snowpack/plugin-sass',
            {
                style: 'compressed',
                sourceMap: true,
                embedSourceMap: true,
            },
        ],
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
};
export default config;
