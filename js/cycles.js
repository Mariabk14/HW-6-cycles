let a = 1;
let b = 10;
while (a <= b) {
    console.log(a);
    a += 1
}
for (let i = 2; i <= 20; i += 1) {
  if (i % 2 === 0) {
    continue; 
  }
  console.log(i); 
}

for (let i = 1; i <= 10; i += 1) {
    i *= 7
    console.log(i);
}

let i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    i += 1;
    continue; 
  }
    console.log(i);
}
