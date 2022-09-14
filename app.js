var count = 0
var countLabel = document.getElementById('countLabel')
var decrease = document.getElementById('decreaseBtn')
var reset = document.getElementById('resetBtn')
var increase = document.getElementById('increaseBtn')

decrease.onclick = function() {
    count-=1
    update()
}

reset.onclick = function() {
    count=0
    update()
}

increase.onclick = function() {
    count+=1
    update()
}

function update () {
    countLabel.innerHTML = count;
    if(count < 0) {
        countLabel.style.color = "red";
    } else if (count == 0) {
        countLabel.style.color = "white";
    } else {
        countLabel.style.color = "green";
    }
}