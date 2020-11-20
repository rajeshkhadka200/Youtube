//accesing button, span, and input feild..
let button = document.querySelector("button");
let input = document.querySelector("input");
let span = document.querySelector("span");

//adding click event in button

button.addEventListener("click", () => {
  inputValue = input.value;
  span.innerHTML = inputValue;
  input.value = "";
});
