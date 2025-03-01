let tablist = document.querySelector("#tablist");
let tabcontent = document.querySelectorAll(".tabcontent");
let tabBtns = document.querySelectorAll(".tab-btn");

tablist.addEventListener("click", (event) => {
    let targetBtn = event.target
    let dataLeng = targetBtn.dataset.leng
    for (let tabBtn of tabBtns) {

        tabBtn.classList.remove("active")
        targetBtn.classList.add("active")


    }
    for (let tabconten of tabcontent) {
        tabconten.classList.remove("active")
    }
    for (let tabconten of tabcontent) {

        if (dataLeng == tabconten.id) {

            tabconten.classList.add("active")
        }
    }
})
