let password1El = document.getElementById("password-1");
let password2El = document.getElementById("password-2");

let array = [
  "a",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "i",
  "i",
  "i",
  "o",
  "o",
  "1",
  "2",
  "3",
  "4",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "-",
  "=",
  ";",
];

function generatePassword() {
  let password1 = Math.random();
}

function createpassword() {
  let password = "";
  for (let i = 0; i < 5; i++) {
    let count = Math.round(Math.random() * array.length);
    password += array[count];
    console.log(array[count]);
  }
  return password;
}
console.log(createpassword());
