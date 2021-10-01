let background = document.querySelector('body');
let action = document.querySelector('.btn');
let colorcode = document.querySelector('.hexcode');

//Generating a random number between 0-255
var random = ()=>{
	return Math.floor(Math.random() * 256);
}

//Get the rgb() value of the backgroundColor of body.
var getBGcolor = (selectedElement) => {
	return window.getComputedStyle(selectedElement).backgroundColor;
}


//Action to be performed by button

action.addEventListener('click' ,()=>{
	background.style.backgroundColor = `rgb(${random()},${random()},${random()}`;
	colorcode.innerHTML = `The rbg of background is ${getBGcolor(background)}`;
	
});