

// spinner will cycle a full rotation of icon for each number passed to it

//create spinner function
const spinner = (message, rotation) => {

// write initial message on one line 
process.stdout.write(message);

// define the spinning icon

const icon = "|/-\|/-\|";

// start timer at 100
let timer = 100;

// begin loop for each roation to be completed
for (let i = 0; i < rotation; i++) {

// create loop of icon to be completed for each instance of rotation
  for (const char of icon) {
    // set a timeout of timer with the process of printing the character
    setTimeout(() => {
      // print the unit of the icon while returning on line for next roation. Initiate delay to increase by 200 milliseconds each time. keep cursor repeating on same location
      process.stdout.write(char + '\r');
    }, (timer));
    // increase the timer before repeating loop
    timer += 200;
  }
}

// close function by returning a call for new line

return '\n';
  };

  
const text = 'hello from spinner1.js... \rheyyy\n'
spinner(text, 10)


