var wget = require('node-wget');

function updateIP() {
	var URLs = [
		"http://freedns.afraid.org/dynamic/update.php?token"
	];
	for (i = 0; i < URLs.length; i++) {
		wget(URLs[i]);
	}
}

updateIP();
setInterval(updateIP, 3600000);
