const fs = require('fs')

/**
 * Main function of the script
 */
function main() {
	fs.readFile(
		//'puzzle2/example',
		'puzzle2/data',
		'utf8' , (err, data) => {
		if (err) {
		  console.error(err)
		  return
		}
		data = data.split('\n');
		var depth = 0;
		var hpos = 0;
		var aim = 0;
		for (let i = 0 ; i < data.length ; i++) {
			const d = data[i].split(' ')
			switch (d[0]) {
				case 'forward':
					hpos += +d[1];
					depth += +d[1] * aim;
					break;
				case 'up':
					aim -= +d[1];
					break;
				case 'down':
					aim += +d[1];
					break;
			}
		}
		console.log(depth, hpos, aim, depth * hpos);
	})
}

main();