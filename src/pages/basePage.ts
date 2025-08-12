import { Page } from '@playwright/test'
import { page } from '../utils/utils'
import { String } from 'typescript-string-operations'

export abstract class BasePage {
    protected page: Page;

    // Dynamic elements
    readonly dynamicElementContainsSelector = `//*[contains(text(), "{0}")]`
    readonly dynamicButtonWithTextSelector = `//button[contains(text(), '{0}')]`
    readonly dynamicButtonContainsTextSelector = `//button[contains(., '{0}')]`
    readonly dynamicSpanSelector = `//span[contains(text(), '{0}')]`
    readonly dynamicSpanContainsTextSelector = `//span[contains(., '{0}')]`
    readonly dynamicDivSelector = `//div[text()='{0}']`
    readonly dynamicDivContainsTextSelector = `//div[contains(text(), '{0}')]`
    readonly dynamicLabelSelector = `//label[contains(text(), '{0}')]`
    readonly dynamicLabelContainsTextSelector = `//label[contains(., '{0}')]`
    readonly dynamicLiSelector = `//li[contains(., '{0}')]`
    readonly dynamicLinkSelector = `//a[text()="{0}"]`
    readonly dynamicLinkContainsInnerSelector = `//a[.='{0}']`
    readonly dynamicLinkContainsTextSelector = `//a[contains(., '{0}')]`
    readonly dynamicLinkByHrefSelector = `//a[@href='{0}']`
    readonly dynamicLinkContainsHrefSelector = `//a[contains(@href, '{0}')]`
    readonly dynamicDataCellSelector = `//td[contains(., '{0}')]`
    readonly dynamicLeftMenuItemSelector = `//div[contains(@class,'z-menu-l-1')]//p[text()='{0}']/ancestor::a`
    readonly dynamicPSelector = `//p[text()="{0}"]`
  
    constructor(page: Page) {
        this.page = page;
    }

  dynamicElementContainsText(text: string) {
        return page.locator(String.format(this.dynamicElementContainsSelector, text))
    }

    dynamicSpan(text: string) {
        return page.locator(String.format(this.dynamicSpanSelector, text))
    }

    dynamicLi(text: string) {
        return page.locator(String.format(this.dynamicLiSelector, text))
    }

    dynamicDiv(text: string) {
        return this.page.locator(String.format(this.dynamicDivSelector, text))
    }

    dynamicContainsTextDiv(text: string) {
        return page.locator(String.format(this.dynamicDivContainsTextSelector, text))
    }

    dynamicLabel(text: string) {
        return page.locator(String.format(this.dynamicLabelSelector, text))
    }

    dynamicLabelContainsText(text: string) {
        return page.locator(String.format(this.dynamicLabelContainsTextSelector, text))
    }

    dynamicButton(text: string) {
        return page.locator(String.format(this.dynamicButtonWithTextSelector, text))
    }

    dynamicContainsTextButton(text: string) {
        return page.locator(String.format(this.dynamicButtonContainsTextSelector, text))
    }

    dynamicLink(text: string) {
        return this.page.locator(String.format(this.dynamicLinkSelector, text))
    }

    dynamicLinkWithUrl(text: string) {
        return text.includes('/')
            ? this.page.locator(String.format(this.dynamicLinkByHrefSelector, text))
            : this.page.locator(String.format(this.dynamicLinkContainsInnerSelector, text))
    }

    dynamicLinkContainsHref(text: string) {
        return this.page.locator(String.format(this.dynamicLinkContainsHrefSelector, text))
    }

    dynamicLinkContainsText(text: string) {
        return this.page.locator(String.format(this.dynamicLinkContainsTextSelector, text))
    }

    dynamicLeftMenuItem(text: string) {
        return this.page.locator(String.format(this.dynamicLeftMenuItemSelector, text))
    }

    dynamicP(text: string) {
        return this.page.locator(String.format(this.dynamicPSelector, text))
    }

    /**
     * Get the current page's first data cell matching selector.
     * @param dataCellValue data cell to find
     */
    getTableDataCell(dataCellValue: String) {
        return this.page.locator(String.format(this.dynamicDataCellSelector, dataCellValue)).first()
    }
}
