let count = 0

const value = document.querySelector("#value")
const buttons = document.querySelectorAll(".btn")
console.log(value, buttons)  


buttons.forEach((btn) => {
    console.log(btn)
    btn.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList
        if(styles.contains("increase")){
            count++
        }else if(styles.contains("decrease")){
            count--
        }else{
            count = 0
        }
        if(count < 0){
            value.style.color = ("red")
        }else if(count > 0){
            value.style.color = ("green")
        }else{
            value.style.color = ("black")
            
        }
        value.textContent = count
    })
})