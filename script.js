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
async function downloadPDF() {
    // 1. Get the label element
    const labelElement = document.getElementById("label");
    
    // 2. Convert the HTML to a high-resolution canvas using html2canvas
    const canvas = await html2canvas(labelElement, {
        scale: 4, // Higher scale = better print resolution
        useCORS: true // Ensures images like your logo load correctly
    });
    
    // 3. Convert the canvas to an image
    const imgData = canvas.toDataURL("image/png");
    
    // 4. Initialize jsPDF with exact 4x6 inch dimensions
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: [4, 6] // Exactly 4x6 inches
    });
    
    // 5. Add the image to the PDF spanning the full 4x6 inches
    pdf.addImage(imgData, 'PNG', 0, 0, 4, 6);
    
    // 6. Generate the filename and download
    const name = document.getElementById("name").value || "LABEL";
    const pin = document.getElementById("pincode").value || "";
    
    pdf.save(`${name.toUpperCase()}_${pin}.pdf`);
}
