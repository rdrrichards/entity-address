// Karma configuration
// Generated on Sun Dec 31 2017 11:13:40 GMT-0600 (Central Standard Time)

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'init-test-bed.spec.ts',
      'src/**/*.ts'
    ],
    exclude: [
    ],
    preprocessors: { '**/*.ts': ['karma-typescript'] },
    karmaTypescriptConfig: {
      bundlerOptions: {
        entrypoints: /\.spec\.ts$/,
        transforms: [
          require('karma-typescript-angular2-transform')
        ]
      },
      compilerOptions: {
        lib: ['ES2015', 'DOM']
      }
    },
    reporters: ['progress', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
