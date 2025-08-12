import { chromium, Page } from '@playwright/test'
import { page } from '../utils/utils'

export default class BaseStep{
    public async gotoHomePage(url: string) {
        await page.goto(url);
    }
}