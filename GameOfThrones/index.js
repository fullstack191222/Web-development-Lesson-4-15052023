
const image = document.getElementsByTagName("img")[0]
const header = document.getElementById("GOT")

image.addEventListener("click", function(e) {
	//do something
    header.remove()
});



const navItem1 = document.getElementById('nav-item-1');
const navItem2 = document.getElementById('nav-item-2');
const navItem3 = document.getElementById('nav-item-3');
const myImage = document.getElementById('my-image');


// Define a function to change the image to a random image
function changeImage() {
    const images = ['game-of-thrones-logo-i21034.jpg', 'image2.jpg', 'image3.jpg'];
    const randomIndex = Math.floor(Math.random() * images.length);
    myImage.src = images[randomIndex];
  }
  
  // Add event listeners to each navigation item
  navItem1.addEventListener('click', changeImage);
  navItem2.addEventListener('click', changeImage);
  navItem3.addEventListener('click', changeImage);