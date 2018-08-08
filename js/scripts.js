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
    var outputSentence = stringNum1 + " + " + stringNum2 + " = " + stringResult + "<br>";
    $("#output").prepend(outputSentence);
  });

  $("form#sub").submit(function(event) {
    event.preventDefault();
    var stringNum1 = $("#sub1").val();
    var stringNum2 = $("#sub2").val();
    var result = subtract(parseInt(stringNum1), parseInt(stringNum2));
    var stringResult = result.toString();
    var outputSentence = stringNum1 + " - " + stringNum2 + " = " + stringResult + "<br>";
    $("#output").prepend(outputSentence);
  });

  $("form#multi").submit(function(event) {
    event.preventDefault();
    var stringNum1 = $("#multi1").val();
    var stringNum2 = $("#multi2").val();
    var result = multiply(parseInt(stringNum1), parseInt(stringNum2));
    var stringResult = result.toString();
    var outputSentence = stringNum1 + " x " + stringNum2 + " = " + stringResult + "<br>";
    $("#output").prepend(outputSentence);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var stringNum1 = $("#divide1").val();
    var stringNum2 = $("#divide2").val();
    if (stringNum2 == "0") {
      $("#output").prepend("I told you the denominator can't be zero!<br>");
    }
    else {
      var result = divide(parseInt(stringNum1), parseInt(stringNum2));
      var stringResult = result.toFixed(3).toString();
      var outputSentence = stringNum1 + " / " + stringNum2 + " = " + stringResult + "<br>";
      $("#output").prepend(outputSentence);
    };
  });

  $(".eraser").click(function() {
    $("#output").text("");
  });
});
