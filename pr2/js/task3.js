var p = 1000;
var r = 0;
var n = 4;

if (n > 3){
    if(n <= 5){
        r = 3;
    }
    else{
        if(n <= 8){
            r = 5;
        }
        else{
            if(n <= 12){
                r = 12;
            }
            else{
                r = 15;
            }
        }
    }
}

document.querySelector('.p').innerHTML = "Principal Amount = "+p+"rs";
document.querySelector('.r').innerHTML = "Rate of Intrest = "+r+"%";
document.querySelector('.n').innerHTML = "Nomber of Years = "+n+"year";

var i = (p * r * n) / 100;

document.querySelector('.i').innerHTML = "Intrest rate = "+i+"rs";

