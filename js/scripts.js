// This is the business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is the user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var stringNum1 = $("#add1").val();
    var stringNum2 = $("#add2").val();
    var result = add(parseInt(stringNum1), parseInt(stringNum2));
    var stringResult = result.toString();
    var outputSentence = stringNum1 + " + " + stringNum2 + " = " + stringResult;
    $("#output").text(outputSentence);
  });
});
