function buttonclick(val){
    
    document.getElementById("screen").value=document.getElementById("screen").value+val;
    
    

}
function btnClear(){
    document.getElementById("screen").value=""

}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}


var isclicked=false;
oldvalue=""
if(val==7){
    oldvalue=document.getElementById("screen").value
    if(isclicked){
        document.getElementById("screen").value+=val
        isclicked=false
    }else{
        document.getElementById("screen").value=document.getElementById("screen").value+val;
        }

}   





