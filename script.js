// Get elements
const bookBtn = document.getElementById("bookBtn");
const bookingForm = document.getElementById("bookingForm");
const confirmBtn = document.getElementById("confirmBtn");

// Show booking form
bookBtn.addEventListener("click", function () {
    bookingForm.style.display = "block";
    bookingForm.scrollIntoView({ behavior: "smooth" });
});

// Confirm booking
confirmBtn.addEventListener("click", function () {

    const name = bookingForm.querySelector('input[type="text"]').value;
    const mobile = bookingForm.querySelector('input[type="tel"]').value;
    const table = bookingForm.querySelector("select").value;
    const date = bookingForm.querySelector('input[type="date"]').value;
    const time = bookingForm.querySelector('input[type="time"]').value;

    // Validation
    if (
        name === "" ||
        mobile === "" ||
        table === "Select Table" ||
        date === "" ||
        time === ""
    ) {
        alert("⚠ Please fill in all the details.");
        return;
    }

    // Success message
    alert(
        "🎉 Booking Successful!\n\n" +
        "Name: " + name +
        "\nMobile: " + mobile +
        "\nTable: " + table +
        "\nDate: " + date +
        "\nTime: " + time
    );

    // Clear form
    bookingForm.querySelector('input[type="text"]').value = "";
    bookingForm.querySelector('input[type="tel"]').value = "";
    bookingForm.querySelector("select").selectedIndex = 0;
    bookingForm.querySelector('input[type="date"]').value = "";
    bookingForm.querySelector('input[type="time"]').value = "";

    // Hide form
    bookingForm.style.display = "none";
});