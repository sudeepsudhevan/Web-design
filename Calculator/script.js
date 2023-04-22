var isclicked=false;
oldvalue=""

function booleanval(num){
    if(num==1){
        isclicked=true;
        oldvalue=document.getElementById("screen").value
        oper=1
    }else if(num==2){
        isclicked=true;
        oldvalue=document.getElementById("screen").value
        oper=2
    }else if(num==3){
        isclicked=true
        oldvalue=document.getElementById("screen").value
        oper=3
    }else if(num==4){
        isclicked=true
        oldvalue=document.getElementById("screen").value
        oper=4
    }
    
}
function buttonclick(val){
    if(val==7){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val
            }
    
    }else if(val==8){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val;
            }
    }else if(val==9){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val;
            }
    }else if(val==4){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val;
            }
    }else if(val==5){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val;
            }
    }else if(val==6){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val;
            }
    }else if(val==1){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val;
            }
    }else if(val==2){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val;
            }
    }else if(val==3){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val;
            }
    }else if(val==0){
        
        if(isclicked==true){
            document.getElementById("screen").value=val
            isclicked=false
        }else{
            document.getElementById("screen").value+=val;
            }
    }else if(val=='.'){
        document.getElementById("screen").value+=val;
    }                                                                

    
   
    
    

}
function btnClear(){
    document.getElementById("screen").value=""

}
function equalClick(){
    if(oper==1){
        text=parseFloat(document.getElementById("screen").value)
        oldvaluef=parseFloat(oldvalue)
        
        console.log("oldvale:"+oldvalue)
        console.log("newvale:"+text)

        result=oldvaluef+text
        //var result=eval(text)
        document.getElementById('screen').value=result   
    }else if(oper==2){
        text=parseFloat(document.getElementById("screen").value)
        oldvaluef=parseFloat(oldvalue)
        
        console.log("oldvale:"+oldvalue)
        console.log("newvale:"+text)

        result=oldvaluef-text
        //var result=eval(text)
        document.getElementById('screen').value=result
    }else if(oper==3){
        text=parseFloat(document.getElementById("screen").value)
        oldvaluef=parseFloat(oldvalue)
        
        console.log("oldvale:"+oldvalue)
        console.log("newvale:"+text)

        result=oldvaluef*text
        //var result=eval(text)
        document.getElementById('screen').value=result
    }else if(oper==4){
        text=parseFloat(document.getElementById("screen").value)
        oldvaluef=parseFloat(oldvalue)
        
        console.log("oldvale:"+oldvalue)
        console.log("newvale:"+text)

        result=oldvaluef/text
        //var result=eval(text)
        document.getElementById('screen').value=result
    }
    
}



  





