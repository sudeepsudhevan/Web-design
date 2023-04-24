$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            emailAddress:{
                required:true,
                email:true,
                
            },
            passworde:{
                minlength:6
            },
            day:{
                required:true  
            },
            month:{
                required:true
            },
            year:{
                required:true
            }


        },
        messages:{
            fname:{
                required:"Enter a first name",
                minlength:"Enter atleast 4 letter"
            }
            
        }  
    })
})