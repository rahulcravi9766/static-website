var name1, msg, ph, mail;


function nameValidation(){
	var namevalue=$('#nametext').val()
	var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
	if(namevalue==""){
		$("#name-alert").html("Field is required")
		name1= false
	}
	else if(namevalue==" "){
		$('#name-alert').html("Do not enter space as first character")
		name1=false
	}
	else if(namevalue.length < 3)
	{
	     $('#name-alert').html("Minimum 3 characters required");
         name1=false;
    	}


        else if(namevalue.length>20){
            $('#name-alert').html("20 characters maximum");
            name1= false;
        }
     
        else if(namevalue.match(letters)){
            $('#name-alert').html("")
            name1=true
        }
        else{
            $('#name-alert').html("Please enter a valid name")
            name1=false
        }
        }

function phoneValidation(){
	var namevalue=$('#phonetel').val()
	var letters = /^\d+$/;
	if(namevalue==""){
		$('#phone-alert').html("Field is required")
		ph= false
	}
	else if(namevalue.match(letters) && ( namevalue.length == 10))
	{
    console.log("jndf")
    	$("#phone-alert").html("")
        ph= true
	}
  else if(namevalue.length<10)
        {
            if(namevalue.match(letters))
            {
              $("#phone-alert").html("Type ten numbers")
              ph= false;

            }
            else
            {
              $("#phone-alert").html("Use only numbers")
              ph=false;
            }
         }
    else if(namevalue.length>10)
    {
        if(namevalue.match(letters))
        {
          $("#phone-alert").html("Only ten numbers allowed")
          ph=false;
        }
        else
        {
          $("#phone-alert").html("Use only numbers")
          ph= false;
        }
    
    }
    else{
      $("#phone-alert").html("Invalid number")
      ph=false;
    }
  }

function emailValidation(){
    var emailvalue =$('#emailaddress').val()
    var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(emailvalue==""){
        $('#email-alert').html("Filed is required")
        mail=false;
    }
    else if(emailvalue.match(letters)){
        $('#email-alert').html("")
        mail=true;
    }
    else{
        $('#email-alert').html("Invalid Entry")
        mail=false;
    }

}

function commentValidation(){
  var namevalue = $('#commenttext').val()

  if (namevalue == "") {
    $('#comment-alert').html("Field is required")
      msg= false;
  }

  else if(namevalue.length<10){
    $('#comment-alert').html("Enter minimum 10 characters")
    msg= false;
}

   else if(namevalue.length>150){
    $('#comment-alert').html("200 characters maximum")
       msg= false;
   }

  else {
    $('#comment-alert').html("")
      msg= true;
  }

}

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


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
    }else{
        nameValidation()
        phoneValidation()
        emailValidation()
        commentValidation()
    }
    })
