let light = document.getElementsByClassName('ball')

function turnOn(){
    for(let index = 0; index < light.length; index++){
        light[index].style.animationDuration ='2s'
    }
}

function turnOff(){
    for (let index = 0; index < light.length; index++) {
        light[index].style.animationDuration = '0s'
    }
}
