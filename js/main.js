// Variables necesarias
let jugador = [];
let maquina = [];
let numerosTotal = [];

// Generar array de números del 1 (min) al 90 (max)
function generarArray(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

// Numeros aleatorios
function generarNumerosAleatorios(array, cantidad) {
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
  jugador = generarNumerosAleatorios(generarArray(1, 90), 15);
  maquina = generarNumerosAleatorios(generarArray(1, 90), 15);

  const res1 = document.getElementById("player");
  const res2 = document.getElementById("computer");

  function formatearCarton(numeros) {
    let cartonHTML = '<table>';
    let cellCounter = 0;

    for (let i = 0; i < 3; i++) {
      cartonHTML += '<tr>';
      for (let j = 0; j < 5; j++) {
        const numero = numeros[i * 5 + j];
        const cellId = `cell${cellCounter}`;
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

// Generar y comprobar números
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

  // Comprobar el número coincidente.
  const randomNumEstilo = document.getElementById("resultados2");
  randomNumEstilo.innerText = 'Último Número generado: ' + randomNum;

  const seEncontro = jugador.includes(randomNum);

  if (seEncontro) {
    const indice = jugador.indexOf(randomNum);
    jugador[indice].classList.add('numCoincidente');
  }
}

function refreshNumeros() {
  const res = document.getElementById("resultados");
  res.innerHTML = 'Números Generados: ' + numerosTotal.join(', ');
}
