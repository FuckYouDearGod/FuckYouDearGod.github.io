function chooseOption() {
  var option1 = document.getElementById("option1").value;
  var option2 = document.getElementById("option2").value;
  
  var options = [option1, option2];
  var randomIndex = Math.floor(Math.random() * options.length);
  var chosenOption = options[randomIndex];
  
  document.getElementById("result").innerText = "God has chosen: " + chosenOption;
}
