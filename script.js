function generateLabel() {

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let landmark = document.getElementById("landmark").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let pincode = document.getElementById("pincode").value;
    let phone = document.getElementById("phone").value;


    // Convert address details to uppercase
    name = name.toUpperCase();
    address = address.toUpperCase();
    landmark = landmark.toUpperCase();
    city = city.toUpperCase();
    state = state.toUpperCase();


    document.getElementById("customerName").innerHTML =
        name;


    document.getElementById("customerAddress").innerHTML =
        address +
        "<br>" +
        landmark;


    document.getElementById("customerCity").innerHTML =
        city +
        ", " +
        state;


    document.getElementById("customerPin").innerHTML =
        pincode;


    document.getElementById("customerPhone").innerHTML =
        phone;


    // Scroll to label preview

    document.getElementById("label").scrollIntoView({
        behavior: "smooth"
    });

}
