// > > > NPM Commands < < <
// npm init (press enter through all options)
// npm i dotenv puppeteer puppeteer-extra puppeteer-extra-plugin-stealth

// > We will be using puppeteer extra with a stealth
// > plugin to assure our headless requests aren't blocked

// - Initialize puppeteer to be used
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// All puppeteer method calls must be in an async function to handle promises
async () => {
	// ( You will need to > await < everything that uses puppeteer )
	// * Launch - will launch a Chromium browser for you to control
	const browser = await puppeteer.launch({ headless: false }); // Headless: false will launch a visible instance of Chromium

	// * Page - will create a new tab in your Chromium browser
	const page = await browser.newPage();

	// * Goto - will got to specified url
	await page.goto('https://eolsen.dev/');

	// * Click - will click on specified element
	await page.click('svg[aria-label=Like]'); // Use css/document query selectors syntax to select item

	// * Type - will type content into specified element
	// - First option is the element selector
	// - Second is the content to type
	// - Third is options (delay is the delay between each type in milliseconds)
	await page.type('input[name=username]', 'ethan_olsen', { delay: 20 });

	// * Wait for - will wait for specified time / selector / navigation / etc
	await page.waitForTimeout(1000); // Time to wait in milliseconds
	await page.waitForNavigation(); // Will wait till you have been navigated by clicking link
	await page.waitForSelector('input[name=username]'); // Will wait till selector is on screen

	// * $$ / $ / $x - Element selectors (select all / select one / select xpath)
	const photos = await page.$$('.photo'); // Will return an array of all element with the class of photo
	const photo = await page.$('.photo'); // Will return the first element with the class of photo
};
