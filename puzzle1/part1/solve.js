const fs = require('fs')

/**
 * Main function of the script
 */
function main() {
	fs.readFile(
		'puzzle1/puzzle1',
		'utf8' , (err, data) => {
		if (err) {
		  console.error(err)
		  return
		}
		data = data.split('\n');
		var nbIncrease = 0;
		for (let i = 1 ; i < data.length ; i++) {
			if (+data[i] > +data[i - 1]) {
				nbIncrease += 1;
			}
		}
		console.log(nbIncrease);
	})
}

main();