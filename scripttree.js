


const displayBlock = () => {
    var a = document.getElementById("1");

    a.style.display = "block";
    
}



const displayNone = () => {
    var a = document.getElementById("1");

    a.style.display = "none";
    
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


