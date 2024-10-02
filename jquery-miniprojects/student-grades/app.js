$(document).ready(function () {
  //adauga studentul in lista

  $("#grade-form").on("submit", function (event) {
    event.preventDefault();

    //obtinem numele si nota studentului
    const name = $("#student-name").val();
    const grade = $("#student-grade").val();

    const regex = /^[a-zA-Z]+$/;

    if (regex.test(name)) {
      //verificam daca ambele campuri sunt completate
      if (name && grade) {
        //adauga in lista
        $("#students-list").append(`<li> ${name} - ${grade} </li>`);

        //Reseteaza campurile formularului

        $("#student-name").val("");
        $("#student-grade").val("");
      } else {
        alert("Completeaza ambele campuri!");
      }
    } else {
      alert("Numele contine cifre.");
    }
  });
});
