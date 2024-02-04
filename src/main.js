const sendbtn = document.getElementById("send_otp");
const ld = document.getElementById("load");
const country_code = document.getElementById("code");
const number = document.getElementById("mob_num");
const backButton = document.createElement("button");
const phoneNumberRegex = /^[0-9]{10}$/;

document.addEventListener("DOMContentLoaded", () => {
  ld.style.display = "none";
});

function loader_Function() {
  if (country_code.value !== "" && number.value !== "") {
    if (phoneNumberRegex.test(number.value)) {
      ld.style.display = "flex";
      setTimeout(() => {
        ld.classList.add("loader-hidden");
        //sendbtn.addEventListener("click", loader_Function);
        //location.reload();
        getResult();
      }, 1000);
    } else {
      alert("Enter Valid Phone Number");
    }
  } else {
    alert("Enter Complete Details");
  }
}

function getResult() {
  const entire_body = document.getElementById("container");
  entire_body.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("result");
  const img1 = document.createElement("img");
  img1.src = "./images/circle-check-solid.svg";
  img1.classList.add("size");
  div.appendChild(img1);
  const successMessage = document.createElement("div");
  successMessage.classList.add("success_msg");
  successMessage.textContent = "OTP Send Successfully";
  backButton.classList.add("back_btn");
  backButton.textContent = "Go Back";
  div.appendChild(successMessage);
  div.appendChild(backButton);
  entire_body.appendChild(div);
}

function goBack() {
  location.reload();
}
//document.addEventListener("DOMContentLoaded", loader_Function);

sendbtn.addEventListener("click", loader_Function);

backButton.addEventListener("click", goBack);
