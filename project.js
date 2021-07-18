function nameValidation() {
  var name = document.getElementById("nametext").value
  var namespan = document.getElementById("namespan");
  var letters = /^[a-zA-Z\s]*$/;
  if (name == "") {
      namespan.innerHTML = "Field is required"
      return false;
  }
  else if (name.match(letters)) {
      namespan.innerHTML = "";
      return true;
  }
  else {
      namespan.innerHTML = "use only characters";
      return false;
  }
}

function phoneValidation() {
  var phone = document.getElementById("phonetext").value
  var phonespan= document.getElementById("phonespan");
  const letters = /^\d{10,11}$/;
  if (phone == "") {
      phonespan.innerHTML = "Filed is required"
      return false;
  }
  else if (phone.match(letters)) {
      phonespan.innerHTML = "";
      return true;
  }
  else {
      phonespan.innerHTML = "invalid number";
      return false;
  }

}

function emailValidation() {
  var name = document.getElementById("emailaddress").value
  var emailspan = document.getElementById("emailspan");
  var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  if (name == "") {
      emailspan.innerHTML = "Filed is required"
      return false;
  }
  else if (name.match(letters)) {
      emailspan.innerHTML = "";
      return true;
  }
  else {
      emailspan.innerHTML = "invalid email";
      return false;
  }

}

function commentValidation() {
  var name = document.getElementById("commenttext").value
  var messageSpan = document.getElementById("commentspan");

  if (name == "") {
      commentspan.innerHTML = "Filed is required"
      return false;
  }


  else {
      commentspan.innerHTML = "";
      return true;
  }

}
