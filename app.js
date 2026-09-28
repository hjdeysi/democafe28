// VALIDACIÓN DE FORMULARIO DE RESERVAS

// Obtener el formulario
const formulario = document.getElementById('contactForm');

// Agregar evento de submit
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar recarga de página

  // Obtener valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const pais = document.getElementById('pais').value;

  // Validar nombre
  if (nombre === '') {
    alert('Por favor, ingrese su nombre completo.');
    return;
  }

  if (nombre.length < 3) {
    alert('El nombre debe tener al menos 3 caracteres.');
    return;
  }

  // Validar país
  if (pais === '') {
    alert('Por favor, seleccione un país.');
    return;
  }

  // Si todo está correcto, mostrar éxito
  alert('Reserva enviada correctamente. ¡Gracias por elegir Café Aroma!');

  // Limpiar formulario
  formulario.reset();

  // Mostrar en consola (solo demostrativo)
  console.log('Datos del formulario:', {
    nombre: nombre,
    pais: pais
  });
});

// SCROLL SUAVE para enlaces del menú
const enlaces = document.querySelectorAll('.Menu-Horizontal a[href^="#"]');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = this.getAttribute('href');
    if (destino && document.querySelector(destino)) {
      document.querySelector(destino).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
