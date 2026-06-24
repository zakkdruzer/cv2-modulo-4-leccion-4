function transformar(texto){
    if(texto){
      return texto.toLowerCase()+"-65-98";
    }
    return "-";
    
    
}

console.log(transformar("asdsa"));
// falsy ("", 0, undefined, null, NaN, false)