//KATA ADD 
function add(a, b) {
    return a + b
}
//sum (2,4)
console.log("kata add", add(2, 4))


//KATA multipy
function multi(a, b) {
    product = 0;
    for (let step = 0; step < b; step++) {


        product = add(a, product);


    }
    return product;

}

console.log("kata multiply ", multi(6, ))


//KATA power/exponentiation 
function exp(c, d) {

    exponent = c;
    for (let i = 0; i < d - 1; i++) {

        exponent = multi(exponent, c);


    }

    return exponent;

}


console.log('KATA power', exp(2, 8));
console.log('KATA power', exp(3, 4));


//KATA Factorial 

function fac(a) {
    fac = 1;
    for (let step = a; step > 1; step--) {


        fac = multi(step, fac);



    }
    return fac;
}
//console.log("KATA Factorial",fac(4))
x = fac(5);
console.log("KATA Factorial", x);