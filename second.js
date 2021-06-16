//arrow function
let twonum = (num10, num11) => {
    return num10 + num11
}

let ans = twonum(230,270)

console.log(ans);


//function(method) inside an object
let laptop = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',


    greet: function(){
        console.log('Hello world');
    }
}

laptop.greet();