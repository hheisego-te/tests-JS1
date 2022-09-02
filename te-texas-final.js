import { By, Key, until } from 'selenium-webdriver';
import { driver, markers, credentials, downloads, transaction, test } from 'thousandeyes';

runScript();

async function runScript() {

    const settings = test.getSettings();
    driver.manage().window().maximize();
    await driver.get('https://www.texashealth.org/');
    await driver.sleep(2345);
    
    // need a try here.

    try {

        await driver.findElement(By.className("submit")).click(); //lol this is a father element for the link
    
    }catch(excep){

        console.log(excep);

    }
    //First Screenshot.
    await driver.takeScreenshot();

    //moving to 'https://www.texashealth.org/Locations' 
    await driver.findElement(By.xpath('//*[@id="header-nav"]/div/div/div/div[2]/div/div/div/nav/ul/li[2]/div/a')).click();
    await driver.sleep(2345);
    
    //Second Screenshot.
    await driver.takeScreenshot();

    //Location task
    await driver.findElement(By.name("textBoxLocationSearch")).sendKeys("76105", Key.ENTER, Key.PAGE_DOWN);
    await driver.wait(until.urlContains("&location-search_a=76105"), 7777);

    


    try {

        await driver.findElement(By.className("submit")).click(); //lol this is a father element for the link
    
        }catch(excep){

        console.log(excep);

        }

    await driver.sleep(5555);

    // Final Screenshot
    await driver.takeScreenshot();

};

