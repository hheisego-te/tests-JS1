import { By, Key, until } from 'selenium-webdriver';
import { driver, markers, credentials, downloads, transaction, test } from 'thousandeyes';


runScript();


async function runScript() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    driver.manage().window().maximize();


    await driver.get('https://www.texashealth.org/');
    await driver.sleep(3000);
    //await window.getComputedStyle(driver.findElement(By.xpath('//*[@title="Locations"]'))).click();
    //let check = await driver.findElement(By.xpath('//*[@title="Locations"]'));
    //let check = driver.findElement(By.("Locations::after"));
    
    //let aelement = await driver.findElements(By.tagName("a"));
    //let check = await driver.findElements(By.xpath('//*[@title="Locations"]'));
    let check = await driver.findElements(By.css('a'));
    //document.querySelector("#header-nav > div > div > div > div.col.d-none.d-lg-block > div > div > div > nav > ul > li.level1.item1.even.rel-level1 > div > a")
    await driver.findElement(By.xpath('//*[@id="header-nav"]/div/div/div/div[2]/div/div/div/nav/ul/li[2]/div/a')).click();

    
    await driver.sleep(1000);
    
    //driver.quit();

    //await driver.manage(window.scrollBy(0, 400));
    //await driver.wait(until.is(By.className("component search-results vertical profile locations col-12")), 1000);
    //await driver.wait(until.elementIsVisible, 3333);
    //(By.className("component search-results vertical profile locations col-12"))
    //await driver.takeScreenshot();
}