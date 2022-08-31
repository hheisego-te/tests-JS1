const { Builder, Browser, By, Key, until } = require('selenium-webdriver');


runScript();


async function runScript() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
   
    driver.manage().window().maximize();


    await driver.get('https://www.texashealth.org/');
    await driver.sleep(4567);
    await driver.findElement(By.linkText("Locations")).click();

    await driver.sleep(7654);
    driver.quit();

    //await driver.manage(window.scrollBy(0, 400));
    //await driver.wait(until.is(By.className("component search-results vertical profile locations col-12")), 1000);
    //await driver.wait(until.elementIsVisible, 3333);
    //(By.className("component search-results vertical profile locations col-12"))
    //await driver.takeScreenshot();
}