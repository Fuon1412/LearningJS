//Temperature conversion
const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {

  if (toFarenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1)+ "℉";
  } 
  else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent =  temp.toFixed(1)+"℃";
  } 
  else {
    result.textContent = "Select a conversion type";
  }

}
