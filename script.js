
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");


// Change text and gif when the Yes button is clicked

yesBtn.addEventListener("click",  function() {

  question.innerHTML = "THAT'S RIGHT!.You have more than what it takes to devour this semester, i believe in you. You can do this bluebird! YOU CAN DO THIS 💙💙" ;

  gif.src = "https://media.giphy.com/media/ovOUMEQ2Onmacca4r6/giphy.gif?cid=ecf05e477va8sc5r5h4sqc2ln6z8vfe0jlb6l2kcfgcl5s40&ep=v1_gifs_search&rid=giphy.gif&ct=g";

 }); 
 
 
// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});