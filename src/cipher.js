window.cipher = {
  encode: (mensaje1,key) => {
    /* Acá va tu código */
   // recorre mensaje1
  
let cifradocodigo="";
for (let i=0; i <mensaje1.length; i++){
    //console.log(texto1[i]);
 
    //transformar a codigoo ascii (numero de la letra en el codigo)
    let n = mensaje1[i].charCodeAt();
    // console.log(n);
 // codifica (formula de Cifrado Cesar: obtener nuevo numero de letra  en el codigo ASCII)
 let ncodigo= (n-65+key)%26+65;
 //console.log(mensajenuevo)


 // numero a letra
 let ntexto=String.fromCharCode(ncodigo);
 //console.log(ntexto);


 // formar la palabra cifrada
 cifradocodigo = cifradocodigo += ntexto;
 //console.log(cifrado);
}

// final
return cifradocodigo;

},
  
  decode: (mensaje1,key) => {
    /* Acá va tu código */
   // recorre mensaje1
  
let decodificacodigo="";
for (let i=0; i <mensaje1.length; i++) {

    //console.log(texto1[i]);
 
    //transformar a codigoo ascii
    let n= mensaje1[i].charCodeAt();
    // console.log(n);
 // codifica 
 let ncodigo= (n+65-key)%26+65;
 //console.log(mensajenuevo)


 // numero a letra
 let ntexto=String.fromCharCode(ncodigo);
 //console.log(ntexto);


 // formar la palabra cifrada
 decodificacodigo = decodificacodigo+=ntexto;
 //console.log(cifrado);
}

 return decodificacodigo; 

  }

};
