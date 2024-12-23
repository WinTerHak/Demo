$(document).ready(function() {
    $("#avatar").click(function(event) {
      event.stopPropagation();
      $("#avatarMenu").toggleClass("show");
    });
  
    $(document).click(function(event) {
      if (!$(event.target).closest('#avatarMenu').length) {
        $("#avatarMenu").removeClass("show");
      }
    });
  });