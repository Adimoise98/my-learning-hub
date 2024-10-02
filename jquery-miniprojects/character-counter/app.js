$(document).ready(function () {
  //live counting of the characters

  let arr = [];

  $("#text-input").on("input", function () {
    const text = $(this).val();
    const count = text.length;

    $("#count").text(count);

    arr.push(count);
    console.log(arr);
  });
});
