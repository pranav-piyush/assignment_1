// Given stored username and password and input username and password, Print if the user can login or not.

let st_user = "qwe@gmail.com"
let st_pass = "abc456"

// login

let user = "qwe@gmail.com"
let pass = "abc456"

if (st_user == user) {
  if (st_pass == pass) {
    console.log("Login successful");
  }
  else {
    console.log("Incorrect Password");
  }
 
}
else {
    console.log("wrong username or password.");
  }
