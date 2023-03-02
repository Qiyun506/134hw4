window.addEventListener('DOMContentLoaded', init);
function init(){
    getInput();
    printToPage()
}

function getInput(){
    let sub = document.getElementById("ok");
    let arr = [];
    let key;
    sub.addEventListener("click", (event)=>{
        let name = document.getElementById("title").value;
        arr.push(name);
        let year = document.getElementById("year").value;
        arr.push(year);
        let num = document.getElementById("rate").value;
        arr.push(num);
        key = name;
        console.log(arr)
        localStorage.setItem(key,JSON.stringify(arr))
        document.getElementById("addForm").close();
        arr = [];
        location.reload();
    })
}
function printToPage(){
    for (let i = 0; i < localStorage.length; i++){
        let movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // console.log(movie);
        let first = movie[0]
        let second = movie[1]
        let thrid = movie[2]
        let num = i.toString();
        // console.log(first,second,thrid)
        let chart = document.createElement("charts");
        let text = "Done By:  " + second + " , with Emergency rate of " + thrid;
        chart.innerHTML = `
        <script src = "ed.js"></script>
        <div id = "mt${num}">${first}</div> ${text}
        <button id = edit${num}>edit</button>
        <button id = "RM${num}">remove</button><br><br>
        
        <dialog id = "editForm${num}">
        <label>thing</label>
        <input type="text" id="title${num}" value= ${first}><br><br>
        <label for="lname">when to do</label>
        <input type="text" id="year${num}" name="lname" value= ${second}><br><br>
        <label>emergency</label>
        <select id="rate${num}" value= ${thrid}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <br><br>
        <button id = "ecancel${num}">cancel</button>
        <button id = "eok${num}">ok</button>
        </dialog>
        `;
        document.getElementById("output").appendChild(chart); 
    }
}