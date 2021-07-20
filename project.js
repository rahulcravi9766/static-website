var name1, msg, ph, mail;

function nameValidation() {
  var name = document.getElementById("nametext").value
  var namespan = document.getElementById("namespan");
  var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
  if (name == "") {
      namespan.innerHTML = "Field is required"
      name1= false;
  }
  else if (name.match(letters)) {
      namespan.innerHTML = "";
      name1= true;
  }
  else {
      namespan.innerHTML = "use only characters";
      name1= false;
  }
}

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
                phonespan.innerHTML="Enter minimum 10 numbers";
                return false;

            }
            else
            {
                phonespan.innerHTML="Use only numbers";
                return false;
            }

            
        }
    else if(phone.length>10)
    {
        if(phone.match(letters))
        {
            phonespan.innerHTML="Enter maximum 10 numbers";
            return false;
        }
        else
        {
            phonespan.innerHTML="Use only numbers";
            return false;
        }
    
        
    }

function emailValidation() {
  var name = document.getElementById("emailaddress").value
  var emailspan = document.getElementById("emailspan");
  var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  if (name == "") {
      emailspan.innerHTML = "Filed is required"
      mail =false;
  }
  else if (name.match(letters)) {
      emailspan.innerHTML = "";
      mail =true;
  }
  else {
      emailspan.innerHTML = "invalid email";
      mail= false;
  }

}

function commentValidation() {
  var name = document.getElementById("commenttext").value
  var commentspan = document.getElementById("commentspan");

  if (name == "") {
      commentspan.innerHTML = "Filed is required"
      msg= false;
  }


  else {
      commentspan.innerHTML = "";
      msg= true;
  }

}


    $("#submit-form").submit((e)=>{
        e.preventDefault()
        if (msg==true && name1==true && mail==true && ph==true) {
            
        
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycby9phxiHHy3o5-dbXbZTTEF1zxgsV7_EOMCo-D2TlkWNFKRC8N3q1cCWcKKgYHktuF1Ww/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    }else{alert("Error")
    }
    })
