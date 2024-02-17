



//Funcion para validar texto, no se puede poner mayusculas ni caracteres especiales.
//input recibe los datos del input y patron es la expresión regular para validar texto
const validarTextoEntrada = (input, patron) => {
  const texto = input.value;
  const letrasFiltradas = texto.split("").filter(letra => (new RegExp(patron, "i")).test(letra));
  input.value = letrasFiltradas.join("");
}

const textSoloLetras = document.querySelector('.textAreaLetras');
textSoloLetras.addEventListener('input', function (event) {
  validarTextoEntrada(this, '[a-z \\s]');
})





//Funcion para encryptar
const encrypt = () => {
  const contentElement = document.querySelector('.content')
  contentElement.classList.add('ocultar')

  const result = document.querySelector('.resultado')
  if (result) {
    // Alterna entre las clases 'resultado' y 'content'
    result.classList.toggle('resultado');
    result.classList.toggle('content');
  }

  const buttonCopy = document.querySelector('.contenedor-copia')
  buttonCopy.classList.remove('ocultar')


  const textArea = document.querySelector('.textAreaLetras')
  let text = textArea.value.toLowerCase();

  //Creamos la variable por el cual va a ser reemplazado cada vocal.
  const vocalsEncrypts = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  }

  //usamos .replace para reemplazar las vocales por la palabra encriptada
  text = text.replace(/./igm, (match) => vocalsEncrypts[match] || match)
  textArea.value = '';
  document.querySelector('.textArea').innerHTML = text

}

//Funcion para desencryptar

const desencrypt = () => {
  const textArea = document.querySelector('.textAreaLetras')
  let text = textArea.value.toLowerCase();

  //Creamos la variable por el cual va a ser reemplazado cada vocal.
  const vocalsDesencrypts = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  }

  //En este caso usamos object keys para obtener un array de las claves del objeto vocalsDesencrypts, y luego se usa forEach para iterar sobre estas claves.
  Object.keys(vocalsDesencrypts).forEach(key => {
    const regex = new RegExp(key, 'igm')
    text = text.replace(regex, vocalsDesencrypts[key])
  })
  textArea.value = '';
  document.querySelector('.textArea').innerHTML = text
}


//Funcion para copiar

const copyText = () => {
 // seleccionar el contenido que se va a copiar
 let content = document.querySelector(".textArea");
 content.select();

 //Usamos clipboard para copiar el contenido
 navigator.clipboard.writeText(content.value);

 //Hacemos una verificacion para saber si hay algo para copiar, y mostramos un mensaje de éxito si se copio.
 content.value.length > 0 ? alert('Copiado con éxito') : alert('No hay nada que copiar')
}






 


