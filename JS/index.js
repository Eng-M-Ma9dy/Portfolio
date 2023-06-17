"use strict";

/* ----------------------------------------------------------------------------- */
/* Navbar ---------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

function changeBTNIcon(){
  
  let openIcon = document.getElementById("NavbarBTNOpenClose");

  if (openIcon.classList.contains("fa-bars")) {

    openIcon.classList.replace("fa-solid","fa-regular")
    openIcon.classList.replace("fa-bars","fa-circle-xmark")


  }else{

    openIcon.classList.replace("fa-regular","fa-solid")
    openIcon.classList.replace("fa-circle-xmark","fa-bars")

  }

}

/* ----------------------------------------------------------------------------- */
/* Home Section ---------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

let words = document.querySelectorAll(".word");

words.forEach((word) => {

  let letters = word.textContent.split("");

  word.textContent = "";

  letters.forEach((letter) => {

    let span = document.createElement("span");

    span.textContent = letter;

    span.className = "letter";

    word.append(span);

  });

});


let currentWordIndex = 0;

let maxWordIndex = words.length - 1;

words[currentWordIndex].style.opacity = "1";


let rotateText = () => {

  let currentWord = words[currentWordIndex];

  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {

    setTimeout(() => {

      letter.className = "letter out";

    }, i * 80);

  });

  nextWord.style.opacity = "1";

  Array.from(nextWord.children).forEach((letter, i) => {

    letter.className = "letter behind";

    setTimeout(() => {

      letter.className = "letter in";

    }, 340 + i * 80);

  });

  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

};

rotateText();

setInterval(rotateText, 2500);

/* ----------------------------------------------------------------------------- */
/* Skills Section -------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

let btnUp_Front     = document.getElementById("btnUpFrontEndSkillsSlideUp")
let btnDown_Front   = document.getElementById("btnFrontEndSkillsSlideDown")
let btnLabel_Front  = document.getElementById("labelOfBTNFrontEndSkillsSlide")

$("#btnFrontEndSkillsSlideDown").click(function(){

  btnDown_Front.classList.add("d-none")
  btnUp_Front.classList.remove("d-none")
  btnLabel_Front.setAttribute("for","btnUpFrontEndSkillsSlideUp")

  $("#FrontEndSkillsSlide").slideToggle(1000)

})

$("#btnUpFrontEndSkillsSlideUp").click(function(){

  btnUp_Front.classList.add("d-none")
  btnDown_Front.classList.remove("d-none")
  btnLabel_Front.setAttribute("for","btnFrontEndSkillsSlideDown")

  $("#FrontEndSkillsSlide").slideToggle(1000)

})

//------------------

let btnUp_Back     = document.getElementById("btnUpBackEndSkillsSlideUp")
let btnDown_Back   = document.getElementById("btnBackEndSkillsSlideDown")
let btnLabel_Back  = document.getElementById("labelOfBTNBackEndSkillsSlide")

$("#btnBackEndSkillsSlideDown").click(function(){

  btnDown_Back.classList.add("d-none")
  btnUp_Back.classList.remove("d-none")
  btnLabel_Back.setAttribute("for","btnUpBackEndSkillsSlideUp")

  $("#BackEndSkillsSlide").slideToggle(1000)

})

$("#btnUpBackEndSkillsSlideUp").click(function(){

  btnUp_Back.classList.add("d-none")
  btnDown_Back.classList.remove("d-none")
  btnLabel_Back.setAttribute("for","btnBackEndSkillsSlideDown")

  $("#BackEndSkillsSlide").slideToggle(1000)

})

//------------------

let btnUp_IT     = document.getElementById("btnUpITSkillsSlideUp")
let btnDown_IT   = document.getElementById("btnITSkillsSlideDown")
let btnLabel_IT  = document.getElementById("labelOfBTNITSkillsSlide")

$("#btnITSkillsSlideDown").click(function(){

  btnDown_IT.classList.add("d-none")
  btnUp_IT.classList.remove("d-none")
  btnLabel_IT.setAttribute("for","btnUpITSkillsSlideUp")

  $("#ITSkillsSlide").slideToggle(1000)

})

$("#btnUpITSkillsSlideUp").click(function(){

  btnUp_IT.classList.add("d-none")
  btnDown_IT.classList.remove("d-none")
  btnLabel_IT.setAttribute("for","btnITSkillsSlideDown")

  $("#ITSkillsSlide").slideToggle(1000)

})

//------------------

$("#btnContactInfo").click(function(){

  $("#infoDiv").slideToggle(1000)

})

$("#btnCloseContactInfo").click(function(){

  $("#infoDiv").slideUp(1000)

})

/* ----------------------------------------------------------------------------- */
/* Sharding -------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

function openLink(url){

  return   window.open(`https://${url}`,"_blank")

}
