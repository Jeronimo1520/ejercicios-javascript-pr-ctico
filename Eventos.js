const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.getElementById('result');
const imagen = document.getElementById('imagen');

// form.addEventListener('submit', sumarImputsValues);

// function sumarImputsValues(event){
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = parseInt(input1.value,10)+ parseFloat(input2.value,10);
//     resultado.innerText = "La suma es: " + sumaInputs;
// };

btn.addEventListener('click', sumarImputsValues);

function sumarImputsValues(){
    const sumaInputs = parseInt(input1.value,10)+ parseFloat(input2.value,10);
    resultado.innerText = "La suma es: " + sumaInputs;
};

imagen.addEventListener('mouseover',desaparecerImagen);
imagen.addEventListener('mouseout',aparecerImagen);


function desaparecerImagen(){
    imagen.style.display = 'none';
}

function aparecerImagen(){
    imagen.style.display = '';
}