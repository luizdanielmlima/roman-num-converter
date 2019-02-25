window.onload = function() {
  var romanNum = 0;
  var numInput = document.getElementById("numInput");
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
    let resultEl = document.getElementById("showIt");
    if (userInput == "") {
      resultEl.innerHTML = "huh?";
    } else {
      if (userInput != "" && userInput <= 3999) {
        romanNum = convertToRoman(userInput);
        animateCSS("#showIt", "flipOutX");
      } else {
        resultEl.innerHTML = "too high!";
      }
    }
  }

  function animateCSS(element, animationName) {
    const node = document.querySelector(element);
    node.classList.add("animated", animationName);

    function handleAnimationEnd() {
      node.classList.remove("animated", animationName);
      node.removeEventListener("animationend", handleAnimationEnd);
      // console.log("anim ended");
      animateCSS("#showIt", "flipInX");
      node.innerHTML = romanNum;
    }

    node.addEventListener("animationend", handleAnimationEnd);
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
