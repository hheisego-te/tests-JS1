//import { By, Key, until } from 'selenium-webdriver';
const { Builder, Browser, By, Key, until, Actions } = require('selenium-webdriver');


runScript();

async function runScript() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();


    await driver.get('https://www.nytimes.com/puzzles/sudoku/easy');

    //await driver.wait(12000);

   /* let resume_button = driver.findElement(By.xpath('//*[@id="pzm-pause"]/div/div/button'));
    await driver.wait(until.elementIsVisible(resume_button), 1277).then(function () {
        resume_button.click();
    });
*/
    
    //<div data-cell="18" aria-label="empty" class="su-cell selected" style="top: 104px; left: 0px; width: 51px; height: 51px;"><div class="su-cell__conflict" style="width: 8px; height: 8px; bottom: 4px; right: 4px;"></div></div>
    

    //#pz-game-root > div.su-app > div > div.su-app__play > div > div > div > div:nth-child(52)
    let board2 = await driver.findElement(By.id("pz-game-root"));
    let qlick = await board2.findElements(By.css('div.su-app > div > div.su-app__play > div > div > div > div'));

    //console.log(await board2.getTagName());

    for (let ele of qlick){

        let almost = await ele.getRect();
        console.log(almost);

        await driver.actions().doubleClick(ele).perform();
        //for(let i of almost){console.log(i)}
    }
    
    
    //await driver.wait(until.alertIsPresent());

    // Store the alert in a variable
  //  let alert = await driver.switchTo().alert();

    //Store the alert text in a variable
    //let alertText = await alert.getText();

    //Press the OK button
    //await alert.accept();


};



/*

    let board = await driver.findElement(By.className("su-board"));
    let elements = await board.findElements(By.css('div'));//className('su-candidates'));
    

    for (let ele of elements) {

        if (await ele.getAttribute("aria-label") == "empty") {

            //let empties = await ele.findElement(By.cssSelector('div'));

            let actions = driver.actions({ async: true });

            //console.log(actions);


        } else {

            console.log("no");
        }
    }


    */