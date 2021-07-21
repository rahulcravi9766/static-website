function phoneValidation(){
    var phone=document.getElementById("phonetext").value 
    var phonespan=document.getElementById("phonespan");
    var letters= /^\d+$/;
    
    if(phone==""){
        phonespan.innerHTML="Filed is required"
        return false;}
    else if(phone.match(letters)&& (phone.length==10)){
        phonespan.innerHTML="";
        return true;
    }
    else if(phone.length<10)
        {
            if(phone.match(letters))
            {
                phonespan.innerHTML="enter the 10 numbers";
                return false;

            }
            else
            {
                phonespan.innerHTML="use numbers";
                return false;
            }

            
        }
    else if(phone.length>10)
    {
        if(phone.match(letters))
        {
            phonespan.innerHTML="please enter 10 numbers";
            return false;
        }
        else
        {
            phonespan.innerHTML="use numbers";
            return false;
        }
    
        
    }

    else{
        phonespan.innerHTML="invalid number";
        return false;
    }
}