$("#contactSubmit").on("click", function () {
    $("#contactForm").ajaxForm(function () {
        $("#contactAlert").text("✔ Message Sent, Thank You!");
        $('#contactForm').resetForm();
    });

});
