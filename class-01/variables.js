const accountId = 12345;
let accountEmail = "account@google.com";
var accountPass = "12345678";
accountCity = "Karachi";
let accountName; // undefined

// accountId = 54321; Not Allowed
// console.log(accountId);

accountEmail = "account@gmail.com";
accountPass = "87654321";
accountCity = "Lahore";

console.table([accountId, accountEmail, accountPass, accountCity, accountName]);

/*
prefer not to use var
because of issue in block scop and functional scop
*/
