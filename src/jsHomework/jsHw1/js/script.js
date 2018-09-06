let name = prompt("Please, enter your Name: ");
let age = prompt("...and your Age is?: ");

if (age<18){
    alert("You are not allowed to visit this website.");
} else if (age>=18 && age <=22){
    alert(confirm("Are you sure you want to continue?") ? `Welcome, ${name}` : "You are not allowed to visit this website");
} else alert(`Welcome, ${name}`);