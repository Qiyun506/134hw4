window.addEventListener('DOMContentLoaded', init);
function init(){
    openChart();
}

function openChart(){
    let addMov = document.getElementById("add")
    addMov.addEventListener("click", (show)=>{
        let dia = document.getElementById("addForm");
        dia.show();
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
    })

    let close = document.getElementById("cancel");
    close.addEventListener("click",(show)=>{
        document.getElementById("addForm").close();
    })
}

