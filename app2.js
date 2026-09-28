// VALIDACIÓN DE FORMULARIO DE RESERVAS
// Este título sirve solo como comentario para identificar la función del bloque.

// Obtener el formulario
// Busca en el documento HTML el elemento que tiene id="contactForm".
const formulario = document.getElementById('contactForm');

// Agregar evento de submit
// Al formulario se le asigna un evento que se ejecutará cuando el usuario presione el botón de enviar.
formulario.addEventListener('submit', function(event) {

  // Evitar recarga de página
  // Normalmente un formulario recarga la página al enviarse.
  // Esta línea evita esa recarga automática.
  event.preventDefault();

  // Obtener valores de los campos
  // Busca el elemento con id="nombre", toma su valor y elimina espacios externos.
  const nombre = document.getElementById('nombre').value.trim();

  // Busca el elemento con id="pais" y toma su valor.
  const pais = document.getElementById('pais').value;

  // Validar nombre
  // Evalúa si el campo nombre está vacío.
  if (nombre === '') {

    // Muestra un mensaje emergente al usuario.
    alert('Por favor, ingrese su nombre completo.');

    // Detiene la función para que no siga validando ni envíe datos.
    return;
  }

  // Evalúa si el nombre tiene menos de 3 caracteres.
  if (nombre.length < 3) {

    // Muestra un mensaje de error.
    alert('El nombre debe tener al menos 3 caracteres.');

    // Detiene la ejecución.
    return;
  }

  // Validar país
  // Evalúa si el campo país está vacío.
  if (pais === '') {

    // Muestra un mensaje indicando que falta seleccionar país.
    alert('Por favor, seleccione un país.');

    // Detiene la ejecución.
    return;
  }

  // Si todo está correcto, mostrar éxito
  // Si no se activó ningún return anterior, significa que los datos son válidos.
  alert('Reserva enviada correctamente. ¡Gracias por elegir Café Aroma!');

  // Limpiar formulario
  // Borra todos los datos del formulario.
  formulario.reset();

  // Mostrar en consola (solo demostrativo)
  // Imprime los datos en la consola del navegador para verificar.
  console.log('Datos del formulario:', {

    // Propiedad nombre del objeto.
    nombre: nombre,

    // Propiedad pais del objeto.
    pais: pais
  });
});

// SCROLL SUAVE para enlaces del menú
// Este bloque sirve para navegar suavemente a las secciones internas de la página.

// Selecciona todos los enlaces dentro de .Menu-Horizontal cuyo href empieza con #.
const enlaces = document.querySelectorAll('.Menu-Horizontal a[href^="#"]');

// Recorre todos los enlaces encontrados.
enlaces.forEach(enlace => {

  // A cada enlace se le agrega un evento click.
  enlace.addEventListener('click', function(e) {

    // Evita que el enlace salte directamente de forma brusca.
    e.preventDefault();

    // Obtiene el valor del atributo href.
    // Ejemplo: "#inicio", "#menu", "#reservas".
    const destino = this.getAttribute('href');

    // Verifica que destino no esté vacío y que exista una sección con ese id.
    if (destino && document.querySelector(destino)) {

      // Selecciona la sección destino y desplaza la página suavemente hasta ella.
      document.querySelector(destino).scrollIntoView({

        // Define el desplazamiento suave.
        behavior: 'smooth'
      });
    }
  });
});