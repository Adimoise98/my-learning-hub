$(document).ready(function () {
  //Cand se apasa pe buton

  $(".option-button").on("click", function () {
    //selectam atributul data.answer
    const answer = $(this).data("answer");

    if (answer === "correct") {
      $("#result").text("Corect!").css("color", "green");
    } else {
      $("#result").text("Gresit!").css("color", "red");
    }
  });
});
