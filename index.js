window.addEventListener('DOMContentLoaded', init);
function init(){
    addContact()
}

function addContact(){
    let sub = document.getElementById("submit");
    let key;
    sub.addEventListener("click",(event)=>{
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        key = name;
        localStorage.setItem(key,JSON.stringify(email));
        location.reload();
        alert("Thank you "+ name + "I will contact you via " + email);
    })
}