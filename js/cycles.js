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

let k = 1;
while (k <= 20) {
  if (k % 3 === 0) {
    k += 1;
    continue; 
  }
    console.log(k);
}

console.log("Таблиця множення числа 7:");
for (let i = 1; i <= 10; i+= 1) {
  console.log(`7 x ${i} = ${7 * i}`);
}

let n = 15;
for (let i = 0; i < 20; i+= 1) {
  if (i >= n) {
    break; 
  }
  console.log(i);
}


let i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    i+=1;
    continue; 
  }
  console.log(i);
  i+=1;
}

