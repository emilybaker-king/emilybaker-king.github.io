
function calculateTip() {
    //Get the values the user inputs (bill amount, service quality, and number of people splitting the bill?)
    var billAmount = document.getElementById("billAmt").value;
    console.log(billAmount);

    var serviceQuality = document.getElementById("servicePercent").value;
    console.log(serviceQuality);

    var numberOfPeople = document.getElementById("peopleNumber").value;
    console.log(numberOfPeople);
    //Validate the input (to make sure the input is useable)

    //Bill amount - words, negative values, empty string

    var amount = Number(billAmount);//try to turn billAmount into a number

    if (isNaN(amount)) {
        alert("Invalid input for amount");
        return;
    }

    //if we make it here the amount is good

    //service selector - not choosing an option

    var service = Number(serviceQuality);

    if (service === 0) {
        alert("You must pick a service quality");
        return;
    }

    //number of people - words, negative values, empty strings, decimal values

    var people = Number(numberOfPeople);

    if (isNaN(people) || people < 1) {
        alert("Enter a valid number of people splitting the bill");
        return;
    }

    //Caluculate the amount each person needs to pay

    var tipPerPerson = (amount * service) / people;
    var totalPerPerson = (amount/ people) + tipPerPerson;

    tipPerPerson = tipPerPerson.toFixed(2); //round the tip per person to 2 decimal points

    totalPerPerson = totalPerPerson.toFixed(2);

    //Display that information to the user

    document.getElementById("tipAmount").style.display = "block"; //This will show the hidden tipAmount when we're ready to show the calculated tip
    document.getElementById("tip").innerText = tipPerPerson;
    document.getElementById("total").innerText = totalPerPerson;
}

function reset() {
   document.getElementById("billAmt").value = "";
   document.getElementById("servicePercent").value = "0";
   document.getElementById("peopleNumber").value = "";
   document.getElementById("tipAmount").style.display = "none";
}


//Function that is executed when the button is clicked
document.getElementById("calculateTip").onclick = function() {
    calculateTip();
}

document.getElementById("reset").onclick = function() {
    reset();
}