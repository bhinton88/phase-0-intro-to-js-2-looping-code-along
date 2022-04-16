// Code your solutions in this file

const messsages = [];

function writeCards(names,event) {
   
    for (let i = 0; i < names.length; i++){

        messsages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    // remember that return needs to remain outside the for loop in order for the loop to return all messages
    return messsages;

}

function countDown(n) {
    let i = 10
    while (i >= 0 ) {
        console.log(n);
        n--;
        i--;
    }
}











