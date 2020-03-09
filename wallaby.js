module.exports = wallaby => ({
    files: [
        './test/jest.config.json',
        './tsconfig.json',
        './src/**/*.ts?(x)',
        { pattern: 'test/**/*.spec.ts?(x)', ignore: true },
        { pattern: './test/**/!(*.spec)', instrument: false, load: true },
        { pattern: './package.json', instrument: false, load: true },
    ],
    tests: ['./test/**/*.spec.ts?(x)'],
    env: {
        type: 'node',
        runner: 'node',
        params: { env: 'wallaby=true' },
    },
    testFramework: 'jest',
    debug: false,
    lowCoverageThreshold: 50,
    compilers: {
        './**/*.ts?(x)': wallaby.compilers.typeScript(),
    },
    setup() {
        const jestConfig = require('./test/jest.config.json');
        jestConfig.globals = { __DEV__: true };
        wallaby.testFramework.configure(jestConfig);
    },
});
