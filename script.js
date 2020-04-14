var inputName = document.body.querySelector(".nameInput");
var inputPass = document.body.querySelector(".passwordInput");
var buttonEle = document.body.querySelector(".submit");
var errorDiv = document.body.querySelector(".error");

var list = [];

buttonEle.addEventListener("click", function () {
  if (validation(inputName) && inputPass.value === "Password") {
    list.push({
      name: inputName.value
    });

    errorDiv.innerHTML = "Success";
  } else {
    if (!validation(inputName) && inputPass.value === "Password") {
      errorDiv.innerHTML = "Name has no text";
    } else if (validation(inputName) && inputPass.value !== "Password") {
      errorDiv.innerHTML = "Password is wrong";
    } else {
      errorDiv.innerHTML = "not correct";
    }
  }

  console.log(list);
});

function validation(ele) {
  if (ele.value !== "") {
    return true;
  } else {
    return false;
  }
}

function app(){
  nav();
  initRoot();
  homePage();
}

function nav(){
  var navEle = document.createElement("nav");
  var homeButton = document.createElement("button");
  homeButton.innerHTML="Display page";
  homeButton.addEventListener("click", function(){
    homePage();
  })
  var aboutButton = document.createElement("button");
  aboutButton.innerHTML="Add page";
  aboutButton.addEventListener("click", function(){
    aboutPage();
  })
  

  navEle.appendChild(homeButton);
  navEle.appendChild(aboutButton);
  document.body.appendChild(navEle);
}

function initRoot(){
  var root = document.createElement("div")
  root.classList.add("root");
  root.innerHTML="Stuff"
  document.body.appendChild(root);
}

function homePage(){
  document.body.querySelector(".root").innerHTML="heckin good boys I am bekom fat aqua doggo. Dat tungg tho snoot length boy wow such tempt snoot dat tungg tho, noodle horse adorable doggo wow very biscit doggo. Thicc you are doing me a frighten mlem yapper floofs fat boi, I am bekom fat doing me a frighten much ruin diet pats long water shoob, sub woofer h*ck borkdrive mlem. Boofers such treat wow such tempt fluffer, boof. I am bekom fat shoob fluffer borking doggo thicc boof, pats wrinkler wow very biscit"
}

function aboutPage(){
  document.body.querySelector(".root").innerHTML="I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot"
}

app();