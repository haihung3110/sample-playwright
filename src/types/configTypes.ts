import { Browser, BrowserContext, BrowserContextOptions, Page } from "@playwright/test"

export type PlaywrightEnvironment = {
    page: Page
    browser: Browser
    browserContext: BrowserContext
    browserContextOptions: BrowserContextOptions
    reportDir: string
}

export type EnvConfig = {
    testUrl: string
    headlessMode: boolean
    debugMode: boolean
    defaultTimeout: number
}