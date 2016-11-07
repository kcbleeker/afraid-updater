var wget = require('node-wget');
var fs = require('fs');

function updateIP() {
	var config = JSON.parse(fs.readFileSync("config.json"));
	console.log(config.updateURLs);
	for (i = 0; i < config.updateURLs.length; i++) {
		wget(config.updateURLs[i]);
	}
}

updateIP();
setInterval(updateIP, 3600000);
