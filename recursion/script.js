const calFibonacci = (num) => {

    if (num <= 1)
        return 1;
    else {
        return calFibonacci(num -1) + calFibonacci(num -2);
    }

}

console.log(calFibonacci(5));