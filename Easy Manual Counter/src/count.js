var reset = document.querySelector('#reset'); 
var increase = document.querySelector('#increase');
var decrease= document.querySelector('#decrease');
var counts = document.querySelector('#counts');
let count = 0;

increase.addEventListener('click', ()=>{
    count++;
    counts.innerHTML=count;
});

decrease.addEventListener('click' ,()=>{
    if(count != 0){
        count--;
        counts.innerHTML = count;
    }
    

});

reset.addEventListener('click', ()=>{
    if(count>=0){
        count = 0;
        counts.innerHTML = count;
    }
    
});
