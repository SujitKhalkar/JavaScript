const accountID = 1233432
let accountEmail = "sujitkhlkar@google.com"
var accountPassword = "1123"
accountCity = "nashik"
let accountState;


// accountID = 2 // not allowed
accountEmail = "sujit@amazon.com"
accountPassword = "23244"
accountCity = "mumbai"

console.log(accountID) ;

// console.table likha to hame bar bar console.log likhane ki jarurat nahi hai ham direct print kar sakte hai..
console.table([accountEmail,accountID,accountPassword,accountCity , accountState])