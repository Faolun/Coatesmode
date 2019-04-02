// $("#contactSubmit").on("click", function () {
//     $("#contactForm").ajaxForm(function () {
//         $("#contactAlert").text("✔ Message Sent, Thank You!");
//         $('#contactForm').resetForm();
//     });
// });

$("#contactSubmit").on("click", function (e) {
    e.preventDefault();
    var URL = "https://iwuniz116b.execute-api.us-east-1.amazonaws.com/dev/contact-us";

    var name = $("#first_name").val() + " " + $("#last_name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var data = {
       name : name,
       email : email,
       mesasge : message
     };

    $.ajax({
      type: "POST",
      url : "https://iwuniz116b.execute-api.us-east-1.amazonaws.com/dev/contact-us",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Successfull");
        document.getElementById("contactForm").reset();
    location.reload();
      },
      error: function () {
        // show an error message
        alert("UnSuccessfull");
      }});
  });
