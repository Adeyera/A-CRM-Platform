// create new invoice 
const modalInvoice = document.querySelector(".modal-invoice")
const view = document.querySelectorAll(".action")
// console.log(view)
const displays = document.querySelector(".display-info")
const send = document.querySelector(".submit__preview")
const invoice = document.querySelector(".invoice-preview")


for (const i of view){
    i.addEventListener("click", () => {
        modalInvoice.classList.remove("none")
        displays.style.filter = "blur(0.5rem)";
    })
}

// close the window 
const close = document.querySelector(".close")

close.addEventListener('click',()=>{
    modalInvoice.classList.add("none")
    displays.style.filter = "blur(0rem)";
})

send.addEventListener('click',()=>{
    invoice.classList.remove("none")
    modalInvoice.style.filter = "blur(0.5rem)";
})

