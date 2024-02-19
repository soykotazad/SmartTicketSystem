document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons with the class 'b'
    var buttons = document.querySelectorAll(".b");

    // Select the element displaying the number of seats left
    var seatsLeftElement = document.getElementById("Seats-left");

    // Select the pricelist section where seat information will be added
    var pricelist = document.getElementById("pricelist");

    // Select the total price section
    var totalPriceSection = document.querySelector(".tp");

    // Select the grand total section
    var grandTotalSection = document.querySelector(".grandTotal");
    // Select the coupon div
    var couponDiv = document.getElementById("cupondiv");

    // Select the input field for the coupon code
    var couponInput = document.getElementById("inputCuponCode");

    // Select the button to apply the coupon
    var applyCouponButton = document.getElementById("Applycupon");

    // Define the initial number of seats left
    var seatsLeft = 8; // Assuming there are initially 8 seats left

    // Define the maximum number of seats a user can select
    var maxSeatsPerUser = 4;

    // Define a variable to keep track of the number of seats selected by the user
    var seatsSelectedByUser = 0;

    // Define the price per seat
    var seatPrice = 550;

    // Define the initial total price
    var totalPrice = 0;

    // Update the initial content of the seatsLeftElement
    seatsLeftElement.innerText = seatsLeft;

    // Update the initial content of the total price section
    totalPriceSection.innerText = "BDT " + totalPrice;

    // Event listener for the apply coupon button
    applyCouponButton.addEventListener("click", function() {
        var enteredCoupon = couponInput.value.trim();
        if (enteredCoupon === "NEW15") {
            // Apply 15% discount
            totalPrice *= 0.85; // 15% discount means 85% of the original price
           
        } else if (enteredCoupon === "Couple 20") {
            // Apply 20% discount
            totalPrice *= 0.80; // 20% discount means 80% of the original price
            
        } else {
            alert("Invalid coupon code or no discount available.");
        }
        
        // Update the grand total
        grandTotalSection.innerText = "BDT " + totalPrice.toFixed(2);
    });

    // Iterate over each button and attach event listeners or perform other actions
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Check if the button has already been selected
            if (!button.classList.contains("green-button")) {
                // Check if the user has selected the maximum number of seats
                if (seatsSelectedByUser < maxSeatsPerUser) {
                    // Handle the click event for each button
                    console.log("Button clicked: " + button.textContent);
                    
                    // Subtract 1 from the number of seats left
                    seatsLeft -= 1;

                    // Update the content of the seatsLeftElement
                    seatsLeftElement.innerText = seatsLeft;

                    // Create a new seat entry in the pricelist section
                    var seatEntry = document.createElement("div");
                    seatEntry.classList.add("flex", "flex-row", "justify-between");

                    // Set the content for seat number, class, and price
                    var seatNumber = document.createElement("h1");
                    seatNumber.classList.add("seatNumbers");
                    seatNumber.innerText = button.textContent; // Assuming button text is the seat number

                    var seatClass = document.createElement("h1");
                    seatClass.classList.add("seatClass");
                    seatClass.innerText = "Economy"; // Assuming class is Economy for all seats

                    var seatPriceElement = document.createElement("h1");
                    seatPriceElement.classList.add("seatPrice");
                    seatPriceElement.innerText = "BDT " + seatPrice; // Fixed price for each seat

                    // Append seat information to the seat entry
                    seatEntry.appendChild(seatNumber);
                    seatEntry.appendChild(seatClass);
                    seatEntry.appendChild(seatPriceElement);

                    // Append the seat entry to the pricelist section
                    pricelist.appendChild(seatEntry);

                    // Update the total price
                    totalPrice += seatPrice;

                    // Update the content of the total price section
                    totalPriceSection.innerText =  totalPrice;

                    // Increment the number of seats selected by the user
                    seatsSelectedByUser++;

                    // Add a CSS class to change the button color to green
                    button.classList.add("green-button");
                } else {
                    alert("You can only select a maximum of " + maxSeatsPerUser + " seats.");
                }
            } else {
                alert("This seat has already been selected.");
            }

            // buttondisable


                // Select the Apply Coupon button
    var applyCouponButton = document.getElementById("Applycupon");
    applyCouponButton.disabled = true;

   

    // Iterate over each button and attach event listeners or perform other actions
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // ... (previous code)
            

            // Check if the user has selected 4 seats
            if (seatsSelectedByUser === maxSeatsPerUser) {
                // Enable the Apply Coupon button
                applyCouponButton.disabled = false;
            } else {
                // Disable the Apply Coupon button
                applyCouponButton.disabled = true;
            }
        });
    });

  

            // couponDiv.style.display = "none";
            // if (seatsSelectedByUser === maxSeatsPerUser) {
            //     // Display the coupon div
            //     couponDiv.style.display = "block";
            //     // Enable the Apply Coupon button
            //     applyCouponButton.disabled = false;
            // }


            
        });
    });
});


const couponDiv = document.getElementById('cupondiv');
const applyButton = document.getElementById('Applycupon');

applyButton.addEventListener('click', () => {
  couponDiv.style.display = 'none';
});




// const selectElement = document.getElementById('yourSelectElementId'); // Replace with actual ID of your seat selection element
// const ApplyButton = document.getElementById('Applycupon');

// selectElement.addEventListener('change', () => {
//   const selectedSeats = selectElement.seatsSelectedByUser.length;
//   ApplyButton.disabled = selectedSeats !== 4; // Enable button only if 4 seats are selected
// });
