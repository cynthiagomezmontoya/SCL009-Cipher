// FUNCION QUE GUARDA EL MENSAJE 
let acifrar = document.getElementById("cifrar");
acifrar.addEventListener("click",() => {
    // guarda el msj y lo imprime
    let mensaje1 = document.getElementById("mensaje1").value;
    // variable para cambiar string a numero
   let key = parseInt(document.getElementById("numero").value);
     //consola.log(key);
    // entrega mensaje cifrado
   document.getElementById("mensaje2").value = window.cipher.encode (mensaje1,key);

  }
);
// DECLARACION VARIABLE PARA DECODIFICAR 

let dcifrar = document.getElementById("descifrar");
dcifrar.addEventListener("click",() => {
    // guarda el msj y lo imprime
    let mensaje2 = document.getElementById("mensaje2").value;
    // variable para cambiar string a numero
   let key = parseInt(document.getElementById("numero").value);
   // consola.log(key);
    // entrega mensaje cifrado
   document.getElementById("mensaje1").value = window.cipher.encode (mensaje2,key);

  }
);





























