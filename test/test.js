const lyrics = require('../index');

(async () => {
	const lyric = await lyrics.LyricsFinder('blinding lights');
	console.log(lyric);
})();

// or

lyrics.LyricsFinder('blinding lights').then(data => {
	console.log(data);
});