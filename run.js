let a = 'abab';

let sum;
for(let n of a) {
   sum ^=  n.charCodeAt(0);
}

console.log(sum);