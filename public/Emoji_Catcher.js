let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let button = document.getElementById('button')
let result = document.getElementById('result')
let set = document.getElementById('set')
let face = [ 
    '😰','😇','😆','😍','😡','😎','😜'
]

function getRandomValue() {
    return face[parseInt(Math.random() * 7)]
}
var interval = setInterval(function(){
     value1.innerText = getRandomValue();    
     value2.innerText = getRandomValue();    
     value3.innerText = getRandomValue();    
}, 350);
button.onclick = function() {
    
    clearInterval(interval); 
    if(value1.innerText === value2.innerText)
        {
            result.innerText = 'Hey! Congratulation You won the Game'
            result.style.backgroundColor = "white"
            result.style.borderColor = "black"
            result.style.borderBottomStyle = "solid"
            result.style.borderWidth = "3px"
        }
    else if(value1.innerText === value3.innerText)
        {
            result.innerText = 'Hey! Congratulation You won the Game'
            result.style.backgroundColor = "white"
            result.style.borderColor = "black"
            result.style.borderBottomStyle = "solid"
            result.style.borderWidth = "3px"
        }
    else if(value2.innerText === value3.innerText)
        {
            result.innerText = 'Hey! Congratulation You won the Game'
            result.style.backgroundColor = "white"
            result.style.borderColor = "black"
            result.style.borderBottomStyle = "solid"
            result.style.borderWidth = "3px"
        }
    else{
        result.innerText = 'Bad Luck'
            result.style.backgroundColor = "white"
            result.style.borderColor = "black"
            result.style.borderBottomStyle = "solid"
            result.style.borderWidth = "3px"
    }
}
set.onclick = function() {
    location.reload();
}