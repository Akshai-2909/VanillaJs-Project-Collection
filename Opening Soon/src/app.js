//Selectors
const days = document.querySelector('.days');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const seconds = document.querySelector('.seconds');



const timefunction = ()=>{

	const nowDate = new Date();
	const openingDate = new Date("October 7, 2021,00:00:00");
	const dueTime = openingDate - nowDate;

	const sec = 1000;
	const min = sec*60;
	const hrs = min*60;
	const day = hrs*24;
	
	let textday = Math.floor(dueTime/day);
	let texthours = Math.floor((dueTime%day)/hrs);
	let textminute = Math.floor((dueTime%hrs)/min);
	let textsecond= Math.floor((dueTime%min)/sec);

	days.innerText = textday;
	hours.innerText = texthours;
	minutes.innerText = textminute;
	seconds.innerText = textsecond;
}

setInterval(timefunction,100);









// minutes = milliseconds ÷ 60,000