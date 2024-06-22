let a = [1, 2, 3, 4];

for(let b in a) {
    a.splice(0, 1);

    console.log(b, a[b])
}