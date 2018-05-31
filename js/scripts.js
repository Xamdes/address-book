function styleList(input)
{
  var tempString = "";
  return tempString.concat("<li>",input,"</li>");
}

function makeContact(contactName,input)
{
  var tempString = "";
  return tempString.concat("<li>",contactName,'<ul class="initial-hide">',input,'</ul>',"</li>");

}


$(function() {
  $("#btn-submit").click(function()
  {
    var contactName = "";
    var address1 = "";
    var address2 = "";
    var city = "";
    var state = ""
    var zipcode = "";
    var contactEmail="";
    var contactNumber="";

    contactName = $("#fullName").val();
    address1 = $("#address1").val();
    address2 = $("#address2").val();
    city = $("#city").val();
    state = $("#state").val();
    zipcode = $("#zipcode").val();
    contactEmail = $("#contactEmail").val();
    contactNumber= $("#contactNumber").val();

    var address3 = city.concat(", ",state," ",zipcode);

    address1 = styleList(address1);
    address2 = styleList(address2);
    address3 = styleList(address3);
    contactEmail = styleList(contactEmail);
    contactNumber = styleList(contactNumber);
    var input = address1.concat(address2,address3,contactEmail,contactNumber);

    $("#contact-list").prepend(makeContact(contactName,input));

    $("ul#contact-list").children("li").first().click(function()
    {
      $(this).find("ul.initial-hide").toggle();
    });

    event.preventDefault();
  });

  $("#btn-toggle-contact").click(function()
  {
    $("#show-contactForm").toggle();
  });



});
