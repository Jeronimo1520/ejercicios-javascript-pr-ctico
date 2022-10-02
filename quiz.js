// ///3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

// let nombre = "Juan";
// let apellido = "Sanchez";
// let nombreUsuarioPlatzi = "JuanS123";
// let edad = 23;
// let correo = "juanSan@gmail.com";
// let mayorEdad = true;
// let dineroAhorrado = 120000;
// let deudas = 3000;

// console.log(`EL nombre completo es: ${nombre + " " + apellido}`)

// console.log(`El dinero real es: ${dineroAhorrado - deudas}`)



// function preferenciaNombre(name,lastname,nickname){
//     let completeName = name +" "+ lastname;
//     return console.log("Mi nombre es: " + completeName + ", pero prefiero que me digas " + nickname + ".");
// }
// preferenciaNombre("Juan David","Castro Gallego","juandc")

// //2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:


// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

// function tipoDeSuscripcionPlatzi(tipo){

//     if(tipo == "Free"){
//         console.log("Solo puedes tomar los cursos gratis");
//     }
//     else if(tipo == "Basic"){
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//     }
//     else if(tipo == "Expert"){
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//     }
//     else if(tipo == "ExpertPlus"){
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       
//     }
//     else{
//         console.log("Ingrese un tipo de subscripción valido");
//     }
// }  

// let tipoDeSuscripcion = "Basicsdads";
// // tipoDeSuscripcionPlatzi(tipoDeSuscripcion)

// // //3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

function tipoDeSuscripcionPlatzi3(tipo){
    if(tipo == "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if(tipo == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if(tipo == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if(tipo == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
   console.warn("Esa subscripcion no existe")}
tipoDeSuscripcionPlatzi3(tipoDeSuscripcion)

// si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con **arrays u objetos ** y un solo condicional.

const subscripcion = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertplus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
    
};

function subscripcionReto(sub){
    if (subscripcion[sub]){
        return console.log(subscripcion[sub]);
    }
    return console.warn("Esa subscripcion no existe");
}
subscripcionReto("free")

// //2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// for (let i = 10; i >= 2; i--) {
//     console.log("El valor de i es: " + i);
// }

// let k= 0;
// let j = 10;

// while(k<5){
//     console.log(`El valor de i es: ${k}`)
//     k++
// }

// while(j>=2){
//     console.log("El valor de j es: " + j);
//     j--
// }

//3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

// let juegoActivo = true;
// while(juegoActivo){
//     let pregunta = prompt("Cuanto es 2+2?: ");
//     if(pregunta == 4){
//     alert("Felicitaciones")
//     juegoActivo = false;

//     }else{
//         alert("Incorrecto, intentalo de nuevo")
//     }
// }
// //2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

// function imprimirArrayCero(array){
//     console.log(array[0]);
// }

// let myArray = ["rojo","azul","amarillo","verde","morado"]
// imprimirArrayCero(myArray)

// //3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

// function imprimirArrayCompleto(array){
//     for(let color of myArray){
//         console.log(color);
//     }
// }
// imprimirArrayCompleto(myArray)

// //4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

// let book = {
//     year :"1999",
//     title : "My adventures",
//     author: "Jimmy Jim"
// };

// function imprimirObjeto(objeto){
//     for(let key in objeto){
//         console.log(objeto[key])
//     }
// }
// imprimirObjeto(book)

