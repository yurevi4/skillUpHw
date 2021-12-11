let userInput = prompt("Enter a number");
let total = 0;

for (let i = 0; userInput !== null; i++) {
    if (userInput !== null) {
        if (Number(userInput)) {
            total += Number(userInput);
            userInput = prompt("Enter a number");
        } else {
            console.log("Введено не число");
            userInput = prompt("Enter a number");
        }
    }
}
