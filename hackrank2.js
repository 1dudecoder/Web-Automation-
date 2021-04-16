const puppy = require("puppeteer");

const id = "wepopav254@art2427.com";
const password = "santy12345";

async function main() {
    let browser = await puppy.launch({
        headless: false,
        defaultViewport:false
    });

    let tabs = await browser.pages();
    let tab = tabs[0];

    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1",id);
    await tab.type("#input-2",password);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForNavigation();
    await tab.waitForSelector(".dropdown.profile-menu");
    await tab.click(".dropdown.profile-menu");

    const nav_data = await tab.$$(".profile-nav-item-link");

        let url = await tab.evaluate(function(ele) {
            return ele.getAttribute("href");
        }, nav_data[6]);

        let administor = "https://www.hackerrank.com" + url;
        await tab.goto(administor);
        await tab.waitForSelector(".nav-tabs.nav.admin-tabbed-nav li+li a" ,{visible: true});
        await tab.click(".nav-tabs.nav.admin-tabbed-nav li+li a");

        for(let i=0 ; i < 4; i++){
            

            await tab.click(".btn.btn-green.backbone.pull-right");
            await tab.waitForSelector("#name" ,{visible: true});
            let name = "nitin negi";
            let desciption = "nitin bhai is great";
            let tag = "iamnitin";
            await tab.type("#name", name);
            await tab.type("#preview", desciption);
            await tab.waitForSelector("input#tags_tag",{visible: true});
            await tab.type("input#tags_tag", tag);
            await tab.keyboard.press("Enter");
            await tab.click(".save-challenge.btn.btn-green");
    
            await tab.waitForSelector(".pull-left.mdT.msB.pjT.bcrumb a",{visible: true});
            const backtoamanage = await tab.$$(".pull-left.mdT.msB.pjT.bcrumb a");
    
            let backurl = await tab.evaluate(function(ele) {
                return ele.getAttribute("href");
            }, backtoamanage[0]);
    
            const back = "https://www.hackerrank.com" + backurl;
    
            await tab.goto(back);

        }
        console.log("work down sir");
    }
    

main();