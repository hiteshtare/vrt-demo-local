// backstop_data/engine_scripts/puppeteer/scrollPage.js

module.exports = async (page, scenario) => {
    console.log('SCENARIO > ' + scenario.label);
    
    await page.evaluate(async () => {
        // Function to wait for a specified amount of time
        const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

        // Scroll the page to the bottom with a delay
        for (let i = 0; i < window.innerHeight; i++) {
            window.scrollBy(0, i);
            await wait(20); // You can adjust this delay
        }
    });
};
