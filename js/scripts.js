$(function() {
  $("#btn-submit").click(function()
  {
    var userName = "";
    var address1 = "";
    var address2 = "";
    var city = "";
    var state = ""
    var zipcode = "";
    var outputAddress1 = "";
    var outputAddress2 = "";
    var outputAddress3 = "";
    var outputAddress4 = "";

    userName = $("#fullName").val();
    address1 = $("#address1").val();
    address2 = $("#address2").val();
    city = $("#city").val();
    state = $("#state").val();
    zipcode = $("#zipcode").val();

    outputAddress1 = userName;
    outputAddress2 = address1;
    outputAddress3 = address2;
    outputAddress4 = city.concat(", ",state," ",zipcode);

    // event.preventDefault();
  });
  $("#btn-toggle-contact").click(function()
  {
    $("#show-contactForm").toggle();
  });


});
