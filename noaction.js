import { driver } from 'thousandeyes';
import { By, Key, until } from 'selenium-webdriver';

runScript();

async function runScript() {
    await driver.get('https://www.nytimes.com/puzzles/sudoku/easy');

    await driver.sleep(1111);


    let board2 = await driver.findElement(By.id("pz-game-root"));
    let qlick = await board2.findElements(By.css('div.su-app > div > div.su-app__play > div > div > div > div'));



    for (let ele of qlick) {

        let almost = await ele.getRect(); //gets mouse pointer location

        // actions library doesn't exists in TE :( await driver.actions().click(ele).perform().then(function () {

        try{
        
            await ele.click().then(function () {

            driver.findElement(By.css('.pz-dropdown:nth-child(2) .pz-dropdown__label')).click().then(function () {

                try {


                    return driver.findElement(By.css(".pz-dropdown__menu-item:nth-child(4) > .pz-dropdown__button")).click();


                } catch (excep) {

                    console.log(excep);
                    console.log(almost);

                }

            });

        });

        }catch{

            console.log(excep);
        }
    }

};