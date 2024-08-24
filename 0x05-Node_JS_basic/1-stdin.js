const readline = require('readline');

// Create an interface to read from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Function to handle user input
const handleInput = (input) => {
  console.log(`Your name is: ${input.trim()}`);
  console.log('This important software is now closing');
  process.exit(0);
};

// Check if there is input from stdin
if (process.stdin.isTTY) {
  // Interactive mode
  rl.on('line', (input) => {
    handleInput(input);
  });
} else {
  // Non-interactive mode (e.g., piped input)
  process.stdin.on('data', (data) => {
    handleInput(data.toString());
  });
}
