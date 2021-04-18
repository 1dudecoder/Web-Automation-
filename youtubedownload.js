const puppy = require("puppeteer");
    async function main() {
        let browser = await puppy.launch({
            headless: false,
            defaultViewport: false
        });

        let tabs = await browser.pages();
        let tab = tabs[0];
    
        await tab.goto("https://www.youtube.com/watch?v=3pYsfaQeMRs");

        let problems = await tab.$$("div#watch7-content link");
        
        for(let i = 0; i < 1; i++) {
            let url = await tab.evaluate(function(ele) {
                return ele.getAttribute("href");
            },problems[i]);
            
            console.log(url);
            let first = url.substr(0, 12);
            let last = url.substr(12);
            let durl = first +"ss"+last;
            await tab.goto(durl);
            await tab.click("button#sf_submit");
            await tab.waitForSelector(".link.link-download.subname.ga_track_events.download-icon",{visible:true});
            await tab.click(".link.link-download.subname.ga_track_events.download-icon");
        }
}

main();