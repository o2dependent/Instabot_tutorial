const likePhoto = require('./likePhoto');

module.exports = async function (page, hrefs) {
	for (href of hrefs) {
		await likePhoto(page, href);
	}
};
