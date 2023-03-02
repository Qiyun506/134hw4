window.addEventListener('DOMContentLoaded', init);
function init(){
    editChart();
    editInput();
    remove()
}

function editChart(){
    for(let i =0; i< localStorage.length; i++){
        let num = i.toString();

        let editMov = document.getElementById("edit"+num);
        console.log(editMov)
        editMov.addEventListener("click", (event)=>{

            let dia = document.getElementById("editForm"+num);
            dia.show();
            // console.log(document.getElementById("etitle").value);
            // console.log(document.getElementById("eyear").value);
        });
    let close = document.getElementById("ecancel"+num);
    close.addEventListener("click",(event)=>{
        document.getElementById("editForm"+num).close();
    });
    }
}

function editInput(){

    let key;
    let chart;
    for(let i =0; i< localStorage.length; i++){
        let num = i.toString();
        let edit = document.getElementById("edit"+num);
        edit.addEventListener("click",(event)=>{
        let txt = document.getElementById("mt" + num);
        let movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
        key = txt;
        chart = movie;
        
        let sub = document.getElementById("eok"+ num);
        sub.addEventListener("click", (event)=>{
        let name = document.getElementById("thing"+num).value;
        let year = document.getElementById("time"+num).value;
        let rate = document.getElementById("dis"+num).value;
        chart[0] = name;
        chart[1] = year;
        chart[2] = rate;
        key = name;
        localStorage.removeItem(localStorage.key(i));
        localStorage.setItem(key,JSON.stringify(chart));
        document.getElementById("editForm"+num).close();
        location.reload();
    })

        })
    }

    
}

function remove(){
    for(let i =0; i< localStorage.length; i++){
        let num = i.toString();
        let rm = document.getElementById("RM" +num);
        rm.addEventListener("click",(event)=>{
            let txt = document.getElementById("mt" + num);
            console.log(i)
            console.log(txt);
            console.log((localStorage.removeItem(localStorage.key(i))));
            location.reload();
        })
    }

}

