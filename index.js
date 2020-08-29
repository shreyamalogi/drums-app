const drumButtons = document.querySelectorAll(".drum");

// Experimental
const audioObject = {
  tom1: "sounds/tom-1.mp3",
  tom2: "sounds/tom-2.mp3",
  tom3: "sounds/tom-3.mp3",
  tom4: "sounds/tom-4.mp3",
  snare: "sounds/snare.mp3",
  crash: "sounds/crash.mp3",
  kick: "sounds/kick-bass.mp3"
};

const drumNames = Object.keys(audioObject);
console.log(drumNames);
const soundLocations = Object.values(audioObject);
console.log(soundLocations);
// Experimental

// This is somewhat problematic.
// You have to wait for the sound stop in order to press the key again.
// This is DRY. Need a shorter way by looping though drumNames and soundLocations or something.
// Audio files
const tom1 = () => {
  const audio = new Audio("sounds/tom-1.mp3");
  audio.play();
};

const tom2 = () => {
  const audio = new Audio("sounds/tom-2.mp3");
  audio.play();
};

const tom3 = () => {
  const audio = new Audio("sounds/tom-3.mp3");
  audio.play();
};

const tom4 = () => {
  const audio = new Audio("sounds/tom-4.mp3");
  audio.play();
};

const snare = () => {
  const audio = new Audio("sounds/snare.mp3");
  audio.play();
};

const crash = () => {
  const audio = new Audio("sounds/crash.mp3");
  audio.play();
};

const kick = () => {
  const audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
};

const playDrum = key => {
  return key === "w"
    ? tom1()
    : key === "a"
    ? tom2()
    : key === "s"
    ? tom3()
    : key === "d"
    ? tom4()
    : key === "j"
    ? snare()
    : key === "k"
    ? crash()
    : key === "l"
    ? kick()
    : console.log(`Wrong key, dude: ${key}`);
};

// // This is somewhat problematic.
// // You have to wait for the sound stop in order to press the key and play again.
// // Audio files
// const tom1 = new Audio("sounds/tom-1.mp3");
// const tom2 = new Audio("sounds/tom-2.mp3");
// const tom3 = new Audio("sounds/tom-3.mp3");
// const tom4 = new Audio("sounds/tom-4.mp3");
// const snare = new Audio("sounds/snare.mp3");
// const crash = new Audio("sounds/crash.mp3");
// const kick = new Audio("sounds/kick-bass.mp3");

// const playDrum = key => {
//   return key === "w"
//     ? tom1.play()
//     : key === "a"
//     ? tom2.play()
//     : key === "s"
//     ? tom3.play()
//     : key === "d"
//     ? tom4.play()
//     : key === "j"
//     ? snare.play()
//     : key === "k"
//     ? crash.play()
//     : key === "l"
//     ? kick.play()
//     : console.log(`Wrong key, dude: ${key}`);
// };

// *** Choose either upper or lower code ***

// *** Following code works perfectly but it's long... ***
// const playDrum = key => {
//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       var snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "l":
//       var kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//     default:
//       console.log(`Wrong key, dude: ${key}`);
//       break;
//   }
// };

// Button Animation
const buttonAnimation = currentKey => {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
};

// Play on Clicked
drumButtons.forEach(button => {
  button.addEventListener("click", function() {
    let buttonClicked = this.innerHTML;
    playDrum(buttonClicked);
    buttonAnimation(buttonClicked);
  });
});

// Play on Keypress
document.addEventListener("keydown", event => {
  playDrum(event.key);
  buttonAnimation(event.key);
});
