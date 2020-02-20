// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const modal = document.getElementById("modal");
toggleHidden(document.getElementById("modal"));
document.addEventListener("DOMContentLoaded", e => {
  addHeartListener();
});

function addHeartListener() {
  const elements = document.getElementsByClassName("like");
  Array.from(elements).forEach(function(element) {
    element.addEventListener("click", e => {
      console.log(e);
      mimicServerCall()
        .then(res => toggleHeart(e))
        .catch(err => displayError(err));
    });
  });
}

function displayError(err) {
  modal;
  toggleHidden(modal);
  document.querySelector("p#modal-message").innerText = err;
  setTimeout(() => {
    toggleHidden(modal);
  }, 5000);
}

function toggleHeart(e) {
  if (e.target.innerText == EMPTY_HEART) {
    e.target.innerText = FULL_HEART;
  } else {
    e.target.innerText = EMPTY_HEART;
  }
  e.target.classList.toggle("activated-heart");
}

function toggleHidden(element) {
  element.classList.toggle("hidden");
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
