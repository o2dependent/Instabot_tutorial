module.exports = async function (page, url, YOUR_USERNAME, YOUR_PASSWORD) {
	await page.goto(url);

	await page.waitForSelector('input[name=username]');

	await page.type('input[name=username]', YOUR_USERNAME, { delay: 20 });
	await page.type('input[name=password]', YOUR_PASSWORD, { delay: 20 });

	await page.click('button[type=submit]');

	await page.waitForNavigation();
};
