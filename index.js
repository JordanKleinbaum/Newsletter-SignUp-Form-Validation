const mainPage = document.querySelector(".main");
const thankYouPage = document.querySelector(".thank-you-wrapper");
const form = document.querySelector(".email-form");
const errorText = document.querySelector(".error-text");
const inputField = document.querySelector(".email-input");
const submitBTN = document.querySelector(".submit");
const dismissBTN = document.querySelector(".dismiss-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let thankYouPageEmailNameSpan = document.querySelector(".email-result");
  let emailValue = inputField.value;
  if (validateEmail(emailValue)) {
    mainPage.style.display = "none";
    thankYouPage.style.display = "flex";
    errorText.style.visibility = "hidden";
    inputField.style.color = "var(--Grey)";
    inputField.style.border = "1px solid var(--Grey)";
    inputField.style.backgroundColor = "var(--White)";
    thankYouPageEmailNameSpan.innerHTML = emailValue;
  } else {
    inputField.style.color = "red";
    inputField.style.border = "1px solid var(--Tomato)";
    inputField.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
    errorText.style.visibility = "visible";
  }
});

dismissBTN.addEventListener("click", () => {
  location.reload();
});

//EMAIL VALIDATION FUNCTION
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
