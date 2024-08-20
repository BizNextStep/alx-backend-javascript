// Display welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read input from stdin
process.stdin.on('data', (data) => {
    // Trim and print the user's input
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    
    // Exit the process
    process.exit();
});

// Handle process exit
process.on('exit', () => {
    console.log('This important software is now closing');
});

