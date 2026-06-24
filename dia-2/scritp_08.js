const saludar = ()=>"Hola!!!";
const doblar= n=>n*2;
const area = (base,altura)=> base*altura;
const clasificar= nota =>{

    if(nota>=4) return "Aprobado";

    return "Reprobado";
};


console.log("saludar:",saludar());
console.log("doblar:",doblar(8));
console.log("area:",area(3,4));
console.log("clasificar:",clasificar(3.5 ));
console.log("clasificar:",clasificar(6.5 ));
