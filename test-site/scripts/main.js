let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/first-image.png') {
      myImage.setAttribute('src','images/dev-life.png');
    } else {
      myImage.setAttribute('src','images/first-image.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'TecEnv: ' + myName;
  }
}
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'TecEnv: ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
  