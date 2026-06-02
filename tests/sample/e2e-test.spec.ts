import { test } from '@playwright/test'
import { launchBrowser } from '../../src/utils/utils'
import * as factory from '../baseTest'

test.beforeAll(async () => {
    // your code here
    // for example, launch the browser and navigate to the test URL
})

test.beforeEach(async () => {
    // Before your test(s) run perform this task
})

test.afterAll(async () => {
    // your code here
    // for example, close the browser
})

test.describe('TEST TITLE', async () => {
    test(`TEST DESCRIPTION @ADD_GROUP_HERE`, async () => {
        await test.step(`TEST DETAIL`, async () => {
            /**
             * The example below redirects the browser to the Home page.  You simply, select the
             * factory steps for the page you'd like to operate on.
             *
             * GO TO baseTest.ts and see all the 'factory...' options available to you
             */
            await factory.baseStep.gotoHomePage("https://example.com")
            console.log("Day la doan update test")
            console.log("Day la doan update test 2222")
        })
    })
})
