window.onload = function() {
  var numInput = document.getElementById("numInput");
  var myButton = document.getElementById("button");
  // myButton.addEventListener("click", ShowResult);
  numInput.addEventListener("keypress", checkKey);

  function checkKey() {
    //on pressing ENTER Key...
    if (event.which === 13) {
      ShowResult();
    }
  }

  // lets show the result!
  function ShowResult() {
    var userInput = numInput.value;
    if (userInput <= 3999) {
      var romanNum = convertToRoman(userInput);
      $("#showIt").html(romanNum);
      changeColorBackground();
    } else {
      $("#showIt").html("number is too high!");
    }
  }

  var backColor = "light";

  function changeColorBackground() {
    //animates the input-container background color
    var myDiv = $(".input-container");
    if (backColor == "light") {
      // backColor = "dark";
      // myDiv.css("background-color", "#70C0B3");
    } else if (backColor == "dark") {
      // backColor = "light";
      // myDiv.css("background-color", "#008F77");
    }
  }

  //this part does all the math
  function convertToRoman(num) {
    var str = num.toString();

    var romanU = [
      "nono",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX"
    ];
    var romanD = [
      "nono",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC"
    ];
    var romanC = [
      "nono",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM"
    ];
    var romanM = [
      "nono",
      "M",
      "MM",
      "MMM",
      "MV",
      "V",
      "VM",
      "VMM",
      "VMMM",
      "MX"
    ];

    var numArray = str.split("").reverse();

    var tempArray = [];

    for (i = 0; i < numArray.length; i++) {
      if (numArray[i] != 0) {
        switch (i) {
          case 0:
            roman = romanU[numArray[i]];
            tempArray.push(roman);
            break;
          case 1:
            roman = romanD[numArray[i]];
            tempArray.push(roman);
            break;
          case 2:
            roman = romanC[numArray[i]];
            tempArray.push(roman);
            break;
          case 3:
            roman = romanM[numArray[i]];
            tempArray.push(roman);
            break;
        }
      }
    }

    var answerArray = tempArray.reverse();

    var answer = answerArray.join("");

    return answer;
  }
};
