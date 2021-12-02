const fs = require('fs')

/**
 * Main function of the script
 */
function main() {
	fs.readFile(
		//'../example_puzzle_1',
		'puzzle1/puzzle1',
		'utf8' , (err, data) => {
		if (err) {
		  console.error(err)
		  return
		}
		data = data.split('\n');
		var nbIncrease = 0;
		for (let i = 0 ; i < data.length - 2; i++) {
			const window1 = +data[i] + +data[i + 1] + +data[i + 2];
			const window2 = +data[i + 1] + +data[i + 2] + +data[i + 3];
			if (window2 > +window1) {
				nbIncrease += 1;
			}
		}
		console.log(nbIncrease);
	})
}

main();