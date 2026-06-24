let global=100;
var glovar=20;
function miFuncion() {
    console.log("glovar:",glovar);
    var glovar=40;

    console.log("glovar:",glovar);

    let local=20;

    console.log(global+local);
    
}

miFuncion();
console.log("glovar:",glovar);
console.log("local:",local);