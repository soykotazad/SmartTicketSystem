document.addEventListener("DOMContentLoaded", function() {
    
    var buttons = document.querySelectorAll(".b");
    var seatsLeftElement = document.getElementById("Seats-left");
    var pricelist = document.getElementById("pricelist");
    var totalPriceSection = document.querySelector(".tp");
    var grandTotalSection = document.querySelector(".grandTotal");
    var couponDiv = document.getElementById("cupondiv");
    var couponInput = document.getElementById("inputCuponCode");
    var applyCouponButton = document.getElementById("Applycupon");  
    var seatsLeft = 8;    
    var maxSeatsPerUser = 4; 
    var seatsSelectedByUser = 0;

    //  the price per seat
    var seatPrice = 550;
//    addedddddddddd
var addedSeat = document.getElementById("added-seat");
    // the initial total price
    var totalPrice = 0;

    seatsLeftElement.innerText = seatsLeft;

    
    totalPriceSection.innerText = "BDT " + totalPrice;

    // Event listener for the apply coupon button
    applyCouponButton.addEventListener("click", function() {
        var enteredCoupon = couponInput.value.trim();
        if (enteredCoupon === "NEW15") {
            
            totalPrice *= 0.85; 
           
        } else if (enteredCoupon === "Couple 20") {
            
            totalPrice *= 0.80; 
            
        } else {
            alert("Invalid coupon code or no discount available.");
        }
        
        // Update the grand totallllllllllllllllll
        grandTotalSection.innerText = "BDT " + totalPrice.toFixed(2);
    });

    // actionsssssssssss
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            
            if (!button.classList.contains("green-button")) {
              
                if (seatsSelectedByUser < maxSeatsPerUser) {

                     
                   
                    console.log("Button clicked: " + button.textContent);

                     // addedsittt
                     
                     addedSeat.innerText = seatsSelectedByUser;

                  
                    
                    //  seatsleftttttttttt
                    seatsLeft -= 1;

                    // Update 
                    seatsLeftElement.innerText = seatsLeft;

                    // new seat entry in the pricelist section
                    var seatEntry = document.createElement("div");
                    seatEntry.classList.add("flex", "flex-row", "justify-between");

                    // Set  number, class, and price
                    var seatNumber = document.createElement("h1");
                    seatNumber.classList.add("seatNumbers");
                    seatNumber.innerText = button.textContent; 
                    var seatClass = document.createElement("h1");
                    seatClass.classList.add("seatClass");
                    seatClass.innerText = "Economy";

                    var seatPriceElement = document.createElement("h1");
                    seatPriceElement.classList.add("seatPrice");
                    seatPriceElement.innerText = "BDT " + seatPrice; 

                    // Append 
                    seatEntry.appendChild(seatNumber);
                    seatEntry.appendChild(seatClass);
                    seatEntry.appendChild(seatPriceElement);

                    // pricelist section
                    pricelist.appendChild(seatEntry);

                    // Update 
                    totalPrice += seatPrice;

                   
                    totalPriceSection.innerText =  totalPrice;

                    // Increment the number of seats selected by the user
                    seatsSelectedByUser++;

                

                    
                    button.classList.add("green-button");
                } else {
                    alert("You can only select a maximum of " + maxSeatsPerUser + " seats.");
                }
            } else {
                alert("This seat has already been selected.");
            }

            


                // Apply Coupon 
    var applyCouponButton = document.getElementById("Applycupon");
    applyCouponButton.disabled = true;

   

   
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
           
            // buttondisable

            // Check  4 seats
            if (seatsSelectedByUser === maxSeatsPerUser) {
               
                applyCouponButton.disabled = false;
            } else {
                
                applyCouponButton.disabled = true;
            }
        });
    });

  

         

            
        });
    });
});


const couponDiv = document.getElementById('cupondiv');
const applyButton = document.getElementById('Applycupon');

applyButton.addEventListener('click', () => {
  couponDiv.style.display = 'none';
});




