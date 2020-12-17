var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 17;

if (time < noon) {
    messageText = "Good morning!";
} 
else if (time > evening) {
    messageText = "Good Evening!";
}
else {
    messageText = "Good afternoon!";
}

console.log(messageText);