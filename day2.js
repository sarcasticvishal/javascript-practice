let login = false;
 let password2 = true;
 let pin = true;
 if (login){
    console.log("enter username")
    if(password2){
        console.log("enter passowrd")
        if(pin){
            console.log("enter pin")
        }else{
            console.log("re enter")
        }
    }else{
        console.log("re enter password")
    }
 }else{
    console.log("re enter pin")
 }//learning nasted if-else
