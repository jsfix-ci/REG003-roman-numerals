//seleccionar todos los inputs
let inputs = document.getElementsByTagName("input");

//recorrer los inputs
for (let index = 0; index < inputs.length; index++) {

  //si es checkbox aplicamos el valor
  if(inputs[i].type == "checkbox") {
    inputs[i].checked = true;
  }

}

