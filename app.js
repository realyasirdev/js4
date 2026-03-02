let total = 0;

for (let i = 1; i <= 10; i++) {
    let age = Number(prompt("Enter age of student " + i + ":"));
    total += age;
}

let average = total / 10;

alert("Average age is: " + average);