import { chromium, Page, LaunchOptions } from '@playwright/test'
import { EnvConfig, PlaywrightEnvironment as PlaywrightPageEnvironment } from '../types/configTypes'
import * as enums from '../enums/enums'

/**
 * In order to facilitate the current implementation of the page object model
 * only the "page" variable shall be exposed as external variable.
 * Everything else should be available using a method.
 */
export let page: Page = null

export const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

export function sanitizeText(s: string) {
  return s.replace(/[\n\t\r]+/g, ' ').trim();
}

export async function launchBrowser(cfg: EnvConfig, playwrightGlobalEnv: PlaywrightPageEnvironment) {
    const launchOptions: LaunchOptions = {
        slowMo: 50,
        headless: cfg.headlessMode,
    }
    playwrightGlobalEnv.browser = await chromium.launch(launchOptions)
    await playwrightGlobalEnv.page.goto(cfg.testUrl)
}

