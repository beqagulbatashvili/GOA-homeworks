let names = ["Ana", "Beqa", "Nino", "Luka", "Mariam"];

names.forEach(function(name) {
    console.log("Hello, " + name + "!");
});


let prices = [15, 75, 500, 40, 350];

let discountedarr = prices.map(function(price) {
    return price * 0.9;
});

console.log(discountedarr);


let emails = [
    "alex.morgan92@example.com",
    "sophie_williams07@testmail.com",
    "daniel.lee88@webmail.net",
    "chris.johnson54@myinbox.org",
    "emma.jackson23@mailbox.co",
    "ryan_taylor77@fastmail.io",
    "natalie.green11@postmail.net",
    "michael.brown45@inboxhub.com",
    "olivia.smith29@cloudmail.org",
    "james_wilson63@netmail.com"
];

let usernames = emails.map(function(email) {
    return email.split("@")[0];
});

console.log(usernames);
