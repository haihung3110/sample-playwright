import type { PlaywrightTestConfig, TraceMode } from '@playwright/test'
import * as os from 'os'

const traceLevel: TraceMode = (process.env.TRACE_LEVEL as TraceMode) || 'on'
let reporter: Array<any> = [
    ['html', { outputFolder: './test-results/html-report' }],
    [
        'allure-playwright',
        {
            outputFolder: './test-results/allure-results',
            detail: true,
            suiteTitle: false,
            environmentInfo: {
                os_platform: os.platform(),
                os_release: os.release(),
                os_version: os.version(),
                node_version: process.version,
            },
        },
    ],
]

const config: PlaywrightTestConfig = {
    reporter: reporter,
    testDir: './tests',
    testMatch: process.env.TEST_NAME,
    timeout: 1000 * 1800,
    expect: {
        timeout: 5000,
    },
    fullyParallel: process.env.FULLY_PARALLEL === "true",
    forbidOnly: process.env.CI === "true",
    retries: process.env.RETRY_COUNT ? Number(process.env.RETRY_COUNT) : 0,
    workers: process.env.PARALLEL_TEST_COUNT ? Number(process.env.PARALLEL_TEST_COUNT) : 1,
    use: {
        actionTimeout: 0,
        trace: {
            mode: traceLevel,
            snapshots: true,
            screenshots: false,
            sources: false,
        },
        screenshot: 'only-on-failure',
    },
    outputDir: './test-results/artifacts',
}

export default config
