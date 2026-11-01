alert("Welcome to WISEA DIGITAL!")
// This is my first JavaScript project
let websitename = "WISEA DIGITAL";
console.log(websitename);
websitename = "WISEA DIGITAL PORTFOLIO";
console.log(websitename);
const owner = "website creator";
console.log(owner)
let yearslearning = 1;
console.log(yearslearning);
let websiteIsReady = true; 
console.log(websiteIsReady);
let numberOne = 10;
let numberTwo = 5;
let total = numberOne + numberTwo;
console.log(total);
let difference = numberOne - numberTwo;
console.log(difference);
let product = numberOne * numberTwo;
console.log(product);
let quotient = numberOne / numberTwo;
console.log(quotient);
console.log("Welcome to " + websitename);
console.log(`Welcome to ${websitename}`);
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 10);
console.log(10 == 10);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 5);
console.log(10 !== "10");

if (websiteIsReady ===true) {
    console.log("My website is ready!")
} else {
    console.log("My website is not ready yet.");
}

let orderStatus = "on the way";

if (orderStatus === "delivered") {
    console.log("order completed");
} else if (orderStatus === "on the way") {
    console.log("Your order is on its way!");
}

else {
    console.log("Your order is being prepared.");
}

function WelcomeVisitor() {
    console.log("Welcome to WISEA DIGITAL");
}
WelcomeVisitor();

function greetVisitor(name) {
    console.log("welcome, " + name);
}
greetVisitor("Amy");
greetVisitor("John");

function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(10, 5));

let messageShown = false;

document.getElementById("welcomeButton");
document.getElementById("welcomeButton").addEventListener("click",function() {

if (messageShown === false) {
document.getElementById("welcomeMessage").textContent = "Welcome to WISEA DIGITAL!"; 
messageShown =true;
document.getElementById("welcomeButton").textContent = "Thank You!";
document.getElementById("welcomeButton").style.backgroundColor = "green";
document.getElementById("welcomeButton").style.color = "white";
document.getElementById("welcomeButton").style.border = "2px solid white";
document.getElementById("welcomeButton").style.borderRadius = "8px";
document.getElementById("welcomeButton").style.boxShadow = "0 4px 8px gray";
}
else {
    document.getElementById("welcomeMessage").textContent = "Thanks for visiting WISEA DIGITAL!";
    messageShown = false;
    document.getElementById("welcomeButton").textContent = "Click Me";
    document.getElementById("welcomeButton").style.backgroundColor = "blue";
    document.getElementById("welcomeButton").style.color = "white";
    document.getElementById("welcomeButton").style.border = "2px solid white";
    document.getElementById("welcomeButton").style.borderRadius = "8px";
    document.getElementById("welcomeButton").style.boxShadow = "0 4px 8px gray";

}
});

