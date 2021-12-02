const fs = require('fs')

/**
 * Main function of the script
 */
function main() {
	fs.readFile(
		//'data/input/example_puzzle_2',
		'puzzle2/data',
		'utf8' , (err, data) => {
		if (err) {
		  console.error(err)
		  return
		}
		data = data.split('\n');
		var depth = 0;
		var hpos = 0;
		for (let i = 0 ; i < data.length ; i++) {
			const d = data[i].split(' ')
			switch (d[0]) {
				case 'forward':
					hpos += +d[1];
					break;
				case 'up':
					depth -= +d[1];
					break;
				case 'down':
					depth += +d[1];
					break;
			}
		}
		console.log(depth, hpos, depth * hpos);
	})
}

main();