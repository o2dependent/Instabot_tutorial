module.exports = async function (page, photoUrl) {
	try {
		console.log(`likePhoto | tried`);
		await page.goto(photoUrl);
		await page.click('svg[aria-label=Like]');
		console.log(`likePhoto | success`);
		return;
	} catch {
		console.log(`likePhoto | failed`);
	}
};
