// Variables necesarias
let jugador = [];
let maquina = [];
let numerosTotal = [];

// Generar array de numeros del 1 (min) al 90 (max)
function generarArray(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

// Numeros aleatorios
function Numeros90(array, cantidad) {
  const nums = [];
  const copiaNums = array.slice();

  for (let i = 0; i < cantidad; i++) {
    const randomIndice = Math.floor(Math.random() * copiaNums.length);
    const randomNum = copiaNums.splice(randomIndice, 1)[0];
    nums.push(randomNum);
  }

  return nums;
}

// Generar cartones
function aJugar() {
  jugador = Numeros90(generarArray(1, 90), 15); // Usar las variables globales en lugar de declarar nuevas
  maquina = Numeros90(generarArray(1, 90), 15); // Usar las variables globales en lugar de declarar nuevas

  const res1 = document.getElementById("jugador");
  const res2 = document.getElementById("maquina");

  function formatearCarton(numeros) {
    let cartonHTML = '<table>';
    let cellCounter = 0; // Contador para los identificadores de las celdas

    for (let i = 0; i < 3; i++) {
      cartonHTML += '<tr>';
      for (let j = 0; j < 5; j++) {
        const numero = numeros[i * 5 + j];
        const cellId = `cell${cellCounter}`; // Crear un identificador único
        cartonHTML += `<td id="${cellId}">${numero}</td>`;
        cellCounter++;
      }
      cartonHTML += '</tr>';
    }
    cartonHTML += '</table>';
    return cartonHTML;
  }


  res1.innerHTML = formatearCarton(jugador);
  res2.innerHTML = formatearCarton(maquina);
  jugar.style.display = 'none';
  generar.style.display = 'block';

  numerosTotal = [];
  refreshNumeros();
  return jugador && maquina;
}

//Generar y comprobar Números
function generarNumero() {
  if (numerosTotal.length >= 90) {
    alert('No puedes generar más de 90 números');
    return;
  }
  let randomNum;
  do {
      randomNum = Math.floor(Math.random() * 90) + 1;
  } while (numerosTotal.includes(randomNum));

  numerosTotal.push(randomNum);
  refreshNumeros();

  //Comprobar el número coincidente.
  const randomNumEstilo = document.getElementById("resultados2");
  randomNumEstilo.innerText = 'Último Número generado: ' + randomNum;

  const seEncontro = jugador.includes(randomNum);

  if (seEncontro) {
    const indice = jugador.indexOf(randomNum);
    jugador[$indice].classList.add('numCoincidente');
  }
}
/*
* if (seEncontro) {
  const indice = miArray.indexOf(elementoBuscado);
  console.log(`El elemento ${elementoBuscado} se encuentra en la posición ${indice}`);
} else {
  console.log(`El elemento ${elementoBuscado} no se encuentra en el array.`);
}
*
*
* */


function refreshNumeros() {
  const res = document.getElementById("resultados");
  res.innerHTML = 'Números Generados: ' + numerosTotal.join(', ');
}


