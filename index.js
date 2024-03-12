let charEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")

let count = 0
function increment() {
    count = count + 1
    charEl.innerText= count
     
}



function sav() {
    let don = count + "-"
    saveEL.textContent += don
    charEl.innerText = 0
    count = 0

}



