//import { By, Key, until } from 'selenium-webdriver';
const { Builder, Browser, By, Key, until, Actions } = require('selenium-webdriver');


runScript();

async function runScript() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();


    await driver.get('https://www.nytimes.com/puzzles/sudoku/easy');

    await driver.sleep(1111);


    let board2 = await driver.findElement(By.id("pz-game-root"));
    let qlick = await board2.findElements(By.css('div.su-app > div > div.su-app__play > div > div > div > div'));



    for (let ele of qlick) {

        //let almost = await ele.getRect();
        
        await driver.sleep(777);
        await driver.actions().click(ele).perform().then(function () {
            driver.findElement(By.css('.pz-dropdown:nth-child(2) .pz-dropdown__label')).click().then(function () { 
            driver.sleep(777);
                try {


                    return driver.findElement(By.css(".pz-dropdown__menu-item:nth-child(4) > .pz-dropdown__button")).click();


                } catch (excep) {

                    console.log(excep);
                    //console.log(almost);

                }




            });


        });


        //await driver.findElement(B)


    }



};



