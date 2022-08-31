//import { driver } from 'thousandeyes';
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const util = require('util')
const fsp = require('fs').promises

runScript();


async function runScript() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    let image = await driver.takeScreenshot();
    driver.manage().window().maximize();
    
    
    await driver.get('https://www.texashealth.org/');
    await driver.sleep(4567);
    await fsp.writeFile('home.png', image, 'base64')
    
    await driver.get('https://www.texashealth.org/Locations');
    await fsp.writeFile('locations.png', image, 'base64')

    //await driver.findElement(By.partialLinkText("Locations")).click();
    await driver.findElement(By.className("submit")).click();
    await driver.findElement(By.name("textBoxLocationSearch")).sendKeys("76105", Key.ENTER, Key.PAGE_DOWN);

    //let busqueda = await driver.findElement(By.className("search-result-list"));
    await driver.wait(until.urlContains("&location-search_a=76105"), 7000);
    await fsp.writeFile('search.png', image, 'base64')


    await driver.sleep(7654);
    driver.quit();

    //await driver.manage(window.scrollBy(0, 400));
    //await driver.wait(until.is(By.className("component search-results vertical profile locations col-12")), 1000);
    //await driver.wait(until.elementIsVisible, 3333);
    //(By.className("component search-results vertical profile locations col-12"))
    //await driver.takeScreenshot();
}