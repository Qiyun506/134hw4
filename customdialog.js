window.addEventListener('DOMContentLoaded', init);
function init(){
    alertFunction();
    confrimFunction();
    safeFunction();
    closeAlert();
}
//--------------------------------------------------------------------------
    function alertFunction(){
        let btn = document.getElementById("alert");
        btn.addEventListener("click", (call) =>{
            let alertD = document.getElementById("alertDia");
            alertD.show();
        });
    }
    function closeAlert(){
        let btn = document.getElementById("closeAlert");
        btn.addEventListener("click", (call) =>{
            let alertD = document.getElementById("alertDia");
            alertD.close();
        });
    }
//--------------------------------------------------------------------------
function confrimFunction() {
        let btn = document.getElementById("comfirm");
        btn.addEventListener('click', (conf) => {
            let ConfD = document.getElementById("confrimDia");
            ConfD.show();
            let text;

            let Tbtn = document.getElementById("T");
            Tbtn.addEventListener('click', (conf)=> {
            text = "The value returned by the confirm method is : True";
            ConfD.close();
            const confrimResult = document.createElement("result");
            const confirmText = document.createTextNode(text);
            confrimResult.appendChild(confirmText);
            document.getElementById("P1").innerHTML = text;})
            
            let Fbtn = document.getElementById("F");
            Fbtn.addEventListener('click', (conf)=> {
            text = "The value returned by the confirm method is : False";
            ConfD.close();
            const confrimResult = document.createElement("result");
            const confirmText = document.createTextNode(text);
            confrimResult.appendChild(confirmText);
            document.getElementById("P1").innerHTML = text;})
        }) 
    }
//--------------------------------------------------------------------------
    function safeFunction(){
        let btn = document.getElementById("safe");
        btn.addEventListener('click', (show)=> {
            let PD = document.getElementById("promptDia");
            PD.show();
            document.getElementById("prompt").value = "";

            let okBtn = document.getElementById("ok");
            okBtn.addEventListener('click', (show)=> {
            let question = document.getElementById("prompt").value;
            let clean = DOMPurify.sanitize(question);
            document.getElementById("P1").innerHTML = "Prompt Result: "+ clean;
            PD.close();
            })

            let cancelBtn = document.getElementById("cancel");
            cancelBtn.addEventListener('click', (show)=> {
            document.getElementById("P1").innerHTML = "User didn't enter anything";
            PD.close();
            })
        })
    }