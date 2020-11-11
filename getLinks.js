module.exports = async function (page, usernameToScrape) {
	const url = `https://www.instagram.com/${usernameToScrape}/`;
	await page.goto(url);
	const links = await page.$$('.Nnq7C.weEfm a');

	const rawHrefs = await Promise.all(
		links.map(async (link) => {
			const raw = await link.getProperty('href');
			console.log(`raw | ${raw}`);
			const href = await raw.jsonValue();
			console.log(`href | ${href}`);
			return href;
		})
	);

	return rawHrefs;
};
