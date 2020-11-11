// - Initialize puppeteer to be used
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// Imported functions
const login = require('./login');
const getLinks = require('./getLinks');
const likeAllPhotos = require('./likeAllPhotos');

// ENV Variables
require('dotenv').config();
const YOUR_USERNAME = process.env.YOUR_USERNAME;
const YOUR_PASSWORD = process.env.YOUR_PASSWORD;

const usernameToScrape = 'kevinpowell.co';

(async function () {
	const browser = await puppeteer.launch({ headless: true });

	const page = await browser.newPage();

	const instagram = `https://www.instagram.com/`;

	await login(page, instagram, YOUR_USERNAME, YOUR_PASSWORD);

	const hrefs = await getLinks(page, usernameToScrape);

	await likeAllPhotos(page, hrefs);

	await browser.close();
})();
