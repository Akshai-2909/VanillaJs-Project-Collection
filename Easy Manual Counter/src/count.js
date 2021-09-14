var btnElement = document.getElementById("press");
var num        = document.getElementById("Number");
var count = 0;
btnElement.addEventListener('click', () => {
   
    count++;
    num.textContent =count ;

});
