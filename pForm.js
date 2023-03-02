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
        alert("clicked")
        let name = document.getElementById("thing").value;
        arr.push(name);
        let year = document.getElementById("time").value;
        arr.push(year);
        let num = document.getElementById("dis").value;
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
        let text = "Done By:  " + second + " , description:  " + thrid;
        chart.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
        charts{
        background-color: yellow;}

        #edit${num} {
            background-color: #4CAF50;
            border: none;
            color: white; 
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer; 
        }
        #RM${num} {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }
        #mt${num}{
            text-align: center;
            font-size:26px
        }
        #buts:hover{
            box-shadow: 50px 50px 30px rgba(0,0,0,0.1)
        }
        #buts{
            text-align: center;
        }
        #txt{
            text-align: center;
        }
        </style>
        <script src = "ed.js"></script>
        <div id = "mt${num}">${first}</div> <div id = "txt">${text}</div>
        <br>
        <div id = "buts">
        <button id = "edit${num}"><i class="fa fa-pencil"></i>edit</button>
        <button id = "RM${num}"><i class="fa fa-trash"></i>remove</button><br><br>
        </div>
        <hr>
        <hr>
        
        <dialog id = "editForm${num}">
    <label>Thing</label>
    <input type="text" id="thing${num}" value = ${first}><br><br>
    <label for="lname">when to do</label>
    <input type="text" id="time${num}" name="lname" value= ${second}><br><br>
    <label for="lname">Description</label>
    <input type="text" id="dis${num}" name="lname" value= ${thrid}><br><br>
        <br><br>
        <button id = "ecancel${num}">cancel</button>
        <button id = "eok${num}">ok</button>
        </dialog>
        `;
        chart.setAttribute("id", "char");
        document.getElementById("output").appendChild(chart);
    }
}