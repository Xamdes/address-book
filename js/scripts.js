function makeContact(userName,uniqueID)
{
  var tempString = "";
  return tempString.concat("<li>",userName,'<ul class="test-hide"><li>Dummy Text</li></ul>',"</li>");

}


$(function() {
  $("#btn-submit").click(function()
  {
    var userName = "";
    var address1 = "";
    var address2 = "";
    var address3 = ";"
    var city = "";
    var state = ""
    var zipcode = "";

    userName = $("#fullName").val();
    address1 = $("#address1").val();
    address2 = $("#address2").val();
    city = $("#city").val();
    state = $("#state").val();
    zipcode = $("#zipcode").val();

    address3 = city.concat(", ",state," ",zipcode);

    $("#contact-list").prepend(makeContact(userName));

    $("ul#contact-list").children("li").first().click(function()
    {
      $(this).find("ul.test-hide").toggle();
    });

    event.preventDefault();
  });

  $("#btn-toggle-contact").click(function()
  {
    $("#show-contactForm").toggle();
  });



});
