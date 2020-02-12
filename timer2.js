const stdin = process.stdin;
const stdout = process.stdout;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  numerArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (key === '\u0003') {
    stdout.write('Thanks for using me, ciao. ')
    process.exit();
  }
  if (key === 'b') {
    stdout.write('\x07');
  }
  if (numerArray.includes(key)) {
    stdout.write(`Setting timer for ${key} seconds...\n`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
  
});
