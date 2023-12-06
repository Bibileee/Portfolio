/* Variables */
const btnAlert = document.getElementById("btn-alert");
const btnCounter = document.getElementById("btn-counter");
const txtCounter = document.getElementById("txt-counter");
const hundredNum = document.getElementById("hundredNum");
const challenge = document.getElementById("challenge");
var clickCount = 0;
let visitorName = prompt("What is your name?", "John Wick");

/* funtions */
function checkEven(num) {
  return !(num % 2);
}
function random(max) {
  return Math.floor(Math.random() * max);
}
function timeRelated() {
  var fullTime = new Date();
  var time = fullTime.toLocaleTimeString();
  document.getElementById("visitor").innerHTML =
    "Hello, " +
    visitorName +
    ". Time now is : " +
    time +
    ". Mind your time surfing!";
  setTimeout(timeRelated, 1000);
  document.getElementById("copyright").innerHTML =
    "Copyright &copy; " + fullTime.getFullYear();
}
function hundredNumber() {
  for (let i = 1; i < 101; i++) {
    const listItem = document.createElement("li");
    if (!checkEven(i)) {
      listItem.classList.add("odd");
      //   listItem.classList.add("ol-odd");
      listItem.textContent = i + " is odd";
    } else {
      listItem.classList.add("even");
      //   listItem.classList.add("ol-even");
      listItem.textContent = i + " is even";
    }
    hundredNum.appendChild(listItem);
    hundredNum.classList.add("mathGame");
    challenge.style.height = "1100px";
  }
}

/* execution */
btnAlert.onclick = () => {
  alert("I wish you really got it!");
  let ans = prompt("Do you want to play a math game?");
  while (ans == null) {
    alert("You must play this game, just click OK");
    ans = prompt("Do you want to play a math game?");
  }

  challenge.style.display = "block";
};
btnAlert.onmouseover = () => {
  btnAlert.innerText = "You don't get it";
};
btnAlert.onmouseleave = () => {
  btnAlert.innerText = "I got it!";
};
btnCounter.onclick = () => {
  btnCounter.style.position = "relative";
  if (window.screen.width > 500) {
    btnCounter.style.left = random(350) + "px";
  }
  clickCount++;
  if (clickCount != 1) {
    txtCounter.innerHTML = "You clicked " + clickCount + " times";
    if (checkEven(clickCount)) {
      txtCounter.classList.remove("odd");
      txtCounter.classList.remove("even");
      txtCounter.classList.add("even");
    } else {
      txtCounter.classList.remove("odd");
      txtCounter.classList.remove("even");
      txtCounter.classList.add("odd");
    }
    if (clickCount === 5) {
      alert(
        "You are clicking too slow! let me show you the odd and even numbers within 100!"
      );
      challenge.style.height;
      hundredNumber();
    }
  } else {
    alert(
      "BTW, if your click is of odd times, the counter text will be in blue color. Otherwise, it will be in blue."
    );
    alert("... and, after clicking 5 times, I have a surprise for you.");
    txtCounter.innerHTML = "You clicked " + clickCount + " time";
    txtCounter.classList.add("odd");
  }
};

if (visitorName == null || visitorName == "") {
  alert("OK you dont want to tell me your name, stranger");
} else {
  alert("Hello, " + visitorName);
}

timeRelated();
