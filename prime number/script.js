let number = 7;
let divisions = 0;

for (let i = 1; i <= number; i++) {
    if(number % i == 0){
        divisions++;
    }
}

if(divisions == 2){
    console.log(`O número ${number} é primo.`);
}