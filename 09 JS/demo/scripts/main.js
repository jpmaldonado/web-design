/********************************* */
/* EXAMPLE: Personalized Greeting */
/******************************* */

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function changeGreeting() {
    myHeading.textContent = "... to all cool cats and kittens!";
}

myButton.onclick = () => {
    changeGreeting();
  };
  


/************************* */
/* EXAMPLE: Image changer */
/*********************** */

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img/prg2.jpg") {
    myImage.setAttribute("src", "img/prg.webp");
  } else {
    myImage.setAttribute("src", "img/prg2.jpg");
  }
};

/*************************************** */
/*EXAMPLE: Personalized Welcome Message */
/************************************* */

let nameButton = document.querySelector("#btn-name");
let nameHeading = document.querySelector("#name");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    nameHeading.textContent = `JS is cool, ${myName}`;

    if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        nameHeading.textContent = `JS is cool, ${storedName}`;
      }
      
  }
  
  nameButton.onclick = () => {
    setUserName();
  };
    