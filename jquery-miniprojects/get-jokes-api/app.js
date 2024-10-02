$(document).ready(function () {
  function getJoke() {
    $.ajax({
      url: "https://icanhazdadjoke.com",
      method: "GET",
      dataType: "json",
      success: function (data) {
        $("#joke").text(data.joke);
      },
      error: function () {
        $("#joke").text("Oops, something went wrong...");
      },
    });
  }

  //   getJoke();

  $("#new-joke").on("click", getJoke);
});
