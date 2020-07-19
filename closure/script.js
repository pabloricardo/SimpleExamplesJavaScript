function calculaSoma(x){
    return y => x + y;
}

let soma = calculaSoma(5);
let result = soma(10);
console.log(result);


const contador = (x) =>{
    let init = x;
    let add = () => {
        console.log(x);
        x++;
    }
    return add;
}

let cont1 = contador(3);
cont1();
cont1()