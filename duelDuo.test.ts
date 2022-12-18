
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Check that the Draw button works when clicking on it', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const randomBots = await driver.findElement(By.id('choices'))
    const displayedRandomBots = randomBots.isDisplayed()
    expect(displayedRandomBots).toBeTruthy()       
})

//this test is intended to check the bug on the see all bots button, in this case the see alll bots buttons
// is not working so expect this test to fail, if I would fix the see all bots button bugs It will return 3 passed results
test('Check that the Add to Duo button works when clicking on it', async () => {
    await driver.findElement(By.id('see-all')).click()
    await driver.sleep(2000)    
    const allbots = await driver.findElement(By.className('bot-card'))
    const displayedBots = allbots.isDisplayed()
    expect(displayedBots).toBeTruthy()
})
