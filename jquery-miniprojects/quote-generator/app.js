$(document).ready(function () {
  const quotes = [
    "Courage isn't the absence of fear, it's the decision that something else is more important.",
    "The smallest steps often lead to the most profound journeys.",
    "In the silence of doubt, listen to the whispers of possibility.",
    "Dreams are the seeds, but action is the rain that helps them grow.",
    "Kindness costs nothing, but its value is beyond measure.",
    "Every sunrise brings the chance to write a new story.",
    "Success is not defined by speed, but by steady and persistent progress.",
    "The beauty of life lies not in perfection but in the grace to embrace imperfection.",
    "Your future is shaped by the thoughts you feed your mind today.",
    "Happiness is not a destination, but the way you choose to travel.",
  ];

  $("#new-quote").on("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    $("#quote").text(quotes[randomIndex]);
  });
});
