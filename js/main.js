//Variables necesarias
let jugador = [];
let maquina = [];
let numerosTotal = [];

//Generar array de numeros del 1 (min) al 90 (max)
function generarArray(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

//Numeros aleatorios
function Numeros90(array,cantidad) {
  const nums = [];
  const copiaNums = array.slice();

  for (let i = 0; i < cantidad; i++) {
    const randomIndice = Math.floor(Math.random() * copiaNums.length);
    const randomNum = copiaNums.splice(randomIndice, 1)[0];
    nums.push(randomNum);
  }

  return nums;
}

//Generar cartones
function aJugar() {
  const jugador = Numeros90(generarArray(1, 90), 15);
  const maquina = Numeros90(generarArray(1, 90), 15);

  const res1 = document.getElementById("jugador");
  const res2 = document.getElementById("maquina");

  res1.innerHTML = '' + jugador.join(', ');
  res2.innerHTML = '' + maquina.join(', ');
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

  if (jugador.includes(randomNum)) {
    randomNumEstilo.classList.add('numCoincidente');
  } else if (maquina.includes(randomNum)) {
    randomNumEstilo.classList.add('numCoincidente');
  } else {
    randomNumEstilo.classList.remove('numCoincidente');
  }
}

function refreshNumeros() {
  const res = document.getElementById("resultados");
  res.innerHTML = 'Números Generados: ' + numerosTotal.join(', ');
}
