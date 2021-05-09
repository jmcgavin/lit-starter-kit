import { defaultReporter } from '@web/test-runner'
import { junitReporter } from '@web/test-runner-junit-reporter'

export default {
  coverageConfig: {
    nodeResolve: true,
    report: true,
    reportDir: 'test-coverage',
    threshold: {
      statements: 99,
      branches: 99,
      functions: 99,
      lines: 99
    },
    testFramework: {
      config: {
        ui: 'bdd',
        timeout: '2000'
      }
    },
    reporters: [
      // use the default reporter only for reporting test progress
      defaultReporter({ reportTestResults: false, reportTestProgress: true }),
      // use another reporter to report test results
      junitReporter({
        outputPath: './results/test-results.xml', // default `'./test-results.xml'`
        reportLogs: true
      })
    ]
  }
}
